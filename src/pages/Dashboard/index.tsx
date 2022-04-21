import React, { useState } from "react";
import { useQuery } from "react-query";
import { MdFavorite } from "react-icons/md";

import logoImg from "../../assets/logo.svg";

import * as S from "./styles";

const Dashboard: React.FC = () => {
  const [favoritButton, setFavoritButton] = useState(false);

  const query = useQuery("repos");
  return (
    <>
      <img src={logoImg} alt="Logo" />
      <S.Title>Explore repositórios no Github</S.Title>

      <S.Repositories>
        <a href="">
          <img
            src="https://avatars.githubusercontent.com/u/53385345?s=400&u=acf678239213e2f5b112f256e61029019c11214d&v=4"
            alt="Avatar"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy high scalable React</p>
            <span>htpps://rocketseat.com</span>
          </div>

          <button onClick={() => setFavoritButton(!favoritButton)}>
            <MdFavorite size={24} />
          </button>
        </a>

        <a href="">
          <img
            src="https://avatars.githubusercontent.com/u/53385345?s=400&u=acf678239213e2f5b112f256e61029019c11214d&v=4"
            alt="Avatar"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy high scalable React</p>
            <span>htpps://rocketseat.com</span>
          </div>

          <button onClick={() => setFavoritButton(!favoritButton)}>
            <MdFavorite size={24} />
          </button>
        </a>

        <a href="">
          <img
            src="https://avatars.githubusercontent.com/u/53385345?s=400&u=acf678239213e2f5b112f256e61029019c11214d&v=4"
            alt="Avatar"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy high scalable React</p>
            <span>htpps://rocketseat.com</span>
          </div>

          <button onClick={() => setFavoritButton(!favoritButton)}>
            <MdFavorite size={24} />
          </button>
        </a>
      </S.Repositories>
    </>
  );
};

export default Dashboard;
