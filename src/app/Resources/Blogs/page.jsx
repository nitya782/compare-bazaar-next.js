// pages/blog-proxy.jsx or app/blog-proxy/page.jsx
'use client';
import { useEffect } from 'react';

const BlogProxy = () => {
  useEffect(() => {
    window.location.href = 'https://blogs.compare-bazaar.com/';
  }, []);

  return <p>Redirecting to blogs...</p>;
};

export default BlogProxy;
