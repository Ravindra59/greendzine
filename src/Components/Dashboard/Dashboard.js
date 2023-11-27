import React from 'react'
import './Dashboard.css'
import ProgressBar from './ProgressBar'
import Footer from '../Footer/Footer'

export default function Dashboard() {
  return (
    <div className='Dashboard-Component'>
      <div className='Header-section'>
        <img src='Header-icon.png' alt='Header-icon' className='Header-icon'></img>
      </div>
      <div className='Progress-section'>
        <span className='number'>4</span>
        <img src='Moptro-logo.png' alt='Moptro-logo' className='Moptro-logo'></img>
        <div className='ProgressBar-List'>
          <p className='Dashboard-heading-text'>Employee Productivity Dashboard</p>
          <div>
            <ProgressBar weekday="Monday" progress="4" />
            <ProgressBar weekday="Tuesday" progress="92" />
            <ProgressBar weekday="Wednesday" progress="122" />
            <ProgressBar weekday="Thursday" progress="93" />
            <ProgressBar weekday="Friday" progress="89" />
            <ProgressBar weekday="Saturday" progress="98" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
