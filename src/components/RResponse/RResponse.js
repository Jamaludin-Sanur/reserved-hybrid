import React from 'react'
import {
	Modal,
	Container,
	Button,
	withStyles,
	Typography
} from '@material-ui/core'
import { NavLink, withRouter } from 'react-router-dom'

const Props = {
	visible: true,
	response: null,
	title: '',
	titleSuccess: '',
	titleError: '',
	titleFatalError: '',
	message: '',
	messageSuccess: '',
	messageError: '',
	messageFatalError: '',
	note: '',
	btnText: 'ok',
	onClose: null,
	onSuccess: (response) => { },
	onError: (response) => { },
	onFatalError: (response) => { },
}

const Style = theme => ({
	root: {
		padding: "0 1rem"
	},
	container: {
		outline: 'none',
		position: 'relative',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: theme.palette.background.paper,
		padding: '5px',
		margin: '0',
		borderRadius: '10px',
		
	},
	header: {
		backgroundColor: props => {
			const response = props.response;
			if(!response) return theme.palette.primary.main;
			if(response.status === "ERROR" || response.status === "FATAL_ERROR") {
				return theme.palette.error.main;
			}
			return theme.palette.primary.main;
		},
		color: theme.palette.common.white,
		padding: '0.5rem 1rem',
		minHeight: '2rem',
		borderRadius: '10px',
	},
	body: {
		minHeight: '3rem',
		padding: '1rem',
		color: theme.palette.getContrastText(theme.palette.background.paper),
	},
	footer: {
		display: 'flex',
		justifyContent: 'flex-end',
		padding: '0.5rem 1rem',
		color: theme.palette.getContrastText(theme.palette.background.paper),
	}
});

class RResponse extends React.Component {
	state = {
		visible: this.props.visible,
		response: this.props.response,
	}

	static getDerivedStateFromProps(props, state) {

		const oldResponse = JSON.stringify(state.response || {});
		const newResponse = JSON.stringify(props.response || {});

		if (props.response && oldResponse !== newResponse) {
			return {
				visible: true,
				response: props.response
			};
		} else {
			return {};
		}
	}

	onClose = () => {
		const response = this.props.response || {};

		this.setState({ visible: false }, () => {			
			const status = response.status
			if (status === 'SUCCESS') {
				typeof this.props.onSuccess === "function" && this.props.onSuccess(response);
			} else if (status === 'ERROR') {
				typeof this.props.onError === "function" && this.props.onError(response);
			} else {
				typeof this.props.onFatalError === "function" && this.props.onFatalError(response);
			}


		})
	}

	renderTitle() {
		
		const { response } = this.props;
		let title = this.props.title;
		if (response.status === 'SUCCESS') {
			title = this.props.titleSuccess
		} else if (response.status === 'ERROR') {
			title = this.props.titleError
		} else {
			title = this.props.titleFatalError
		}

		if(title){
			return title;
		}else{
			if (response.status === 'SUCCESS') {
				return 'Success!'
			} else if (response.status === 'ERROR') {
				return 'Error'
			} else {
				return 'Fatal Error'
			}
		}
	}

	renderMessage() {

		const { response } = this.props;

		let message = this.props.message;
		if (response.status === 'SUCCESS') {
			message = this.props.messageSuccess
		} else if (response.status === 'ERROR') {
			message = this.props.messageError
		} else {
			message = this.props.messageFatalError
		}

		if(message){
			return message;
		}else{
			if (response.status === 'SUCCESS') {
				return 'Congratulation! operation success'
			} else if (response.status === 'ERROR') {
				return 'Oh no there is an error' 
			} else {
				return 'Cant connect to server. Please try again later.'
			}
		}
	}

	renderNote() {
		const { response, note } = this.props;

		if (note) return note;

		if (response) {
			if (response.status === 'SUCCESS') {
				return ''
			} else if (response.status === 'ERROR') {
				return response.message;
			} else {
				return response.message;
			}
		}
	}

	render() {
		const {
			visible,
			classes,
			variant,
			response,
			message,
			onClose,
			btnText
		} = this.props


		if (!response) return null;

		return (
			<Modal
				open={this.state.visible}
				className={classes.root}
			>
				<Container className={classes.container} maxWidth="xs">
					<div className={classes.header}>
						<Typography variant="h6" >{this.renderTitle()}</Typography>
					</div>
					<div className={classes.body}>
						<Typography variant="body1" color="inherit">{this.renderMessage()}</Typography>
						<Typography variant="body1" color="inherit">{this.renderNote()}</Typography>
					</div>
					<div className={classes.footer}>
						<Button variant="outlined" onClick={this.onClose}>	
							<Typography variant="body1" style={{color:'#000000'}}>{btnText || "Ok"}</Typography>
						</Button>
					</div>
				</Container>
			</Modal>
		)
	}
}

RResponse.defaultProps = Props
export default withRouter(withStyles(Style)(RResponse))
