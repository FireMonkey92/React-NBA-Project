import React, { Component } from 'react';
import OpenApp from "react-open-app";
import { browserName } from 'react-device-detect';

// components
// import Featured from './Featured';
// import Subscription from './subscription';
// import Blocks from './blocks'
// import Polls from './poll'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: '',
        }
    }

    componentDidMount() {
    }
    render() {

        return (
            <div>

                <OpenApp
                    href={'https://play.google.com/store/apps/details?id=com.sugamvyapparaggregators.sugamvyapparTest'}>
                    open Android
                </OpenApp>
                <hr />
                <OpenApp
                    href={'https://apps.apple.com/in/app/sygamvyappar/id1522412254'}>
                    open IOS
                </OpenApp>
                <hr />
                <a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.sugamvyapparaggregators.sugamvyapparTest" target="_blank">Adndroid App Direct Link</a>
                <hr />
                <a rel="noopener noreferrer" href="https://apps.apple.com/in/app/sygamvyappar/id1522412254" target="_blank">IOS App Direct Link</a>
                <hr />
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

