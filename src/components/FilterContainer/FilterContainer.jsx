import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FilterData, ResetFilter } from './FilterContainer_Action';
import '../../styles/FilterContainer/FilterContainer.css';

class FilterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.launchFilter = null;
        this.landFilter = null;
        this.yearFilter = null;
        this.years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
    }

    filterData = _ => {
        if (!this.yearFilter) {
            alert("Select Year First");
        } else {
            this.props.filterData(this.yearFilter, this.launchFilter, this.landFilter)
        }
    }

    resetFilter = _ => {

        const selctedFilter = document.querySelectorAll('button.filter-button-active');
        selctedFilter && selctedFilter.forEach((elem) => {
            elem.classList.remove('filter-button-active');
        })
        this.launchFilter = null;
        this.landFilter = null;
        this.yearFilter = null;
        this.props.filterData();

    }

    clickHandleYear = e => {
        if (this.yearFilter !== e.target.value) {
            let prevSelected = document.querySelector('button[filtertype="year"].filter-button-active')
            prevSelected && prevSelected.classList.remove('filter-button-active')
            e.target.classList.add('filter-button-active')
            this.yearFilter = e.target.value;
            this.filterData();
        }
    }

    clickHandleLaunchFilter = e => {

        let newFilter;
        if (e.target.value === "launch_success_true") {
            newFilter = true
        } else {
            newFilter = false;
        }

        if (newFilter !== this.launchFilter && this.yearFilter) {
            let prevSelected = document.querySelector('button[filtertype="launch"].filter-button-active')
            prevSelected && prevSelected.classList.remove('filter-button-active')
            e.target.classList.add('filter-button-active')
            this.launchFilter = newFilter;
        } else {
            let prevSelected = document.querySelector('button[filtertype="launch"].filter-button-active')
            prevSelected && prevSelected.classList.remove('filter-button-active')
            this.launchFilter = null;
        }

        this.filterData();

    }

    clickHandleLandFilter = e => {

        let newFilter;
        if (e.target.value === "land_success_true") {
            newFilter = true
        } else {
            newFilter = false;
        }

        if (newFilter !== this.landFilter && this.yearFilter) {
            let prevSelected = document.querySelector('button[filtertype="land"].filter-button-active')
            prevSelected && prevSelected.classList.remove('filter-button-active')
            e.target.classList.add('filter-button-active')
            this.landFilter = newFilter;
        } else {
            let prevSelected = document.querySelector('button[filtertype="land"].filter-button-active')
            prevSelected && prevSelected.classList.remove('filter-button-active')
            this.landFilter = null;
        }

        this.filterData()

    }

    renderYearFilter = _ => {
        return (
            <Container fluid>
                <p className="d-flex justify-content-center filter-year-text">Launch Year</p>
                <Row md={12} sm={12}>
                    {this.years.map((year, index) => {
                        return <Col xs={6} sm={6} md={6}>
                            <Button key={index} filtertype={"year"} onClick={this.clickHandleYear} value={year} key={year} className={`filter-button year-button ${index%2!==0 ? 'button-right' : ''}`}>{year}</Button>
                        </Col>
                    })}
                </Row>
            </Container>
        )
    }

    renderLaunchFilter = _ => {
        return (
            <Container fluid>
                <p className="filter-p-text d-flex justify-content-center">Successful Launch</p>
                <Row>
                    <Col xs={6} sm={6} md={6}><Button data-toggle="toggle" filtertype={"launch"} onClick={this.clickHandleLaunchFilter} value={"launch_success_true"} className="filter-button">True</Button></Col>
                    <Col xs={6} sm={6} md={6}><Button data-toggle="toggle" filtertype={"launch"} onClick={this.clickHandleLaunchFilter} value={"launch_success_false"} className="filter-button button-right">False</Button></Col>
                </Row>
            </Container>
        )
    }

    renderLandFilter = _ => {
        return (
            <Container fluid>
                <p className="filter-p-text d-flex justify-content-center">Successful Landing</p>
                <Row>
                    <Col xs={6} sm={6} md={6}><Button data-toggle="toggle" filtertype={"land"} onClick={this.clickHandleLandFilter} value={"land_success_true"} className="filter-button">True</Button></Col>
                    <Col xs={6} sm={6} md={6}><Button data-toggle="toggle" filtertype={"land"} onClick={this.clickHandleLandFilter} value={"land_success_false"} className="filter-button button-right">False</Button></Col>
                </Row>
            </Container>
        )
    }

    renderResetFilter = _ => {

        return (
            <Container fluid>
                <p className="filter-p-text d-flex justify-content-center">Reset Filter</p>
                <Col className="container d-flex justify-content-center">
                    <Button onClick={this.resetFilter} className="filter-button">Reset</Button>
                </Col>
            </Container>
        )

    }

    render() {
        return (
            <React.Fragment>
                <Container fluid className="filter-container">
                    <span className="filter-text">Filters</span>
                    {this.renderYearFilter()}
                    {this.renderLaunchFilter()}
                    {this.renderLandFilter()}
                    {this.renderResetFilter()}
                </Container>

            </React.Fragment>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        filterData: (year, lauchSuccess, landSuccess) => {
            dispatch(FilterData(year, lauchSuccess, landSuccess))
        },
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);