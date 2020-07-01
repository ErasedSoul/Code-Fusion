import React  from 'react';
const Navbar = () =>{

    return(
        <div class="navbar-fixed">
        <nav class = "nav-wrapper black">
            <div class="container">
                <a href="" class ="sidenav-trigger" data-target="slide-out"><i class="small material-icons">menu</i></a>	   
                <a href="" class ="brand-logo">Code Fusion</a>
                <ul class="right hide-on-med-and-down">
                <li> <a href="/playground">Playground</a></li>
                <li> <a id ="start-togetherjs" href="">Collab</a></li>
                <li> <a href="/">Home</a> </li>
                <li> <a href="/about">About</a> </li>
                <li> <a href="/contact">Contact</a></li>
            </ul>
            </div>
        </nav>
       </div>
    );
}
export default Navbar;