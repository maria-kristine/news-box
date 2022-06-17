/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const TopicToggle = ({ article }) => {
  const styles = {
    topicToggle: css``,
  };
  return (
    <div css={styles.topicToggle}>
      {article.results.map((article) => {
        return (
          <div>
            <h3>{article.section}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              alias atque nostrum sunt soluta quod incidunt perferendis. Magni
              necessitatibus saepe minus, porro quod neque corporis suscipit
              consectetur cumque at cum?
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TopicToggle;
