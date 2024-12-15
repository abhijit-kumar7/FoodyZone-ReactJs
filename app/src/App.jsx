
import styled from "styled-components";
import {useEffect, useState} from "react";
import SearchResult from "./components/HomePage/SearchResult/SearchResult";
import NavBar from "./components/HomePage/NavBar/NavBar";
import ButtonContainer from "./components/HomePage/ButtonContainer/ButtonContainer";
import { filterBtns } from "./components/filterBtns";


export const BASE_URL="http://localhost:9000";

const App = () => {

  const[data, setData]=useState(null);
  const[loading, setLoading]=useState(false);
  const[error, setError]=useState(null);
  const[filteredData,setFilteredData]=useState(null);
  const[selectedButton, setSelectedButton]=useState("all");

  useEffect(()=>{
    const fetchFoodData= async()=>{
      setLoading(true);
      try{
      const response = await fetch(BASE_URL);
      const json= await response.json();
      setData(json);
      setFilteredData(json);
      setLoading(false);
      }
      catch(error){
         setError("unable to fetch data");
         setLoading(false);
      }
    };
    fetchFoodData();
  },[]);

  if(error)
    return <div>error</div>
  if(loading===true)
     return<div>loading...</div>

  const searchMenuFood=(event)=>{
    const searchValue=event.target.value;
    if(searchValue===""){
      setFilteredData(null);
    }
    
    console.log(data);
    const filter=data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()))
    setFilteredData(filter);
  }

  const ButtonMenuFood=(type)=>{
    if(type==="all"){
      setFilteredData(data);
      setSelectedButton("all");
      return;
    }

    const filter=data?.filter((food)=>
      food.type.toLowerCase().includes(type.toLowerCase())
  );
    setFilteredData(filter);
    setSelectedButton(type);

  }

  
 
  return (
    <>
    <Container>
      <NavBar searchMenuFood={searchMenuFood}></NavBar>
      <ButtonContainer
         filterBtns={filterBtns} 
         selectedButton={selectedButton}
         ButtonMenuFood={ButtonMenuFood}
         />
    </Container>
    <SearchResult data={filteredData}/>
    </>     
  )
}

export default App

export const Container=styled.div`
  max-width:1200px;
  margin: 0 auto;
`;


