import React from 'react';
import ReactDom from 'react-dom';

class SocialContent extends React.Component {

  constructor () {
    super();
  }

  render () {

    return (
      <div className="dlc-card__content dlu-space--m-top16">
        {this.props.bio}
      </div>
    );
  }
}

export default SocialContent;