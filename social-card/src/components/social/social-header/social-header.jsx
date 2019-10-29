import React from 'react';
import ReactDom from 'react-dom';

class SocialHeader extends React.Component {
  render () {
    console.log(this.props.name);
    const name = this.props.name;
    return (
      <header className="dlc-card__header dlu-space--p-v16" style={{ 
        backgroundImage: `url(${this.props.avatar})`, 
        backgroundSize: 'contain', 
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat'
        }} >
        <h1>{this.props.name.nickname}</h1>
        <div>{name.first_name} {name.last_name}</div>
      </header>
    );
  }
}

export default SocialHeader;