import React, {Component} from 'react';



export default class NavBar extends Component{
    render(){
        return(
            
            <div class="navbar">
            <a class="active" href="#"><i class="fa fa-fw fa-home"></i> SuperMarket System</a>
            <a href="/"><i class="fa fa-fw fa-search"></i>Payments</a>
            <a href="/about"><i class='fas fa-exclamation'></i> About Us</a>
            <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
          </div>
        

            
        )
    }
}
