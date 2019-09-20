import React from 'react';
import Logo from './Logo';
import './App.css';
import Preferences from './Preferences';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      preferences: {
        logoColor: 'salmon',
        companyName: ''
      }
    }
  }

  setColor (color) {
    this.setState((state) => (
      {preferences: {...state.preferences, color: color}}
      )
    ) /// Deze functie returned de verandering met de nieuwe preferences, omdat we
      /// meerdere eigenschappen in Preferences beheren.
      /// Maar als we niet de rest van de preferences doorpassen, zijn we de kleur kwijt

      /// Probeer onderstaande maar eens:
      ///this.setState({preferences: {color: color}})  }
  }
  
  setCompanyName (companyName) {
    this.setState((state) => (
      {preferences: {...state.preferences, companyName: companyName}}
      )
    ) /// Deze functie returned de verandering met de nieuwe preferences, omdat we
      /// meerdere eigenschappen in Preferences beheren.
      /// Maar als we niet de rest van de preferences doorpassen, zijn we de kleur kwijt

      /// Probeer onderstaande maar eens:
      ///this.setState({preferences: {companyName: companyName}})
  }

  render () {

    const boundSetColor = (c) => this.setColor(c)
    const setCompanyName = this.setCompanyName.bind(this)
    return <div className="App">
      <Logo logoColor={this.state.preferences.logoColor} companyName={this.state.preferences.companyName} />
      <Preferences
        preferences={this.state.preferences}
        setColor={boundSetColor}
        setCompanyName={setCompanyName}
      />
    </div>
  }
}

export default App;
