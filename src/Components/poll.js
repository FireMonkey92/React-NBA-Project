import React, { Component } from 'react';

const URL_HOME = 'http://localhost:3004/teams';

class Poll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pollTeams: []
        }
    }
    fetchPolls() {
        fetch(`${URL_HOME}?poll=true&sort=count&_order=desc`, {
            method: 'GET'
        }).then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    pollTeams: json
                });
            });
    };

    componentDidMount() {
        this.fetchPolls();
    }

    randerPolls = () => {

        if (this.state.pollTeams) {
            return this.state.pollTeams.map((item) => {
                return (
                    <div key={item.id} className='poll_items'>
                        <img alt={item.name} src={`/images/teams/${item.logo}`} />
                        <div>{item.count} : Votes</div>
                    </div>
                )
            })
        }


    }
    render() {
        return (
            <div className='home_poll'>
                <h3>Who will be the champion ?</h3>
                <div className='poll_container'>
                    {this.randerPolls()}
                </div>
            </div>
        );
    }
}

export default Poll;
