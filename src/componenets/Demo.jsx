import React, { useEffect } from 'react';


const Dubai = () => {
    useEffect(() => {
        getData()
    },[]);
    const getData = async() =>{
        const respose  = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await respose.json();
        console.log("Respose of server", data);
    }
  return (
    <div>
      
    </div>
  )
}

export default Dubai
