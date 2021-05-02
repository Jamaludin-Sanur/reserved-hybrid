import React from 'react'
import { Modal,
	Container,
	Button,
	withStyles,
	Typography } from '@material-ui/core'

const Props = {
	open: true,
	variant: 'ALERT', // 'ALERT', 'CONFIRM, PROMPT', 'SEARCH'
	maxWidth: 'xs',
	title: "Attention",
	message: null,
	onSubmit: () => {},
	onClose: () => {}
}

const Style = (theme) => ({
	root: {
	},
	container: {
		outline: 'none',
		position: 'relative',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: '#FFFFFF',
		padding: '0',
		margin: '0',
		padding: '5px'
	},
	header: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		padding: '0.5rem 1rem',
		minHeight: '2rem'
	},
	message: {
		padding: '1rem',
		minHeight: '2.5rem'
	},
	footer: {
		display: 'flex',
		padding: '1rem',
		justifyContent: 'space-between'
	},
	button: { minWidth: '100px' }
})

class RDialog extends React.Component {
	renderFooter () {
		let { variant, classes } = this.props
		variant = variant || 'ALERT'

			if (variant.toUpperCase() === 'ALERT') {
				return (
					<div className={classes.footer}>
						<span>{/* empty */}</span>
						<Button
							variant='contained'
							color='primary'
							className={classes.button}
							onClick={this.props.onSubmit}
						>
							Ok
						</Button>
					</div>
				)
			} else if (variant.toUpperCase() === 'CONFIRM') {
				return (
					<div className={classes.footer}>
						<Button
							variant='contained'
							color='primary'
							className={classes.button}
							onClick={this.props.onClose}
						>
							Cancel
						</Button>
						<Button
							variant='contained'
							className={classes.button}
							onClick={this.props.onSubmit}
						>
							Ok
						</Button>
					</div>
				)
			} else if (variant.toUpperCase() === 'PROMPT') {
				return (
					<div className={classes.footer}>
						<Button
							variant='contained'
							className={classes.button}
							onClick={this.props.onClose}
						>
							Cancel
						</Button>
						<Button
							variant='contained'
							color='primary'
							className={classes.button}
							onClick={this.props.onSubmit}
						>
							Ok
						</Button>
					</div>
				)
			}
	}

	render () {
		const {
			classes,
			variant,
			title,
			header,
			message,
			footer,
			open,
			maxWidth,
			...otherProps
		} = this.props
 
		return (
			<Modal
				disableAutoFocus
				disableEnforceFocus
				open={this.props.open}
				onClick={this.props.onClose}
				className={classes.root}
			>
				<Container className={classes.container} maxWidth={maxWidth}>
					<div className={classes.header}>
						<Typography variant="h6" >{title}</Typography>
					</div>
					<Typography variant="body1" classes={{root:classes.message}}>{this.props.message}</Typography>
					{this.renderFooter()}
				</Container>
			</Modal>
		)
	}
}

RDialog.defaultProps = Props
export default withStyles(Style)(RDialog)
