
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogPosts from "@/components/blog/BlogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-fishing-darkBlue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Blog do Pescador</h1>
            <p className="text-xl max-w-3xl">
              Notícias, dicas e histórias sobre pescaria, camping, aventuras e off-road
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="pesca" className="w-full">
            <TabsList className="mb-8 flex flex-wrap gap-2 justify-center">
              <TabsTrigger value="pesca" className="data-[state=active]:bg-fishing-lightBlue data-[state=active]:text-white">
                Pescaria
              </TabsTrigger>
              <TabsTrigger value="camping" className="data-[state=active]:bg-fishing-lightBlue data-[state=active]:text-white">
                Camping
              </TabsTrigger>
              <TabsTrigger value="aventuras" className="data-[state=active]:bg-fishing-lightBlue data-[state=active]:text-white">
                Aventuras
              </TabsTrigger>
              <TabsTrigger value="offroad" className="data-[state=active]:bg-fishing-lightBlue data-[state=active]:text-white">
                Off-Road
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="pesca" className="space-y-4">
              <BlogPosts category="pesca" />
            </TabsContent>
            
            <TabsContent value="camping" className="space-y-4">
              <BlogPosts category="camping" />
            </TabsContent>
            
            <TabsContent value="aventuras" className="space-y-4">
              <BlogPosts category="aventuras" />
            </TabsContent>
            
            <TabsContent value="offroad" className="space-y-4">
              <BlogPosts category="offroad" />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
