import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FilterData, ShowLoader } from './FilterContainer_Action';
import '../../styles/FilterContainer/FilterContainer.css';

/**
 * @description Component Renders the Filter Structure UI
 */
class FilterContainer extends React.Component {

    launchFilter = null;
    landFilter = null;
    yearFilter = null;
    years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];

    /**
     * @description Function will initiate dispatcher action to fetch the filter data from api 
     */
    filterData = _ => {
        if (!this.yearFilter) {
            alert("Select Year First");
        } else {
            this.props.showLoader(true);
            this.props.filterData(this.yearFilter, this.launchFilter, this.landFilter)
        }
    }
    
    /**
     * @description Function will reset the Screen with initial data
     */
    resetFilter = _ => {

        const selctedFilter = document.querySelectorAll('button.filter-button-active');
        selctedFilter && selctedFilter.forEach((elem) => {
            elem.classList.remove('filter-button-active');
        })
        this.launchFilter = null;
        this.landFilter = null;
        this.yearFilter = null;
        this.props.showLoader(true);
        this.props.filterData();

    }
    /**
     * @description Click Handler for year filter 
     * @param {*} e Event Object
     */
    clickHandleYear = e => {
        if (this.yearFilter !== e.target.value) {
            let prevSelected = document.querySelector('button[filtertype="year"].filter-button-active')
            prevSelected && prevSelected.classList.remove('filter-button-active')
            e.target.classList.add('filter-button-active')
            this.yearFilter = e.target.value;
            this.filterData();
        }
    }

    /**
     * @description Click Handler for launch filter 
     * @param {*} e Event Object
     */
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

    /**
     * @description Click Handler for land filter 
     * @param {*} e Event Object
     */
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

    /**
     * @description Function will return Year Filter jsx 
     */
    renderYearFilter = _ => {
        return (
            <Container fluid>
                <p className="d-flex justify-content-center filter-year-text">Launch Year</p>
                <Row md={12} sm={12}>
                    {this.years.map((year, index) => {
                        return <Col key={index} xs={6} sm={6} md={6}>
                            <Button filtertype={"year"} onClick={this.clickHandleYear} value={year} className={`filter-button year-button ${index % 2 !== 0 ? 'button-right' : ''}`}>{year}</Button>
                        </Col>
                    })}
                </Row>
            </Container>
        )
    }

    /**
     * @description Function will return Launch Filter jsx 
     */
    renderLaunchFilter = _ => {
        return (
            <Container fluid>
                <p className="filter-p-text d-flex justify-content-center">Successful Launch</p>
                <Row>
                    <Col key={1} xs={6} sm={6} md={6}><Button data-toggle="toggle" filtertype={"launch"} onClick={this.clickHandleLaunchFilter} value={"launch_success_true"} className="filter-button">True</Button></Col>
                    <Col key={2} xs={6} sm={6} md={6}><Button data-toggle="toggle" filtertype={"launch"} onClick={this.clickHandleLaunchFilter} value={"launch_success_false"} className="filter-button button-right">False</Button></Col>
                </Row>
            </Container>
        )
    }

    /**
     * @description Function will return Land Filter jsx 
     */
    renderLandFilter = _ => {
        return (
            <Container fluid>
                <p className="filter-p-text d-flex justify-content-center">Successful Landing</p>
                <Row>
                    <Col key={1} xs={6} sm={6} md={6}><Button data-toggle="toggle" filtertype={"land"} onClick={this.clickHandleLandFilter} value={"land_success_true"} className="filter-button">True</Button></Col>
                    <Col key={2} xs={6} sm={6} md={6}><Button data-toggle="toggle" filtertype={"land"} onClick={this.clickHandleLandFilter} value={"land_success_false"} className="filter-button button-right">False</Button></Col>
                </Row>
            </Container>
        )
    }

    /**
     * @description Function will return Reset Filter jsx 
     */
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
        showLoader: (value) => {
            dispatch(ShowLoader(value));
        }
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);