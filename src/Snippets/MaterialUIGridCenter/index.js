import React from 'react'
import { Grid } from '@material-ui/core'
import Header from './Header'
import Body from './Body'

function MaterialUIGridContainer() {
  return (
    <Grid container direction='column'>
      <Header />
      <Body />
    </Grid>
  )
}

export default MaterialUIGridContainer
