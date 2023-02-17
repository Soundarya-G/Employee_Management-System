import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-link active'
              data-toggle='pill'
              role='tab'
              aria-controls='pills-home'
              aria-selected='true'
            >
              Home{' '}
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-link'
              data-toggle='pill'
              role='tab'
              aria-controls='pills-about'
              aria-selected='false'
            >
              About{' '}
            </Link>
          </li>
          <li className='nav-item dropdown'>
            <Link
              className='nav-link dropdown-toggle'
              data-toggle='dropdown'
              role='button'
              l
              // aria-controls='pills-dropdown'
              // aria-selected='false'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Dropdown
            </Link>
            <div className='dropdown-menu'>
              <Link
                className='dropdown-item'
                aria-controls='pills-dropdown'
                aria-selected='false'
                role='tab'
                to='/fileupload'
              >
                Single File Upload
              </Link>
              <Link
                className='dropdown-item'
                aria-controls='pills-dropdown'
                aria-selected='false'
                role='tab'
                to='/multifileupload'
              >
                Multi File Upload
              </Link>
            </div>
          </li>
        </ul>
        <ul
          className='nav nav-pills navbar-right'
          id='pills-tab'
          role='tablist'
        >
          <li>
            <Link
              to='#'
              className='nav-link'
              data-toggle='pill'
              role='tab'
              aria-controls='pills-about'
              aria-selected='false'
            >
              <span className='glyphicon glyphicon-user'></span> Sign Up
            </Link>
          </li>
          <li>
            <Link
              to='#'
              className='nav-link '
              data-toggle='pill'
              role='tab'
              aria-controls='pills-about'
              aria-selected='false'
            >
              <span className='glyphicon glyphicon-log-in'></span> Login
            </Link>
          </li>
        </ul>

        {/* <div className='tab-content' id='pills-tabContent'>
          <div
            className='tab-pane fade show active'
            role='tabpanel'
            aria-labelledby='pills-home-tab'
          ></div>
          <div
            className='tab-pane fade'
            role='tabpanel'
            aria-labelledby='pills-about-tab'
          ></div>
          <div
            className='tab-pane fade'
            role='tabpanel'
            aria-labelledby='pills-dropdown-tab'
          ></div>
        </div> */}
      </nav>
    </>
  );
};

export default NavBar;
