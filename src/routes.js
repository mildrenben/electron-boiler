import React from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import Home from './screens/Home'
import Contact from './screens/Contact'
import { hot } from 'react-hot-loader'

const Routes = () => (
  <BrowserRouter>
    <div>
     { window.location.pathname.includes('index.html') && <Redirect to='/' /> }
      <header>
        header1
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
      </header>
      <main>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
      </main>
    </div>
  </BrowserRouter>
)

export default hot(module)(Routes)