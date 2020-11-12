import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Category{
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true, unique: true })
	categoryName: string;
}