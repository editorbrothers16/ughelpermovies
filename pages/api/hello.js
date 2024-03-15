// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const bod = JSON.parse(req.body)
  const {title,auth} = bod
  if(auth==process.env.APIOWN)
  {
    const fit ='https://api.themoviedb.org/3/search/movie?query='
      const chalj =fit.concat(title)
      const tif = '&include_adult=false&language=en-US&page=1c'
      const response = await fetch(chalj.concat(tif), {
          method: 'GET',
          headers: {
              'Authorization': process.env.PI,
              'Content-Type': 'application/json'
            }
      }); 
      
      const data = await response.json()
       res.status(200).json({data});
  }
    
}
