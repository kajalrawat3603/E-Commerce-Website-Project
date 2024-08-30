import React, { useState, useEffect , useRef} from 'react';
import { useLocation } from 'react-router-dom';
import '../style.css';

const Nav = ({ isLoggedIn, onLogout }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const shouldShowSearch = !['/', '/contact', '/blog'].includes(location.pathname);
  const show = location.pathname === '/';

  useEffect(() => {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    const handleBarClick = () => {
      nav.classList.add('active');
    };

    const handleCloseClick = () => {
      nav.classList.remove('active');
    };

    if (bar) {
      bar.addEventListener('click', handleBarClick);
    }

    if (close) {
      close.addEventListener('click', handleCloseClick);
    }

    return () => {
      if (bar) {
        bar.removeEventListener('click', handleBarClick);
      }

      if (close) {
        close.removeEventListener('click', handleCloseClick);
      }
    };
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className="logo">
        <img src='images/logo.png'></img>
      </div>
      <div>
        <ul id="navbar">
          <li><a href="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</a></li>
          {show && <li><a href="/#category" className={({ isActive }) => (isActive ? 'active' : '')}>Category</a></li>}
          {show && <li><a href="/#about" className={({ isActive }) => (isActive ? 'active' : '')}>About</a></li>}
          {!show && <li><a href="/fashion" className={({ isActive }) => (isActive ? 'active' : '')}>Fashion</a></li>}
          {!show && <li><a href="/gifts" className={({ isActive }) => (isActive ? 'active' : '')}>Gifts</a></li>}
          {location.pathname === '/gifts' && (
            <li>
              <a href="#">Occasions</a>
              <div className="sub-menu">
                <ul>
                  <li>
                    <a href="#">
                      UPCOMING OCCASIONS<i className="fa fa-angle-right" style={{ float: 'right' }}></i>
                      <div className="sub-menu1">
                        <ul>
                          <li><a href="#">Christmas - 25th Dec</a></li>
                          <li><a href="#">New Year - 1st Jan</a></li>
                          <li><a href="#">Lohri - 13th Jan</a></li>
                          <li><a href="#">Makar Sankranti - 14th Jan</a></li>
                          <li><a href="#">Pongal - 15th Jan</a></li>
                          <li><a href="#">Valentine's Day - 14th Feb</a></li>
                          <li><a href="#">Holi - 8th Mar</a></li>
                          <li><a href="#">Women's Day - 8th Mar</a></li>
                          <li><a href="#">Mother's Day - 14th May</a></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      EVERYDAY WEEDING<i className="fa fa-angle-right" style={{ float: 'right' }}></i>
                      <div className="sub-menu1">
                        <ul>
                          <li><a href="#">House Warming</a></li>
                          <li><a href="#">New Born Baby</a></li>
                          <li><a href="#">Wedding</a></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      EMOTIONS/SENTIMENTS<i className="fa fa-angle-right" style={{ float: 'right' }}></i>
                      <div className="sub-menu1">
                        <ul>
                          <li><a href="#">Congratulations</a></li>
                          <li><a href="#">Get Well Soon</a></li>
                          <li><a href="#">Sympathy N Funeral</a></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          )}
          <li><a href="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>Blog</a></li>
          <li><a href="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</a></li>
          {shouldShowSearch && (
            <li>
              <section id="search">
                <input className="searchtext" type="text" placeholder="Search" />
                <a className="searchbutton" href="#">
                  <i className="fas fa-search"></i>
                </a>
              </section>
            </li>
          )}
          
          <li id="user">
            {isLoggedIn ? (
              <>
                  <img
                    src="images/loggedin.png" style={{ width: '30px' ,display:'block'}}
                    alt="User" title="User" onClick={handleDropdownToggle} 
                  />
                {isDropdownOpen && (
                  <div className="sub-menu" style={{ zIndex:100}}>
                    <ul>
                    <li><a href="/user">User Details</a></li>
                    <li>
                    <a href="#" onClick={onLogout}>Logout</a>
                    </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <a href="/login">
                <img
                  title="Login"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClklEQVR4nO2VTWgTQRTHpwo1jULqx6UeWohCCtqvSNlsM7vzf7vTNoeQW9CTN6/iWS8WURDBowoFsRcRRcSiB+mlCr15E48K7UEqqLcqYpORFzYyhCRNsvGkD4bJzvv4vZl58yLEf2kj5XJ5fy6XO8Kz+MsyoJQ6B+ANgF0iWucZwGsAZ1nfV9r8/PxBAM+JyFhjveH7WbFYTPYNCuCpDQDwMwiCxzw3gJ/0BUhEJSvoLwCXC4XCAdbxzN+8XrdRShVjQwG8tKBXWyS2ZJ3CamwoEX2LAlallIeb2fA66yPol7jMAQCVToKxPrKrxK5kANscbGFhwYyPj480s/E8b8S6gk8irhDRozAMzeTkpBFCLLewWbbu9GFsaBiG7uLiYnVoaIihZmxsbKVUKmWEEPuIKANgxdplFYAj+iGu695OJBIMNEEQGM/zjO/79vus7/JWX4BKqWMA7tYLqtkAYNLpdCWZTN4Jw/BoXOBpIvrYDOT7ftV13drviYmJ2tEPDw9zwX0golO9Ak8C+Grthpv8AwAh92K2KZfLh6SUenBwcEUIsZvJZIzWuva8iOhEV0CtdYqIPlvAzSAIsu18UqnUmUKhsGn5bHNS3ezyhXWU37XWox0mO0pEPyzf1U6BCSL6UzRKqaWOsxVCBEFwzdptpf7n0FY8z7skpaw9CaXUjuhBfN/f4WfFcaSUF/d0cBxnbXZ21jiOY/L5/KteoHNzc2vsz3FyudzeMbLZ7PupqSkzPT3N4Bu9QB3Hucn+3DpnZmbe7enguu696Fj4TraI6G3jAHCfbXluod9i/3w+bzheR5lKKa+06j5RgWxE0I12XcrzvOtdHRERnY8aQtfQyO+C6EW01sfDMEw3Dl7vRC/+efkNwwaRC2KVvtwAAAAASUVORK5CYII="
                  alt="Login"
                />
              </a>
            )}
          </li>
          {isLoggedIn && 
              <li id="cart">
              <a href="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA9ElEQVRIid3UPy5EURzF8Q8FCgURNY0FSMQaDInKVqxBZgMqyRTCCqaU0NuBckaFkjwKf4r7S7yMZNz7vCfhJLf7/s45N/eXy3/RG97jDLoIeK0FPGO1ixAY1oKansu64exEwHELJafefgY30WS3wHQJ9zG3/x18GOCwIKAfM1c58DKepM3ayODXUQW/ldtoEI36Gex5sKe55rAZQw9YmMJtS80rrJUEwLX81TwqNV/BXYZxhTPMlwachMGFtLqtalH6Ll7kbVGx5vCo2TeRrQN5b9A4oHPt4RZj9Frgvmjs89qjn3CT3/WvqSe1G2GnBe4P6wMWynZC39nrkQAAAABJRU5ErkJggg=="
                  title="Cart"
                  alt="Cart"
                />
              </a>
            </li>
          }
          <li id="close">
            <a href="#">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAx0lEQVRIie2U0QqCQBBFj31gW6H4UN9eUGSF/YGBPbSCyK7MjEpEe8AnZ+7ZXWeFROKfKIAncAU2ir4tcANqINdKM9/Y+qcBSkFf6Wu7vlorBnj0AiTyobQF7hbxLhAUk4ekjc8wkQcCX8ChV1NEavZWqUS+mLQjdpTSTzGJ0M4X26lUrpaulOLM+G4SoUEam/ZZ+MpwjV0ZyT2fXdoxu9wFArW/TGcRX4TSMfnZIq4U0pi8sogdnxUf0R2ZA06+d20RJxK/yRsz0J/5iLMyRAAAAABJRU5ErkJggg=="
                alt="Close"
              />
            </a>
          </li>
        </ul>
      </div>
      <div id="mobile">
      {isLoggedIn ? (
              <>
                  <img
                    src="images/loggedin.png" style={{ width: '20px' ,display:'block'}}
                    alt="User" title="User" onClick={handleDropdownToggle} 
                  />
                {isDropdownOpen && (
                  <div className="sub-menu" style={{ zIndex:100}}>
                    <ul>
                    <li><a href="/user">User Details</a></li>
                    <li>
                    <a href="#" onClick={onLogout}>Logout</a>
                    </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <a href="/login">
                <img
                  title="Login"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClklEQVR4nO2VTWgTQRTHpwo1jULqx6UeWohCCtqvSNlsM7vzf7vTNoeQW9CTN6/iWS8WURDBowoFsRcRRcSiB+mlCr15E48K7UEqqLcqYpORFzYyhCRNsvGkD4bJzvv4vZl58yLEf2kj5XJ5fy6XO8Kz+MsyoJQ6B+ANgF0iWucZwGsAZ1nfV9r8/PxBAM+JyFhjveH7WbFYTPYNCuCpDQDwMwiCxzw3gJ/0BUhEJSvoLwCXC4XCAdbxzN+8XrdRShVjQwG8tKBXWyS2ZJ3CamwoEX2LAlallIeb2fA66yPol7jMAQCVToKxPrKrxK5kANscbGFhwYyPj480s/E8b8S6gk8irhDRozAMzeTkpBFCLLewWbbu9GFsaBiG7uLiYnVoaIihZmxsbKVUKmWEEPuIKANgxdplFYAj+iGu695OJBIMNEEQGM/zjO/79vus7/JWX4BKqWMA7tYLqtkAYNLpdCWZTN4Jw/BoXOBpIvrYDOT7ftV13drviYmJ2tEPDw9zwX0golO9Ak8C+Grthpv8AwAh92K2KZfLh6SUenBwcEUIsZvJZIzWuva8iOhEV0CtdYqIPlvAzSAIsu18UqnUmUKhsGn5bHNS3ezyhXWU37XWox0mO0pEPyzf1U6BCSL6UzRKqaWOsxVCBEFwzdptpf7n0FY8z7skpaw9CaXUjuhBfN/f4WfFcaSUF/d0cBxnbXZ21jiOY/L5/KteoHNzc2vsz3FyudzeMbLZ7PupqSkzPT3N4Bu9QB3Hucn+3DpnZmbe7enguu696Fj4TraI6G3jAHCfbXluod9i/3w+bzheR5lKKa+06j5RgWxE0I12XcrzvOtdHRERnY8aQtfQyO+C6EW01sfDMEw3Dl7vRC/+efkNwwaRC2KVvtwAAAAASUVORK5CYII="
                  alt="Login"
                />
              </a>
            )}
      {isLoggedIn && 
        <a href="/cart">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA9ElEQVRIid3UPy5EURzF8Q8FCgURNY0FSMQaDInKVqxBZgMqyRTCCqaU0NuBckaFkjwKf4r7S7yMZNz7vCfhJLf7/s45N/eXy3/RG97jDLoIeK0FPGO1ixAY1oKansu64exEwHELJafefgY30WS3wHQJ9zG3/x18GOCwIKAfM1c58DKepM3ayODXUQW/ldtoEI36Gex5sKe55rAZQw9YmMJtS80rrJUEwLX81TwqNV/BXYZxhTPMlwachMGFtLqtalH6Ll7kbVGx5vCo2TeRrQN5b9A4oHPt4RZj9Frgvmjs89qjn3CT3/WvqSe1G2GnBe4P6wMWynZC39nrkQAAAABJRU5ErkJggg=="
            title="Cart"
            alt="Cart"
          />
        </a>
      }
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </nav>
  );
};

export default Nav;
