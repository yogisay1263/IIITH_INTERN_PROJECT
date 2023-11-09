import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Hello from Class Component</h1>
        <p>This is a simple class component.</p>
      </div>
    );
  }
}

export default ClassComponent;

