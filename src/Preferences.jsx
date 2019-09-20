import React from 'react'
import App from './App';
import { thisTypeAnnotation } from '@babel/types';

export default class Preferences extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logoColor: props.preferences.logoColor,
      companyName: props.preferences.companyName
    }
  }

  logoColorChangeHandler (event) {
    this.setState({logoColor: event.target.value})
  }

  companyChangeHandler (event) {
    this.setState({companyName: event.target.value})
  }

  onSubmit (event) {
    event.preventDefault();
    this.props.setColor(this.state.logoColor)
    this.props.setCompanyName(this.state.companyName)
    this.clearCompanyName();
  }

  clearCompanyName () {
    this.setState({companyName: ''})
  }

  render() {
    return <form onSubmit={(e) => this.onSubmit(e)}>
      <select onChange={(e) => this.logoColorChangeHandler(e)} value={this.state.logoColor}>
        <option>red</option>
        <option>salmon</option>
        <option>ochre</option>
        <option>seagreen</option>
      </select>
      <input type="text" placeholder="Type the company name" onChange={(e) => this.companyChangeHandler(e)} />
      <input type="submit" value='Save Preferences' />
      <div className={`preview ${this.state.logoColor}`}>Preview for: {this.state.companyName}</div>
    </form>
  }

}