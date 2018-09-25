import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './Robots';

class App extends Component {

  constructor(){
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
    console.log(event.target.value);
  }

  render(){
    const filteredRobot = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()); 
    })
    console.log(filteredRobot);
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots = {filteredRobot}/>
      </div>
    );
  }
}

/*
const App = () => {
  return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots = {robots}/>
      </div>
  );
}
*/

export default App;
