import React from 'react';
import ReactDOM from 'react-dom';
import SocialContent from '../social-content/social-content';
import SocialHeader from '../social-header/social-header';
import SocialFooter from '../social-footer/social-footer';

import './social-wrapper.scss';

class SocialWrapper extends React.Component {

  constructor () {
    super();
  }
  
  render () {
    return (
      <div className="dll-grid__col dlc-card dlc-card--centered-child dlu-space--m-bottom58 dlu-space--m-top16">
        <div className="dlc-card__container dlc-card--single">
          <SocialHeader avatar={this.props.person.avatar} name={this.props.person.name}></SocialHeader>
          <SocialContent bio={this.props.person.bio}></SocialContent>
          <SocialFooter social={this.props.person.social}></SocialFooter>
        </div>
      </div>
    );
  }
}

export default SocialWrapper;
