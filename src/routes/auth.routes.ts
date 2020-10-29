// const app = require('../app');
const { verifySignUp } = require('../middleware');
const controller = require('../controller/auth.controller');

try{
module.exports = function(app){
	app.use(function(req, res, next){
		res.header(
			"Acess-Control-Allow-Headers",
			"x-acess-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.post(
		"/auth/signup",
		[
			verifySignUp.checkDuplicateUsername,
			verifySignUp.checkDuplicateEmail,
			verifySignUp.checkAdminExisted
		],
		controller.signup
	);

	app.post("/auth/signin", controller.signUpAdmin);
}} catch(e: any){
	console.log(e);
}