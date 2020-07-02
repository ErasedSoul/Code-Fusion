import React, { Component } from 'react';

export class Body extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { 
            html: 'Hello World',
            css: ' body {background: #100000; color: white} ', 
            js: ''
        };
    }

    // Handles fields change
    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    //binds them in html 
    getRaw(s) {
        return {__html: s};
    }
    render() {
        const { html, css, js } = this.state; 
        return (
            <div className="container">
                <div className="input">
                    <div className="html">
                        <h3>HTML</h3>
                        <textarea
                            className="input-text"
                            name="html"
                            onChange={this.handleChange}
                            defaultValue={html}
                        />
                    </div>

                    <div className="css">
                        <h3>CSS</h3>
                        <input
                            className="input-text"
                            name="css"
                            onChange={this.handleChange}
                            defaultValue={css}
                        />
                    </div>

                    <div className="js">
                        <h3>JS</h3>
                        <input
                            className="input-text"
                            name="js"
                            onChange={this.handleChange}
                            defaultValue={js}
                        />
                    </div>
                </div>
                
                <div className="output">
                    <div  
                        dangerouslySetInnerHTML={this.getRaw(
                            html +  "<style>" + css +  "</style>" + "<script>" + js +  "</script>" 
                        )}
                        className="output-text"
                    > 
                    </div>
                </div>   

            </div>
        )
    }
}

export default Body;