import React from 'react'
export default function Card({ id, src, name, advantage }) {
    return (
        <div>
            <div className="scroll-items" key={id}>
                <img style={{ width: '300px', height: '363px' }} src={src} alt="" />
                <h3>{name}</h3>
                <p className="margin-top">{advantage}</p>
            </div>
        </div>
    )
}
