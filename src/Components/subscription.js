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
            flag: false
        }
    }
    componentWillMount() {
        //debugger
       
    }


    catchOnChangeInput = (event) => {

        debugger
        this.setState({
            email: event.target.value
        }, () => {
            // console.log(this.state.email)
            // call back function
        });
        this.checkIsDuplicate(event.target.value);

        console.log(this.state.flag);
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
                isduplicate: false,
                flag: false
            })
        }, 3000);
    }


    checkIsDuplicate=(e) => {
        //debugger        
        fetch(`${URl_Email}?email=${e}`, {
            method: 'GET'
        }).then(res => res.json())
            .then((json) => {
                
                if(json.length>0){
                    console.log('found')
                    this.setState({
                        flag: true,
                        // isduplicate: true
                    })
                }else{
                    console.log('Not found')
                    this.setState({
                        flag: false,
                        // isduplicate: false
                    })
                }
        })
    }

    handleSubmitEvent = (event) => {
        //debugger
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        //function to set state of isduplicate
        if (regex.test(email)) {
            if (this.state.flag) {
                console.log('Please Enter Uniqe Email Address');
                this.setState({
                    flag: true,
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
                    isduplicate: false,
                    flag: false
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
