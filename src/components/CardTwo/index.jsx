import React from 'react'
import image1 from '../../assets/2.webp'
import './index.css'
import { useRef, useEffect, useState } from 'react'
export default function CardTwo() {
    const container2 = useRef()
    const [currentPosition2, setCurrentPosition2] = useState(0)
    const initWidth2 = 700
    const maxPosition2 = -initWidth2 * 2
    function back2() {
        setCurrentPosition2((preState) => {
            const newState = Math.min(currentPosition2 + initWidth2, 0)
            return newState
        })
    }
    function next2() {
        setCurrentPosition2((preState) => {
            const newState = Math.max(currentPosition2 - initWidth2, maxPosition2)
            return newState
        })
    }
    React.useEffect(() => {
        container2.current.style.transform = `translateX(${currentPosition2}px)`
    }, [currentPosition2])
    return (
        <div>
            <div className="about">
                <div className="about-title">
                    <h1 style={{ fontSize: '60px' }}>了解一下,懒猫微服</h1>
                    <h4 style={{ marginTop: '24px' }}>软件功能超强大,售后服务很贴心</h4>
                </div>
                <div className="about-container">
                    <div className="about-container-items" ref={container2}>
                        <div >
                            <img style={{ width: '700px', height: '548px' }} src={image1} alt="" />
                        </div>
                        <div>
                            <img style={{ width: '700px', height: '548px' }} src={image1} alt="" />
                        </div>
                        <div>
                            <img style={{ width: '700px', height: '548px' }} src={image1} alt="" />
                        </div>
                    </div>
                    <button id="back2" onClick={back2}>《</button>

                    <button id="next2" onClick={next2}>》</button>
                </div>
            </div>
        </div>
    )
}
