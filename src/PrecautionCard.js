import React from 'react'

export default function PrecautionCard({each,num}) {

    return (
        <div className={`precaution-card card${num}`}>
            <img src={each.image} alt="" width="80" />
            <p>{each.text}</p>
        </div>
    )
}
