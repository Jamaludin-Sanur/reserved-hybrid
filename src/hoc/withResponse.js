import React from 'react'
import { RResponse } from '../components'

export default function withResponse(WrappedComponent) {
	return class extends React.Component {
		state = {
			propsDialog: {
				visible: false
			}
		}

		showResponse(propsDialog) {
			this.setState({
				propsDialog: {
					...propsDialog,
					visible: true,
                    onClose: () => {                
                        this.setState({ visible: false }, () => {

							const response = propsDialog.response;
							if(typeof propsDialog.onClose === 'function'){
								return propsDialog.onClose(response);
							}

                            const type = response.type || {}
                            if (type === 'SUCCESS') {
                                if (typeof propsDialog.onSuccess === 'function') propsDialog.onSuccess(response);
                            } else if (type === 'ERROR') {
                                if (typeof propsDialog.onError === 'function') propsDialog.onError(response);
                            } else {
                                if (typeof propsDialog.onFatalError === 'function') propsDialog.onFatalError(response);
                            }
                        })
					},
				}
			})
		}

		render() {
			return (
				<React.Fragment>
					<RResponse {...this.state.propsDialog} />
					<WrappedComponent
						{...this.props}
						showResponse={this.showResponse.bind(this)}
					/>
				</React.Fragment>
			)
		}
	}
}
