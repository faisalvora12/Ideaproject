/*images being used from https://stocksnap.io/photo/rural-road-BSO0DUT9AM  royalty free*/ 

import React,{useState,useEffect} from 'react'
import './App.css';
import Post from './Post';
import {db} from './firebase';

function App() {
  const[posts,setPosts] = useState([]);
  //useState makes components to make things modular
  //useEffect runs a piece of code based on a condition
  useEffect(() => {
    //this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id:doc.id,
        post: doc.data()
      }))); 
    })
  }, []);

  return (
    <div className="app">
      {/* Header*/}
      <div className="app_header">
        <img className="app_headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""></img>
      </div>
      <h1>This is the Idea project. Hello viewers</h1> 
      
      {
        posts.map(({id,post}) =>(
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      } 
      
    </div>/*above section automates posts. It replaces hardcoded*/ 
        );//return ends
}

export default App;
