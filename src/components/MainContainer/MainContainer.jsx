import React from 'react';
import FilterContainer from '../FilterContainer'
import DataConatiner from '../DataContainer'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/MainContainer/MainContainer.css'


class MainContainer extends React.Component {

    componentDidCatch(err){

    }

    render() {
        return (
            <div>
                <p className="top-text">SpaceX Launch Programs</p>
                <Container fluid>
                    <Row>
                        <Col sm={2}>
                            <FilterContainer />
                        </Col>
                        <Col sm={10}>
                            <DataConatiner />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default MainContainer;