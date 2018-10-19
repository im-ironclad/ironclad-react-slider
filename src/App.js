import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import styles
import './assets/styles/App.scss';

// Import Slider
import PortfolioSlider from './components/PortfolioSlider';

// Import dummy data to pass to slider
import { couples, couplesCopy, thumbnailArray, slidersArray } from './data/slider-data';


class App extends Component {
  render() {
    return (
      <div className="main__cont">
        <PortfolioSlider couples={couples} couplesCopy={couplesCopy} thumbnailArray={thumbnailArray} slidersArray={slidersArray} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));