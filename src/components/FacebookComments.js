import React, { Component} from 'react';
import { FacebookProvider, Comments } from 'react-facebook';
 
export default class FacebookComments extends Component {
  render() {
    return (
      <FacebookProvider appId="834127516993991">
        <Comments href="http://www.facebook.com" />
      </FacebookProvider>
    );
  }
}