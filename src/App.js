import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './NotFoundPage/NotFound';
import AllProducts from './HomePage/home';


function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 bg-white">
          <div className="container">
            <Link className="navbar-brand" to="/AllProducts">
              <img src="https://imgeng.jagran.com/images/2021/jan/Myntra-805x530-1-700x4611611985286383.jpg" alt="Mynta" className="coco mr-5" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/Men">Men</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Women">Women</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/KIDS">KIDS</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/BEAUTY">BEAUTY</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/OFFERS">OFFERS</Link>
                </li>
              </ul>

              <div className="form-group has-search ml-3">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Search for Products" />
              </div>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/login" className="nav-link"><i className="fas fa-sign-in-alt"></i> Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/newuser" className="nav-link"><i className="fas fa-user-plus"></i> Sign Up</Link>
                </li>
              </ul>

              <div className="ml-auto">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle user-icon" type="button" id="dropdownMenuButton"
                          data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-user-circle fa-lg"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item" to="/profile">Profile</Link>
                    <Link className="dropdown-item" to="/editprofile">Edit Profile</Link>
                    <Link className="dropdown-item" to="/logout">Logout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/AllProducts" element={<AllProducts />} />
       
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
