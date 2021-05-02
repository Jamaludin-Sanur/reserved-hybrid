import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
	name: 'BlueTheme',
	palette: {
		primary: { main: '#4a76a8', contrastText:'#FFFFFF' },
		secondary: {
			light: '#FFFFFF',
			main: '#000000',
			dark: '#000000'
		},
		background: {
			paper: '#FFFFFF',
			default: '#EDF2F9'
		}
	}
})

export default theme
