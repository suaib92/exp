import React from 'react';  
import Header from './components/Header';  
import Home from './components/home';  // Ensure 'Home' is capitalized if the filename is `Home.js`
import Footer from './components/Footer';  

const App = () => {  
  return (  
    <div className="flex flex-col min-h-screen"> {/* Ensures the layout spans the entire viewport height */}
      {/* Header */}
      <Header />  

      {/* Main Content */}
      <main className="flex-grow">  
        <Home />  
      </main>  

      {/* Footer */}
      <Footer />  
    </div>  
  );  
};  

export default App;  
