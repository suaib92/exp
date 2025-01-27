import { Link } from 'react-router-dom';
import { blogs } from '../JSONdata/blog.json';
import blogImg from '../assets/blog_img.jpeg';

export default function BlogList() {
  return (
    <>
      <header className='relative h-[300px] w-full md:h-96 mb-8'>
        <img
          src={blogImg}
          alt='Pikkol Team'
          className='w-full h-full object-cover'
        />
      </header>
      <div className='container mx-auto px-4 py-8'>
        <div className='space-y-16'>
          {' '}
          {blogs.map((blog, index) => (
            <article key={index} className='space-y-4 border-b pb-8'>
              {' '}
              <Link to={`/blog/${index}`} className='no-underline'>
                <h2 className='text-2xl font-extrabold text-gray-900 hover:text-gray-600 transition-colors'>
                  {' '}
                  {blog.blog_title}
                </h2>
              </Link>
              <div className='flex items-center gap-2 text-gray-500 text-sm'>
                {' '}
                <div className='flex items-center gap-2'>
                  <span className='font-semibold'>{blog.author}</span>{' '}
                  <span>|</span>
                  <span>{blog.date}</span>
                </div>
              </div>
              <p className='text-gray-600 text-base line-clamp-3 leading-relaxed'>
                {' '}
                {blog.introduction}
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
