/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Component } from 'react'

import './style.css'
export class Button extends Component {
    
    render() {
        const { text, onClick, disabled } = this.props //$ As props já estão aqui
        DocumentTimeline.querySelector('input')
        return(
            <button 
                onClick={onClick} 
                disabled={disabled} 
            >
                {text}
            </button>
        )
    }
}