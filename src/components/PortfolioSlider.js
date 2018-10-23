import React, { Component } from 'react'

// Import needed components
import Control from './Control';

class PortfolioSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGroupIndex: 0,
      currentSlideIndex: 0,
    }

    // Set non-state variables
    this.groupLength = props.thumbnailArray.length;
  }

  /**
   * [shiftGroup - Function to shift between each group of sliders]
   */
  shiftGroup = direction => {
    if (direction === 'next') {
      let targetIndex = this.state.currentGroupIndex + 1;
      if (targetIndex > this.groupLength - 1) {
        targetIndex = 0;
      }
      this.setGroupState(targetIndex);
    }
    else {
      let targetIndex = this.state.currentGroupIndex - 1;
      if (targetIndex < 0) {
        targetIndex = this.groupLength - 1;
      }
      this.setGroupState(targetIndex);
    }
  }

  /**
   * [setGroupState update the state each group change]
   */
  setGroupState = (targetIndex) => {
    this.setState({
      currentGroupIndex: targetIndex,
      currentSlideIndex: 0,
    });
  }

  /**
   * [shiftSlide - Function for shifting between each image slide]
   */
  shiftSlide = direction => {
    if (direction === 'next') {
      let targetIndex = this.state.currentSlideIndex + 1;
      if (targetIndex > this.props.slidersArray[this.state.currentGroupIndex].length - 1) {
        targetIndex = 0;
      }
      this.setState({
        currentSlideIndex: targetIndex
      });
    }
    else {
      let targetIndex = this.state.currentSlideIndex - 1;
      if (targetIndex < 0) {
        targetIndex = this.props.slidersArray[this.state.currentGroupIndex].length - 1;
      }
      this.setState({
        currentSlideIndex: targetIndex
      });
    }
  }

  render() {
    return (
      <div className="portfolio-slider">
        <div className="portfolio-slider__left-cont">
          <p className="portfolio-slider__left-cont__title">
            Engagements
          </p>

          <div className="portfolio-slider__left-cont__name-cont">
            <p className="portfolio-slider__left-cont__name-cont__name">
              {this.props.couples.map((couple, i) => {
                let activeClass = '';
                if (this.state.currentGroupIndex === i) activeClass = 'active';
                return (
                  <span key={couple.toString() + i} className={activeClass}>
                    { couple }
                  </span>
                )
              })}
            </p>

            <div className="portfolio-slider__left-cont__name-cont__controls">
              <Control classes="portfolio-slider__left-cont__name-cont__controls__prev" onClick={(e) => this.shiftGroup('prev', e)} />
              <Control classes="portfolio-slider__left-cont__name-cont__controls__next" onClick={(e) => this.shiftGroup('next', e)} />
            </div>
          </div>

          <div className="portfolio-slider__left-cont__grid js-grid">
            <div className="portfolio-slider__left-cont__grid__copy">
              {this.props.couplesCopy.map((copy, i) => {
                let activeClass = '';
                if (this.state.currentGroupIndex === i) activeClass = 'active';
                return (
                  <p key={copy.toString() + i} className={activeClass}>{ copy }</p>
                )
              })}
            </div>

            {this.props.thumbnailArray.map((thumbnail, i) => {
              let activeClass = '';
              if (this.state.currentGroupIndex === i) activeClass = ' active';
              return (
                <div key={thumbnail.toString() + i} className={"portfolio-slider__left-cont__grid__person" + activeClass}>
                  <img src={ thumbnail } alt="" />
                </div>
              )
            })}
          </div>
        </div>

        <div className="portfolio-slider__image-slider-cont">
          {this.props.slidersArray.map((slider, i) => {
            let activeClass = '';
            if (this.state.currentGroupIndex === i) activeClass = ' active'
            return (
              <div key={slider.toString() + i} className={"portfolio-slider__image-slider-cont__slider" + activeClass}>
                <div className="portfolio-slider__image-slider-cont__slider__controls-cont">
                  <Control classes="portfolio-slider__image-slider-cont__slider__controls-cont__prev" onClick={(e) => this.shiftSlide('prev', e)} />
                  <p className="portfolio-slider__image-slider-cont__slider__controls-cont__index">
                    <span>{ this.state.currentSlideIndex + 1 }</span>
                    /
                    <span>{ this.props.slidersArray[this.state.currentGroupIndex].length }</span>
                  </p>
                  <Control classes="portfolio-slider__image-slider-cont__slider__controls-cont__next" onClick={(e) => this.shiftSlide('next', e)} />
                </div>

                {slider.map((slide, index) => {
                  let activeClass = '';
                  if (this.state.currentSlideIndex === index) activeClass = 'active';
                  return (
                    <img key={index} src={slide} alt="" className={activeClass} />
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default PortfolioSlider;
