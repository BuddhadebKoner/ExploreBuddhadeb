import React from 'react';
import { useInView } from 'react-intersection-observer';
import Likebtn from '../Likebtn/Likebtn';
import ProfileDetails from '../Mypost/ProfileDetails/ProfileDetails';
import ApiDataResponce from '../../Api/apiresponce';

// styles are here
import '../../Styles/Postdetails.css';

export default function Postdetails() {
   const [posts, setPosts] = React.useState([]);
   const [loading, setLoading] = React.useState(true);
   const [error, setError] = React.useState(null);
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });

   React.useEffect(() => {
      if (inView) {
         const fetchPosts = async () => {
            try {
               // Fetch posts without simulating network delay
               setPosts(Object.values(ApiDataResponce.assets));
               setLoading(false);
            } catch (error) {
               console.error('Error fetching posts:', error);
               setError('Failed to load posts');
               setLoading(false);
            }
         };

         fetchPosts();
      }
   }, [inView]);

   return (
      <div ref={ref}>
         {loading ? (
            <>
               {Array.from({ length: 4 }).map((_, index) => (
                  <div key={`skeleton-${index}`} className="skeleton-wrapper">
                     <div className="skeleton skeleton-image"></div>
                     <div className="skeleton skeleton-text" style={{ width: '70%' }}></div>
                     <div className="skeleton skeleton-text" style={{ width: '90%' }}></div>
                     <div className="skeleton skeleton-text" style={{ width: '60%' }}></div>
                  </div>
               ))}
            </>
         ) : error ? (
            <div className="error-message">{error}</div>
         ) : (
            <>
               {ApiDataResponce.numberOfAssets !== 0 && (
                  <>
                     {posts.map((post, index) => (
                        <div key={index} className="postdetails-container">
                           <ProfileDetails
                              media={post.media}
                              Medialink={post.links}
                              postdate={post.date}
                              profilelink={post.profilelink}
                           />
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
         )}
      </div>
   );
}
