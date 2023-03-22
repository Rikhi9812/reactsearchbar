import React, {useState} from 'react'
import Header from './components/Header'
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import './App.css';



function App() {

  const [results, setResults] = useState([]);
  return (
    <Title>
        <Header />
        <Wrapper>
          <SearchBar setResults={setResults}/>
          <SearchResult results={results}/>
        </Wrapper>
    </Title>
  );
}

export default App;

const Title = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-warp: warp;
  flex-direction: column;
`;

const Wrapper = styled.div`
    padding-top: 10%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color:  rgb(55, 65, 81);
`;
