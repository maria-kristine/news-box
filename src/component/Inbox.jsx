/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useFetch from "../useFetch";
import Search from "./Search";
import Navbar from "./Navbar";
import DropdownBar from "./DropdownBar";
import NewsPost from "./NewsPost";
import { FiInbox } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";

const Inbox = () => {
  const { data: article } = useFetch(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=O930Ee99BSQCTnPTJwq7qpSKW6vZ63tH"
  );

  const styles = {
    inbox: css`
      background-color: #fff;
    `,
  };

  return (
    <div css={styles.inbox}>
      <Navbar
        leftIconLink="/archive"
        leftIcon={<FiInbox />}
        title="Newsbox"
        rightIcon={<IoSettingsSharp />}
      />
      <Search />
      {article && <DropdownBar article={article}/>}
      {article && <NewsPost article={article} />}
    </div>
  );
};

export default Inbox;
