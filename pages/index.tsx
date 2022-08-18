import PostFeed from '../components/PostFeed';
import Loader from '../components/Loader';
import { firestore, fromMillis, postToJSON } from '../lib/firebase';

import { useState } from 'react';
import { collection, collectionGroup, getDocs, limit, orderBy, query, startAfter, where } from 'firebase/firestore';

// Max post to query per page
const LIMIT = 10;

export async function getServerSideProps(context) {
  const postsQuery = query(collectionGroup(firestore, "posts"),where('published', '==', true), orderBy('createdAt', 'desc'), limit(LIMIT));
  // const postsQu = firestore
  //   .collectionGroup('posts')
  //   .where('published', '==', true)
  //   .orderBy('createdAt', 'desc')
  //   .limit(LIMIT);

  const posts = (await getDocs(postsQuery)).docs.map(postToJSON);

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);

  const [postsEnd, setPostsEnd] = useState(false);

  // Get next page in pagination query
  const getMorePosts = async () => {
    setLoading(true);
    const last = posts[posts.length - 1];

    const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;

    const newPostquery = query(collectionGroup(firestore, "posts"),where('published', '==', true), orderBy('createdAt', 'desc'), limit(LIMIT), startAfter(cursor));

    const newPosts = (await getDocs(newPostquery)).docs.map((doc) => doc.data());

    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  };

  return (
    <main>
      <div className="card card-info">
        <h2>💡 Next.js + Firebase - The Full Course</h2>
        <p>Welcome! This app is built with Next.js and Firebase and is loosely inspired by Dev.to.</p>
        <p>Sign up for an 👨‍🎤 account, ✍️ write posts, then 💞 heart content created by other users. All public content is server-rendered and search-engine optimized.</p>
      </div>
     {/* @ts-ignore */}
      <PostFeed posts={posts} />

      {!loading && !postsEnd && <button onClick={getMorePosts}>Load more</button>}

      <Loader show={loading} />

      {postsEnd && 'You have reached the end!'}
    </main>
  );
}