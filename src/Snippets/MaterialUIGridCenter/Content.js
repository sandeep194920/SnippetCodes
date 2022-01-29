import React from 'react'
import CoffeeCard from './CoffeeCard'
import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'orange',
    /* when xs is hit, single card will be in each row but it will be left aligned. 
    To align the card to center we have the below code on hitting xs. May be there is a better way to do it but I found this after some trial error */
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'orangered',
    },
  },
}))

function Content() {
  const { root } = useStyles()
  return (
    <Box>
      <Grid className={root} container spacing={9}>
        <Grid item xs={10} md={6} lg={4}>
          <CoffeeCard />
        </Grid>
        <Grid item xs={10} md={6} lg={4}>
          <CoffeeCard />
        </Grid>
        <Grid item xs={10} md={6} lg={4}>
          <CoffeeCard />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Content
