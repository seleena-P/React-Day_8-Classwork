import React from 'react'

const Pro = () => {
    const[msg,setMsg]=useState("Hello dear one,learning React...?");
    useEffect(()=>{
        console.log('Use effect hook called');
        const timeoutID=setTimeout(()=>{
            setMsg('Great...This is time to learn about hooks');

        },2000);
        return(()=>{clearTimeout(timeoutID);},[]);
  return (
    <div><h1>{msg}</h1></div>
  );
}

export default Pro