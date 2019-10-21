import React from 'react';
import ReactDOM from 'react-dom';
import SocialWrapper from '../social/social-wrapper/social-wrapper';

import '../../assets/style/style.css';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    const post = {
      "token": "IizGK93XaU2IK9Mp0_u2XA",
      "data": {
        "email": "internetEmail",
        "name": {
          "first_name": "nameFirst",
          "last_name": "nameLast",
          "nickname": "personNickname",
        },
        "avatar": "personAvatar",
        "gender": "personGender",
        "bio": "stringLong",
        "social": {
          "facebook": "stringDigits",
          "twitter": "stringDigits",
          "instagram": "stringDigits",
        },
        "_repeat": 30,
        "last_login": {
          "date_time": "dateTime|UNIX",
          "ip4": "internetIP4"
        }
      }
    };

    fetch('https://app.fakejson.com/q', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(response =>  response.json())
    .then((data) => {
      console.log(data);
      this.setState({people: data});
    })
    .catch((error) => {
      this.setState({people: 'we had an error ' + error});
    });
  }

  render () {
    return (
      <main className="dll-grid dll-grid__row--auto full-height dll-grid--align-center">
        {this.state.people.map((personData, index) => {
          return <SocialWrapper person={personData} id={index}></SocialWrapper>
        })}
      </main>
    );
  }
}

export default App;
 