import React, { Component } from 'react'

export default class Counter extends Component {
    state = { 
        value: this.props.counter.value,
        tags: []
        // imageUrl: 'https://picsum.photos/200'
    };
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // rendertags() {
    //     if(this.state.tags.length ===0) return <p>There are no tags!</p>;
    //     return <ul>
    //     { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
    // </ul>
    // }
    handleIncrement = (product) => {
        // console.log(product);
        this.setState({ value: this.state.value + 1 })
    }

    // doHnadleIncrement = () => {
    //   this.handleIncrement({ id: 1});
    // }

    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }
  render() {
    // console.log('props', this.props);
    // let classes = this.getBadgeClasses();
    //   React.createElement('div')
    return (
        <div>
          {/* <h4>{this.props.id}</h4> */}
           <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
           <button style={this.styles} onClick={ this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>

           <button 
            onClick={() => this.props.onDelete(this.props.counter)} 
            className='btn btn-danger btn-sm m-2'
           >Delete</button>
        </div>
    )
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.value === 0) ? "warning" : "primary";
    return classes;
}
formatCount() {
    const{ value: count } = this.state;
    const x = <div>Zero</div>
    return count === 0 ? x : count;
  }
    
}
