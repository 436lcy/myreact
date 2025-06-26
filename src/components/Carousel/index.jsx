import React from 'react'
import { useRef } from 'react'
import Card from '../Card'
import image from '../../assets/1.jpeg'
import image2 from '../../assets/2.webp'
//import Card from './card/index.jsx'
export default function Carousel({ image1, content }) {
    // 1. 从外部引入一个 card 组件
    // 2. 用 map 渲染 8个card组件 
    const items = [
        { id: '001', name: '腾讯会议', advantage: 'tease', src: image },
        { id: '002', name: '飞书', advantage: 'dismiss', src: image2 },
        { id: '003', name: '腾讯会议', advantage: 'tease', src: '1.jpeg' },
        { id: '004', name: '腾讯会议', advantage: 'tease', src: image },
        { id: '005', name: '腾讯会议', advantage: 'tease', src: image },
        { id: '006', name: '腾讯会议', advantage: 'tease', src: image },
        { id: '007', name: '腾讯会议', advantage: 'tease', src: image },
        { id: '008', name: '腾讯会议', advantage: 'tease', src: image }
    ]
    const container = useRef()
    let currentPosition = 0
    const initWidth = 300
    const maxPosition = -initWidth * 2.7
    function back() {
        currentPosition = Math.min(currentPosition + initWidth, 0)
        container.current.style.transform = `translateX(${currentPosition}px)`
    }
    function next() {
        currentPosition = Math.max(currentPosition - initWidth, maxPosition)
        container.current.style.transform = `translateX(${currentPosition}px)`
    }
    return (
        <div>
            <div className="product-title">
                <h1>小桌塔</h1>
                <h1>摆在哪里都好看</h1>
                <p className="margin-top">比Mini更Mini,千金难买你欢喜</p>
                <div className="product-navigation">
                    <button id="back" onClick={back} >《</button>
                    <button id="next" onClick={next}>》</button>
                </div>
            </div>
            <div className="scroll">
                {/* <div className="scroll-container" >  */}
                <div className="scroll-container" ref={container}  >
                    {
                        items.map((itemsObj) => {
                            return (
                                <div className="scroll-items" key={itemsObj.id}>
                                    <Card src={itemsObj.src} name={itemsObj.name} advantage={itemsObj.advantage} />
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

// items.map((contnt)=>(
// <Car src={contnt.src} nam={contnt.nam} a/>
// ))