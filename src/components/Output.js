import React, { Component } from 'react';
import '../material/output.css'; 
import Frame from 'react-frame-component';

export class Output extends Component {
	//constructor(props) {super(props);}
    
    //binds them in html 
    getRaw(s) {
        return {__html: s};
    }
    render(){
    	return(
            <Frame className="iff">
    		<div 
    			dangerouslySetInnerHTML = {
    				this.getRaw( this.props.content )
				}			
    		>
			</div>
            
    		</Frame>
    	);
    }
}

export default Output;
