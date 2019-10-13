import React from 'react'
import { Carousel } from 'antd'
import 'components/timeline.css'

const Timeline = ({ selectDataset, numberOfDatasets }: any) => (
    <Carousel
        swipe
        beforeChange={(_, to) => selectDataset(to)}
    >
        {[...Array(numberOfDatasets)].map((e, i) => {
            return (
                <div key={i}>
                    <h3>{105 + i + "th Congress"}</h3>
                </div>
            )
        })}
    </Carousel>
)

export default Timeline
