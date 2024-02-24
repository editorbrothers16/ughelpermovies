import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import React,{useEffect} from 'react'
import NavBar from './component/NavBar';
export default function App({ Component, pageProps }) {

useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
},[])
return <>
<NavBar/>
<Component {...pageProps} />
</> 
}
