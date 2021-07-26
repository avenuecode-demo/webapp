import React from "react";
import "./App.css";
// import dev from './data/development';
import prod from './data/production';

// var env = process.env.REACT_APP_NODE_ENV
// var envData = {};
// envData['dev'] = dev;


var data = prod;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { servicea: [], serviceb: [], config: {} };
  }

  componentDidMount() {
    fetch(data.servicea)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({ servicea: result });
        },
        (error) => {
          console.log(error);
        }
      );

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <div className="environment">Environment: Development</div>

          <div class="service-wrapper">
            <div id="servicea" class="servicea-results">
              {this.state.servicea && this.state.servicea.length
                ? this.state.servicea.map((record) => (
                  <div>
                    {record.name} / {record.createdBy}
                  </div>
                ))
                : "no updated results: backend is not running"
              }
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
