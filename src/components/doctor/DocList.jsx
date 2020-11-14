import "./Doctor.css";
import React, { Component } from "react";
import SearchBar from "material-ui-search-bar";

import DocCard from "./DocCard";

class DocList extends Component {
  showAllDoc = () => {
    return (
      <React.Fragment>
        <DocCard name="Saad Khan" img="https:t.ly/IL21" />
        <DocCard name="Bilal Ahsan" img="https:t.ly/dzY1" />
        <DocCard name="Kanwal Gul" img="https:t.ly/gbqr" />
        <DocCard name="Smith Joe" img="https:t.ly/JqFx" />
        <DocCard name="Saad Khan" img="https:t.ly/IL21"  />
        <DocCard name="Bilal Ahsan" img="https:t.ly/dzY1" />
        <DocCard name="Kanwal Gul" img="https:t.ly/gbqr" />
        <DocCard name="Smith Joe" img="https:t.ly/JqFx" />
        <DocCard name="Saad Khan" img="https:t.ly/IL21"  />
        <DocCard name="Saad Khan" img="https:t.ly/gbqr" />
      </React.Fragment>
    );
  };
  render() {
    return (
      <div className="container">
        <div className="my-4">
          <SearchBar />
        </div>
        {this.showAllDoc()}
      </div>
    );
  }
}

export default DocList;
