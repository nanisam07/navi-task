import BlogList from '@/components/blog/BlogList';

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
      <BlogList />
    </div>
  );
}
