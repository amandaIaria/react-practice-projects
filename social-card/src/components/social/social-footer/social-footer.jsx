import React from 'react';
import ReactDom from 'react-dom';

class SocialFooter extends React.Component {
  constructor() {
    super();
  }

  render () {
    const social = this.props.social;
    return (
      <div className="dlc-card__footer dlu-space--p-v24">
        <a href="http://www.facebook.com/{social.facebook}">FaceBook</a> |&nbsp;
        <a href="http://www.twitter.com/{social.twitter}">Twitter</a> |&nbsp;
        <a href="http://www.instagram.com/{social.instagram}">Instagram</a>
      </div>
    );
  }
}

export default SocialFooter;