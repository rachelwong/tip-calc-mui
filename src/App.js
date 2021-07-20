import './App.css';
import { TextField, Grid, Typography, Container, Box, Paper, Button, FormControl, InputAdornment, Input, CssBaseline} from '@material-ui/core';
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
    }
  }
})

function App() {

  const classes = useStyles()
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
    <Container className={ classes.root}>
        <Paper className={ classes.paper}>
          <Grid container spacing={ 2}>
            <Grid item xs={6}>
              <TextField
                id="bill" name="bill" label="Bill"
                variant="filled" fullWidth
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
                  <Button variant="contained" fullWidth size="large" color="primary">
                    5%
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" fullWidth size="large" color="primary">
                    10%
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" fullWidth size="large" color="primary">
                    15%
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" fullWidth size="large" color="primary">
                    25%
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" fullWidth size="large" color="primary">
                    50%
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Input id="anyPercent" aria-describedby="my-helper-text" />
                </Grid>
              </Grid>
              <TextField
                id="numberPeople" label="Number of People"
                variant="filled" fullWidth
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
              <Paper>
                <Button fullWidth variant="contained" size="large" color="primary">RESET</Button>
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
