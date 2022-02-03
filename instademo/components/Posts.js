import React from 'react';
import Post from './Post';

const posts= [
    {
        id: '1c3',
        username: 'Vratec',
        userImg:'https://tinyurl.com/5a6maj64',
        Img:'https://tinyurl.com/muf58mtm',
        caption:'Make sure you subscribe'
    },
    {
        id: '13d',
        username: 'Vratec',
        userImg:'https://tinyurl.com/5a6maj64',
        Img:'https://tinyurl.com/5a6maj64',
        caption:'Make sure you subscribe'
    },
    {
        id: '22x',
        username: 'Vratec',
        userImg:'https://links.papareact.com/3ke',
        Img:'https://links.papareact.com/3ke',
        caption:'Make sure you subscribe'
    },

]

export default function Posts() {
  return (
    <div>
        {posts.map ((post)=>(
            <Post key={post.id} id={post.id}
            username={post.username} 
            userImg={post.userImg} 
            Img={post.Img}
            caption={post.caption}/>
        ))}
        
    {/* Post */}
    </div>
  );
}
