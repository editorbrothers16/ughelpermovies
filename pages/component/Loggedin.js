import React from 'react'
import Cookies from 'js-cookie'
function Loggedin(){
    const logout =()=>{
        Cookies.remove("authtoken")
        window.open("/Download","_self")
    }
     const delId =async()=>{
        const response = await fetch('/api/deleteuser')
         const data = await response.json()
        if(data.authtoken=="fail"){alert("server error")}
       else { Cookies.remove("authtoken")
         window.open("/Download","_self")}
     }
     
return <div className='bg-secondary'>
    <a href='/https://youtu.be/bc2p_tZE2xU?feature=shared'><h2 className='text-white'>Link is generated, Click to download</h2></a>
    <span className='me-5'>
<button onClick={logout}>Logout</button>
</span><button onClick={delId}>DeleteId</button>
</div>
}
export default Loggedin