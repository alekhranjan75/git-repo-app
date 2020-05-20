import React, { Component } from 'react'
import './Repo.css'
class Repo extends Component {
    render() {
        return (
            <div className = "Repo">
                <a href = {this.props.url} className = "A"><h2> 📕 {this.props.name}</h2></a>
                <p>Description: {this.props.description}</p>
                <p>🔵 {this.props.language}</p>
                <p>🍽 {this.props.forks}</p> 
                <p>★ {this.props.stars}</p>
            </div>
        )
    }
}

export default Repo;