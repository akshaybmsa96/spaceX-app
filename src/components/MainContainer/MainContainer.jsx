import React from 'react';
import FilterContainer from '../FilterContainer'
import DataConatiner from '../DataContainer'
import { Container, Row, Col } from 'react-bootstrap'
import PageLoader from '../PageLoader';
import '../../styles/MainContainer/MainContainer.css'


class MainContainer extends React.Component {

    state = { hasError : false };

    static getDerivedStateFromError(error) {
        console.log('error',error);
        return { hasError: true };
      }

    render() {
        if(this.state.hasError){
            return "Something went wrong with rendering"
        }
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
                <PageLoader/>
            </div>
        )
    }

}

export default MainContainer;