import { NavLink } from 'react-router-dom'

export function Nav () {

    return(
        <>
        <div className='Navbar' style={{display:'flex', justifyContent:'space-between', alignItems:'center',gap:'3vw',}}>

            <div style={{fontSize:'30px', color:'cyan', fontWeight:'Bold', border:'3px solid Black', padding:'5px'}}>My Logo</div>
            <div style={{display:'flex',gap:'2vw',alignItems:'flex-end'}}>
                <NavLink to={"/"} style={({isActive}) => ({color:isActive ? 'Red' : 'Black', fontSize:isActive ? '24px' : '20px'})}>Home</NavLink>
                <NavLink to={"/about"} style={({isActive}) => ({color:isActive ? 'Red' : 'Black', fontSize:isActive ? '24px' : '20px'})}>About</NavLink>
                <NavLink to={"/contact"} style={({isActive}) => ({color:isActive ? 'Red' : 'Black', fontSize:isActive ? '24px' : '20px'})}>Contact</NavLink>
                
                  {localStorage.getItem("islogin")
                  ?
                  (
                      <li>
                      <button onClick={()=>localStorage.removeItem("islogin")}>Logout</button>
                    </li>
                  )
                  :
                  (
                      <li>
                      <NavLink aria-current="page" to="/login">Login</NavLink>
                    </li>
                  )}
            </div>
        </div>
        </>
    )
}