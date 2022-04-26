import React, {Component} from 'react';
import axios from 'axios'; //import axios package
import './header.css'

export default class Header extends Component{
render(){ //meka athule liyanne jss formate eken, meka thama interface eka 
    return(
       <header>

           <div className="logo headerName">
                <h1><i class="fas fa-leaf"></i> . <i>SuperMarket</i></h1>
           </div>

           <ul >
            <li></li>  
            <li></li> 
           <li><a href="/login"><i className="fas fa-home"></i>Home</a></li>
                <li><a href="/DetailProduct"><i class="fas fa-gifts"></i>Products</a></li>
                <li><a href="/about"><i class="fas fa-info"></i>About</a></li>
                <li><a href="/login"><i class="fas fa-users"></i>Staff</a></li>
                 <li><a href="/cart"><i className="fas fa-shopping-cart"></i>Cart</a></li>
                           
                           
                            
           </ul>   
       </header>

    )
    }
}

