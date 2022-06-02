import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'


function Header() {
    const auth = useSelector(state => state.auth)

    const {user, isLogged} = auth


    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const userLink = () => {
        return <li className="drop-nav">

<li><Link to="/panelHome">Panel</Link></li>
            <li><Link to="/supervisorHome">Supervisor</Link></li>
            <Link to="#" className="avatar">
            <img src={user.avatar} alt=""/> {user.name} <i className="fas fa-angle-down"></i>
            </Link>
         

    


            <ul className="dropdown">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/video">Video Conference</Link></li>
                <li><Link to="/chat">Chat</Link></li>
               <li><Link to="/addvideoc">Video Add</Link></li>
               <li><Link to="/videohome">Video Home</Link></li>
              
          
             
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>




    }

    const transForm = {
        transform: isLogged ? "translateY(-5px)" : 0
    }

    return (
        <header>
            <div className="logo">
            <h1><Link to="/">RESEARCH PROJECT MANAGEMENT</Link></h1>
            </div>
            <ul style={transForm}>
            {/* <li><Link to="/"> Shop</Link></li> */}
            <li><Link to="/"> Appoinments</Link></li>
            <li><Link to="/"> Staff</Link></li>
            {/* <li><Link to="/"> E-Training</Link></li> */}
            <li><Link to="/"> Reviews</Link></li>
            <li><Link to="/"> Inventory</Link></li>                
                {
                    isLogged
                    ? userLink()
                    :<li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                }
                
            </ul>
        </header>
    )
}

export default Header
