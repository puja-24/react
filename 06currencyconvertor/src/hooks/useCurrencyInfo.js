//custom hooks
// function hello(){
//     return []
// }
//custom hooks can also use built hooks like useState
import { useEffect,useState } from "react";
function useCurrencyInfo(currency){
    const [data,setData]= useState({})
    useEffect(() =>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res)=>res.json())//data response convert into json
        .then((res)=>setData(res[currency]))//hold the data
        console.log(data);
    },[currency])
    console.log(data);
    return data
}
//fetch-api call
export default useCurrencyInfo;
