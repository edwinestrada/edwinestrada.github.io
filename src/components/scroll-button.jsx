import React, { Component } from 'react';

class ScrollButton extends Component {
  state = {
    scrollPosition: 0,
    showButton: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => this.setState({ scrollPosition: window.pageYOffset, showButton: window.pageYOffset > 100 });
  handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  render() {
    return (<>
      <button
        id="scroll-to-top"
        className="btn caps bold fixed bottom-0 right-0 mb2"
        style={this.state.showButton ? null : { 'display': 'none' }}
        onClick={this.handleScrollToTop}>{this.state.scrollPosition}
      </button>
    </>);
  }
}

export default ScrollButton;