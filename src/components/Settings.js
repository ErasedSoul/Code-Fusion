import React, { Component } from "react";
import '../material/Settings.css'; 

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


export class Settings extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		const { fontSize, tab, theme, enableLAC, enableBAC, showGutter, activeLine, snippets, lineNumbers,
		setTheme, setFont, setBoolean, setTab} = this.props; 
		return(
		<div className = "settings">

  <form action="#">
          <div className="field">
              <div  class="input-field col s12" >
                <select className="browser-default"
                  name="theme"
                  onChange={setTheme}
                  value={theme}
                >
                  {themes.map(lang => (
                    <option key={lang} value={lang}>
                     Theme {lang}
                    </option>
                  ))}
                </select>
              </div>
          </div>

          <div className="field">
              <div  class="input-field col s12" >
                <select className="browser-default"
                  name="Font Size"
                  onChange={setFont}
                  value={fontSize}
                >
                  {[14, 16, 18, 20, 24, 28, 32, 40].map(lang => (
                    <option key={lang} value={lang}>
                      Font size  {lang}
                    </option>
                  ))}
                </select>
              </div>
          </div>

          <div className="field">
              <div  class="input-field col s12" >
                <select className="browser-default"
                  name="Tab Size"
                  onChange={setTab}
                  value={tab}
                >
                  {[2, 4, 8].map(lang => (
                    <option key={lang} value={lang}>
                      tab {lang}
                    </option>
                  ))}
                </select>
              </div>
          </div>


          <div className="field">
              <label class="waves-effect waves-light btn">
                <input
                  type="checkbox"
                  checked={enableBAC}
                  onChange={evt =>setBoolean("enableBAC", evt.target.checked)}
                />
                Basic Autocomplete
              </label>
          </div>
          <div className="field">
              <label class="waves-effect waves-light btn">
                <input
                  type="checkbox"
                  checked={enableLAC}
                  onChange={evt =>setBoolean("enableLAC", evt.target.checked)}
                />
                Live Autocomplete
              </label>
          </div>
          <div className="field">
              <label class="waves-effect waves-light btn">
                <input
                  type="checkbox"
                  checked={showGutter}
                  onChange={evt => setBoolean("showGutter", evt.target.checked)
                  }
                />
                Show Gutter
              </label>
          </div>

          <div className="field">
              <label class="waves-effect waves-light btn">
                <input
                  type="checkbox"
                  checked={activeLine}
                  onChange={evt => setBoolean("activeLine", evt.target.checked)
                  }
                />
                Show Active Line
              </label>
          </div>
          <div className="field">
              <label class="waves-effect waves-light btn">
                <input
                  type="checkbox"
                  checked={snippets}
                  onChange={evt => setBoolean("snippets", evt.target.checked)
                  }
                />
                Show snippets
              </label>
          </div>
          <div className="field">

              <label class="waves-effect waves-light btn">
                <input
                  id="indeterminate-checkbox" 
                  type="checkbox"
                  checked={lineNumbers}
                  onChange={evt => setBoolean("lineNumbers", evt.target.checked)
                  }
                />
                Show Line Number
              </label>

          </div>


  </form>


        </div>

		);
	}
}

export default Settings;