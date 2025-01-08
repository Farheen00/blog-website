import React from 'react';
import { data } from '@/app/data/blog';
import CommentSection from '@/components/Comment';
import Image from 'next/image';

const dynamic = ({ params }: { params: { slug: string } }) => {
  // Find the blog by slug
  const blog = data.find((b) => b.slug === params.slug);

  if (!blog) {
    // Return a 404-like message if blog is not found
    return (
      <div className="max-w-4xl mx-auto mt-[40px] px-4 sm:px-6 lg:px-8 py-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center bg-blue-950 py-3 px-3 font-bold underline mb-4">
          Blog Not Found
        </h1>
        <p className="text-gray-700">Sorry, the blog post you are looking for could not be found.</p>
      </div>
    );
  }

  return (
    
    <div
      className="min-h-screen bg-cover bg-center text-black flex justify-center items-center px-4 sm:px-8 lg:px-16 mt-8"
      
      
   >
   
      <div className="max-w-4xl w-full bg-slate-300 justify-center items-centersm:p-8 p-6 rounded-2xl ">
      <Image className='rounded-lg  items-center'
    src={blog.image}
    alt='image'
    layout='responsive'
    objectFit='cover'
    height={300}
    width={300}/>
    <h2 className='font-thin text-sm text-black text-right mt-4'>{blog.published}</h2>
        <h1 className="text-xl text-center leading-relaxed  mt-4 sm:text-3xl lg:text-5xl font-bold text-gradient bg-clip-text text-gray-900 items-center justify-center mb-6 sm:mb-8">
          {blog.title}
        </h1>
        <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-900">
          {blog.content}
        </p>

        {/* Comment Section */}
        <div className="mb-8">
          <CommentSection />
        </div>

        {/* publish Section */}
        {/* <div className="text-center">
          
             <h3 className="text-emerald-700 text-xl sm:text-2xl font-semibold underline">{blog.published}</h3>
           */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default dynamic;