import React from "react";
import ReactDOM from "react-dom";
import products from './products.json'


/* к сожалению, Toolbar тоже не работает */


class App extends React.Component {
  render() {
    const columns = ["category"];


    const options = {
      filterType: "dropdown",
      responsive: "scroll"
    };

  
  }
}




ReactDOM.render(<App />, document.getElementById("root"));
