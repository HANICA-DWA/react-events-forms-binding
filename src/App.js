import React from 'react';
import Logo from './Logo';
import './App.css';
import Preferences from './Preferences';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      preferences: {
        logoColor: 'salmon'
      }
    }
  }

  setColor (color) {
    this.setState({preferences: {logoColor: color}}, () => {
      console.log(this, this.state)
    })
  }

  render () {

    const boundSetColor = (c) => this.setColor(c)
    return <div className="App">
      <Logo logoColor={this.state.preferences.logoColor} />
      <Preferences preferences={this.state.preferences} setColor={boundSetColor} />
    </div>
  }
}

export default App;
