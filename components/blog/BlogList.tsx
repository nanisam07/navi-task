import BlogCard from './BlogCard';
import { blogPosts } from '@/app/blog/blogData';

export default function BlogList() {
  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </section>
  );
}
