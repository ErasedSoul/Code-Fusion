import React, { Component } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-jsx";

/*eslint-disable no-alert, no-console */
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
const languages = [
  "javascript",
  "html",
  "css"
];

const themes = [
  "monokai",
  "github",
  "tomorrow",
  "kuroir",
  "twilight",
  "xcode",
  "textmate",
  "solarized_dark",
  "solarized_light",
  "terminal"
];
// importing all languages
languages.forEach(lang => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});
// importing all themes
themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));


export class Input extends Component {
	constructor(props) {
        super(props);
    }

    render(){
    	const { name, tab, placeholder, value, fontSize, theme, enableLAC, enableBAC, showGutter, activeLine, snippets, lineNumbers,
        handleChange } = this.props; 
    	return(
            <div >

                <AceEditor
                    mode= {name}
                    theme={theme}
                    name= {this.props.name}
                    onChange={handleChange}
                    defaultValue = {value}
                    placeholder = {placeholder}
                    fontSize={fontSize}
                    tabSize = {tab}
                    showGutter = {showGutter}
                    highlightActiveLine = {activeLine}
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                        enableBasicAutocompletion: enableBAC,
                        enableLiveAutocompletion: enableLAC,
                        enableSnippets: snippets,
                        showLineNumbers: lineNumbers

                    }}
                    height = "40vh"
                    width = "33vw"
                    //height = {height}
                    //width = {width}
                />        

            </div>


    	);
    }
}

export default Input;