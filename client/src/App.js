import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from './components/Auth/Auth';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import {purple } from "@material-ui/core/colors";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Banner from "./components/Banner/Banner";
const theme = createMuiTheme({
  palette:{
    primary:{
      main: '#fefefe'
    },
    secondary: purple
  },
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
       <Navbar/>
       <Switch>
         <Route exact path='/' component={Banner}/>
         <Route exact path='/home' component={Home}/>
         <Route exact path='/auth' component={Auth}/>
       </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
