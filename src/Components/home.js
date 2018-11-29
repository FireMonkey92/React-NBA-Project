import React, { Component } from 'react';
// components
import Featured from './Featured';
import Subscription from './subscription';



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
        );
    }
    render() {
        return (
            <div>
                <Featured Slides={this.state.home.slider}></Featured>
                <Subscription></Subscription>
            </div>
        )
    }
}

export default Home;
