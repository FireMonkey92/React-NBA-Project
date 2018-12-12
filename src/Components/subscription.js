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
            emails: []
        }
    }

    componentWillMount() {
        fetch(URl_Email, {
            method: 'GET'
        }).then(res => res.json())
            .then((json) => {
                this.setState({
                    emails: json
                })
        })  
    }
    componentDidUpdate(){
        fetch(URl_Email, {
            method: 'GET'
        }).then(res => res.json())
            .then((json) => {
                this.setState({
                    emails: json
                })
        })
    }

    catchOnChangeInput = (event) => {
        //debugger
        this.setState({
            email: event.target.value
        }, () => {
            // console.log(this.state.email)
            // call back function
        });
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
                email:'',
                error: false,
                success: false,
                isduplicate: false
            })
        }, 2000);
    }


    checkIsDuplicate=() => {
        //debugger
        let emails = this.state.emails;
        let email = this.state.email;
        // emails.map((item)=>{
        //     if(item.email == email){
        //         return true;
        //         //break;
        //     }
        // });
        var i;
        debugger
        for(i=0;i<emails.length;i++){
            if(emails[i].email.toLowerCase() === email.toLowerCase()){
                return true;
                // break;
            }
        }
        return false;
    }

    handleSubmitEvent = (event) => {
        //debugger
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if (regex.test(email)) {
            if (this.checkIsDuplicate()) {
                console.log('Please Enter Uniqe Email Address');
                this.setState({
                    isduplicate: true,
                })
            } else {
                console.log('Unique')
                this.saveSubscription(email);
            }
        }
        else {
            this.setState({
                error: true,
                flag:false
            })
        }
        this.clearMessages();
    }

    saveSubscription=(email)=>{
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
