import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";
import { MdFavorite } from "react-icons/md";

import logoImg from "../../assets/logo.svg";

import * as S from "./styles";

import { useRepository } from "../../hooks/repository";

const FeedRepositorie: React.FC = () => {
  const { repositories, like, unlike } = useRepository();

  return (
    <S.Container>
      <header>
        <img src={logoImg} alt="Logo" />
        <nav>
          <Link to="/">Feed</Link>
          <Link to="like-repositories">Like</Link>
        </nav>
      </header>
      <S.Title>
        Explore repositórios no Github
        {!repositories.length && (
          <Spinner size="sm" color="gray.500" ml="4"></Spinner>
        )}
      </S.Title>

      {!repositories.length ? (
        <Flex justify="center">
          <Spinner />
        </Flex>
      ) : (
        <S.Repositories>
          {repositories?.map((repos) => (
            <section key={repos.id}>
              <img src={repos.owner.avatar_url} alt={repos.owner.login} />
              <div>
                <strong>{repos.full_name}</strong>
                <p>{repos.description}</p>
                <span>{repos.owner.url}</span>
              </div>

              <button
                onClick={() =>
                  repos.like ? unlike(Number(repos.id)) : like(Number(repos.id))
                }
              >
                <MdFavorite size={24} color={repos.like ? "red" : "#3a3a3a"} />
              </button>
            </section>
          ))}
        </S.Repositories>
      )}
    </S.Container>
  );
};

export default FeedRepositorie;
