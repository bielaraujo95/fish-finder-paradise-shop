
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPostProps } from "@/types/blog";
import { Card } from "@/components/ui/card";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostProps | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostProps[]>([]);
  
  useEffect(() => {
    // Find current post
    const currentPost = blogPosts.find(post => post.id === id) || null;
    setPost(currentPost);
    
    // Find related posts (same category, excluding current)
    if (currentPost) {
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [id]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
            <Link to="/blog" className="text-fishing-blue hover:underline">
              Voltar para o Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div 
          className="relative h-64 md:h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="container mx-auto px-4 py-8">
              <Link to="/blog">
                <Button variant="outline" size="sm" className="mb-4 bg-white/10 hover:bg-white/20 text-white border-white/20">
                  <ArrowLeft size={16} className="mr-2" />
                  Voltar para o Blog
                </Button>
              </Link>
              <h1 className="text-2xl md:text-4xl font-bold text-white">{post.title}</h1>
              <div className="flex items-center gap-3 text-white/80 mt-2">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span className="capitalize">{post.category}</span>
                <span>•</span>
                <span>Por {post.author}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags?.map(tag => (
                <span 
                  key={tag} 
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Artigos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Card key={relatedPost.id} className="overflow-hidden">
                    <Link to={`/blog/${relatedPost.id}`}>
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold hover:text-fishing-blue transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {formatDate(relatedPost.date)}
                        </p>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
