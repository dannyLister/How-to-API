import React from 'react';
import { getApiFunction } from './GetApi';
import Users from './users';  // Users = a rendered table displaying the api data
import Loader from './loader'; // Loader = an npm package for a loading image

class App extends Component {
  state = {
    people: [],
    err: null
  };

  // NOTE: try and catch, work in same way as if/else function

  componentDidMount = async () => { // async load of data into App
    try {
      const people = await getApiFunction(); // store getApiFunction data and store it here
      this.setState({ people }); // apply stored data in getApiFunction, and apply to state{people []}
    } catch (err) { //  ELSE > if api doesnt work, 
      this.setState({ err }) // set the initial state as 'null';
    }
  }

  render() {
    return (
      <div>
        {
          this.state.err //check for error on api Get request 
            ?  // if there is an error return the below (render it, not on console.)
            <div>
              <p>`There was an error with API: ${this.state.err.toString()}`</p>
            </div>
            : // if there is NOT an error check that data exists in the back end
            this.state.people.length > 0
              ? // if data exists render the following component with the below data.
              <Users persons={this.state.people} />
              : // if the data is NOT available render the below loading icon
              <Loader />
        }
      </div>
    );
  }
};

export default App;