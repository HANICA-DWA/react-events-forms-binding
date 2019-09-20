import React from 'react'
import App from './App';
import { thisTypeAnnotation } from '@babel/types';

export default class Preferences extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logoColor: props.preferences.logoColor
    }
  }

  logoColorChangeHandler (event) {
    this.setState({logoColor: event.target.value})
  }

  onSubmit (event) {
    event.preventDefault();
    this.props.setColor(this.state.logoColor)
  }

  render() {
    return <form onSubmit={(e) => this.onSubmit(e)}>
      <select onChange={(e) => this.logoColorChangeHandler(e)} value={this.state.logoColor}>
        <option>red</option>
        <option>salmon</option>
        <option>ochre</option>
        <option>seagreen</option>
      </select>
      <input type="submit" value='Save Preferences' />
      <div className={`preview ${this.state.logoColor}`}></div>
    </form>
  }

}