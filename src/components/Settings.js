import React, { Component } from "react";

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
		<div>
          <div className="field">
            <label>Theme:</label>
            <p className="control">
              <span className="select">
                <select
                  name="theme"
                  onChange={setTheme}
                  value={theme}
                >
                  {themes.map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>Font Size:</label>
            <p className="control">
              <span className="select">
                <select
                  name="Font Size"
                  onChange={setFont}
                  value={fontSize}
                >
                  {[14, 16, 18, 20, 24, 28, 32, 40].map(lang => (
                    <option key={lang} value={lang}>
                      size  {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>Font Size:</label>
            <p className="control">
              <span className="select">
                <select
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
              </span>
            </p>
          </div>


          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={enableBAC}
                  onChange={evt =>setBoolean("enableBAC", evt.target.checked)}
                />
                Basic Autocomplete
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={enableLAC}
                  onChange={evt =>setBoolean("enableLAC", evt.target.checked)}
                />
                Live Autocomplete
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={showGutter}
                  onChange={evt => setBoolean("showGutter", evt.target.checked)
                  }
                />
                Show Gutter
              </label>
            </p>
          </div>

          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={activeLine}
                  onChange={evt => setBoolean("activeLine", evt.target.checked)
                  }
                />
                Show Active Line
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={snippets}
                  onChange={evt => setBoolean("snippets", evt.target.checked)
                  }
                />
                Show snippets
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={lineNumbers}
                  onChange={evt => setBoolean("lineNumbers", evt.target.checked)
                  }
                />
                Show Line Number
              </label>
            </p>
          </div>




        </div>

		);
	}
}

export default Settings;