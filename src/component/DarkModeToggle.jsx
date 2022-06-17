/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const DarkModeToggle = () => {
  const styles = {
    button: css`
    width: 178px;
    padding: 0 0 35px 0;
    margin: 0 auto;
      & button {
        text-align: center;
        font-size: 0.7rem;
        font-weight: lighter;
        text-transform: uppercase;
        border-radius: 50px;
        border: 1px solid #c8d1d3;
        padding: 16px 34px;
      }
    `,
  };
  return (
    <div css={styles.button}>
      <button >toggle dark mode</button>
    </div>
  );
};

export default DarkModeToggle;
