import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, LinearProgress, Typography } from '@material-ui/core'

const props = {
	visible: true,
	text: 'Loading ...'
}

const propTypes = {
	text: PropTypes.string
}

const Style = theme => ({
	root: {
		width: '100%',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: theme.zIndex.modal
	},
	loading: {
		width: '50%',
		height: '0.4rem'
	},
	text:{
		fontWeight: 500,
		marginBottom: '0.5rem'
	}
})

class XLoading extends React.Component {
	render() {
        const { classes, text, visible, ...otherProps } = this.props
        if(!visible) return null;

		return (
			<section className={classes.root} {...otherProps}>
				<Typography classes={{root:classes.text}} variant="h6" color="primary">{this.props.text}</Typography>
                <LinearProgress color="primary" classes={{root:classes.loading}}/>
				{this.props.children}
			</section>
		)
	}
}

XLoading.defaultProps = props
XLoading.propTypes = propTypes
export default withStyles(Style)(XLoading)
