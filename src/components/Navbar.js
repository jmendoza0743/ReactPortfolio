import React from 'react'

function Navbar() {
    return (
        <div className="container-fluid" id="toprow">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h1>Joel Mendoza</h1>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#aboutme">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        )
    }
export default Navbar