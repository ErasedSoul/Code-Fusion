import React, { Component } from 'react';
import '../material/output.css'; 

export class Output extends Component {
	constructor(props) {
        super(props);
    }
    //binds them in html 
    getRaw(s) {
        return {__html: s};
    }
    render(){
    	return(
    		<div className="iff"
    			dangerouslySetInnerHTML = {
    				this.getRaw( this.props.content )
					
    			}
    		> 
    		</div>
    	);
    }
}

export default Output;