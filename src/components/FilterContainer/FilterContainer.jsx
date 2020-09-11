import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FilterData, ResetFilter } from './FilterContainer_Action';
import '../../styles/FilterContainer/FilterContainer.css';

class FilterContainer extends React.Component {

    constructor(props){
        super(props);
        this.launchFilter = null;
        this.landFilter = null;
        this.yearFilter = null;
        this.years = [["2006","2007"],["2008","2009"],["2010","2011"],["2012","2013"],["2014","2015"],["2016","2017"],["2018","2019"],["2020"]]
    }

    filterData= _ => {
        if(!this.yearFilter){
            alert("Select Year First");
        } else{
            this.props.filterData(this.yearFilter,this.launchFilter,this.landFilter)
        }
    }

    resetFilter= _ => {

        const selctedFilter = document.querySelectorAll('button.filter-button-active');
        selctedFilter && selctedFilter.forEach((elem)=>{
            elem.classList.remove('filter-button-active');
        })
        this.launchFilter= null;
        this.landFilter=null;
        this.yearFilter=null;
        this.props.filterData();

    }

    clickHandleYear = e => {
        if(this.yearFilter !== e.target.value){
            let prevSelected = document.querySelector('button[filtertype="year"].filter-button-active')
            prevSelected && prevSelected.classList.remove('filter-button-active')
            e.target.classList.add('filter-button-active')
            this.yearFilter = e.target.value;
            this.filterData();
        }
    }

    clickHandleLaunchFilter = e => {

        let newFilter;
        if(e.target.value === "launch_success_true"){
            newFilter = true
        } else {
            newFilter = false;
        }
            
        if(newFilter !== this.launchFilter && this.yearFilter){
            let prevSelected = document.querySelector('button[filtertype="launch"].filter-button-active')
            prevSelected && prevSelected.classList.remove('filter-button-active')
            e.target.classList.add('filter-button-active')
            this.launchFilter =  newFilter;
        } else {
            let prevSelected = document.querySelector('button[filtertype="launch"].filter-button-active')
            prevSelected && prevSelected.classList.remove('filter-button-active')
            this.launchFilter =  null;
        }

        this.filterData();

    }

    clickHandleLandFilter = e => {

        let newFilter;
        if(e.target.value === "land_success_true"){
            newFilter = true
        } else {
            newFilter = false;
        }

        if(newFilter !== this.landFilter && this.yearFilter){
            let prevSelected = document.querySelector('button[filtertype="land"].filter-button-active')
            prevSelected && prevSelected.classList.remove('filter-button-active')
            e.target.classList.add('filter-button-active')
            this.landFilter =  newFilter;
        } else {
            let prevSelected = document.querySelector('button[filtertype="land"].filter-button-active')
            prevSelected && prevSelected.classList.remove('filter-button-active')
            this.landFilter =  null;
        }

        this.filterData()

    }

    renderYearFilter = _ => {
        return (
            <div className="container">
                <p className="d-flex justify-content-center filter-year-text">Launch Year</p>
                {this.years.map((years,index)=>{
                    return <div key={index} className="conatiner button-container">
                        <Button filtertype={"year"} onClick={this.clickHandleYear} value={years[0]} key={years[0]} className="filter-button">{years[0]}</Button>
                        {years[1] && <Button filtertype={"year"} onClick={this.clickHandleYear} value={years[1]} key={years[1]} className="filter-button button-right">{years[1]}</Button>}
                     </div>
                })}
            </div>
        )
    }

    renderLaunchFilter = _ => {
        return (
            <div className="container">
                <p className="filter-p-text d-flex justify-content-center">Successful Launch</p>
                <div className="container button-container">
                    <Button data-toggle="toggle" filtertype={"launch"} onClick={this.clickHandleLaunchFilter} value={"launch_success_true"} className="filter-button">True</Button>
                    <Button data-toggle="toggle" filtertype={"launch"}  onClick={this.clickHandleLaunchFilter} value={"launch_success_false"} className="filter-button button-right">False</Button>
                </div>
                <p className="filter-p-text d-flex justify-content-center">Successful Landing</p>
                <div className="container button-container">
                    <Button data-toggle="toggle" filtertype={"land"}  onClick={this.clickHandleLandFilter} value={"land_success_true"} className="filter-button">True</Button>
                    <Button data-toggle="toggle" filtertype={"land"}  onClick={this.clickHandleLandFilter} value={"land_success_false"} className="filter-button button-right">False</Button>
                </div>
            </div>)
    }

    renderResetFilter = _ =>{

        return (
            <div className="container">
                <p className="filter-p-text d-flex justify-content-center">Reset Filter</p>
                <div className="container button-container">
                    <Button onClick={this.resetFilter} className="filter-button reset-button-filter">Reset</Button>
                </div>
            </div>
        )

    }

    render() {
        return (
            <React.Fragment>
                <div className="container filter-container ">
                    <span className="filter-text">Filters</span>
                    {this.renderYearFilter() }
                    {this.renderLaunchFilter()}
                    {this.renderResetFilter()}
                </div>

            </React.Fragment>
        )
    }

}

const mapDispatchToProps = dispatch =>{
    return {
        filterData : (year,lauchSuccess,landSuccess)=>{
            dispatch(FilterData(year,lauchSuccess,landSuccess))
        },
    }
}

const mapStateToProps = state => {
    return {}
 }

export default connect(mapStateToProps,mapDispatchToProps)(FilterContainer);