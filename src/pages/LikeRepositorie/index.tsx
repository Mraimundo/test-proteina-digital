import React from "react";
import { Box, Table, Thead, Tr, Th, Tbody, Td, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";

import * as S from "./styles";
import { useRepository } from "../../hooks/repository";

const LikeRepositorie: React.FC = () => {
  const { repositories } = useRepository();
  return (
    <S.Container>
      <header>
        <img src={logoImg} alt="Logo" />
        <nav>
          <Link to="/">Feed</Link>
          <Link to="like-repositories">Like</Link>
        </nav>
      </header>
      <Box flex="1" borderRadius={8} p="8">
        <Table colorScheme="shiteAlpha">
          <Thead>
            <Tr>
              <Th>Repositórios</Th>
              <Th>Id</Th>
            </Tr>
          </Thead>
          <Tbody>
            {repositories
              .filter((item) => item.like)
              .map((repos: any) => (
                <Tr key={repos.id}>
                  <Td>
                    <Box>
                      <Text mb="2" fontWeight="bold">
                        {repos.full_name}
                      </Text>
                      <Text fontSize="sm" color="gray.300">
                        {repos.description}
                      </Text>
                    </Box>
                  </Td>
                  <Td isNumeric>{repos.id}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
    </S.Container>
  );
};

export default LikeRepositorie;
