import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AcUnitIcon from '@material-ui/icons/AcUnit'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  typographyStyle: {
    flex: 0.9,
    marginLeft: '10%',
  },
}))

function Header() {
  const classes = useStyles()
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.typographyStyle}>
          On reducing the browser to xs, the content get's centered inside the
          grid (color changes to orange red)
        </Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  )
}

export default Header
