import React, { Component } from 'react';


// components
import Features from './features'

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
                console.log(json);
                this.setState({
                    home: json
                });
            }
        );
        
    }
    render() {
        return (
            <div>
                <Features sliderData={this.state.home.slider}></Features>
            </div>

        )
    }
}

export default Home;
