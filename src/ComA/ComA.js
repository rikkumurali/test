import React, { useEffect, useState } from 'react'
import './ComA.css';
import axios from "axios";


const ComA = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    // alert('Hii...')
    async function getData() { 

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        
        console.log(res.data.name);
        setName(res.data.name);
        setMoves(res.data.moves.length);
    }

    getData();  

  });

  return <>


    <h1> You Choose <span style={{ color: "red" }}> {num} Value </span> </h1>
    <h1> My Name is <span style={{ color: "red" }}> {name}  </span> </h1>
    <h1> I have <span style={{ color: "red" }}> {moves} moves </span> </h1>
    <select className="opt" value={num} onChange={(e) => { 
      setNum(e.target.value)

    }}>
      <option value='0'> 0 </option>
      <option value='1'> 1 </option>
      <option value='2'> 2 </option>
      <option value='25'> 25 </option>
      <option value='35'> 35 </option>
      <option value='3'> 3 </option>
      <option value='4'> 4 </option>
      <option value='5'> 5 </option>
    </select>
  </>
}

export default ComA;