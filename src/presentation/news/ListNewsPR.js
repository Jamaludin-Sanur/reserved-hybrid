import React from 'react'
import { withStyles, IconButton } from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { RCard, RMenu } from "../../components";

const Props = {
    newsArray: [],
    currentUser: undefined,
    onClickCreate: undefined,
    onClickEdit: undefined,
    onClickDelete: undefined,
};

const Style = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative"
    },
    btnCreate: {
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        fontSize: '2rem',
        backgroundColor: theme.palette.primary.main
    }
});

class ListNewsPR extends React.Component {

    render() {

        const { classes, newsArray, currentUser } = this.props;
        if (!Array.isArray(newsArray)) return null;

        return (
            <section className={classes.root}>
                {newsArray.map((news, index) => {
                    const author = news.author || {};
                    return (
                        <RCard
                            key={index}
                            title={news.title}
                            description={news.description}
                            urlImage={news.urlImage}
                            date={news.created_at}
                            username={author.name}
                            menu={currentUser.id !== news.user_id
                                ? undefined
                                : (
                                    <RMenu>
                                        <RMenu.Item onClick={()=>this.props.onClickEdit(news)}>Edit</RMenu.Item>
                                        <RMenu.Item onClick={()=>this.props.onClickDelete(news)}>Delete</RMenu.Item>
                                    </RMenu>
                                )}
                        />
                    )
                })}
                <div>
                    <IconButton className={classes.btnCreate} color="primary" onClick={this.props.onClickCreate}>
                        <AddOutlinedIcon fontSize="inherit" style={{ color: 'white' }} />
                    </IconButton>
                </div>
            </section>
        )
    }

}

ListNewsPR.defaultProps = Props;
export default withStyles(Style)(ListNewsPR)

