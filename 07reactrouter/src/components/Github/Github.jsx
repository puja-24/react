import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
//use hook
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    // fetch('https://api.github.com/users/puja-24')
    // .then(response=>response.json())
    // .then(data=>{
    //     console.log(data);
    //     setData(data)
    // })
    // },[])
    if (!data || !data.followers) {
        return <p className="text-center text-red-500 text-2xl">Failed to load GitHub data</p>;
      }
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    try {
      const response = await fetch("https://api.github.com/users/puja-24");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      return { followers: "N/A", avatar_url: "" }; // Fallback data
    }
  };
//respons.json actually me promise h islliye yeha return krwa pa rhe h