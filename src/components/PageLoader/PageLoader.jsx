import React from 'react';
import {connect} from 'react-redux';
import LoaderGif from '../../asset/loader.gif'
import '../../styles/PageLoader/PageLoader.css'

/**
 * @description Component Will Render loader on screen during API call
 * @param {*} props 
 */
const PageLoader = props => {
         if(!props.loader) return null;

        return ( 
            <div class="loader-container d-flex justify-content-center">
                <div className="loader">
                    <img src={LoaderGif} />
                </div>
            </div>
         );
}

const mapStateToProps = (state) => ({ loader: state.loader })

export default connect(mapStateToProps)(PageLoader);