import React, { Component } from 'react';
// components
import Featured from './Featured';
import Subscription from './subscription';
import Blocks from './blocks'
import Polls from './poll'

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
                <Featured Slides={this.state.home.slider}></Featured>
                <Subscription></Subscription>
                <Blocks blocks={this.state.home.blocks}/>
                <Polls/>
            </div>
        )
    }
}
export default Home;


// Class that handles the error on Fetch Statement
export class FetchError extends Error {
    constructor(orig){
        super(orig);
        this.message = "Fetch Error";
        // this.details = orig;
        console.log(this.message + " " + orig);
    }
}

