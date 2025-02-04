import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Profile() {
  const [synonyms,setSynonyms]=useState("")
  useEffect(()=>{
    const fetchdata=async()=>{
     
        try{
              const response=await axios.get("https://jsonplaceholder.typicode.com/posts/1");
              setSynonyms(response.data)
        }
        catch(error)
        {
         console.log(error);
        }
    }
    fetchdata()
  },[])
  return (
    <div>
    <h1> useEffect and async and await:</h1>
{synonyms?<p>{synonyms.title}</p>:<h1>...loding </h1>}

    </div>
  )
}

export default Profile
