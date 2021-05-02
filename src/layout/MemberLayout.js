import React from 'react'
import { withStyles } from '@material-ui/core'
import { Drawer, ListItem, ListItemText, Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ROUTES } from "../config";
import {
    ListUserPage,
    EditUserPage,
    ListNewsPage,
    CreateNewsPage,
    EditNewsPage,
    MyNewsPage
} from "../page";
import {
    Link,
    Switch,
    Route,
} from "react-router-dom";
import clsx from "clsx";

const Props = {};

const drawerWidth = 500;

const Style = ((theme) => ({
    root: {
        display: 'flex',
        background: theme.palette.background.default,
        minHeight: '100vh'
    },
    appBar: {
        height:'3rem',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    toolbar: {
        minHeight: 'initial'
    },
    appBarShift: {
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    content: {
        width: 0,
        flexGrow: 1,
        marginTop: '3.5rem',
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuLink: {
        textDecoration: 'none',
        margin: '0 1rem'
    }
}));

class MemberLayout extends React.Component {

    state = {
        isDrawerVisible: true,
    }

    redirectTo = (route) => {
        this.setState({ isDrawerVisible: false }, ()=>{
            this.props.history.push(route);
        })
    }

    onClickLogout = () => {
        window.localStorage.clear();
        this.props.history.push(ROUTES.PUBLIC.LOGIN);
    }

    render() {

        const { classes } = this.props;
        const { isDrawerVisible } = this.state;

        return (
            <section className={classes.root}>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar)}
                >
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => this.setState({ isDrawerVisible: !isDrawerVisible })}
                            edge="start"
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Reserved
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer anchor={'left'} className={classes.rootDrawer} open={isDrawerVisible} onClose={() => this.setState({ isDrawerVisible: false })}>
                    <ListItem button >
                        <DescriptionIcon color="primary" />
                        <Link className={classes.menuLink} onClick={()=>this.redirectTo(ROUTES.MEMBER.ALL_NEWS)} >
                            <Typography color="primary">News</Typography>
                        </Link>
                    </ListItem>
                    <ListItem button >
                        <PeopleOutlineIcon color="primary" />
                        <Link className={classes.menuLink} onClick={()=>this.redirectTo(ROUTES.MEMBER.ALL_USER)}>
                            <Typography color="primary">People</Typography>
                        </Link>
                    </ListItem>
                    <ListItem button >
                        <AssignmentIcon color="primary" />
                        <Link className={classes.menuLink} onClick={()=>this.redirectTo(ROUTES.MEMBER.MY_NEWS)}>
                            <Typography color="primary">My News</Typography>
                        </Link>
                    </ListItem>
                    <ListItem button >
                        <PersonOutlineIcon color="primary" />
                        <Link className={classes.menuLink} onClick={()=>this.redirectTo(ROUTES.MEMBER.EDIT_USER)}>
                            <Typography color="primary">My Profile</Typography>
                        </Link>
                    </ListItem>
                    <ListItem button >
                        <ExitToAppIcon color="primary" />
                        <Link className={classes.menuLink} onClick={this.onClickLogout}>
                            <Typography color="primary">Logout</Typography>
                        </Link>
                    </ListItem>
                </Drawer>

                <main
                    className={classes.content}
                >
                    <Switch>
                        <Route path={ROUTES.MEMBER.ALL_USER} component={ListUserPage} />
                        <Route path={ROUTES.MEMBER.EDIT_USER} component={EditUserPage} />

                        <Route path={ROUTES.MEMBER.ALL_NEWS} component={ListNewsPage} />
                        <Route path={ROUTES.MEMBER.CREATE_NEWS} component={CreateNewsPage} />
                        <Route path={ROUTES.MEMBER.EDIT_NEWS} component={EditNewsPage} />
                        <Route path={ROUTES.MEMBER.MY_NEWS} component={MyNewsPage} />
                    </Switch>
                </main>

            </section >
        )
    }

}

MemberLayout.defaultProps = Props;
export default compose(
    withStyles(Style),
    withRouter,
)(MemberLayout)


