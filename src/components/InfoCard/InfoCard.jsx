import React from 'react';
import { Card } from 'react-bootstrap';
import '../../styles/InfoCard/InfoCard.css'

const InfoCard = props => {

    return (
        <Card className="card-container">
            <Card.Img loading="lazy" alt={props.data?.rocket?.rocket_name} className="card-image" variant="top" src={props.data.links?.mission_patch_small || "https://www.spacex.com/static/images/share.jpg"} />
            <Card.Body>
                <Card.Title className="card-title">{props.data?.mission_name} #{props.data?.flight_number}</Card.Title>
                {CardMetaData(props.data)}
            </Card.Body>
        </Card>
    )
}

const CardMetaData = data => {
    return (
        <React.Fragment>
            <div className="meta-data-para">
                <span className="meta-data-span">Mission Ids:</span> 
                 <ul>{GetMissionIds(data.mission_id)}</ul></div>
            <p className="meta-data-para">
                <span className="meta-data-span">Launch Year:</span> {data?.launch_year}</p>
            <p className="meta-data-para">
                <span className="meta-data-span">Successful Launch:</span> {data?.launch_success ? "true" : "false"} </p>
            <p className="meta-data-para">
                <span className="meta-data-span">Successful Landing:</span> {data?.rocket.first_stage.cores[0].land_success ? "true" : "false"} </p>
        </React.Fragment>
    )
}

const GetMissionIds = missionIds =>{
    return missionIds.map((id,index)=>{
        return <li key={index} className="mission-id-list">{id}</li>
    })
}

export default InfoCard;