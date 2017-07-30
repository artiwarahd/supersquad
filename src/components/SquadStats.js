import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
  getStrength(){
    let strength = 0;
    this.props.heroes.forEach(hero => strength += hero.strength);
    return strength;
  }
  getSpeed(){
    let speed = 0;
    this.props.heroes.forEach(hero => speed += hero.speed);
    return speed;
  }
  getIntelligence(){
    let intelligence = 0;
    this.props.heroes.forEach(hero => intelligence += hero.intelligence);
    return intelligence;
  }

  render(){
    console.log('this.props', this.props);

    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <div className='list-item'><b>Overall strength:</b></div>
            <div className='list-item right'>{this.getStrength()}</div>
          </li>
          <li className='list-group-item'>
            <div className='list-item'><b>Overall speed:</b></div>
            <div className='list-item right'>{this.getSpeed()}</div>
          </li>
          <li className='list-group-item'>
            <div className='list-item'><b>Overall intellegent:</b></div>
            <div className='list-item right'>{this.getIntelligence()}</div>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, null)(SquadStats);