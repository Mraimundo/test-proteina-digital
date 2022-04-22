import styled from "styled-components";

export const Container = styled.div`
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    nav {
      display: flex;
      align-items: center;

      a {
        display: block;
        margin-left: 10px;
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
        color: #3a3a3a;
      }
    }
  }
`;
