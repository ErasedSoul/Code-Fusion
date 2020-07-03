import React  from 'react';
import '../material/About.css'; 
const About = () =>{

    return(
        <div class="container">
           <h4>About Code Fusion</h4>
              <h5>What is Code Fusion</h5>
              <p>
                  Code Fusion is an online code editor to play with HTML, CSS and JavaScript
                  that works like JSBin/CodePen/JSFiddle with collaboration (Experimental feature) and tools.
                  It is a React app with no-backend where 
                  users can chat with each other and can help each other out on the website in real time! 
              </p>

              <h5>Technology used</h5>
              <p>
                  Code Fusion is built with react.js framework and Ace Editor,a JavaScript based code editor.
              </p>
              <p>
                  Collaboration features are provided by TogetherJS, an open source JavaScript library.
              </p>
              <p>
                  For more insight explore the 
                  <a href = "https://github.com/ani-0206/Code-Fusion" target="_blank">
                  <i class="fa fa-github"></i>
                  </a> 
              </p>

              <h5>Browser Support</h5>
              <p>
                  Code Fusion is supported in latest version of Chrome, Firefox and Microsoft Edge.
              </p>
       </div>
    );
}
export default About;