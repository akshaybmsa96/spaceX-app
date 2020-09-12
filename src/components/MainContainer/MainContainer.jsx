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
                        <Col xl={3} md={4} sm={12}>
                            <FilterContainer />
                        </Col>
                        <Col xl={9} md={8} sm={12}>
                            <DataConatiner />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default MainContainer;