import './App.css';
import { TextField, Grid, Typography, Container, Box, Paper, Button, InputAdornment, CssBaseline } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles'
import Buttons from './components/Buttons'
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

  const [tip, setTip] = useState<number>(+(0).toFixed(2))
  const [total, setTotal] = useState<number>(+(0).toFixed(2))
  const [bill, setBill] = useState<number>(0)
  const [numPeople, setNumPeople] = useState<number>(0)

  const calculate = (rate : number) :void => {
    let currentTip = +(bill * rate).toFixed(2)
    let tipPerPerson = +currentTip / +numPeople
    let totalBill = currentTip + bill
    setTip(+((tipPerPerson).toFixed(2)))
    setTotal(+((totalBill).toFixed(2)))
  }

  const reset = () => {
    setTip(0)
    setTotal(0)
    setBill(0)
    setNumPeople(0)
  }

  const rates = [0.05, 0.1, 0.15, 0.25, 0.5]

  return (
    <ThemeProvider theme={theme}>
    <Container className={ classes.root}>
        <Paper className={ classes.paper}>
          <Grid container spacing={ 2}>
            <Grid item xs={6}>
              <TextField
                id="bill" name="bill" label="Bill"
                variant="filled" fullWidth
                onChange={(e) => setBill(+e.target.value)}
                placeholder="0"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Buttons calculate={calculate} rates={ rates } />
              <TextField
                id="numberPeople" label="Number of People"
                variant="filled" fullWidth
                placeholder="0"
                onChange={ (e) => setNumPeople(Math.round(+(e.target.value)))}
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
                      <Typography variant="h2" component="h5">${ total }</Typography>
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
