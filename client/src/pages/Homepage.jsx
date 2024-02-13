import { useState, useffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useQuery } from "@apollo/client";

import Card from '../components/UI/Card/Card';

// importing to bring up the crowdfunding previews before entering a detail crowdfunding site
// importing the List Items from the components folder


//importing the database information from the database folder "API"


// export default function Homepage() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
//         velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
//         ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
//         non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
//         ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
//         rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
//         tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
//         porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
//         vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
//         fames ac ante ipsum primis in faucibus.
//       </p>
//     </div>
//   );
// }


const Homepage = () => { 
  const { loading, data } = useQuery(QUERY_POSTS);

  const posts = data?.posts || [];
  
  console.log(posts);

  return (
    <div>
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
      <div className="row">
        {posts.map((post) => (
          <div className="col-4">
            <Card title={post.title} description={post.content} />
          </div>
        ))}
      </div>
    </div>
  );
}