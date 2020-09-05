import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
// import Footer from './components/Footer'
import LatestPhotos from './components/LatestPhotos'


const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <LatestPhotos />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )

}

export default App;
