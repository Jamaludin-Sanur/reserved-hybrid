import React from 'react'
import { RDialog } from '../components'

export default function withDialog(WrappedComponent) {
	return class extends React.Component {
		state = {
			propsDialog: {
				open: false
			}
		}

		showDialog(propsDialog) {
			this.setState({
				propsDialog: {
					...propsDialog,
					open: true,
					onSubmit: () => {
						this.setState(
							{ propsDialog: { ...this.state.propsDialog, open: false } },
							() => {
								if (typeof propsDialog.onSubmit === 'function')
									propsDialog.onSubmit()
							}
						)
					},
					onClose: () => {
						this.setState(
							{ propsDialog: { ...this.state.propsDialog, open: false } },
							() => {
								if (typeof propsDialog.onClose === 'function')
									propsDialog.onClose()
							}
						)
					}
				}
			})
		}

		render() {
			return (
				<React.Fragment>
					<RDialog {...this.state.propsDialog} />
					<WrappedComponent
						{...this.props}
						showDialog={this.showDialog.bind(this)}
					/>
				</React.Fragment>
			)
		}
	}
}
