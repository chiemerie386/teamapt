import React from 'react'
import './header.css'
// import {ReactComponent as ReactLogo} from 'svgs/logo.svg'
import pic from "../../images/Group.png"
import Icon from "../../images/icon.png"

export const Header = () => {
    return (
        <div className="main-header">
            <img src= {pic} />
            <div class="icon-card">
            
            <img src= {Icon} />
            <div class="main-icon-text">Day 1 <br/> <span class="other-icon-text">of 5</span></div>
            </div>
           

        </div>
    )
}
