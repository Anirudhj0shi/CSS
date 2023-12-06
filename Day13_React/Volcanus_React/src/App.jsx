
// {
//   import React from 'react';
// import Person from "./Components/Person"; 
// import Aadharcard from "./Components/Aadharcard" 


// const App = () => 
// {

//   return (
//     <>
//     <div className='superman'>
//       <Person name={"laxman"} age={22} gmail={"laxman@gmail.com"}
//       fathername={"ashok joshi"}/><br/>
//       <Person name={"yash"} age={72} gmail={"YAsh@gmail.com"}/><br/>
                
//       <Person /><br/>
//       <Aadharcard />
//     </div>
//     </>
//   );

// };

// export default App }

// .............


// import React from 'react';
// import Counter from "./Components/Counter";


// const App = () => 
// {
  
  //   return (
    //     <>
    //     <Counter />
    
//     </>
//   )

// };

// export default App

// .............


// --------------------------------------------------------

// import React from 'react';
// import Userstateexam from "./Components/Userstateexam";


// const App = () => 
// {
  
//     return (
//         <>
//         <Userstateexam/>
    
//     </>
//   )

// };

// export default App

// -----------------------------------------------------------
import React from 'react';
import Products from './Components/Products'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Router/Home'
import About from './Components/Router/About'
import Career from './Components/Router/Career'
import Teams  from './Components/Router/Teams'
import Contact from './Components/Router/Contact'
import DynamicRoute from './Components/Router/DynamicRoute';



const App = () => 
{
     return (
        <>
        <Router>
          <Navbar />
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'/career'} element={<Career />} />
            <Route path={'/Products'} element={<Products />} />
            <Route path={'/teams'} element={<Teams />} />
            <Route path={'/contact'} element={<Contact />} />
            <Route path={'/Products/:slug'} element={<DynamicRoute />} />


          </Routes>
          {/* <Products></Products> */}
        </Router>
        </>
      )

};

export default App;

// -----------------------------------------------------------

// import React from 'react';

// import Use_Effect from './Components/Use_Effect';


// const App = () => 
// {
//    return (
//      <>
//     <div>
        
//         <Use_Effect />

//     </div>
//     </>
//   )

// };

// export default App;

// -----------------------------------------------------------

// import React from 'react';
// import Fetch_data from './Components/Fetch_data';




// const App = () => 
// {
//   return (
//     <>
//     <div>
        
//         <Fetch_data />

//     </div>
//     </>
//   )
  
// };

// export default App;

// -----------------------------------------------------------
