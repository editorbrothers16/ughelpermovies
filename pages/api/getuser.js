const {MongoClient} = require("mongodb")
const mongoClient = new MongoClient(process.env.DB_URL)
const clientPromise = mongoClient.connect();
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'whatsupppb$oy';
export default async function handler(req, res) {
  const tif = req.body
  const  id = JSON.parse(tif)
  if (id.auth==process.env.APIOWN){
const {authtoken}= req.cookies;
if(authtoken&&authtoken!='fail'){
const database = (await clientPromise).db(process.env.MDB)
    const collection = database.collection(process.env.MCL)
      const data = jwt.verify(authtoken, JWT_SECRET);
    const results = data.usr;
    const email = results.email
    const user =  await collection.findOne({email})
    if(user){res.status(200).json({user})}
    else res.status(400).json({"user":{"name":""}})}
        else res.status(400).json({"user":{"name":""}})
}
 else res.status(400).json({"user":{"name":""}})
}
