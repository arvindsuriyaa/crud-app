import React, { Component } from 'react';
import Header from './Header';
import "../common/commonStyle.css";

class Layout extends Component{
  render() {
      console.log(this.props)
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
};

export default Layout;