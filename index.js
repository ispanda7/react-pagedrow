import React, { Component } from 'react';
import {render} from 'react-dom';
import Screen from './src/pagedraw/screen';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'semantic-ui-css/semantic.min.css';
import './src/bootstrap.css'

/* FIXME/Warning: This file includes outside global CSS from multiple sources which can interact in weird ways and 
 * cause Pagedraw generated CSS to break. This is just an attempt to show a basic integration between Pagedraw and outside component libraries.
 * Please namespace your component library's CSS before using it in a serious project. */

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      country: ''
    }
  }

  render() {
    return <MuiThemeProvider>
      <Screen username={this.state.username} onChangeUsername={(evt, nv) => this.setState({username: nv})} 
        country={this.state.country} onChangeCountry={(evt, data) => this.setState({country: data.value})} />
    </MuiThemeProvider>;
  }
}

render(<App />, document.getElementById('root'));
