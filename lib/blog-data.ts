// /lib/blog-data.ts

export interface BlogPost {
    featured: boolean
    id: number
    slug: string
    title: string
    excerpt: string
    date: string
    author: string
    category: string
    readTime: string
    image: string
    tags: string[]
    content: string
    updatedAt: Date
  }
  
  export interface Author {
    name: string
    role: string
    bio: string
    avatar: string
  }
  
  // === AUTHOR ===
  export const author: Author = {
    name: "Jae Travel Team",
    role: "Safari Experts",
    bio: "We are experienced Kenya safari specialists helping travelers discover the best destinations, hotels, and unforgettable safari experiences.",
    avatar: "/avatars/jae-team.jpg",
  }
  
  // === BLOG POSTS ===
  export const posts: BlogPost[] = [
    {
        id: 1,
        slug: "best-time-to-visit-masai-mara",
        title: "Best Time to Visit Masai Mara (Complete Guide 2026)",
        excerpt: "Discover the best months to visit Masai Mara, including the Great Migration, weather patterns, and travel tips.",
        date: "2025-01-10",
        author: "Jae Travel Team",
        category: "Safari Guides",
        readTime: "6 min read",
        image: "/blog/masai-mara-best-time.jpg",
        tags: ["masai mara", "kenya safari", "travel tips", "great migration"],
        updatedAt: new Date("2025-01-10"),
        content: `
  # Best Time to Visit Masai Mara
  
  The Masai Mara is one of Africa’s most famous safari destinations. Knowing the best time to visit can greatly improve your experience.
  
  ## July to October – Great Migration
  
  This is the peak season when millions of wildebeest cross from Serengeti into Masai Mara.
  
  - Best wildlife viewing
  - River crossings
  - High demand (book early)
  
  ## November to March – Green Season
  
  - Fewer tourists
  - Beautiful landscapes
  - Great for photography
  
  ## April to June – Rainy Season
  
  - Lower prices
  - Fewer crowds
  - Some roads may be challenging
  
  ## Final Recommendation
  
  For the ultimate safari experience, visit between **July and October**.
      `,
        featured: true
    },
  
    {
        id: 2,
        slug: "kenya-safari-cost-guide",
        title: "Kenya Safari Cost Guide (2026 Prices Explained)",
        excerpt: "Learn how much a Kenya safari costs, including budget, mid-range, and luxury options.",
        date: "2025-02-15",
        author: "Jae Travel Team",
        category: "Travel Planning",
        readTime: "7 min read",
        image: "/blog/kenya-safari-cost.jpg",
        tags: ["kenya safari cost", "budget travel", "luxury safari"],
        updatedAt: new Date("2025-02-15"),
        content: `
  # Kenya Safari Cost Guide
  
  Planning a safari in Kenya? Here's what you need to know about pricing.
  
  ## Budget Safari ($150–$250/day)
  
  - Basic camps
  - Shared transport
  - Group tours
  
  ## Mid-Range Safari ($250–$500/day)
  
  - Comfortable lodges
  - Better transport
  - Smaller groups
  
  ## Luxury Safari ($500+ per day)
  
  - 5-star lodges
  - Private guides
  - Premium experience
  
  ## What Affects Cost?
  
  - Season (peak vs low)
  - Accommodation level
  - Transport type
  
  ## Final Tip
  
  Book early during peak season to secure the best rates.
      `,
        featured: false
    },
  
    {
        id: 3,
        slug: "top-5-safari-destinations-kenya",
        title: "Top 5 Safari Destinations in Kenya",
        excerpt: "Explore the best safari destinations in Kenya, from Masai Mara to Amboseli.",
        date: "2025-03-01",
        author: "Jae Travel Team",
        category: "Destinations",
        readTime: "5 min read",
        image: "/blog/top-destinations-kenya.jpg",
        tags: ["kenya destinations", "safari parks", "travel guide"],
        updatedAt: new Date("2025-03-01"),
        content: `
  # Top 5 Safari Destinations in Kenya
  
  Kenya offers some of the best safari destinations in Africa.
  
  ## 1. Masai Mara
  
  - Great Migration
  - Big Five animals
  
  ## 2. Amboseli
  
  - Views of Mount Kilimanjaro
  - Large elephant herds
  
  ## 3. Tsavo National Park
  
  - Largest park in Kenya
  - Diverse landscapes
  
  ## 4. Lake Nakuru
  
  - Flamingos
  - Rhino sanctuary
  
  ## 5. Samburu
  
  - Unique wildlife species
  - Less crowded
  
  ## Conclusion
  
  Each destination offers a unique experience depending on your travel goals.
      `,
        featured: true
    },
  ]
  
  // === HELPERS ===
  
  // Get post by slug (IMPORTANT for dynamic routes)
  export function getPostBySlug(slug: string) {
    return posts.find((post) => post.slug === slug)
  }
  
  // Get related posts (simple logic)
  export function getRelatedPosts(currentSlug: string) {
    return posts
      .filter((post) => post.slug !== currentSlug)
      .slice(0, 3)
  }