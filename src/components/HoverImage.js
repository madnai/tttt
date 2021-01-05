import React from "react"
import PropTypes from "prop-types"

class HoverImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: this.props.src,
      webpSrc: this.props.webp
    }
  }

  handleClick = e => {
    if (this.props.disabled == true) {
    } else if (!!this.props.onClick) {
      this.props.onClick(e)
    }
  }

  mouseOver = () => {
    this.setState({ src: this.props.hoverSrc, webpSrc: this.props.hoverWebp })
  }

  mouseOut = () => {
    this.setState({ src: this.props.src, webpSrc: this.props.webp })
  }

  render() {
    return (
      <picture style={this.props.style}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        onClick={this.handleClick}
        className={this.props.className}>
        <source srcSet={this.state.webpSrc} type="image/webp" />
        <img src={this.state.src} alt="Alt Text!"  />
      </picture>
    )
  }
}
HoverImage.propTypes = {
  hoverSrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default HoverImage