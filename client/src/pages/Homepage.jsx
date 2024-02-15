import { useState, useEffect } from 'react'; // corrected 'useEffect' import
import { Link, useNavigate } from 'react-router-dom';

import { useQuery } from "@apollo/client";

import ListItem from "../components/UI/ListItem"
import Card from '../components/UI/Card';
import ProjectPost from '../components/UI/ProjectPost';
import HomepageText from '../components/HomepageText';


import { QUERY_POSTS } from "../../utils/queries";


const Homepage = () => { 
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  
  return (
    <div className="flex-row justify-center">
      <h1>Dev-Launch</h1>
      <div className="mb-4 p-2">  
        <p>
          Welcome to our platform for crowdfunding our developers for projects that can support our projects that have inspired our developers.
        </p>      
      <HomepageText/>
      </div>
      <h2>Tech Projects for Crowdfunding:</h2>
      <div className="flex-row justify-center">
        <ListItem>
          <div className="col-4 col-md-2 mb-3 p-3">
            {loading? (
              <div>Loading...</div>
            ) : (
              <Card 
                posts={posts} 
                title="Click to learn more:"/>
            )}
          </div>
        </ListItem>


        {posts.map(({ _id, title, content }) => ( // corrected 'data.posts' to 'posts'
          <div key={_id}>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
