// import Image from "next/image";
// import Link from 'next/link'; // Import Link

// const Hero = () => {
//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
//       <div className="absolute inset-0 -z-10">
//         <Image 
//           src="/hero.webp"
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//         />
//       </div>
//       <h1 className="text-4xl font-bold mb-4 text-blue-800">Welcome to Code Crafted Blog</h1>
//       <p className="text-lg mb-6 text-blue-800">
//       Discover the latest articles on programming,
//       technology, and more.
//       </p>
//       <Link href="/blog" className="px-6 py-2 bg-white text-emerald-500 rounded-lg shadow-md hover:bg-gray-200 mb-6">
//           Explore Our Blogs
        
//       </Link>

     
//     </div>
//   );
// }

// export default Hero;

//2nd
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="w-full bg-slate-400 text-white py-20 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <Image 
            src="/hero.webp"
            alt="Hero Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Side: Text, Title, Button */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
        <h1 className="text-4xl font-bold mb-4 text-emerald-900">Welcome to Code Crafted Blog</h1>
       <p className="text-lg mb-6 text-black">
       Discover the latest articles on programming,
       technology, and more.
       </p>
        
          <Link href="/blogs" className="px-6 py-2 bg-emerald-700 text-white rounded-lg shadow-md hover:bg-emerald-500 mb-6">
          Explore Our Blogs
        
      </Link>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;