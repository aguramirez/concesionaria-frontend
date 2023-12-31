import './NavBar.css';

export const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Rhaegar Autos</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            {/* <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Link</a>
                            </li> */}
                            <li className="nav-item dropdown mx-3">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admin tools
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/autos/crear">Crear</a></li>
                                    {/* <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                </ul>
                            </li>
                            {/* <li className="nav-item mx-3">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <nav className="navbar">
                <div className='logo'>
                    <h1>Rhaegar Autos</h1>
                </div>
                <div className='botones'>
                    <a href="">Home</a>
                    <a href="">Home</a>
                    <a href="">Home</a>
                    <a href="">Home</a>
                </div>
                <div className='burger'>
                    <a href=""><i className="fa-solid fa-bars fa-sm" style={{ color: '#ffffff' }}></i></a>
                </div>
            </nav> */}
        </>
    )
}