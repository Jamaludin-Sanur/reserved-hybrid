import React from 'react'
import { withStyles, Typography, Checkbox, Popover, Collapse } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Props = {
    id: null,
    urlAvatar: null,
    to: '',
    icon: null,
    titlePrefix: null,
    title: null,
    titleSuffix: null,
    description: null,
    menu: null,
    selected: null,
    mode: null,
    onSelectionChange: () => { },
    onClickData: undefined,
    defaultShowDetail: true,
    modeToolbarPrefix: undefined,
    modeToolbarSuffix: undefined,
    toolbarPrefix: undefined,
    toolbarSuffix: undefined,

    propsTitle: {},
    propsDescription: {},
}

const Style = (theme) => ({
    root: {
        borderRadius: '10px',
        boxShadow: (props) => {
            if (props.shadow === 'bevel') {
                return
            } else {
                return 'none'
            }
        },
        display: 'flex',
        flexDirection: 'column',
        minHeight: '3rem',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        marginBottom: "1rem",
        '& *': {
            outline: 'none !important',
            boxShadow: 'none'
        },
        '& *:focus': {
            outline: 'none !important',
            boxShadow: 'none'
        }
    },
    data: {
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'row',
        textDecoration: 'none',
        color: 'inherit',
        alignItems: 'center',
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        minHeight: '3.5rem',
    },
    toolbar: {
        height: '2.8rem',
        display: 'flex',
        alignItems: 'center',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    avatar: {
        height: '40px',
        width: '40px',
        margin: '0 0rem 0 0.5rem',
        objectFit: 'cover',
        borderRadius: '50%',
    },
    titleWrapper: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        overflow: 'hidden',
        padding: '0.5rem 0.5rem',
        width: '100px', // to allow truncate texxt
    },
})

class RData extends React.Component {

    render() {

        const {
            urlAvatar,
            title,
            description,
            classes,
        } = this.props

        return (
            <section className={classes.root}>

                <section className={classes.data}>

                    {/* Render avatar */}
                    {urlAvatar !== false &&
                        <img
                            className={classes.avatar}
                            src={urlAvatar}
                        />
                    }

                    <div
                        className={classes.titleWrapper}
                        onClick={this.onClickData} style={{
                            display: 'flex', justifyContent: 'center', flexDirection: 'column', flex: 1
                        }}
                    >
                        <Typography variant='body1' component='div' align="left" noWrap={true} >
                            {title}
                        </Typography>
                        <Typography variant='subtitle2' component='div' align="left" noWrap={true} >
                            {description}
                        </Typography>
                    </div>
                </section>

            </section>
        )
    }
}

RData.defaultProps = Props;
export default withStyles(Style)(RData)
