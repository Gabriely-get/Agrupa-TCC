<<<<<<< HEAD
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

=======
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

>>>>>>> 32ff6618120562340e42134b5f5e27e9f5ea9916
}