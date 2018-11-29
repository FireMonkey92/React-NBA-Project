import React, { Component } from 'react'

export default class Subscription extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: ''
        }
    }


    catchOnChangeInput = (event) => {        
        this.setState({
            email: event.target.value
        },()=>{
            console.log(this.state.email)
            // call back function
        });
        //debugger
    }

    handleSubmitEvent = (event) =>{
        event.preventDefault();
        let email = event.target.value;
        let regex = /\S+@\S+\.\S+/;
 
        if(regex.test(email)){
            this.saveSubscription(email);
        }
        else{
                ////
        }

    }

    saveSubscription = (email)=>{
            

    }    

    render() {
        return (
            <div className="subscribe_panel">
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmitEvent}>
                        <input type='text' placeholder="yourEmail@email.com" value={this.state.email}
                            onChange={this.catchOnChangeInput} />
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
