import React from "react"
import PropTypes from "prop-types"

class HoverImage2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: this.props.src
    }
  }

  handleClick = e => {
    if (this.props.disabled == true) {
    } else if (!!this.props.onClick) {
      this.props.onClick(e)
    }
  }

  mouseOver = () => {
    this.setState({ src: this.props.hoverSrc })
  }

  mouseOut = () => {
    this.setState({ src: this.props.src })
  }

  render() {
    console.log('props: ', this.props.src)
    console.log('props hover: ', this.props.hoverSrc)
    return (
      <img
        src={this.state.src}
        style={this.props.style}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        onClick={this.handleClick}
        className={this.props.className}
      />
    )
  }
}
HoverImage2.propTypes = {
  hoverSrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default HoverImage2