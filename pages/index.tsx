import type { NextPage } from 'next'
import React from "react"

const Home: NextPage = () => {
  const [state, setState] = React.useState(false);
  const handleClick = () => setState(!state)
  return (
    <div className='container'>
      <label htmlFor="lightSwitch" className="wrap">
        <input type="checkbox" checked={state} onChange={handleClick} id="lightSwitch" name="lightSwitch" className="light-switch" />
        <div className="panel">
          <div className="overlay"></div>
          <div className="screw top">
            <div className="screw__slot"></div>
          </div>
          <div className="switch__hole">
            <div className="switch__groove">
              <div className="switch">
                <div className="switch__shadow-box top">
                  <div className="switch__shadow top"></div>
                </div>
                <div className="switch__shadow-box bottom">
                  <div className="switch__shadow bottom"></div>
                </div>
                <div className="switch__top">
                  <div className="switch__top-outset"></div>
                </div>
                <div className="switch__bottom">
                  <div className="switch__bottom-outset"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="screw bottom">
            <div className="screw__slot"></div>
          </div>
        </div>
      </label>
    </div>
  )
}

export default Home
