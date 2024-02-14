import { useState, useEffect } from 'react'; // corrected 'useEffect' import
import { Link, useNavigate } from 'react-router-dom';

import { useQuery } from "@apollo/client";

import ListItem from "../components/UI/ListItem"
import Card from '../components/UI/Card';

import { QUERY_POSTS } from "../../utils/queries";

const Homepage = () => { 
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  
  return (
    <div className="flex-row justify-center">
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>

      <h2>Tech Projects for Crowdfunding</h2>
      <div className="row">
        <ListItem>
          <Card key={posts} />
        
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
