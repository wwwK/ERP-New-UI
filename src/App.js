import React from 'react';
import InsNavbar from './Components/InsNavbar/InsNavbar';


import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <InsNavbar/>
      <Navbar/>
    </div>
  
  );
}

export default App;

//  <Router>
  //   <Navbar/>
  //   <main>
  //     <Switch>
  //       <Route path="/" exact>
  //         <Home/>
  //       </Route>
  //       <Route path="/about" exact>
  //         <About/>
  //       </Route>
  //       <Route path="/service" exact>
  //         <Services/>
  //       </Route>
  //       <Route path="/testimonial" exact>
  //         <Testimonial/>
  //       </Route>
  //       <Route path="/contact" exact>
  //         <Contact/>
  //       </Route>
  //       <Redirect to="/" />
  //     </Switch>
  //   </main>
  //  </Router>