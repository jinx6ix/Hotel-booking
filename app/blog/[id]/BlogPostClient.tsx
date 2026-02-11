"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

import Giscus from "@giscus/react";
import { Share2, ChevronLeft, ChevronRight, Calendar, User, Clock, Heart, MessageSquare } from "lucide-react";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
  content: string;
}

interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

interface BlogPostClientProps {
  post: BlogPost;
  author: Author;
  relatedPosts: BlogPost[];
}

export default function BlogPostClient({ post, author, relatedPosts }: BlogPostClientProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42); // Initial count
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle like button
  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Article Content */}
      <article className="relative py-12 md:py-16 bg-white rounded-t-3xl -mt-16 md:-mt-24 shadow-xl z-10">
        {/* Author info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 mb-12 pb-8 border-b border-gray-200">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 border-2 border-gray-100">
            <Image
              src={author.avatar || "/avatars/default.jpg"}
              alt={author.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h3 className="text-2xl font-bold text-gray-900">{author.name}</h3>
              <span className="text-sm text-gray-600">• {author.role}</span>
            </div>
            <p className="text-gray-700">{author.bio}</p>
          </div>
        </div>

        {/* Table of Contents – clickable with ScrollSpy */}
        <TableOfContents content={post.content} />

        {/* Main Markdown Content */}
        <div 
          ref={contentRef}
          className="prose prose-lg md:prose-xl max-w-none prose-headings:text-gray-900 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-gray-200">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-200 transition cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Share & engagement */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
          >
            <ChevronLeft size={20} /> Back to all articles
          </Link>

          <div className="flex items-center gap-8">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 ${isLiked ? 'text-red-500' : 'text-gray-600'} hover:text-red-500 transition`}
            >
              <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
              <span>{likeCount}</span>
            </button>
            <SocialShare 
              title={post.title} 
              url={`https://www.jaetravel.com/blog/${post.id}`} 
            />
          </div>
        </div>
      </article>

      {/* Comments – Giscus */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Comments & Discussion
          </h2>

          <Giscus
            repo="jaetravel/blog-comments"           // ← replace with your GitHub repo
            repoId="R_kgDOMX5TfA"                     // ← get from Giscus setup
            category="Blog Comments"
            categoryId="DIC_kwDOMX5TfM4CeQm9"
            mapping="pathname"
            term={post.title}
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="light"
            lang="en"
            loading="lazy"
          />
        </div>
      </section>

      {/* Related articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            You May Also Like
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition border border-gray-200"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={related.image || `/blog-placeholder-${related.id}.jpg`}
                    alt={related.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase bg-orange-50 text-orange-700 px-3 py-1 rounded-full">
                      {related.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{related.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated with Kenya Safari Insights
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Get exclusive travel guides, seasonal updates, photography tips and special offers delivered directly to your inbox.
          </p>

          <form 
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get("email");
              console.log("Newsletter subscription:", email);
              // Add your newsletter API call here
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}

// ────────────────────────────────────────────────
// Reading Progress Bar Component
// ────────────────────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrolled = (scrollPosition / totalHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-orange-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ────────────────────────────────────────────────
// Table of Contents with ScrollSpy
// ────────────────────────────────────────────────
function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from markdown
    const headingMatches = content.matchAll(/^#{2,3}\s+(.+)$/gm);
    const headings: { level: number; text: string; id: string }[] = [];
    
    for (const match of headingMatches) {
      const text = match[1];
      const level = match[0].startsWith('###') ? 3 : 2;
      const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      headings.push({ level, text, id });
    }

    // Add IDs to headings in the DOM
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -40% 0px" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [content]);

  // Extract headings for TOC
  const headings = (() => {
    const matches = content.matchAll(/^#{2,3}\s+(.+)$/gm);
    const result: { level: number; text: string; id: string }[] = [];
    
    for (const match of matches) {
      const text = match[1];
      const level = match[0].startsWith('###') ? 3 : 2;
      const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      result.push({ level, text, id });
    }
    
    return result;
  })();

  if (headings.length === 0) return null;

  return (
    <div className="bg-gray-50 p-6 rounded-xl mb-12 border border-gray-200">
      <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
        <ChevronRight size={20} /> Contents
      </h4>
      <nav className="text-sm">
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 2) * 16}px` }}
              className={`transition-colors ${
                activeId === heading.id
                  ? "text-orange-600 font-semibold"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              <a 
                href={`#${heading.id}`} 
                className="block py-1 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(heading.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    // Update URL without page reload
                    window.history.pushState(null, '', `#${heading.id}`);
                  }
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

// ────────────────────────────────────────────────
// Social Share Buttons
// ────────────────────────────────────────────────
function SocialShare({ title, url }: { title: string; url: string }) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex items-center gap-6">
      <button
        onClick={() => handleShare('twitter')}
        className="text-gray-600 hover:text-blue-600 transition p-2 rounded-full hover:bg-blue-50"
        aria-label="Share on Twitter"
        title="Share on Twitter"
      >
        <Share2 size={20} />
      </button>
      <button
        onClick={() => handleShare('facebook')}
        className="text-gray-600 hover:text-blue-700 transition p-2 rounded-full hover:bg-blue-50"
        aria-label="Share on Facebook"
        title="Share on Facebook"
      >
        <Share2 size={20} />
      </button>
      <button
        onClick={() => handleShare('whatsapp')}
        className="text-gray-600 hover:text-green-600 transition p-2 rounded-full hover:bg-green-50"
        aria-label="Share on WhatsApp"
        title="Share on WhatsApp"
      >
        <Share2 size={20} />
      </button>
      <button
        onClick={() => handleShare('linkedin')}
        className="text-gray-600 hover:text-blue-800 transition p-2 rounded-full hover:bg-blue-50"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
      >
        <Share2 size={20} />
      </button>
    </div>
  );
}