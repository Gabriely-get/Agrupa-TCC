import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinTable } from "typeorm";
import { Category } from './Category';
import { User } from './User';

@Entity()
export class Group{

	@PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, unique: true })
    groupName: string;

    @Column({ nullable: true, unique: true })
    description: string;

    @Column({ nullable: true })
    maxUsers: number;

    @Column()
    imgAvatar:  string;

    @ManyToOne(() => Category, category => category.id)
    categoryId: Category;

    @ManyToMany(() => User)
    @JoinTable()
    user: User[];

}