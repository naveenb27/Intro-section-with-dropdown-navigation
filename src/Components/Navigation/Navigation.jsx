import './Navigation.css';
import { useEffect, useState } from 'react';

const Navigation = () => {
    const [navStatus, setNavStatus] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [navStatus1, setNavStatus1] = useState(false);
    const [navActive, setNavActive] = useState(false);


    const navAct = () => {
        setNavActive((n) => !n);
    };


    const setNav = () => {
        setNavStatus((s) => !s);

        if (navStatus1) {
        setNavStatus1(false);
        }
    };


    const setNav1 = () => {
        setNavStatus1((s) => !s);

        if (navStatus) {
        setNavStatus(false);
        }
    };

    useEffect(() => {
        const handleResize = () =>{
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    useEffect(()=>{
        if(width > 600){
            setNavActive(false);
        }
    }, [width])
  

  return (
    <div className="nav-container">
      <div className="lists">
        <div className="logo">snap</div>
        <div className={!navActive ? 'list' : 'dontshow-list'}>
          <div className="list-1 nav-list">
            <li onClick={setNav}>Features</li>
            <img
              className="drop-down"
              src="./images/icon-arrow-down.svg"
              alt="down"
            />
            <img
              className="drop-up"
              src="./images/icon-arrow-up.svg"
              alt="up"
            />

            <div className={navStatus ? 'feature-list' : 'hidden'}>
              <div>
                <img src="./images/icon-todo.svg" alt="todo" />
                <p>Todo List</p>
              </div>
              <div>
                <img src="./images/icon-calendar.svg" alt="todo" />
                <p>Calendar</p>
              </div>
              <div>
                <img src="./images/icon-reminders.svg" alt="todo" />
                <p>Reminders</p>
              </div>
              <div>
                <img src="./images/icon-planning.svg" alt="todo" />
                <p>Planing</p>
              </div>
            </div>
          </div>
          <div className="list-2 nav-list">
            <li onClick={setNav1}>Company</li>
            <img
              className="drop-down"
              src="./images/icon-arrow-down.svg"
              alt="down"
            />
            <img
              className="drop-up"
              src="./images/icon-arrow-up.svg"
              alt="up"
            />
            <div className={navStatus1 ? 'feature-list-1' : 'hidden'}>
              <div>History</div>
              <div>Our Team</div>
              <div>Blog</div>
            </div>
          </div>
          <div className="list-3 nav-list">
            <li>Careers</li>
          </div>
          <div className="list-4 nav-list">
            <li>About</li>
          </div>
        </div>
      </div>
      <div className="login">
        <div className="login-button">Login</div>
        <div className="button">
          <button>Register</button>
        </div>
      </div>
      <div className="nav">
        <img
          onClick={navAct}
          className={!navActive ? 'list-active' : ''}
          src="./images/icon-menu.svg"
          alt="nav-menu"
        />
        <img
          onClick={navAct}
          className={!navActive ? '' : 'close-active'}
          src="./images/icon-close-menu.svg"
          alt="close"
        />
      </div>
    </div>
  );
};

export default Navigation;
