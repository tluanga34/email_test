import React, { Component } from 'react';
import "./ProfilePhoto.scss"

export default class ProfilePhoto extends Component {
  render(){
    return (
    <div className="profile-photo">{this.props.name.charAt(0)}</div>
    );
  }
}