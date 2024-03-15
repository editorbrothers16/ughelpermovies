import React,{useState} from 'react' 
import Head from 'next/head'
import Script from 'next/script'
import * as fs from 'fs'
const movie=(props)=>{
    const [info,setInfo] = useState(props.data);
    const fix ='https://image.tmdb.org/t/p/w440_and_h660_face/'
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
      content="movie download 480p"/>
   
    <title>{info.title} download</title>
    <meta name="google-adsense-account" content="ca-pub-5237350192487791"/>
      </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5237350192487791" crossorigin="anonymous"></Script>
      <div className="container-fluid bg-secondary text-white">
        <div className='container'>
         <h2 className='text-center pt-2 text-warning'>Synopsis/Plot</h2>
          <p className="card-text text-black">{info.overview}</p>

          <div className="row justify-content-center ">


            <div className="card bg-dark col-11 my-2 col-md-4 px-2">
              <div className="card bg-dark p-2">
                <h4 className='text-success text-center'>Info</h4>
                <h5 className="text-left text-white">Title-{info.title}</h5>
                <h5 className="mb-2 text-left text-white">Release Date- {info.release_date}</h5>
                <h5 className="mb-2 text-left text-white">Ratings- {info.vote_average == '0' ? "loading..." : info.vote_average}</h5>

              </div>
              <div className="align-content-center ">
                <img src={'https://image.tmdb.org/t/p/w440_and_h660_face/' + info.poster_path} className='mx-auto w-100' width={100} alt="..." />
              </div>

              <div className="border-2 text-white text-center my-2 mx-auto h-25" >
                <h4>{info.title}  480p AMZN WEB-DL [415MB]</h4>
                <button type='button'  onClick={()=>window.open('/Download')} className='text-white btn btn-success mx-auto'>Download</button>
              </div>

              <div className="border-2 text-white text-center my-2 mx-auto h-25" >
                <h4>{info.title}  720p AMZN WEB-DL [900MB]</h4>
                <button type='button'  onClick={()=>window.open('/Download')} className='text-white btn btn-success mx-auto'>Download</button>
              </div>

              <div className="border-2 text-white text-center my-2 mx-auto h-25" >
                <h4>{info.title}  1080p AMZN WEB-DL [1.3GB]</h4>
                <button type='button'  onClick={()=>window.open('/Download')} className='text-white btn btn-success mx-auto'>Download</button>
              </div>
            </div>
            <h4 className='text-center text-info pt-2 border-top border-black'>winding up</h4>
            <p className='text-muted'>Thank You For Visiting <b>ughelpers.online</b> The Prefect Spot For searching (Hindi-English) Movies & TV Series . So Keep Sharing. Enjoy!
            </p>
          </div>
        </div>
      </div>
      </>
    )
}
export async function getStaticPaths() {
    return{
        paths: [
        { params: { movie:'Gadar2'}},
        { params: { movie:'Interstellar'}},
        { params: { movie:'Jawan'}},
        { params: { movie:'Dangal'}},
        { params: { movie:'Animal'}},
        { params: { movie:'Pushpa2'}},
        { params: { movie:'KGF1'}},
        { params: { movie:'LaavaanPhere'}}
        ],fallback: false

    }
}
export async function getStaticProps(context) {
    const { params } = context;
const {movie} = params;
 let dat = await  fs.promises.readFile('movdata/P1.json', "utf-8")
let chalja = JSON.parse(dat)
const arr = chalja.list
function filterByID(item) {
    if (item.title == movie) {
      return true;
    }
    
    return false;
  }
  
  const arrByID = arr.filter(filterByID);
const fit = 'https://api.themoviedb.org/3/movie/'
const tif = fit.concat(arrByID[0].id)
const response = await fetch(tif.concat('?language=en-US'), {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
          "Authorization": process.env.PI
    }
}); 

const data = await response.json()
return{
 props:{data}
}       
    
    }     
    export default movie