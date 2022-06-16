import React, { Component, Fragment } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./component/Navbar"
import News from "./component/News";


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Navbar />
            <Routes>
              <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" />} />
              <Route exact path="/business" element={<News key="business" country="in" category="business" />} />
              <Route exact path="/" element={<News key="general" country="in" category="general" />} />
              <Route exact path="/health" element={<News key="health" country="in" category="health" />} />
              <Route exact path="/science" element={<News key="science" country="in" category="science" />} />
              <Route exact path="/sports" element={<News key="sports" country="in" category="sports" />} />
              <Route exact path="/technology" element={<News key="technology" country="in" category="technology" />} />
            </Routes>
          </Fragment>
        </Router>
      </div>
    )
  }
}

export default App
