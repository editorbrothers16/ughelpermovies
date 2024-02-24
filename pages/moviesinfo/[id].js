import React,{useEffect,useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
export default function Page(){
const [info,setInfo] = useState({"a":"b"})
const router = useRouter()
const tif = router.query.id

useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/'+ tif + '?language=en-US', {
    method: 'GET',
        headers: {
                'Content-Type': 'application/json',
                          "Authorization": process.env.NEXT_PUBLIC_API
                              }
    })
  .then(response=>response.json())  
  .then(data=>setInfo(data))         
},[])
  return <>
 <Head>
      <meta name="google-site-verification" content="mSKDzGkZInK-m1_i4guaxX5IxNacMUt_9LIt23k7Bn8" />
    <meta charset="utf-8" />
    <link rel="icon" href="favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="movie download 480p"/>
   
    <title>{info.title} download</title>
    <meta name="google-adsense-account" content="ca-pub-5237350192487791"/>
    </Head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5237350192487791" crossorigin="anonymous"></Script>
        <div className="container-fluid bg-secondary text-white">
       <div className="row">
           <div className="card m-0 p-2 col-5 col-md-3 bg-secondary">
          <img src={'https://image.tmdb.org/t/p/w440_and_h660_face/' + info.poster_path}  alt="..." /> 
      </div>
    
       <div className="card bg-secondary col-11 col-md-4 border-secondary px-2">
  <div className="card-body ">
    <h4 className="card-title text-white">{info.title}</h4>
    <h5 className="card-subtitle mb-2 text-black">Release Date- {info.release_date}</h5>
    <h5 className="card-subtitle mb-2 text-white">Ratings- {info.vote_average=='0'?"loading...":info.vote_average}</h5>
    <p className="card-text text-black">{info.overview}</p>
  </div>
  <h5 className="text-danger my-auto mx-auto h-25" >
      <Link href="/Download" className='nav-link'><h2>Download</h2></Link>
       </h5>
</div>
                        
        </div>
      </div>
 </>
}