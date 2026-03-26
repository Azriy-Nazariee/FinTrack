import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Category } from './category.entity';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    transactionId: string;

    @ManyToOne(() => User, user => user.userId)
    userId: string;

    @ManyToOne(() => Category, category => category.categoryId)
    categoryId: string;

    @Column('decimal', { precision: 10, scale: 2 })
    amount: number;

    @Column()
    type: string;

    @Column()
    date: Date;

    @Column()
    dateString: string;

    @Column()
    description: string;
}
