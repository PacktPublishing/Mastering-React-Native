import React, { Component, PropTypes } from 'react';
import Title from './Title';

export default class NewsItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  renderBody() {
    if (this.state.expanded) {
      return (
        <div>
          <Byline />
          <Description />
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div
        className="news-item"
        onClick={this.onClick}
      >
        <Image />
        <Title
          highlighted
        >
          {this.props.titleText}
        </Title>
        {this.renderBody()}
      </div>
    );
  }

}

NewsItem.propTypes = {
  titleText: PropTypes.string.isRequired
};
