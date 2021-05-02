import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Box, Typography, TextField, withStyles } from '@material-ui/core';
import { Link, } from "react-router-dom";

const Props = {
    auth: {},
    error: undefined,
    onSubmit: () => {},
}

const Style = theme => ({
    root: {
        border: `solid 1px ${theme.palette.primary.main}`,
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        padding: '1rem',
        margin: '0 0.5rem',
        '& *': {
            marginBottom: '0.3rem',
        },
        backgroundColor: theme.palette.background.paper
    },
    input: {
        '& input': {
            backgroundColor: '#FFFFFF',
        },
        '& fieldset': {
            borderColor: `${theme.palette.primary.main} !important`
        },
        '&:hover fieldset': {
            borderColor: `${theme.palette.primary.main} !important`
        },
        '& label': {
            color: theme.palette.primary.main
        },
    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: 700,
    },
    button: {
        // backgroundColor: '#FFFFFF',
    },
});

class RegisterPR extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        const { name, email, password } = this.state;
        if (typeof this.props.onSubmit === "function") this.props.onSubmit(name, email, password)
    }

    render() {
        const { classes, urlLogin, onSubmit, error } = this.props;

        return (
            <form className={classes.root} onSubmit={this.onSubmit} data-aos="zoom-in">
                <div>
                    <div>
                        <Typography className={classes.title} variant="h5" color="primary" align="center">{"Register"}</Typography>
                    </div>
                    <div>
                        <br />
                        <TextField
                            className={classes.input}
                            label="Name"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            onChange={(e) => { this.setState({ name: e.target.value }); }}
                        />
                    </div>
                    <div>
                        <TextField
                            className={classes.input}
                            label="Email"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            onChange={(e) => { this.setState({ email: e.target.value }); }}
                        />
                    </div>
                    <div>
                        <TextField
                            className={classes.input}
                            label="Password"
                            type="password"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            onChange={(e) => { this.setState({ password: e.target.value }); }}
                        />
                    </div>
                    {error && (
                        <div>
                            <Typography color="error" align="center">{error}</Typography>
                        </div>
                    )}
                    <Box display="flex" justifyContent="space-between" padding="0.2rem 0.5rem 0.1rem 0.5rem">
                        <Link to={urlLogin}>
                            <Typography color="primary" variant="subtitle1">
                                Login
                            </Typography>
                        </Link>
                        <Typography variant="subtitle1" style={{ color: "#AAAAAA" }}>
                            Forget Password
                        </Typography>
                    </Box>
                    <div>
                        <Button className={classes.button} type="submit" variant="contained" color="primary" fullWidth> Register </Button>
                    </div>
                </div>
            </form>


        );
    }
}

RegisterPR.defaultProps = Props;
export default withStyles(Style)(withRouter(RegisterPR))
