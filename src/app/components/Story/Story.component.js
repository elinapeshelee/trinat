import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './story.style.scss';

class StoryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.parallaxItemRef = createRef();

    this.handleScroll = this.handleScroll.bind(this);
    this.renderStoryTitle = this.renderStoryTitle.bind(this);
    this.renderStoryText = this.renderStoryText.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const currentScrollPos = window.pageYOffset;
    const node = this.parallaxItemRef.current;
    const DIVIDER = 13;

    if (window.innerWidth > 700) {
      node.style.transform = `translateY(${currentScrollPos / DIVIDER}px)`;
    }
  }

  renderStoryTitle() {
    const {
      title,
      description
    } = this.props;
    return (
      <h3>
        <p className="parallax-headline">Discover</p>
        <p className="parallax-title">{ title }</p>
        <p className="parallax-description">{ description }</p>
      </h3>
    );
  }

  renderStoryText() {
    const { storyText } = this.props;
    return (
      <span className="simple-text">{ storyText }</span>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="parallax-section parallax-section-story">
          <div
            className="inner-container inner-container-story"
            ref={this.parallaxItemRef}
          >
            { this.renderStoryTitle() }
            { this.renderStoryText() }
          </div>
        </div>
      </div>
    );
  }
}

StoryComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  storyText: PropTypes.string.isRequired
};

export default withTranslation()(StoryComponent);