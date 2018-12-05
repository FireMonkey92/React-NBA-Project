import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';



const URL_TEAM = "http://localhost:3004/teams";
const fadeAnimation = {
    transitionName: 'fade',
    transitionAppear: true,
    transitionAppearTimeout: 500,
    transitionEnter: true,
    transitionEnterTimeout: 500,
    transitionLeave: true,
    transitionLeaveTimeout: 500
}


class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            filtered: [],
            keywords: []
        };
    }

    componentDidMount() {

        fetch(URL_TEAM, {
            method: 'GET'
        }).then(responce => responce.json())
            .then(json => {
                this.setState({
                    teams: json,
                    filtered: json
                })
            })
        //console.log(this.state.teams)
    }
    searchTeam = (event) =>{
        const keyword = event.target.value;
        
        if(keyword !== ''){
            const list = this.state.teams.filter((item)=>{
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
            })
            this.setState({
                filtered: list,
                keywords:keyword
            })

        }
        else{
            this.setState({
                filtered: this.state.teams,
                keywords: keyword
            })
        }
    }

    renderList = ({ filtered }) => {

        return filtered.map((item) => {
            return (
                <Link to={`/teams/${item.name}`} key={item.id} className='team_item'>
                    <img alt={item.name} src={`/images/teams/${item.logo}`} />
                </Link>
            )
        })
    }

    

    render() {
        return (
            <div className='teams_component'>
                <div className='teams_input'>
                    <input type='text' placeholder='Search for a team' 
                    value={this.state.keywords}
                    onChange={event=>this.searchTeam(event)} />
                </div>
                <div className='teams_container'>

                    <CSSTransitionGroup {...fadeAnimation}>
                        {this.renderList(this.state)}
                    </CSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default Teams;