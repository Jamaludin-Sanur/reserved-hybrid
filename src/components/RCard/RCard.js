import React from 'react'
import { Typography, withStyles, Popover, IconButton } from '@material-ui/core'
import PropTypes from "prop-types";
import Moment from "moment";
import MenuIcon from '@material-ui/icons/Menu';

const PropsType = {
	classes: PropTypes.object.isRequired,
}

const Props = {
	title: undefined,
	description: undefined,
	date: undefined,
	username: undefined,
	menu: undefined
}

const Style = theme => ({
	root: {
		width: '100%',
		maxWidth: '500px',
		minHeight: '400px',
		maxHeight: '500px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		flex: 1,
		borderRadius: "10px",
		boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
		margin: "1rem 0",
		background: (props) => `url("${props.urlImage}") center center / cover no-repeat`,
		position: 'relative'
	},
	container: {
		display: "flex",
		flexDirection: 'column',
		justifyContent: 'center',
		background: 'rgba(0, 0, 0, 0.4)',
		borderRadius: "10px 10px 0 0",
		background: 'rgba(255, 255, 2555, 0.6)',
	},
	title: {
		padding: '0.5rem 2rem',
		fontWeight: 900,
	},
	descriptionContainer: {
		padding: '0.5rem',
		margin: '0 2rem',
		background: 'rgba(255, 255, 2555, 0.8)',
	},
	descriptionText: {
		maxHeight: '4.5rem',
		overflow: 'hidden'
	},
	username: {
		padding: '0.5rem 2rem',
		fontWeight: '500',
	},
	date: {
		color: '#777777',
		fontSize: '0.8rem',
		paddingTop: '0.5rem'
	},
	btnMenu: {
		position: 'absolute',
		top: '0.5rem',
		right: '0.5rem'
	}
});

class RCard extends React.Component {

	state = {
		anchorMenu: null,
	}

	componentWillUnmount = () => {
		document.removeEventListener('click', this.onCloseMenu)
	}

	onClickMenu = (evt) => {
		evt.stopPropagation();
		evt.preventDefault();
		document.addEventListener('click', this.onCloseMenu)
		this.setState({ anchorMenu: evt.currentTarget })
	}

	onCloseMenu = (evt) => {
		evt.stopPropagation()
		evt.preventDefault();
		document.removeEventListener('click', this.onCloseMenu)
		this.setState({ anchorMenu: null })
	}

	render() {
		const { classes, title, description, date, username, menu } = this.props;
		return (
			<section className={classes.root}>
				<div className={classes.container}>
					<Typography noWrap={true} className={classes.title} variant="h6">
						{title}
					</Typography>

					<div className={classes.descriptionContainer}>
						<Typography className={classes.descriptionText}>
							{description}
						</Typography>
						<Typography noWrap={true} align="right" variant="subtitle2" className={classes.date}>
							{Moment(date).format("DD MMM YYYY HH:mm")}
						</Typography>
					</div>


					<Typography noWrap={true} className={classes.username} variant="subtitle2" align="right">
						{username}
					</Typography>
				</div>

				{menu && (
					<IconButton onClick={this.onClickMenu} className={classes.btnMenu}>
						<MenuIcon />
					</IconButton>
				)}

				<Popover
					anchorEl={this.state.anchorMenu}
					open={!!this.state.anchorMenu}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right'
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right'
					}}
				>
					<div>
						{menu}
					</div>
				</Popover>
			</section>
		)
	}

}
RCard.PropsType = PropsType;
RCard.defaultProps = Props
export default withStyles(Style)(RCard)
