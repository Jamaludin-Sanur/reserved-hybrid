import React from 'react'
import { withStyles } from '@material-ui/core';

const BORDER = {
	CIRCLE : "CIRCLE",
	RECTANGLE: "RECTANGLE"
}

const Props = {
	width: '3rem',
	height: '3rem',
	src: '',
	border: BORDER.CIRCLE
}

const Style = {
	root: {
		margin: '0.5rem',
		width: (props) => props.width,
		height: (props) => props.height,
		backgroundColor: '#000000',
		objectFit: 'cover',
		borderRadius: props => {
			if(props.border === BORDER.RECTANGLE)
				return "5px";
			else
				return "50%"
		},
		outline: 'none'
	}
}

class RAvatar extends React.Component {
	render () {
		const { classes, ...otherProps } = this.props
		return <img className={classes.root} src={this.props.src} {...otherProps}/>
	}
}

RAvatar.defaultProps = Props
export default withStyles(Style)(RAvatar)
