import React from 'react';
import axios from 'axios'
import './App.css';

import Card from './Card'
import Friend from './Friend'

const userData = {}
const userFollowers = []

const userName = "tyler-jacobson"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: userData,
      userFollowers: userFollowers,
    }
  }

  componentDidMount() {
    console.log("Mounting")
    axios.get(`https://api.github.com/users/${userName}`)
    .then(res => {
      this.setState({
        userData: res.data
      })
    })
    .catch(err => {
      console.log("Catch", err)
      debugger
    })

    axios.get(`https://api.github.com/users/${userName}/followers`)
    .then(res => {
      console.log(res.data)
      this.setState({
        userFollowers: res.data
      })
    })
    .catch(err => {
      debugger
    })
  }


  render() {
    console.log("Rendering")
    return (
      <div className="App-header">
        <Card userData={this.state.userData} />
        <div className="followersContainer">
          <h2>Followers</h2>
          {
            this.state.userFollowers.map(follower => (
              <Friend follower={follower} />
            ))
          }
        </div>
      </div>
    )
  }
}



export default App;
