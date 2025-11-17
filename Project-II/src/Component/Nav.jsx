import { NavLink } from 'react-router-dom'

export function Nav () {
    return (
        <>
        <div className="Navbar bg-primary" width="100%" style={{display:"flex",justifyContent:"space-between", alignItems:"center", borderBottom:"2px solid cyan" }}>
                <div style={{fontSize:'30px', color:'cyan', fontWeight:'Bold', border:'3px solid Black', padding:'5px'}}>My Logo</div>
                <div style={{gap:'2vw', display:'flex', alignItems:'end'}}>
                    <NavLink to={"/"} style={({isActive}) => ({color: isActive ? "Red" : "Black", fontSize : isActive ? "24px" : "20px"})}>Home</NavLink>
                    <NavLink to={"/about"} style={({isActive}) => ({color: isActive ? "Red" : "Black", fontSize : isActive ? "24px" : "20px"})}>About</NavLink>
                    <NavLink to={"/contact"} style={({isActive}) => ({color: isActive ? "Red" : "Black", fontSize : isActive ? "24px" : "20px"})}>Contact</NavLink>
                   
                   {localStorage.getItem("isLogin")
                   ?
                   (
                    <li>
                        <button onClick={() => localStorage.removeItem("isLogin")}>Logout</button>
                    </li>
                   )
                   :
                   (
                    <li>
                        <NavLink to={"/login"} style={({isActive}) => ({color: isActive ? "Red" : "Black", fontSize : isActive ? "24px" : "20px"})}>Login</NavLink>
                    </li>
                   )
                }
            </div>
        </div>
        </>
    )
}