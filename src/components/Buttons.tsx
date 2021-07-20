import React from 'react'
import { Grid, Button, Input } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  }
})

type Props = {
  rates: number[],
  calculate: Function
}

const Buttons: React.FC<Props> = ({ rates, calculate }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={2} className={classes.root}>
      {rates.map((rate, key) => (
      <Grid item xs={4} key={ key}>
        <Button disableElevation variant="contained" fullWidth size="large" color="primary" onClick={() => calculate(rate) }>
            { +(rate) * 100}%
        </Button>
      </Grid>
      ))}
      <Grid item xs={4}>
        <Input placeholder="Custom" id="anyPercent" aria-describedby="my-helper-text" />
      </Grid>
    </Grid>
  )
}

export default Buttons
