import React, { Component } from 'react';


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
    		<div
    			dangerouslySetInnerHTML = {
    				this.getRaw( this.props.content )
    			}
    		> 
    		</div>
    	);
    }
}

export default Output;