import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">
                        <span className='logo'>Photo Gallery</span>
                        </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="/">Features</a>
                            <a className="nav-item nav-link" href="/">Pricing</a>
                            <a className="nav-item nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header