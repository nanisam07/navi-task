import Link from 'next/link';
import Image from 'next/image';

type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  image: string;
};

export default function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="block group">
      <div className="rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 bg-white">
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600">
            {blog.title}
          </h2>
          <p className="text-sm text-gray-600">{blog.summary}</p>
        </div>
      </div>
    </Link>
  );
}
