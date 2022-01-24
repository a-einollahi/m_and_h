import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as BrandLogo } from '../../../assets/Logo.svg';
import { ReactComponent as ADD_SHOPPING_LOGO } from '../../../assets/svg/add_shopping_cart_black_24dp.svg';
import { useScrollPosition } from '../../../hooks/useScrollPosition';

import Login from '../../Login';

const activeClass = ({ isActive }) => {
  return isActive ? 'navbar__link navbar__active' : 'navbar__link';
};

export default function Nabar() {
  const [stickyOnScroll, setStickyOnScroll] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y >= 35;

      const stickyMode = !!stickyOnScroll;
      if (isShow !== stickyMode) {
        isShow ? setStickyOnScroll('sticky') : setStickyOnScroll('');
      }
    },
    [stickyOnScroll],
    null,
    true,
    250
  );

  return (
    <header style={{ position: stickyOnScroll ? 'sticky' : 'static' }}>
      <p
        className="navbar__brand--desc"
        style={{ position: stickyOnScroll && 'absolute' }}
      >
        تهیه سالاد، فینگرفود، غذای سرد. آماده برای ارائه خدمات در مراسم‌های شما.
      </p>
      <nav>
        <div className="navbar__brand--logo">
          <BrandLogo />
          <h3>ام اند اچ</h3>
        </div>

        <ul className="navbar__navigations">
          <li>
            <NavLink to="/products" className={activeClass}>
              سفارش اینترنتی غذا
            </NavLink>
          </li>
          <li>
            <NavLink to="/branches" className={activeClass}>
              شعبه ها
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={activeClass}>
              درباره ما
            </NavLink>
          </li>
          <li className="navlink" onClick={() => setShowLogin(true)}>
            ورود
          </li>
          <li>
            <NavLink to="/shop" className={activeClass}>
              <ADD_SHOPPING_LOGO />
            </NavLink>
          </li>
        </ul>
      </nav>
      {showLogin && <Login show={showLogin} />}
    </header>
  );
}
