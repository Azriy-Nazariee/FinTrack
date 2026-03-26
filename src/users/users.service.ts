import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginDto } from '../auth/dto/login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, 
  ){}

  async create(registerDto: RegisterDto, role: string): Promise<User> {

    // The Flow : API (DTO), Repository (Entity), Database (Table)

    // 1. Extract the data into the DTO
    const {password, ...userData} = registerDto;
    
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // 2. Create a new user entity
    const user = this.userRepository.create({
      ...userData,
      password: hashedPassword,
      role: role,
    });

    // 3. Save the user to the database
    return this.userRepository.save(user);
  }

  async validateUser(loginDto: LoginDto): Promise<User | null> {
      const { email, password } = loginDto;
  
      const userDetails = await this.userRepository.findOne({
        where: { email },
        select: ['userId', 'email', 'password', 'fullName'] // Ensure password is selected for comparison
      });
  
      if (userDetails && await bcrypt.compare(password, userDetails.password)) {
        console.log('User validated successfully');
        return userDetails;
      }
  
      console.log('Invalid email or password');
      return null;
    }

}
