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
          <p>
          <a href = "https://in.linkedin.com/in/shrabana-biswas-486ab9167" target="_blank">
                  linkedin </a>
          </p>
          <p>
          <a href = "https://github.com/shrabana99" target="_blank">
                  linkedin </a>
          </p>

      </span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="large material-icons">face</i>Anirban Das</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span></div>
    </li>
  </ul>
     </div>

  );
}
export default Contact;