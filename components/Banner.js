import React from 'react'

import OwlCarousel from 'react-owl-carousel2'

const options = {
    items: 1,
    nav: false,
    rewind: true,
    autoplay: true,
    autoplayHoverPause: true
}
 
const events = {
    onDragged: (event) => console.log("Dragged"),
    onChanged: (event) => console.log("Changed")
}

export default class Banner extends React.Component {
    render() {
        return (
            <div>
                <OwlCarousel ref="car" options={options} events={events} >
                    <Panel imageName="mustang.jpg" pageLink="mustang" heading="Mustang" tagLine="Experience the adventure of Mustang's landscape." />
                    <Panel imageName="manang.jpg" pageLink="manang" heading="Manang" tagLine="Experience the adventure of Mustang's landscape." />
                    <Panel imageName="manang2.jpg" pageLink="manang-special" heading="Manang" tagLine="Experience the adventure of Mustang's landscape." />
                    <Panel imageName="monaco.jpg" pageLink="monaco" heading="Monaco" tagLine="Experience the adventure of Mustang's landscape." />
                    <Panel imageName="thailand.jpg" pageLink="thailand" heading="Thailand" tagLine="Experience the adventure of Mustang's landscape." />
                </OwlCarousel>
            </div>
        )
    }
}

const Panel = (props) => {
    return (
        <div className='banner-panel'>
            <div className="overlay">
                <h2>{props.heading}</h2>
                <p className="tagline">{props.tagLine}</p>
                <a href={`tour/${props.pageLink}`}><button>Learn more</button></a>
            </div>
            <div className="img-container"><img src={`static/images/${props.imageName}`} alt="The Last of us"/></div>
        </div>
    )
}