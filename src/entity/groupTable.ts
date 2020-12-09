import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinTable } from "typeorm";
import { Category } from './Category';
import { User } from './User';

@Entity()
export class grouptable{

	@PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable: true, unique: true })
    groupName: string;

    @Column({ nullable: true, unique: true })
    description: string;

    @Column({ nullable: true })
    maxUsers: number;

    @Column()
    imgAvatar:  string;
    
    @Column()
    categoryId:  string;

    @Column()
    imgGroup:  string;

}
