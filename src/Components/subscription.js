import React, { Component } from 'react'


const URl_Email = 'http://localhost:3004/subcriptions';
export default class Subscription extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            error: false,
            success: false,
            isduplicate: false,
            prevEmails: []
        }
    }
    componentWillMount() {
        //debugger
        var ar = [];
        fetch(URl_Email, {
            method: 'GET'
        }).then(res => res.json())
            .then((json) => {
                this.setState({
                    prevEmails: json
                })
            })
    }


    catchOnChangeInput = (event) => {
        this.setState({
            email: event.target.value
        }, () => {
            // console.log(this.state.email)
            // call back function
        });
        //debugger
    }


    clearMessages = () => {
        //without ES6
        // setTimeout(function () {
        //     this.setState({
        //         error: false,
        //         success: false
        //     })
        // }.bind(this), 5000);

        // with ES6
        setTimeout(() => {
            this.setState({
                error: false,
                success: false,
                isduplicate: false
            })
        }, 4000);
    }


    checkIsDuplicate = (e) => {
        //debugger
        var data = [];
        var prevEmails = this.state.prevEmails
        console.log(prevEmails);

        prevEmails.map((item) => {
            data.push(item.email);
        });

        if (data.indexOf(e) === -1) {
            this.setState({
                isduplicate : false
            });
            return false
        }
        else if (data.indexOf(e) >= 0) {
            this.setState({
                isduplicate : true
            });
            return true
        }
    }
    handleSubmitEvent = (event) => {
        //debugger
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;
        
        //function to set state of isduplicate
        if (regex.test(email)) {
            if (this.checkIsDuplicate(email)) {
                console.log('Please Enter Uniqe Email Address');
            } else {
                console.log('Unique')
                this.saveSubscription(email);
            }
        }
        else {
            this.setState({
                error: true
            })
        }
        this.clearMessages();
    }

    saveSubscription = (email) => {
        fetch(URl_Email, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        }).then(res => res.json)
            .then(() => {
                this.setState({
                    email: '',
                    success: true,
                    isduplicate: false
                });
            })
    }
    render() {
        return (
            <div className="subscribe_panel">
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmitEvent}>
                        <input type='text' placeholder="yourEmail@email.com" value={this.state.email}
                            onChange={e => this.catchOnChangeInput(e)} />
                        <div className={this.state.error ? 'error show' : 'error'}>Check Your Email Address</div>
                        <div className={this.state.success ? 'success show' : 'success'}>Thank You</div>
                        <div className={this.state.isduplicate ? 'subscribed show' : 'subscribed'}>This Email Address is already subscribed </div>
                        
                    </form>

                </div>
                <small>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos optio molestiae itaque,
                    necessitatibus reiciendis nemo cupiditate a consequuntur. Sit, dolorem.
                </small>

            </div>
        )
    }
}

// Class that handles the error on Fetch Statement
export class FetchError extends Error {
    constructor(orig) {
        super(orig);
        this.message = "Fetch Error";
        // this.details = orig;
        console.log(this.message + " " + orig);
    }
}
