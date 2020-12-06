import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ViewEntity, EntityRepository  } from "typeorm";

@Entity()
export class User{

    @PrimaryColumn()
    id: string;

    @Column()
    api_key: string;

    @Column({ default: false})
    isAdmin: boolean; //add default value as false

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: false})
    password_user: string;

    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column()
    imgAvatar:  string;

    @Column({ nullable: true, type: 'date' })
    birthDate: Date;    

    @Column({ width: 11 })
    cellphone: number;

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
