import React,{useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
export default function SearchMovies(){
   
    const [title,setTitle] = useState('');
    const [result,setResults] = useState([])
    const [resu,setResu] = useState('');
    const fix ='https://image.tmdb.org/t/p/w440_and_h660_face/'
      
     
    const handleSubmit = async (e) => {
      e.preventDefault();
      const auth = process.env.NEXT_PUBLIC_APIOWN
      setResu('loading..')
      const res = await fetch('/api/hello',{
        method:"POST",
        body:JSON.stringify({auth,title})
      })
      const dat = await res.json()
      const resp = dat.data
      setResults(resp.results)

       setResu('') 
    }
      
       const handleChange =(event)=>{
        setTitle(event.target.value);
      
       }
    return(
      <>
      <Head>
      <meta name="google-site-verification" content="mSKDzGkZInK-m1_i4guaxX5IxNacMUt_9LIt23k7Bn8" />
    <meta charset="utf-8" />
    <link rel="icon" href="favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="movie searcher"/>
   
    <title>Latest movies</title>
    <meta name="google-adsense-account" content="ca-pub-5237350192487791"/>
     </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5237350192487791" crossorigin="anonymous"></Script>
       <div className="position-relative p-3 bg-secondary">

      <form onSubmit={handleSubmit}>
      <input className="col-9 " type="text"  placeholder="title" value={title} onChange={handleChange} />
      <button className="col-3" type="submit" >Search</button>
    </form>
    <div className="d-flex h-3 justify-content-center ">{resu}</div>
    <div className='row'>
  {result.map((element) => {
    return <div className="col-md-3 col-6 mx-0 " key={element.id} >
    <div className="my-2">
     <Link href={"/moviesinfo/" + element.id} className="nav-link" id={element.id} >
     <div className="card">
                   
                   <img src={!element.poster_path ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : fix.concat(element.poster_path)} className="card-img-top" alt="..." /> 
                   <div className="card-body bg-dark text-white">
                    <div className="card-title">{element.title}
                       </div>   
                       <div>Ratings- {element.vote_average=='0'?"loading...":element.vote_average}</div>
                     </div>
                    
               </div>
                      </Link>
                       </div>
                       </div>
        })}
  </div>
</div>
</>
    )
                                } 
    

    
          
        
