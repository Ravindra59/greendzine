import React from 'react'
import './Dashboard.css'

export default function ProgressBar({weekday,progress}) {
    return (
        <div>
            <div className='Weekday-and-progress'>
            <span className='Weekday'>Productivity on {weekday}</span>
            <span className='Progress-Precentage'>{progress} %</span>
            </div>
            <div className="progress-container">
                <div className="progress-bar" style={{width:`${progress}%`}}></div>
            </div>
        </div>
    )
}
