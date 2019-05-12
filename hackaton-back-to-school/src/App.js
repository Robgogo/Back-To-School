import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Categories from './containers/Categories/Categories';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/categories" component={Categories} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
