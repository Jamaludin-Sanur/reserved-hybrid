import React from 'react'
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withStyles, Box, TextField, Button } from '@material-ui/core'
import PropTypes from "prop-types";

const PropsType = {
    user: PropTypes.object.isRequired,
    onDataChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

const Props = {
    user: undefined,
    onDataChange: undefined,
    onSubmit: undefined,
};

const Style = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            marginBottom: "1rem",
        }
    }
};

class FormUserPR extends React.Component {

    render(){

        const { classes, onDataChange, onSubmit } = this.props;
        const user = this.props.user || {};

        return (
            <form className={classes.root} onSubmit={onSubmit}>
                <TextField label="Name" value={user.name} variant="outlined" onChange={(evt) => onDataChange({name:evt.target.value})} required/>

                <TextField label="Email" value={user.email} multiline rows={6} variant="outlined" onChange={(evt) => onDataChange({email:evt.target.value})} required/>

                <Box display="flex" justifyContent="space-between">
                    <Button variant="contained" onClick={()=>this.props.history.goBack()}>Cancel</Button>
                    <Button type="submit" color="primary" variant="contained">Save</Button>
                </Box>
                
            </form>
        )
    }

}

FormUserPR.PropsType = PropsType;
FormUserPR.defaultProps = Props;
export default compose(
    withRouter,
    withStyles(Style),
)(FormUserPR)

