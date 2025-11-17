import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

export function Nav() {
    return (
        <>
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav" style={{display:'flex', alignItems:'flex-end', gap:'2vw'}}>
                        <li class="nav-item">
                        <NavLink class="nav-link active" aria-current="page" to="/" style={({isActive}) => ({color:isActive ? 'Red' : 'Black', fontWeight:isActive ? 'Bold' : 'Normal', fontSize:isActive ? '20px' : '17px'})}>Home</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink class="nav-link" to="/about" style={({isActive}) => ({color:isActive ? 'Red' : 'Black', fontWeight:isActive ? 'Bold' : 'Normal', fontSize:isActive ? '20px' : '17px'})}>About</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink class="nav-link" to="/service" style={({isActive}) => ({color:isActive ? 'Red' : 'Black', fontWeight:isActive ? 'Bold' : 'Normal', fontSize:isActive ? '20px' : '17px'})}>Service</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink class="nav-link" to="/contact" style={({isActive}) => ({color:isActive ? 'Red' : 'Black', fontWeight:isActive ? 'Bold' : 'Normal', fontSize:isActive ? '20px' : '17px'})}>Contact</NavLink>
                        </li>
                         <li class="nav-item">
                        <NavLink class="nav-link" to="/detail" style={({isActive}) => ({color:isActive ? 'Red' : 'Black', fontWeight:isActive ? 'Bold' : 'Normal', fontSize:isActive ? '20px' : '17px'})}>Details</NavLink>
                        </li>
                          <li class="nav-item">
                        <NavLink class="nav-link" to="/dashboard" style={({isActive}) => ({color:isActive ? 'Red' : 'Black', fontWeight:isActive ? 'Bold' : 'Normal', fontSize:isActive ? '20px' : '17px'})}>Dashboard</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}