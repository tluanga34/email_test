import React, { Component } from 'react';
import parse from 'html-react-parser';
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import moment from "moment"
import "./EmailBodyCard.scss"

export default class EmailBodyCard extends Component {

  constructor(props) {
    super();
    console.log("props");
    console.log(props);
  }

  render() {
    return (
      <div className="email-body-card">
        <div className="profile-section">
          <ProfilePhoto name={this.props.from.name} />
        </div>
        <div className="body-section">
          <h3 className="email-subject">{this.props.subject}</h3>
          <p className="date">{moment(this.props.date).format("DD/MM/YYYY hh:mma")}</p>
          <p>{parse(this.props.body)}</p>
        </div>
      </div>
    )
  }
}