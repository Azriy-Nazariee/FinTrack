import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService
  ) { }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.validateUser(loginDto);

    if (user == null) {
      return { message: 'Login failed' };
    }

    const payload = {
      email: user.email,
      sub: user.userId,
      name: user.fullName
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.userId,
        name: user.fullName,
      }
    }
  }
}
