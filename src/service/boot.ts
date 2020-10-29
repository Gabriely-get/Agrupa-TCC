//service é algumas partes da aplicação não externo, ou seja, uso so aqui  
const app = require('../app');
// import '../database/connection';
// const db = require('./model');
const mongoose = require('mongoose');
let port: any; 

((port = process.env.APP_PORT || 4000) => {
	app.listen(port, (err: any) => {
	    if(err){
	        return console.log(err);
	    }
	    return console.log(`Listening on port ${port}`);
	});
})();
	const uri = "mongodb+srv://gabriely:tccdbagrupa01@agrupa.ltbuf.mongodb.net/dbagrupa?retryWrites=true&w=majority";
	// const client = new MongoClient(uri, {
	// 	useNewUrlParser: true,
	// 	useUnifiedTopology: true
	// });

	mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true} ,(err: any) => {
	    if(err){
	        return console.log(err);
	    }
	    return console.log('Successfully connected with database');
	});