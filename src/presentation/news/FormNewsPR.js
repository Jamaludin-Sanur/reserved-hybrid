import React from 'react'
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withStyles, Box, TextField, Button } from '@material-ui/core'
import PropTypes from "prop-types";

const PropsType = {
    news: PropTypes.object.isRequired,
    onNewsChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

const Props = {
    news: undefined,
    onNewsChange: undefined,
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

class FormNewsPR extends React.Component {

    render(){

        const { classes, onNewsChange, onSubmit } = this.props;
        const news = this.props.news || {};

        return (
            <form className={classes.root} onSubmit={onSubmit}>
                <TextField label="Title" value={news.title} variant="outlined" onChange={(evt) => onNewsChange({title:evt.target.value})} required/>

                <TextField label="Description" value={news.description} multiline rows={6} variant="outlined" onChange={(evt) => onNewsChange({description:evt.target.value})} required/>

                <Box display="flex" justifyContent="space-between">
                    <Button variant="contained" onClick={()=>this.props.history.goBack()}>Cancel</Button>
                    <Button type="submit" color="primary" variant="contained">Save</Button>
                </Box>
                
            </form>
        )
    }

}

FormNewsPR.PropsType = PropsType;
FormNewsPR.defaultProps = Props;
export default compose(
    withRouter,
    withStyles(Style),
)(FormNewsPR)

