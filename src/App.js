/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Outlet } from 'react-router-dom';


function App() {
  const styles = {
    app: css`
      width: 375.5px;
    `,
  };
  return (
    <div css={styles.app} className="App">
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
