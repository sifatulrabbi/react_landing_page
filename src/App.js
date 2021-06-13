import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components'
import { Home } from './Pages'

function App() {
   return (
      <Router>
         <GlobalStyles />
         <Navbar />
         <Switch>
            <Route to='/' exact component={Home} />
         </Switch>
         <Footer />
      </Router>
   )
}

export default App
