import Page1 from './Pages/Page1';
import Page2 from './Page2';
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import Navbar from './Components/Navbar'
import React from 'react';



import {
  BrowserRouter,
  Route,
  Switch,
  }from "react-router-dom"
function App() {
  return (
      <BrowserRouter >
        <Navbar />
           <Switch>
                    {/* //exact get the exact path */}
                   {/* //first route is fixed */}
              <Route path={"/"}  exact component={Page1} />
             {/* // "/component will get "/" compoment in addition to page2" */}
              <Route path={"/Page2"} component={Page2} />
              <Route path={"/Page3"} component={Page3} />
              <Route path={"/Page4"} component={Page4} />

              </Switch>
      </BrowserRouter>
  );
}

export default App;
