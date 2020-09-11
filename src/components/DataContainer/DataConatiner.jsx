import React, { useState, useEffect } from 'react';
import InfoCard from '../InfoCard';
import { connect } from 'react-redux';
import '../../styles/DataContainer/DataContainer.css';
import { Button } from 'react-bootstrap';


const DataConatiner = (props) => {

    const [showLoadMore, setLoadMore] = useState(false);
    const [currentLimit, setCurrentLimit] = useState(8);

    useEffect(() => {
        if (currentLimit < props.data.length) {
            setLoadMore(true);
        }
    }, [])

    useEffect(() => {
        setCurrentLimit(8);
        if (currentLimit < props.data.length) {
            setLoadMore(true);
        } else {
            setLoadMore(false);
        }
    }, [props.data.length])

    useEffect(() => {
        if (currentLimit >= props.data.length) {
            setLoadMore(false);
        }
    }, [currentLimit])

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
            <div>
                <div className="row">
                    {props.data.slice(0, currentLimit).map((program, index) => {
                        return <InfoCard key={index} data={program} />
                    })}
                </div>
                {showLoadMore && <Button className="load-more btn-primary" onClick={(e) => { loadMore(e, props.data) }} href="#">Load More</Button>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(DataConatiner);