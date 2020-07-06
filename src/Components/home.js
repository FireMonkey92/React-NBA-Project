import React, { Component } from 'react';
import OpenApp from "react-open-app";

// components
// import Featured from './Featured';
// import Subscription from './subscription';
// import Blocks from './blocks'
// import Polls from './poll'


const API_URL_HOME = "http://localhost:3004/home";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: ''
        }
    }

    componentDidMount() {
        fetch(API_URL_HOME, {
            method: 'GET'
        })
            .then(responce => responce.json())
            .then(json => {
                //console.log(json);
                this.setState({
                    home: json
                });
            }
            ).catch(err => new FetchError(err));
    }
    render() {
        return (
            <div>

                <OpenApp
                    href="https://play.google.com/store/apps/details?id=com.helensys.biomag"
                    android="intent://path/#Intent;scheme=biomag;package=com.helensys.biomag"
                >
                    Android App
                </OpenApp>
                <hr />
                <OpenApp
                    href="https://apps.apple.com/us/app/id1161699021">
                    IOS App
                </OpenApp>

                <hr />

                <OpenApp
                    href="https://www.instagram.com/tanesh018">
                    Insta Link
                    </OpenApp>


                {/* 
                <br />
                <a rel="noopener noreferrer" href="market://details?id=com.helensys.biomag" target="_blank">com.helensys.biomag</a>
                <br />
                <a rel="noopener noreferrer" href="market://details?com.vmoksha.biomag.3D.prod" target="_blank">com.vmoksha.biomag.3D.prod</a>
                <br />
                <br />
                <a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.helensys.biomag" target="_blank">FROM BROWSER LINK com.helensys.biomag</a>
                <br />
                <a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.vmoksha.biomag.3D.prod" target="_blank" >FROM BROWSER LINK com.vmoksha.biomag.3D.prod</a> */}

                {/* <Featured Slides={this.state.home.slider}></Featured>
                <Subscription></Subscription>
                <Blocks blocks={this.state.home.blocks}/>
                <Polls/> */}
            </div>
        )
    }
}
export default Home;


// Class that handles the error on Fetch Statement
export class FetchError extends Error {
    constructor(orig) {
        super(orig);
        this.message = "Fetch Error";
        // this.details = orig;
        console.log(this.message + " " + orig);
    }
}

