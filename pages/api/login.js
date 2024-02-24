const {MongoClient} = require("mongodb")
const mongoClient = new MongoClient(process.env.DB_URL)
const clientPromise = mongoClient.connect();
 var jwt = require('jsonwebtoken');
   const JWT_SECRET = 'whatsupppb$oy';
export default async function handler(req, res) {
 
  const {email,password,auth}= req.body
  if(auth==process.env.APIOWN){
  const secpass = password.concat("yzabmn")
  
    const database = (await clientPromise).db(process.env.MDB)
    const collection = database.collection(process.env.MCL)
    const user =  await collection.findOne({email})
    if(user==null){res.status(400).json({"authtoken":"fail"})}
    if(user.password==secpass){
        const data = {
            usr: {
                       email: email
                          }
    }
     const authtoken = jwt.sign(data, JWT_SECRET);
    res.status(200).json({authtoken})

}
else res.status(400).json({"authtoken":"fail"})}
else res.status(400).json({"authtoken":"fail"})
}
  