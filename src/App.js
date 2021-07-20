import './App.css';
import { TextField, Grid, Typography, Container, Box, Paper, Button, FormControl, InputAdornment, Input, CssBaseline } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';


const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    paper: {
      padding: theme.spacing(3)
    },
    btngroup: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    resultPaper: {
      display: "flex",
      flexDirection: "column",
      height: '100%',
      justifyContent: 'space-between'
    }
  }
})

function App() {

  const classes = useStyles()
  const theme = useTheme()

  const [tip, setTip] = useState(0)
  const [total, setTotal] = useState(0)
  const [bill, setBill] = useState(0)
  const [numPeople, setNumPeople] = useState(0)

  console.log('numPeople:', numPeople)
  console.log('bill:', bill)

  const calculate = (rate) => {
    console.log("calculate!", rate)
    let currentTip = (bill / rate).toFixed(2)
    let tipPerPerson = currentTip / numPeople
    console.log('tipPerPerson:', tipPerPerson)
    let totalPerPerson = ((currentTip + bill) / numPeople).toFixed(2)
    console.log('totalPerPerson:', totalPerPerson)
    setTip(tipPerPerson)
    setTotal(totalPerPerson)
  }

  const reset = () => {
    setTip(0)
    setTotal(0)
    setBill(0)
    setNumPeople(0)
  }
  return (
    <ThemeProvider theme={theme}>
    <Container className={ classes.root}>
        <Paper className={ classes.paper}>
          <Grid container spacing={ 2}>
            <Grid item xs={6}>
              <TextField
                id="bill" name="bill" label="Bill"
                variant="filled" fullWidth
                onChange={ (e) => setBill((Number(e.target.value)).toFixed(2))}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Grid container spacing={2} className={ classes.btngroup}>
                <Grid item xs={4}>
                  <Button disableElevation variant="contained" fullWidth size="large" color="primary" onClick={() => calculate(0.05) }>
                    5%
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button disableElevation variant="contained" fullWidth size="large" color="primary" onClick={() => calculate(0.1)}>
                    10%
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button disableElevation variant="contained" fullWidth size="large" color="primary" onClick={() => calculate(0.15)}s>
                    15%
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button disableElevation variant="contained" fullWidth size="large" color="primary" onClick={() => calculate(0.1)}>
                    25%
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button disableElevation variant="contained" fullWidth size="large" color="primary" onClick={() => calculate(0.5)}>
                    50%
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Input placeholder="Custom" id="anyPercent" aria-describedby="my-helper-text" />
                </Grid>
              </Grid>
              <TextField
                id="numberPeople" label="Number of People"
                variant="filled" fullWidth
                onChange={ (e) => setNumPeople(Math.round(e.target.value))}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmojiPeopleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={0} className={classes.resultPaper}>
                <Box>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h6">Tip Amount</Typography>
                    <Typography variant="body2">/ person</Typography>
                  </Grid>
                  <Grid item xs={6}>
                      <Typography variant="h2" component="h5">${ tip}</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="body2">/ person</Typography>
                  </Grid>
                  <Grid item xs={6}>
                      <Typography variant="h2" component="h5">${ total}</Typography>
                  </Grid>
                  </Grid>
                </Box>
                <Button disableElevation fullWidth variant="contained" size="large" color="primary" onClick={ reset }>RESET</Button>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      <CssBaseline />
      </Container>
      </ThemeProvider>
  );
}

export default App;
