/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DarkModeToggle from "./DarkModeToggle";
import Navbar from "./Navbar";
import { IoIosArrowBack } from "react-icons/io";
import TopicToggle from "./TopicToggle";

const Settings = ({ article }) => {
  const styles = {
    settings: css`
      background-color: #eceff0;
      & h2 {
        color: #87bcbf;
        font-size: 1.875rem;
        text-align: center;
        font-weight: bold;
        padding: 38px 0 0 0;
      }
      & h3 {
        color: #707070;
        font-size: 1.25rem;
        font-weight: lighter;
        text-align: center;
        padding: 0 0 38px 0;
      }
      & p {
        color: #6e8ca0;
        font-size: 0.75rem;
        font-weight: lighter;
        text-align: center;
        padding: 0 0 30px 0;
      }
    `,
  };
  return (
    <div>
      <div>
        <Navbar
          leftIconLink="/inbox"
          leftIcon={<IoIosArrowBack />}
          title="New Settings"
        />
        <div css={styles.settings}>
          <h2>Manage</h2>
          <h3>Categories</h3>
          {article && <TopicToggle article={article} />}
          <DarkModeToggle />
          <p>Version 4.8.15.16.23.42</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
