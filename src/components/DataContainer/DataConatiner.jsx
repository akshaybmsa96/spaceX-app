import React, { useState, useEffect } from 'react';
import InfoCard from '../InfoCard';
import { connect } from 'react-redux';
import '../../styles/DataContainer/DataContainer.css';
import { Button, Col, Row, Container } from 'react-bootstrap';

/**
 * @description Component DataConatiner will return all the space programs
 * @param {*} props 
 */
const DataConatiner = (props) => {

    const [showLoadMore, setLoadMore] = useState(false);
    const [currentLimit, setCurrentLimit] = useState(8);

    /**
     * @description Component did mount hook
     */
    useEffect(() => {
        if (currentLimit < props.data.length) {
            setLoadMore(true);
        } else {
            setLoadMore(false);
        }
    },[currentLimit,props.data.length])

    /**
     * @description React hook Reset current Data limit
     */
    useEffect(() => {
        if(props.newData){
            setCurrentLimit(8);
        }
    }, [props.newData])

    /**
     * @description React hook for hide show load more button
     */

    /**
     * @description function will render more data to user screen
     * @param {*} e Event object
     * @param {*} data Data to render
     */
    const loadMore = (e, data) => {
        e.preventDefault();
        if (currentLimit < data.length) {
            setCurrentLimit(currentLimit + 8);
        }
    }

    if (!props.data || !props.data.length) {
        return <div className="container">No Record Found</div>
    }
    else {
        return (
            <Container>
                <Row>
                    {props.data.slice(0, currentLimit).map((program, index) => {
                        return <Col className="card-coloumn" xl={3} md={6} lg={4} sm={12}> <InfoCard key={index} data={program} /></Col>
                    })}
                </Row>
                {showLoadMore && <Button className="load-more btn-primary" onClick={(e) => { loadMore(e, props.data) }} href="#">Load More</Button>}
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        newData : state.loader
    }
}

export default connect(mapStateToProps)(DataConatiner);