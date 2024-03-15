import Head from 'next/head'
import Link from 'next/link';
import Script from 'next/script';
import * as fs from 'fs'
export default function Page2(props) {
  const Mov = props.data
  const Res = Mov.list
   const fix ='https://image.tmdb.org/t/p/w440_and_h660_face/'
     
  return (
    <>
      <Head>
      <meta name="google-site-verification" content="mSKDzGkZInK-m1_i4guaxX5IxNacMUt_9LIt23k7Bn8" />
    <meta charset="utf-8" />
    <link rel="icon" href="favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="movie download"/>
   
    <title>Ughelpers movies</title>
    <meta name="google-adsense-account" content="ca-pub-5237350192487791"/>
    </Head>
     <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5237350192487791" crossorigin="anonymous"></Script>
     <div className='bg-secondary container-fluid '>
     <div className='position-relative p-3 container'>
 <div >
                         
    <div className="row" >
       {Res.map((element) => {
         return <div className="col-md-3 col-6 mx-0 " key={element.title} >
          <div className='my-2'>
           <Link className="nav-link" href={`/movies/page2/${element.title}`}>
            <div className="card">
               <img src={fix.concat(element.imageUrl)} className="card-img-top" alt="..." /> 
                            <div className="card-body p-1 text-center bg-secondary">{element.title}</div> </div>      
                             </Link>
                            </div>
                             </div>
                        })}
                    </div>
                    </div>
                    <span className='mx-auto'>
                    <ul className="pagination">
    <li className="page-item"><Link className="page-link" href={'/'}>1</Link></li>
    <li className="page-item"><Link className="page-link" href={'/moviepages/Page2'}>2</Link></li>
  </ul>

                    </span>
                    </div> 
                    </div>
    </>
  )
}
export async function getStaticProps(context){
  let data = await  fs.promises.readFile('movdata/P2.json', "utf-8")

 return{
   props:{data: JSON.parse(data)}
 }       
      

}
