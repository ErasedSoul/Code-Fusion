import React from 'react';
import '../material/Contact.css'; 
const Contact = () =>{

    return(
        <div className="container">
           <h4>Contributors</h4>
         <ul class="collapsible popout">   
            <li>
              <div class="collapsible-header"><i class="large material-icons ">face</i>Shrabana Biswas</div>
              <div class="collapsible-body"><span>
                <p> Final year undergraduate, passionate about software and web development. </p>
                  <p>Connect me on  
                  <a href = "https://in.linkedin.com/in/shrabana-biswas-486ab9167" target="_blank">
                          LinkedIn </a>
                  </p>
                  <p>View my other works on  
                  <a href = "https://github.com/shrabana99" target="_blank">
                          Github </a>
                  </p>

              </span></div>
            </li>
            <li>
              <div class="collapsible-header"><i class="large material-icons ">face</i>Anirban Das</div>
              <div class="collapsible-body"><span>
                <p> B.Tech undergrad with passion about learning by doing
                and a zeal to learn new things and experiences. 

                 </p>
                  <p>Connect me on  
                  <a href = "https://in.linkedin.com/in/shrabana-biswas-486ab9167" target="_blank">
                          LinkedIn </a>
                  </p>
                  <p>View my other works on  
                  <a href = "https://github.com/shrabana99" target="_blank">
                          Github </a>
                  </p>

              </span></div>
            </li>
          </ul>
     </div>

  );
}
export default Contact;
