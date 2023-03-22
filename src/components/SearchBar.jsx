import React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';


const SearchBar = ({setResults}) => {

    const [input, setInput] = useState("");
    console.log(input);

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/comments").then((response) => response.json())
        .then((data) => {
            const results = data.filter((user) => {
                return value && 
                    user && user.name
                    && user.name.toLowerCase().includes(value);
            });
            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

  return (
    <Search>
        <FaSearch id='search-icon'/>
        <Input  placeholder='Typed to search....'
            value={input}
            onChange={(e) => handleChange(e.target.value)}
        />
    </Search>
  )
}

export default SearchBar

const Search = styled.div`
    
    width: 50%;
    height: 1rem;
    outline: 0;
    font-size: 1.5rem;
    padding: 2rem;
    font-weight: 300;
    border-radius: 9999px;
    background-color:  rgb(35 39 47);;
    border: 3px solid rgb(13, 220, 16);
    transition: .5s ease;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
    :hover {
        box-shadow: 0 0 5px rgb(13, 220, 16),
        0 0 10px rgb(13, 220, 16),
        0 0 15px rgb(13, 220, 16),
        0 0 20px rgb(13, 220, 16),
        0 0 25px rgb(13, 220, 16);
    }
    cursor: pointer;
  
`;

const Input = styled.input`
    outline: 0;
    border: 0;
    width: 90%;
    font-size: 1.5rem;
    padding: 1rem;
    background: transparent;
    color: #fff;
`;
