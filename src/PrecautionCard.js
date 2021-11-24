import React from 'react'

export default function PrecautionCard({each,num}) {

    return (
        <div className={`main-card card${num}`}> 
        <div className={`precaution-card`}>
            <img src={each.image} alt="" width="80" />
            <p>{each.text}</p>
        </div>
        </div>
    )
}
