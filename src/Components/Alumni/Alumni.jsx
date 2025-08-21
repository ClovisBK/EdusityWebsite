import React from 'react'
import './Alumni.css'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Alumni = () => {
  return (
    <div className='alumni-container'>
        <div className="alumni">
            <div className="image">
            <img src={user_1} alt="" />
            </div>
            <div className="alumni-title">Francis Clark</div>
        </div>
        <div className="alumni">
            <div className="image">
            <img src={user_2} alt="" />
            </div>
            <div className="alumni-title">Marie Johnson</div>
        </div>
        <div className="alumni">
            <div className="image">
            <img src={user_3} alt="" />
            </div>
            <div className="alumni-title">Clovis Brooks</div>
        </div>
        <div className="alumni">
            <div className="image">
            <img src={user_4} alt="" />
            </div>
            <div className="alumni-title">Christopher Rita</div>
        </div>
    </div>
  )
}

export default Alumni
