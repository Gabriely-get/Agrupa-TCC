const MongoClient = require('mongodb').MongoClient;

// const uri = MONGO_URI;
try{
const client = new MongoClient(MONGO_URI, {
	useNewUrlParser: true;
});

client.connect();
} catch(e: any){
	return console.log(e);
}