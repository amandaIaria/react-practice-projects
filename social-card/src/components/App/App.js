import React from 'react';
import ReactDOM from 'react-dom';
import SocialWrapper from '../social/social-wrapper/social-wrapper';

import '../../assets/style/style.css';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [{
        "email": "alva@yahoo.com",
        "name": {
          "first_name": "Eugenia",
          "last_name": "Williamson",
          "nickname": "Eugenia.w"
        },
        "avatar": "https://robohash.org/asdf",
        "gender": "male",
        "bio": "Lorem ipsum dolor amet occupy yuccie marfa, mustache quinoa semiotics etsy ramps leggings letterpress biodiesel. Chicharrones drinking vinegar vape, four dollar toast fixie flexitarian street art farm-to-table art party offal cred selfies. Craft beer selfies etsy, franzen dreamcatcher pour-over meggings listicle prism small batch banjo. Authentic keffiyeh hoodie, health goth roof party tattooed ugh farm-to-table meggings asymmetrical sriracha.",
        "social": {
          "facebook": "1234556",
          "twitter": "12345",
          "instagram": "1234567",
        }
      },
      {
        "email": "alva@yahoo.com",
        "name": {
          "first_name": "Eugenia",
          "last_name": "Williamson",
          "nickname": "Eugenia.w"
        },
        "avatar": "https://robohash.org/asdf",
        "gender": "male",
        "bio": "Lorem ipsum dolor amet occupy yuccie marfa, mustache quinoa semiotics etsy ramps leggings letterpress biodiesel. Chicharrones drinking vinegar vape, four dollar toast fixie flexitarian street art farm-to-table art party offal cred selfies. Craft beer selfies etsy, franzen dreamcatcher pour-over meggings listicle prism small batch banjo. Authentic keffiyeh hoodie, health goth roof party tattooed ugh farm-to-table meggings asymmetrical sriracha.",
        "social": {
          "facebook": "1234556",
          "twitter": "12345",
          "instagram": "1234567",
        }
      }],
      error: []
    };
  }

  // componentWillMount() { }

  render () {
    return (
      <main className="dll-grid dll-grid__row--auto full-height dll-grid--align-center">
       {this.state.people.map((personData, index) => <SocialWrapper person={personData} id={index}></SocialWrapper>)}
      </main>
    );
  }
}

export default App;
