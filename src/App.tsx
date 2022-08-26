import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BurgerMenu } from '@components';
import { Header, Footer } from '@components/layout';
import { useWindowDimensions } from '@hooks';
import { Main, Incubator, AboutUs } from '@components/pages';
/** 
 @return {ReactElement} the main app 
*/
function App() {
    return <h1>efe</h1>;
    // const dim = useWindowDimensions();
    // return (
    //     <Router basename='/game-hub'>
    //         {dim.width < 800 ? <BurgerMenu /> : <Header />}
    //         <Routes>
    //             <Route
    //                 path='/'
    //                 element={
    //                     <>
    //                         <Main />
    //                     </>
    //                 }
    //             />
    //             <Route
    //                 path='/incubator'
    //                 element={
    //                     <>
    //                         <Incubator />
    //                     </>
    //                 }
    //             />
    //             <Route
    //                 path='/about-us'
    //                 element={
    //                     <>
    //                         <AboutUs />
    //                     </>
    //                 }
    //             />
    //         </Routes>
    //         <Footer />
    //     </Router>
    // );
}

export default App;
