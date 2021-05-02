import React from 'react'
import { withStyles } from '@material-ui/core'
import { XButtonGroup, XButton } from "../../components";
import { RData } from "../../components";

const Props = {};

const Style = {
    root: {
        display: "flex",
        flexDirection: "column"
    }
};

class ListUserPR extends React.Component {

    render() {

        const { classes, userArray } = this.props;
        if (!Array.isArray(userArray)) return null;

        return (
            <section className={classes.root}>
                {userArray.map((user, index) => {
                    return (
                        <RData
                            urlAvatar={user.urlImage}
                            key={index}
                            title={user.name}
                            description={user.email}
                        />
                    )
                })}
            </section>
        )
    }

}

ListUserPR.defaultProps = Props;
export default withStyles(Style)(ListUserPR)

