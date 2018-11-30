import React, { Component } from 'react'


const URl_Email = 'http://localhost:3004/subcriptions';
export default class Subscription extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            error: false,
            success: false
        }
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
                success: false
            })
        }, 4000);
    }

    handleSubmitEvent = (event) => {
        // debugger        
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if (regex.test(email)) {
            this.saveSubscription(email);

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
                    success: true
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
