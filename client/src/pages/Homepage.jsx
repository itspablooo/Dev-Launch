// import { useState, useffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

import { useQuery } from "@apollo/client";

// importing to bring up the crowdfunding previews before entering a detail crowdfunding site
// importing the List Items from the components folder


//importing the database information from the database folder "API"


export default function Homepage() {
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
    </div>
  );
}





// export default function Homepage() {
//   const [crowdfundings, setCrowdfundings] = useState([]);
//   const navigate = useNavigate();


//   // awaiting database to puill the information from the database
//   useEffect(() => {
//     fetch('/api/crowdfundings')
//       .then((res) => res.json())
//       .then((crowdfundings) => setCrowdfundings(crowdfundings));
//   }, []);

//   return (
//     <div className="container pt-4">
//       <h1>Homepage</h1>
//       <p>
//         Welcome to the homepage! Here you can find a list of crowdfundings.
//       </p>
//       <ul>
//         {crowdfundings.map((crowdfunding) => (
//           <li key={crowdfunding.id}>
//             <Link to={`/crowdfundings/${crowdfunding.id}`}>
//               {crowdfunding.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

