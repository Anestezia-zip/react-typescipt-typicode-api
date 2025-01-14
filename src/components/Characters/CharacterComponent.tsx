import React from "react";
import Character from "./Character";

const CharacterComponent = () => {
  return (
    <div className="App">
        {results.map((user) => <div key={user.id}><Character user={user} /></div>)}
    </div>
  );
};

const results = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 2,
    name:"Morty Smith",
    "status":"Alive",
    "species":"Human",
    "gender":"Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },
  {
    id: 6,
    "name":"Abadango Cluster Princess",
    "status":"Alive",
    "species":"Alien",
    "gender":"Female",
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
  },
  {
    id: 8,
    "name":"Adjudicator Rick",
    "status":"Dead",
    "species":"Human",
    "gender":"Male",
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
  },
  {
    id: 9,
    "name":"Agency Director",
    "status":"Dead",
    "species":"Human",
    "gender":"Male",
    image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
  },
  {
    id: 10,
    name: "Alan Rails",
    status: "Dead",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
  },
  {
    id: 11,
    name: "Albert Einstein",
    status: "Dead",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
  },
  {
    id: 15,
    name: "Alien Rick",
    status: "unknown",
    species: "Alien",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
  },
];

export default CharacterComponent;
