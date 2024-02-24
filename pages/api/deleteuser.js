const {MongoClient} = require("mongodb")
const mongoClient = new MongoClient(process.env.DB_URL)
const clientPromise = mongoClient.connect();
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'whatsupppb$oy';
export default async function handler(req, res) {
const {authtoken}= req.cookies;
if(authtoken&&authtoken!='fail'){
const database = (await clientPromise).db(process.env.MDB)
    const collection = database.collection(process.env.MCL)
    const data = jwt.verify(authtoken, JWT_SECRET);
    const results = data.usr;
    const email = results.email
    const deluser =  await collection.deleteOne({email})
    res.status(200).json({deluser})

}
else res.status(400).json({"authtoken":"fail"})}
  