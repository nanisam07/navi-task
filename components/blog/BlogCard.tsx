'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Blog {
  slug: string;
  image: string;
  title: string;
  summary: string;
}

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="block group rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
        <Image
          src={blog.image}
          alt={blog.title}
          width={600}
          height={300}
          className="w-full object-cover"
          priority
        />
        <div className="p-4 bg-white">
          <h2 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
            {blog.title}
          </h2>
          <p className="text-sm text-gray-600">{blog.summary}</p>
        </div>
      </div>
    </Link>
  );
}
