import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import MudContainer from './components/MudContainer';
import SignupForm from './components/SignupForm';


class App extends Component {
  render() {
    return (
      <div>
       <SignupForm />
      </div>
    );
  }
}

export default App;
