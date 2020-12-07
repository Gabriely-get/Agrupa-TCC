import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinTable, PrimaryColumn } from "typeorm";
import { grouptable } from './groupTable';
import { User } from './User';

@Entity()
export class group_user{
    @PrimaryColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    groupId: string;

    @Column()
    isGroupAdmin: boolean;

}