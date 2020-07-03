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
            html: '<div id="loader"><div id="box"></div><div id="hill"></div></div>',
            css: 'html,body {  background-color: #404456;}#loader {  position: absolute;  top: 50%;  left: 50%;  margin-top: -2.7em;  margin-left: -2.7em;  width: 5.4em;  height: 5.4em;  background-color: #404456;}#hill {  position: absolute;  width: 7.1em;  height: 7.1em;  top: 1.7em;  left: 1.7em;  background-color: transparent;  border-left: .25em solid whitesmoke;  transform: rotate(45deg);}#hill:after { position: absolute;  width: 7.1em;  height: 7.1em;  left: 0;  background-color: #404456;}#box {  position: absolute;  left: 0;  bottom: -.1em;  width: 1em;  height: 1em;  background-color: transparent;  border: .25em solid whitesmoke;  border-radius: 15%;  transform: translate(0, -1em) rotate(-45deg);  animation: push 2.5s cubic-bezier(.79, 0, .47, .97) infinite;}@keyframes push {  0% {    transform: translate(0, -1em) rotate(-45deg);  }  5% {    transform: translate(0, -1em) rotate(-50deg);  }  20% {    transform: translate(1em, -2em) rotate(47deg);  }  25% {    transform: translate(1em, -2em) rotate(45deg);  }  30% {    transform: translate(1em, -2em) rotate(40deg);  }  45% {    transform: translate(2em, -3em) rotate(137deg);  }  50% {    transform: translate(2em, -3em) rotate(135deg);  }  55% {    transform: translate(2em, -3em) rotate(130deg);  }  70% {    transform: translate(3em, -4em) rotate(217deg);  }  75% {    transform: translate(3em, -4em) rotate(220deg);  }  100% {    transform: translate(0, -1em) rotate(-225deg);  }}', 
            js: '', 
            fontSize: 18,
            tab: 2, 
            theme: 'monokai',
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
				<div className = 'set'>
				<a class="btn black modal-trigger" href="#modal1"><i class="material-icons">settings</i></a>
                    <div id="modal1" class="modal">
                    <div class="modal-content"> 
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
				    </div>
				    </div>
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
	            "<html>"+ html+"</html>"+ 
	            "<style>"+css+"</style>"+ 
	            "<script>" + js +  "</script>" 
	             } />

			</div>
	    );
	}
}

export default Editor;

