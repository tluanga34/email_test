import React, { Component } from 'react';
import EmailListCard from "../../components/EmailListCard/EmailListCard";
import EmailBodyCard from "../../components/EmailBodyCard/EmailBodyCard";
import axios from "axios"
import "./Home.scss";

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      emails: []
    }
    this.getEmailDetails = this.getEmailDetails.bind(this);
  }


  componentWillMount() {
    axios.get("https://flipkart-email-mock.now.sh").then(({ data }) => {
      console.log("data");
      console.log(data);
      this.setState({
        emails: data.list
      })
    })
  }


  getEmailDetails(email) {
    console.log("get email details ", email);
    axios.get("https://flipkart-email-mock.now.sh", { params: { id: email.id } }).then(({ data }) => {
      this.setState({...this.state, selectedEmail : {...data, ...email}})
    })
    console.log("this.state");
    console.log(this.state);
  }


  render() {

    let emails = this.state.emails;

    return (
      <div className={`home ${this.state.selectedEmail? 'detail-view':''}`}>
        <div className="home-email-list">
          {emails.map((email, index) => <EmailListCard className="email" key={index} {...email} onSelect={this.getEmailDetails} />)}
        </div>
        <div className="email-body">
          {(this.state.selectedEmail)?<EmailBodyCard {...this.state.selectedEmail}/>:''}
        </div>
      </div>
    )
  }
}