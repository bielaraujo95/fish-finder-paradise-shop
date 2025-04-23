
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPostProps } from "@/types/blog";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPostProps;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="text-xl font-bold hover:text-fishing-blue transition-colors">
          <Link to={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center gap-2 text-sm">
          <span>{formatDate(post.date)}</span>
          <span>•</span>
          <span className="capitalize">{post.category}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow-0">
        <p className="text-gray-600 line-clamp-3">{post.summary}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4">
        <Link 
          to={`/blog/${post.id}`}
          className="text-fishing-blue hover:underline font-medium"
        >
          Ler mais
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
