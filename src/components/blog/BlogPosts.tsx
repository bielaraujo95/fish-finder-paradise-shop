
import React from "react";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";

interface BlogPostsProps {
  category: string;
}

const BlogPosts = ({ category }: BlogPostsProps) => {
  // Filter posts by category
  const filteredPosts = blogPosts.filter(post => 
    post.category === category || category === "all"
  );
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-500">
            Ainda não há artigos nesta categoria. Volte em breve!
          </h3>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
