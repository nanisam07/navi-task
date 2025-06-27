import { blogPosts } from '@/app/blog/blogData';
import BlogCard from './BlogCard';

export default function BlogList() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {blogPosts.map((post) => {
        // Normalize the image property
        const normalizedPost = {
          ...post,
          image: post.image ?? post.Images ?? '',
        };
        return <BlogCard key={post.slug} blog={normalizedPost} />;
      })}
    </div>
  );
}
