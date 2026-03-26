import { Budget } from '../../budgets/entities/budget.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Transaction } from '../../transactions/entities/transaction.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: string;

    @Column({ unique: true })
    email: string;

    @Column()
    fullName: string;

    @Column({ select: false })
    password: string;

    @Column({ default: 'user' })
    role: string;

    @Column()
    address: string;

    @Column()
    phoneNumber: string;

    @Column()
    occupation: string;

    @Column('decimal', { precision: 10, scale: 2, default: 0 })
    monthlyIncome: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @OneToMany(() => Transaction, transaction => transaction.userId)
    transactions: Transaction[];

    @OneToMany(() => Budget, budget => budget.userId)
    budgets: Budget[];

}