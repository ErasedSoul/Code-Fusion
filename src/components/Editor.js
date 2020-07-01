import React, { Component } from 'react';
import { Settings } from './Settings';
import { Input } from './Input';
import { Output } from './Output';
import '../material/Editor.css'; 

export class Editor extends Component {
	constructor(props) {
        super(props);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        //this.handleChange = this.handleChange.bind(this);
	    this.setFont = this.setFont.bind(this);
	    this.setTab = this.setTab.bind(this);
	    this.setBoolean = this.setBoolean.bind(this);
		this.setTheme = this.setTheme.bind(this);
        this.state = { 
            html: 'Hello World!!!!!!!!!!!!',
            css: ' body {background:  white} ', 
            js: '', 
            fontSize: 18,
            tab: 2, 
            theme: 'github',
            enableBAC: true,
		    enableLAC: true,
		    showGutter: true,
		    activeLine: true,
		    snippets: true,
		    lineNumbers: true,
        };
    }
    // Handles fields change
    handleChange1 (evt) {
        this.setState({html: evt});
    }
    handleChange2 (evt) {
        this.setState({css: evt});
    }
    handleChange3 (evt) {
        this.setState({js: evt});
    }
	/*handleChange (evt) {
        this.setState({js: evt});
    }*/
    setTheme(evt) {
	    this.setState({theme: evt.target.value});
	}
	setFont(evt) {
	    this.setState({fontSize: parseInt(evt.target.value, 10) });
	}
	setTab(evt) {
	    this.setState({tab: parseInt(evt.target.value, 10) });
	}
	setBoolean(name, value) {
    this.setState({ [name]: value });
  	}

	render(){
		const { 
		html, css, js, fontSize, tab, theme, enableLAC, enableBAC, showGutter, activeLine, snippets, lineNumbers
		} = this.state; 
		return (
	        
			<div >
				<div class = 'set'> 
					<Settings  
						theme = {theme} 
						fontSize = {fontSize}
						tab = {tab}
						enableBAC = {enableBAC}
			    		enableLAC = {enableLAC}
						showGutter = {showGutter}
			    		activeLine = {activeLine}
			    		snippets = {snippets}
			    		lineNumbers = {lineNumbers}
						setTheme = {this.setTheme}
						setFont = {this.setFont}
						setTab = {this.setTab}
						setBoolean = {this.setBoolean}
					/>
				
					<table className = "input">
					  	<tr className = "heading">
						    <th> HTML </th>
						    <th> CSS </th>
						    <th> JS </th>
					  	</tr>
					    <tr>
						    <th> 
						    	<Input 
						    		name = {"html"} 
						    		value = {html} 
						    		fontSize = {fontSize}
						    		tab = {tab}
						    		theme = {theme}
						    		enableBAC = {enableBAC}
						    		enableLAC = {enableLAC}
						    		showGutter = {showGutter}
						    		activeLine = {activeLine}
						    		snippets = {snippets}
						    		lineNumbers = {lineNumbers}
	 					    		handleChange = {this.handleChange1}   
						    	/> 
						    </th>
						    <th> 
						    	<Input 
							    	name = {"css"} 
							    	value = {css} 
							    	fontSize = {fontSize}
							    	tab = {tab}
						    		theme = {theme}
						    		enableBAC = {enableBAC}
						    		enableLAC = {enableLAC}
						    		showGutter = {showGutter}
						    		activeLine = {activeLine}
						    		snippets = {snippets}
						    		lineNumbers = {lineNumbers}
							    	handleChange = {this.handleChange2}   
						    	/>
						    </th>
						    <th> 
						    	<Input 
								    name = {"javascript"} 
								    value = {js} 
								    placeholder = {"Js"} 
								    fontSize = {fontSize}
								    tab = {tab}
						    		theme = {theme}
						    		enableBAC = {enableBAC}
						    		enableLAC = {enableLAC}
						    		showGutter = {showGutter}
						    		activeLine = {activeLine}
						    		snippets = {snippets}
						    		lineNumbers = {lineNumbers}
								    handleChange = {this.handleChange3}
						       />
						    </th>
					    </tr>
					</table> 

				</div>

				<Output content = { 
	            "<html>" + html + "</html>" + 
	            "<style>" + css +  "</style>" + 
	            "<script>" + js +  "</script>" 
	             } />

			</div>
	    );
	}
}

export default Editor;

