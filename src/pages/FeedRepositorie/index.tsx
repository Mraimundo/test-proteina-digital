import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { MdFavorite } from "react-icons/md";

import { Repos, useRepos } from "../../services/hooks/useRepos";

import logoImg from "../../assets/logo.svg";

import * as S from "./styles";

const FeedRepositorie: React.FC = () => {
  const [favoritButton, setFavoritButton] = useState(false);

  const { data, isLoading, isFetching, error } = useRepos();
  const [repositorie, setRepositorie] = useState<Repos[] | undefined>(data);

  useEffect(() => {
    setRepositorie(data);
  }, [data]);

  function hanleLike(repo: any) {
    setFavoritButton(true);
    repositorie?.filter((item) => {
      if (item.id === repo.id) {
        return (repo.like = true);
      }
    });
  }

  // function hanleUnlike(repo: any) {
  //   console.log({ ...repo, like: false });
  // }

  // console.log(data);

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
        {!isLoading && isFetching && (
          <Spinner size="sm" color="gray.500" ml="4"></Spinner>
        )}
      </S.Title>

      {isLoading ? (
        <Flex justify="center">
          <Spinner />
        </Flex>
      ) : error ? (
        <Flex justify="center">
          <Text>Falha ao obter os repositórios</Text>
        </Flex>
      ) : (
        <S.Repositories>
          {repositorie?.map((repos) => (
            <section key={repos.id}>
              <img src={repos.owner.avatar_url} alt={repos.owner.login} />
              <div>
                <strong>{repos.full_name}</strong>
                <p>{repos.description}</p>
                <span>{repos.owner.url}</span>
              </div>

              <button onClick={() => hanleLike(repos)}>
                <MdFavorite
                  size={24}
                  color={favoritButton ? "red" : "#3a3a3a"}
                />
              </button>
            </section>
          ))}
        </S.Repositories>
      )}
    </S.Container>
  );
};

export default FeedRepositorie;
