import React from 'react';
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
export default function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols2 
    md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
{/*Section*/}
<section className='col-span-2'>
 {/*Stories*/}
 <Stories />

{/*Posts*/}
<Posts />
</section>
   

{/*Section*/}
<section className="hidden xl:inline-grid">
{/*Mini Profile*/}
<div className='fixed top-20' >
<MiniProfile />
<Suggestions/>
</div>
{/*Suggestions*/}
</section>
    

    
    </main>
  );
}
