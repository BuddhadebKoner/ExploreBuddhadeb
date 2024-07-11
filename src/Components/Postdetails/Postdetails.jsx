import React from 'react';
import Likebtn from '../Likebtn/Likebtn';
import ProfileDetails from '../Mypost/ProfileDetails/ProfileDetails';
import ApiDataResponce from '../../Api/apiresponce';

// styles are here
import '../../Styles/Postdetails.css';

export default function Postdetails() {
   const [posts, setPosts] = React.useState([]);

   React.useEffect(() => {
      const fetchPosts = async () => {
         try {
            setPosts(Object.values(ApiDataResponce.assets));
         } catch (error) {
            console.error('Error fetching posts:', error);
         }
      };

      fetchPosts();
   }, []);


   return (
      <>
         {ApiDataResponce.numberOfAssets !== 0 && (
            <>
               {posts.map((post, index) => (
                  <div key={index} className="postdetails-container">
                     <ProfileDetails media={post.media} Medialink={post.links} postdate={post.date} />
                     <div className="post">
                        <img src={post.image} className="postimage" alt="" />
                        <div className="post-details-description">
                           <h3>{post.title}</h3>
                           <p>{post.description}</p>
                           <Likebtn />
                        </div>
                     </div>
                  </div>
               ))}
            </>
         )}
      </>
   );
}
