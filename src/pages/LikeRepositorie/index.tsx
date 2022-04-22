import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";

import * as S from "./styles";

const LikeRepositorie: React.FC = () => {
  return (
    <S.Container>
      <header>
        <img src={logoImg} alt="Logo" />
        <nav>
          <Link to="/">Feed</Link>
          <Link to="like-repositories">Like</Link>
        </nav>
      </header>
      <Box flex="1" borderRadius={8} bg="gray.700" p="8">
        <Heading size="lg" fontWeight="normal">
          Linke dos Repositórios
        </Heading>

        <Table colorScheme="shiteAlpha">
          <Thead>
            <Tr>
              <Th>Repositórios</Th>
              <Th>Likes</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Box>
                  <Text fontWeight="bold">Nome repo</Text>
                  <Text fontSize="sm" color="gray.300">
                    Descrição do repo
                  </Text>
                </Box>
              </Td>
              <Td isNumeric>Quantidade de Likes</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </S.Container>
  );
};

export default LikeRepositorie;
