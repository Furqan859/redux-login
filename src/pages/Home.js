import React, { useEffect, useState } from 'react';
import './Home.css';
const axios = require('axios').default;


const Home = () => {
  const [post, setPost] = useState([null]);

  useEffect(() => {
    axios.get("https://62cfefcb1cc14f8c0880a3de.mockapi.io/api/login/getapidata").then((response) => {
      console.log(response.data)
      setPost(response?.data);
    }).catch(err => {
      alert("something wrong")
    })
  }, []);
 
  return (
    <div>
    {post.map((po) => {
return(
     <div>
     <div>{po[0].name}</div>
   
     </div>   
)
    })}
    </div>
  );
}

export default Home;