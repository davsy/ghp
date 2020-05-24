import React from 'react';
import Navbar from './components/navbar/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contatct'
import Divider from '@material-ui/core/Divider';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container className="App" maxWidth="xl">
      <Navbar/>
      <About/>
      <Experience/>
      <Divider />
      <Contact/>
      <br></br>
    </Container>
  );
}

export default App;
