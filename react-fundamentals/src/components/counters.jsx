import React, { Component } from 'react'
import Counter from './counter'

export default class counters extends Component {
    state ={
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }
    handleDelete = (counterId) => {
        // console.log('Event handler Called', counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }
  render() {
    return (
      <div>
        {this.state.counters.map( counter =>(  
        <Counter 
            onDelete={this.handleDelete} 
            key={counter.id} 
            // value={counter.value} 
            // id={counter.id} 
            // selected= {counter.selected}
            counter={counter}
            {/* <h4>Counter #{counter.id}</h4> */}
        />
            
           ))}
      
      </div>
    );
  }
}
