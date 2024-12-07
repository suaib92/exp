import { useParams } from 'react-router-dom';
import { blogs } from '../JSONdata/blog.json';

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogs[parseInt(id)]; // Using parseInt to get the correct blog by index

  if (!blog) {
    return <div>Blog Not Found</div>;
  }

  return (
    <article className='container mx-auto px-4 py-8 max-w-4xl'>
      <header className='mb-8'>
        <h1 className='text-4xl font-bold mb-4'>{blog.blog_title}</h1>
        <div className='flex items-center gap-2 text-gray-600'>
          <span className='font-medium'>{blog.author}</span>
          <span>|</span>
          <span>{blog.date}</span>
        </div>
      </header>

      <div className='prose prose-lg max-w-none'>
        <p className='lead'>{blog.introduction}</p>

        {blog.sections?.map((section, index) => (
          <section key={index} className='mt-8'>
            <h2 className='text-2xl font-bold mb-4'>{section.title}</h2>
            {typeof section.content === 'object' &&
            !Array.isArray(section.content) ? (
              <ul className='list-decimal pl-5 space-y-2'>
                {Object.entries(section.content).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{section.content}</p>
            )}
          </section>
        ))}

        {blog.essentials_for_packing &&
          typeof blog.essentials_for_packing === 'object' &&
          !Array.isArray(blog.essentials_for_packing) && (
            <section className='mt-8'>
              <h2 className='text-2xl font-bold mb-4'>
                Essentials for Packing
              </h2>
              <ul className='list-decimal pl-5 space-y-2'>
                {Object.entries(blog.essentials_for_packing).map(
                  ([key, value]) => (
                    <li key={key}>{value}</li>
                  )
                )}
              </ul>
            </section>
          )}

        {blog.summary && (
          <section className='mt-8'>
            <h2 className='text-2xl font-bold mb-4'>Summary</h2>
            <p>{blog.summary}</p>
          </section>
        )}

        <footer className='mt-8 border-t pt-4'>
          <p className='font-medium'>About the Author</p>
          <p className='text-gray-600'>{blog.author_bio}</p>
        </footer>
      </div>
    </article>
  );
}
