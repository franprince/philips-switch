import React from 'react'

const Switch = () => {
    const [state, setState] = React.useState(true);
    const handleClick = () => {
        setState(!state)
        fetch(`/api/philips/${state.toString()}`)
    }
    return (
        <> <label htmlFor="lightSwitch" className="wrap" >Switch
            <input type="checkbox" checked={!state} onChange={handleClick} id="lightSwitch" name="lightSwitch" className="light-switch" />
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
        </>
    )
}

export default Switch
