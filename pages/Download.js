import React,{useEffect,useState} from 'react'
import Login from './component/Login'
import Loggedin from './component/Loggedin'
function Download() {
  const [name,setName] = useState('')
  const [cok,setCok] = useState('hell')

  useEffect(()=>{
    setCok(!document.cookie?"":document.cookie)
    const auth = process.env.NEXT_PUBLIC_APIOWN
    if(cok!=="hell"){
    fetch("/api/getuser",{
      method:"POST",
      body:JSON.stringify({auth})})
    .then(response => response.json())
    .then( data=> data.user.name)
    .then(final => setName(final))
    }
  },[cok])
  return (
    <div className='bg-secondary'>
    {name!='' && name!='t'?<Loggedin/>:<div></div>}
    {name=='t'?<Login />:<div></div>}
    </div>
  )
}

export default Download
