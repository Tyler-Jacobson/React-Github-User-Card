import React from 'react'

class Friend extends React.Component {
    render() {
        const { avatar_url, login } = this.props.follower
        return (
            <div className="friendCard">
                <img src={avatar_url} alt="profile"/>
                <p>Username: {login}</p>
            </div>
        )
    }
}

export default Friend