import React from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'

const routingExampe = (props) => {
  console.log(props)
 return (
 <div>
    <h1> 
      <div>
      LINK TO HOME PAGE 
      </div>
     
      <Link to="/"> Home Page </Link>
      <button onClick = { () => props.history.push('/page')}> To Pages </button>
    </h1>
  </div>
 )
  
 }


const hatsPage = (props) => (
  <div>
    <h1>
     HATS PAGE
    </h1>
  </div>
)

const topicsPage = (props) => (
  <div>
    <h1>
      TOPICS PAGE
      THE TOPICID IS {props.match.params.topicId}
    </h1>
  </div>
)

function App() {
  return (
    <div>
    {/* <HomePage />  */}

    <Switch >
    
    <Route exact path = '/' component={HomePage} />
    <Route  path = '/shop/hats' component={hatsPage} />
    <Route  path="/topics/:topicId" component = {topicsPage} />
 
    </Switch>
 

    </div>
  );
}

export default App;
