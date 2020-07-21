import React, { Component } from 'react';
// import OpenApp from "react-open-app";
import { getAndroidDeepLink, getIOSDeepLink } from "url-to-deep-link";
import { browserName } from 'react-device-detect';

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
            home: '',
            xgetAndroidDeepLink: getAndroidDeepLink('https://www.instagram.com/p/tanesh018'),
            xgetIOSDeepLink: getIOSDeepLink('https://apps.apple.com/us/app/id1161699021')
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

        console.log('xgetAndroidDeepLink', this.state.xgetAndroidDeepLink);
        console.log('xgetIOSDeepLink', this.state.xgetIOSDeepLink);
        return (
            <div>

                {/* <OpenApp
                    href="https://play.google.com/store/apps/details?id=com.svaggregators.sugamvyapparTest&hl=en-GB&ah=WjGCjlrefAiZhXStWnLdS0Td6SQ">
                    Android App
                </OpenApp>
                <hr />


                <OpenApp
                    href={this.state.xgetAndroidDeepLink}>
                    open insta
                </OpenApp> */}
                {/* 

                <hr />

                <OpenApp
                    href="https://www.instagram.com/p/tanesh018"
                    android={this.state.xgetAndroidDeepLink}>
                    Insta Link
                </OpenApp>

                <div className="link" onClick={(e) => {
                    const _this = this.state
                    setTimeout(function () {
                        window.location.replace(_this.xgetAndroidDeepLink);
                    }, 1000);
                }}>
                    Check DeepLink Click
                </div> */}


                {/* <br />
                <a rel="noopener noreferrer" href="https://helenzys.com" target="_blank">helensys.com _blank </a>
                <br />
                <a rel="noopener noreferrer" href="market://details?id=com.helensys.biomag" target="_self">com.helensys.biomag _self</a>
                <br />
                <a rel="noopener noreferrer" href="market://details?id=com.helensys.biomag" target="">com.helensys.biomag</a>
                <br />
                <a rel="noopener noreferrer" href="market://details?com.vmoksha.biomag.3D.prod" target="_blank">com.vmoksha.biomag.3D.prod</a>
                <br />
                <br />
                <a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.helensys.biomag" target="_blank">FROM BROWSER LINK com.helensys.biomag</a>
                <br />
                <a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.vmoksha.biomag.3D.prod" target="_blank" >FROM BROWSER LINK com.vmoksha.biomag.3D.prod</a>
                <br /> */}
                {/* BrowserName :  {browserName} */}
                {/* <Featured Slides={this.state.home.slider}></Featured>
                <Subscription></Subscription>
                <Blocks blocks={this.state.home.blocks}/>
                <Polls/> */}

                <button onClick={() => {
                    window.open('http://google.com', `_parent`)
                }}>
                    REDIRECT _parent
                </button>
                <button onClick={() => {
                    // window.location = 'http://www.google.com';
                    window.open('http://google.com', `_top`)
                }}>
                    REDIRECT _self
                </button>
                BrowserName :  {browserName}
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

