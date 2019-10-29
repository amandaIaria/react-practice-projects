

class FakeApi {
  constructor() {
    this.static = [{
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
    }];

    this.token = {
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
  }

  getAPI() {
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
      this.setState({people: data});
    })
    .catch((error) => {
      this.setState({error: ['There was an error', error, noPost]});
    });
  }
}
