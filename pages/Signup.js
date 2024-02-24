import React,{useState} from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
export default function Signup() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const handlename = (e) =>{
     setName(e.target.value)
     }
    
    const handlemail = (e) =>{
        setEmail(e.target.value)
    }
    const handlepassword =(e) =>{
        setPassword(e.target.value)
    }
    const handleSubmit = async (e) => {
              e.preventDefault();
              const auth = process.env.NEXT_PUBLIC_APIOWN
              if(name==''||password==''||email==''){alert("credentials cannot be empty")}
     else {const response = await fetch('/api/createuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify({name,email,password,auth})
            }); 
            const data = await response.json()
            if(data.authtoken=="fail"){alert("email already exist")}
            else {Cookies.set("authtoken",data.authtoken)
            window.open("/Download","_self")}}
    }
  return (
    <div className="bg-secondary">
     <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label className="text-white" htmlFor="exampleInputName">Name</label>
         <input value={name} onChange={handlename} type="name" className="form-control" id="exampleName"  placeholder="Enter name"/>
         </div>
  <div className="form-group">
    <label className="text-white" htmlFor="exampleInputEmail1">Email address</label>
    <input value={email} onChange={handlemail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label className="text-white" htmlFor="exampleInputPassword1" >Password</label>
    <input value={password} type="password"  onChange={handlepassword}  className="form-control"  placeholder="Password" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<h4 className='bg-secondary pt-2 m-0 text-black'>Already have a account - <br/><Link href="/Download" className="nav-link d-inline text-white">login</Link></h4>
    </div>
  )
}