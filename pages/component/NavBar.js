import Link from "next/link"
export default function NavBar(){
    return <nav className="navbar position-relative navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <Link className="navbar-brand" href="/">  <><img src='/logo.png' width="30" height="30" className="d-inline-block align-top mx-1" alt=""/>
          </>UGHELPERS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                
                <li className="nav-item mx-2"><Link className="nav-link" href={'/'}>HOME</Link></li>
                <li className="nav-item mx-2"><Link className="nav-link" href={'/SearchMovies'}>&#x1F50E;</Link></li>
               
            </ul>
            </div>
    </div>

</nav>
}