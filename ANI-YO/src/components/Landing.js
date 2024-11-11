import React from 'react';
import Detect from './Detect';
import react from './logoicons/react.png';
import tf from './logoicons/tf.png';
import keras from './logoicons/keras.png';
import colab from './logoicons/colab.png';

const Landing = () => {
    return (
        <div className="App">
        <div id="overlayer"></div>
  
        <div className="loader">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>

        <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>
          
          <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
            
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <h5>&nbsp;ANI-YO</h5>
              
              </div>
            </div>
            
          </header>

          

        <div className="site-section" id="glance-section"  data-aos="fade">
        <div style={{ marginBottom: '50px' }} className="container">

          <div className="row align-items-center">
          </div>
        </div>
        <div className="site-section " id="demo-section" data-aos="fade">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-5">
                  <h2 className="section-title">Demo</h2>
                </div>
              </div>
            </div>
          <div style={{ marginTop: '100px', marginBottom: '50px' }}>
            <Detect/>
          </div>
        </div>
        
      </div>
          
        </div>
      </div>
    )
}

export default Landing;