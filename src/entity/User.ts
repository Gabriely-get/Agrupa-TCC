import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ViewEntity, EntityRepository, ManyToMany, JoinTable  } from "typeorm";
import { grouptable } from "./groupTable";

@Entity()
export class User{

    @PrimaryColumn()
    id: string;

    @Column()
    api_key: string;

    @Column({ default: false})
    isAdmin: boolean;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: false})
    password_user: string;

    @Column({ nullable: true })
    userName: string;

    @Column({ nullable: true })
    nickName: string;

    @Column()
    imgAvatar:  string;

    @Column({ nullable: true, type: 'date' })
    birthDate: Date;    

}

function setFullname(f: string, l: string){
    return f + ' ' + l;
}

function getFullname(){
    return setFullname;
}

export interface UserInterfaceProfile extends User{
    email: string;
    fullname: typeof getFullname;
    imgAvatar: string;
    birthDate: Date;
    cellphone: number;
}
