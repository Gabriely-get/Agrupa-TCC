<<<<<<< HEAD:src/entity/groupTable.ts
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
    imgGroup:  string;

=======
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
    imgGroup:  string;

>>>>>>> 32ff6618120562340e42134b5f5e27e9f5ea9916:src/entity/Group.ts
}