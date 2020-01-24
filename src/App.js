import React, {useEffect, useState} from "react";
import "./App.css";
import NasaData from "./Components/NasaData"
import styled from "styled-components";

const PageCont = styled.div`
background-color: teal;
display:flex;
flex-direction: column;
align-items: center;
`;

const PageIntro = styled.div`
font-size: 3rem;
color: purple;
margin: 40px;

`;
function App() {
  return (
    <div className="App">
      <PageIntro className= "spaceintro">
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </PageIntro>
      <NasaData />
    </div>
  );
}

export default App;
