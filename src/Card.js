import React from 'react'

class Card extends React.Component {
    render() {
        const { avatar_url, name, location, bio} = this.props.userData
        return (
            <div className="body">
                <h1>User Card Data</h1>
                <div className="container">
                    <img src={avatar_url} alt="profile"/>
                    <div className="text">
                        <p>Name: {name}</p>
                        <p>Location: {location}</p>
                        <p>Bio: {bio}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card