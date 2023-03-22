import React from "react";
import styled from "styled-components";

const SearchResult = ({ results }) => {
  return (
    <ResultList >
      {results.map((result, id) => {
        return <ResultLists key={id}>{result.name}</ResultLists>;
      })}
    </ResultList>
  );
};

export default SearchResult;

const ResultList = styled.div`
  width: 50%;
  margin-top: 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  max-height: 500px;
  overflow-y: scroll;
  z-index: 100;
  
`;

const ResultLists = styled.div`
  padding: 10px 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  :hover {
    background: rgba(55, 65, 81, 0.8);
    color: white;
  }
`;
