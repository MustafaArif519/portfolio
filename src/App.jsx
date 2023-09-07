import { useEffect, useCallback, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './App.css'
import Skillsets from './skillsets/Skillsets'
import Contract from './contract/Contract'
import Home from './home/Home'
import ErrorPage from './ErrorPage'
import About from './about/About'
import Navigation from './Navigation';
import Projects from './projects/Projects'


function App() {


  return (
    <>
        <Router >
          <Navigation />
          
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contract" element={<Contract  />} />
            <Route path="/skillsets" element={<Skillsets  />} />

            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Feel free to connect with me on my socials:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/Faridas-Cake-Boutique-101880002352320'
          target="_blank" rel="noopener noreferrer"
           className='me-4 text-reset' >
          <MDBIcon fab icon="linkedin fa-lg" style={{ color: '#3b5998' }} />
          </a>
          
          <a href="https://www.instagram.com/faridascakeboutique/" 
          className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="github fa-lg" style={{ color: '#ac2bac' }} />
          </a>

          
        </div>
      </section>




    </MDBFooter>
    </>
  )
}

export default App