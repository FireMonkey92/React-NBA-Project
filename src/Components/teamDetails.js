import React, { Component } from 'react';


const URL_TEAMs = 'http://localhost:3004/teams'
class TeamDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team : []
        }
    }

    componentDidMount(){
        fetch(`${URL_TEAMs}?name=${this.props.match.params.id}`,{
            method:'GET'
        }).then(res=>res.json())
        .then(json=>{
            this.setState({
                team: json
            })
        }).then(json=>{
            console.log(this.state.team)
        })
    }

    renderSquad=(squad)=>{
        return squad.map((item,index)=>{
            return(
                <div className='item player_wrapper' key={index}>
                <img alt={item.name} src={`/images/avatar.png`}/>
                <h4>{item.name}</h4>
                <div className="node">
                    <span>Number: </span>{item.number}
                </div>
                <div className="node">
                <span>PPG: </span>{item.PPG}
                </div>
                <div className="node">
                <span>APG: </span>{item.APG}
                </div>
                <div className="node">
                <span>RPG: </span>{item.RPG}
                </div>
                </div>      
            )
        })
    }

    renderTeamDetails=(team)=>{
        return team.map((item)=>{
            return(
                <div key={item.id} className='team_detail_wrapper'>
                    <div className='left'>
                        <img alt={item.name} src={`/images/teams/${item.logo}`} />
                    </div> 
                    <div className='right'>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <hr/>
                        <div className='squad'>
                                {this.renderSquad(item.squad)}
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='teamDetails'>
            {this.renderTeamDetails(this.state.team)}      
            </div>
        );
    }
}

export default TeamDetails;