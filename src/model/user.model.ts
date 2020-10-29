import { Model, model, Types, Schema } from "mongoose";

const UserSchema = Schema({
	// id: {
	// 	type: String,
	// 	unique: true
	// },
	isAdmin: Boolean,
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		minimum: 3,
		required: true
	},
	lastName: {
		type: String,
		minimum: 3,
		required: true
	},
	imageAvatar: {
		type: File,
		required: false
	},
	birthDate: {
		type: Date,
		required: true
	},
	cellphone: {
		type: Number,
		minimum: 9,
		required: true
	}
})

UserSchema.virtual("fullName").set(function(f: string, l: string) {
	this.firstName = f;
	this.lastName = l;
})

UserSchema.virtual("fullName").get(function() {
	return this.firstName + this.lastName;
})

export interface UserInterface extends UserSchema{
	fullName: string;
}
export default model("User", UserSchema);