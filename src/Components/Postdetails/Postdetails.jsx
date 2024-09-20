import React, { Suspense, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ApiDataResponce from '../../Api/apiresponce';
import '../../Styles/Postdetails.css';

// Lazy loading ProfileDetails
const ProfileDetails = React.lazy(() => import('../Mypost/ProfileDetails/ProfileDetails'));

export default function Postdetails() {
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [currentPage, setCurrentPage] = useState(1);
   const postsPerPage = 2; // Show 2 posts initially
   const [showAllPosts, setShowAllPosts] = useState(false);
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });

   useEffect(() => {
      const fetchPosts = async () => {
         try {
            const data = Object.values(ApiDataResponce.assets);
            setPosts(data);
            setLoading(false);
         } catch (error) {
            console.error('Error fetching posts:', error);
            setError('Failed to load posts');
            setLoading(false);
         }
      };

      if (inView) {
         fetchPosts();
      }
   }, [inView]);

   // Pagination Logic: Get the posts to be displayed
   const displayedPosts = showAllPosts
      ? posts
      : posts.slice(0, currentPage * postsPerPage);

   const handleShowMore = () => {
      if (currentPage * postsPerPage < posts.length) {
         setCurrentPage(currentPage + 1);
      } else {
         setShowAllPosts(true); // Show all posts once paginated data is fully displayed
      }
   };

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
                     {displayedPosts.map((post, index) => (
                        <div key={index} className="postdetails-container">
                           <Suspense fallback={<div>Loading Profile...</div>}>
                              <ProfileDetails
                                 media={post.media}
                                 Medialink={post.links}
                                 postdate={post.date}
                                 profilelink={post.profilelink}
                              />
                           </Suspense>
                           <div className="post">
                              <img src={post.image} className="postimage" alt="" />
                              <div className="post-details-description">
                                 <h3>{post.title}</h3>
                                 <p>{post.description}</p>
                              </div>
                           </div>
                        </div>
                     ))}

                     {/* Show "Load More" button only if not all posts are displayed */}
                     {!showAllPosts && (
                        <div className="load-more-container">
                           <button className="load-more-btn" onClick={handleShowMore}>
                              {currentPage * postsPerPage < posts.length
                                 ? 'See More'
                                 : null}
                           </button>
                        </div>
                     )}
                  </>
               )}
            </>
         )}
      </div>
   );
}
