/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoIosArrowBack } from "react-icons/io";

const DropdownBar = ({ article }) => {
  let categorie = article.results.map((categorie) => categorie.section)

  let sortedCategorie = categorie.filter((element, index) => {
    return categorie.indexOf(element) === index;
  })
  const styles = {
    dropdownBar: css`
      display: grid;
      grid-template-columns: 50px 257px 50px;
      gap: 10px;
      align-items: center;
      border-bottom: 1px solid #e0e1e2;
      background-color: #fff;
      & h2 {
        padding: 0 228px 0 0;
        text-transform: uppercase;
        font-size: 0.938rem;
        color: #334856;
      }
    `,
    iconSurf: css`
      background-color: #ffffff;
      border-radius: 50px;
      box-shadow: 3px 5px 10px 4px #efefef;
      margin: 10.8px 11px 11.8px 16px;
      width: 35px;
      height: 35px;
    `,
    surf: css`
      width: 18.91px;
      height: 18.91px;
      margin: 8.3px;
    `,
    iconArrow: css`
      transform: rotate(-90deg);
      margin: 0 auto;
      
    `,
  };
  return (
    <div>
      {sortedCategorie.map((categorie, index) => {
        return (
          <div css={styles.dropdownBar} key={index}>
            <div css={styles.iconSurf}>
              <img css={styles.surf} src="images/icn_surfing.png" alt="" />
            </div>
            <h2>{categorie}</h2>
            <IoIosArrowBack css={styles.iconArrow} />
          </div>
          
        );
      })}
    </div>
  );
};

export default DropdownBar;

