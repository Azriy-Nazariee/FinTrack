import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    categoryId: string;

    @ManyToOne(() => User, user => user.userId)
    @Column()
    userId: string;

    @Column()
    name: string;
}