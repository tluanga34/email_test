import React, { Component } from 'react';
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import moment from "moment";
import "./EmailListCard.scss";

export default class EmailListCard extends Component {

  constructor(props) {
    super();
    this.emailClicked = this.emailClicked.bind(this);
  }

  emailClicked(){
    console.log("email clicked");
    if(this.props.onSelect) {
      let returnItem = {...this.props}
      delete returnItem.onSelect
      this.props.onSelect(returnItem)
    }
  }

  render() {
    return (
      <div className={`email-list-card ${(this.props.selected)?'selected':''}`} onClick={this.emailClicked}>
        <div className="profile-section">
          <ProfilePhoto name={this.props.from.name}/>
        </div>
        <div className="body-section">
          <div className="field-group">
            <label className="label">From:</label>
            <h4 className="field-value">{this.props.from.name} {this.props.from.email}</h4>
          </div>
          <div className="field-group">
            <label className="label">Subject:</label>
            <h4 className="field-value">{this.props.subject}</h4>
          </div>
          <div>
            <p className="description">{this.props.short_description}</p>
            <p className="date">{moment(this.props.date).format("DD/MM/YYYY hh:mma")}</p>
          </div>
        </div>
      </div>
    )
  }
}