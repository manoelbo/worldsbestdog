import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="background">
         <Link to="/donate">
            <Button type="primary">Hello World</Button>
        </Link>
      </div>
    );
  }
}


export default Home;
