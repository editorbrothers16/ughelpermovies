const {MongoClient} = require("mongodb")
var jwt = require('jsonwebtoken');
const mongoClient = new MongoClient(process.env.DB_URL)
const clientPromise = mongoClient.connect();
const JWT_SECRET = 'whatsupppb$oy';
export default async function handler(req, res) {
const {name,email,password,auth}= req.body;
if(auth==process.env.APIOWN){
const secpass = password.concat("yzabmn")
const database = (await clientPromise).db(process.env.MDB)
const collection = database.collection(process.env.MCL)
const results = await collection.findOne({email});
if (results){
res.status(400).json({"authtoken":"fail"})
 }
else {const final = await collection.insertOne({name:name,email:email,password:secpass});
const data = {
  usr: {
 email: email
   }
 }
 const authtoken = jwt.sign(data, JWT_SECRET);
 res.status(200).json({authtoken})}
}
else res.status(400).json({"authtoken":"fail"})
 }
   