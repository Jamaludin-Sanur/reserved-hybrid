import React from 'react'
import { Typography, withStyles } from '@material-ui/core'

const Style = {
	root: {
		lineHeight: '2rem',
		padding: '0 0.5rem',
		justifyContent: "flex-start",
		cursor: 'pointer',
		'&:hover': {
			background: 'rgba(0,0,0,0.1)'
		}
	},
}

class RMenuItem extends React.Component {
	render() {
		const { classes, ...otherProps } = this.props
		return (
			<Typography classes={classes}  {...otherProps}>
				{this.props.children}
			</Typography>
		)
	}
}

export default withStyles(Style)(RMenuItem)
