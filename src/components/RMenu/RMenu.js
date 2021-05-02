import React from 'react'
import { withStyles } from '@material-ui/core'

const Props = {};

const Style = {
    root: {
        minWidth: "100px",
        maxWidth: "100px"
    }
};

class XMenu extends React.Component {

    render(){

        const { classes } = this.props;

        return (
            <section className={classes.root}>
                {this.props.children}
            </section>
        )
    }

}

XMenu.defaultProps = Props;
export default withStyles(Style)(XMenu)

