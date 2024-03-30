import React from "react"

export default function Place(props) {
    return (
        <section className="place">
            <img src={`../../images/${props.img}`} />
            <div className="content">
                <div className="location">
                    <h4><i class="fa-solid fa-location-dot"></i> {props.location}</h4>
                    <a href={props.ggMapUrl}> View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <h6>{props.startDate} - {props.endDate}</h6>
                <p>{props.description}</p>
            </div>
        </section>
    )
}