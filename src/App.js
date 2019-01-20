import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
const products = [
  {
    id: 1,
    name: "iphone6s",
    cost: "600",
    description: "Lorem ipsum dolor sit amet,serunt mollit anim id est laborum."
  },
  {
    id: 2,
    name: "galaxy9",
    cost: "1200",
    description: "Lorem ipsum dolor sit amet,serunt mollit anim id est laborum."
  },
  {
    id: 3,
    name: "iphone10",
    cost: "1500",
    description: "Lorem ipsum dolor sit amet,serunt mollit anim id est laborum."
  },
  {
    id: 4,
    name: "alcatel1x",
    cost: "300",
    description: "Lorem ipsum dolor sit amet,serunt mollit anim id est laborum."
  },
  {
    id: 5,
    name: "lenovo",
    cost: "500",
    description: "Lorem ipsum dolor sit amet,serunt mollit anim id est laborum."
  },
  {
    id: 6,
    name: "lieco",
    cost: "600",
    description: "Lorem ipsum dolor sit amet,serunt mollit anim id est laborum."
  }
];

function searchingFor(term) {
  return function(x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || false;
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      term: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event) {
    this.setState({ term: event.target.value });
    console.log(event.target.value);
  }

  render() {
    const { term } = this.state;
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.searchHandler} value={term} />
        </form>
        {products.filter(searchingFor(term)).map(product => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <h1>{product.cost}</h1>
            <h1>{product.description}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
