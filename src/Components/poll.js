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
        fetch(`${URL_HOME}?poll=true&_sort=count&_order=desc`, {
            method: 'GET'
        }).then(res => res.json())
            .then(json => {
                // console.log(json);
                this.setState({
                    pollTeams: json
                });
            });
    };

    componentDidMount() {
        this.fetchPolls();
    }

    addVote=(votes, index)=>{
        fetch(`${URL_HOME}/${index}` , {
            method: 'PATCH',
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({count: votes + 1})
        }).then(()=>{
            this.fetchPolls();
        })
        
    }

    randerPolls(){
        const position = ['1ST','2ND','3RD'];
        if (this.state.pollTeams) {
            return this.state.pollTeams.map((item,index) => {
                return (
                    <div key={item.id} className='poll_items' onClick={()=>this.addVote(item.count, item.id)}>
                        <img alt={item.name} src={`/images/teams/${item.logo}`} />
                        <h4>{position[index]}</h4>
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
