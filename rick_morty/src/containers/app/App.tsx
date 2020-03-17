import React from 'react';
import Spinner from '../../components/Spinner';
import Header from '../../components/header/Header';
import HomeBody from '../../components/HomeBody';
import Footer from '../../components/Footer';

// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is the replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.

const App = () => {

    return (
        <div>
            <Header primary></Header>
            {/* <HomeBody name="body"/> */}
            <Footer name="footer"/>
            <Spinner message="spinner"></Spinner>
        </div>
    )
}

export default App;