/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Link } from "react-router-dom";

const Navbar = ({ leftIconLink, leftIcon, title, rightIcon }) => {
  const styles = {
    navbar: css`
      width: 375.5px;
      display: grid;
      grid-template-columns: 50px 275.5px 50px;
      justify-content: center;
      align-items: center;
      padding: 53.2px 0 28.8px;
      border-bottom: 1px solid #e0e1e2;
      background-color: #fff;
      & li {
        list-style: none;
        margin: 0 auto;
      }
      & h1 {
        font-size: 1.125rem;
        color: #324755;
        text-align: center;
      }
    `,
  };
  return (
    <nav css={styles.navbar}>
      <li>
        <Link to={leftIconLink}>
            {leftIcon}
        </Link>
      </li>
      <h1>{title}</h1>
      <li>
        <Link to="/settings">
            {rightIcon}
        </Link>
      </li>
    </nav>
  );
};

export default Navbar;
