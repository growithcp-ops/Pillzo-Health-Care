import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, Search, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingElements } from "@/components/FloatingElements";

const categories = ["All", "Health Tips", "Mental Health", "Preventive Care", "Nutrition", "Telehealth"];

const posts = [
  {
    id: 1,
    title: "Why Telemedicine Is the Future of Primary Care",
    excerpt: "Discover how virtual consultations are transforming the way patients connect with doctors — saving time, reducing anxiety, and improving outcomes.",
    category: "Telehealth",
    author: "Dr. Sachin Upadhyay",
    authorRole: "Co-founder & Medical Director",
    date: "March 18, 2025",
    readTime: "5 min read",
    image: null,
    featured: true,
    color: "from-blue-50 to-cyan-50",
    accent: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    title: "Managing Medical Anxiety: You're Not Alone",
    excerpt: "Feeling panicked about a health issue is incredibly common. Here's how to calm your mind and take the right steps toward care — without the overwhelm.",
    category: "Mental Health",
    author: "Sandeep Ray",
    authorRole: "Founder",
    date: "March 10, 2025",
    readTime: "7 min read",
    image: null,
    featured: false,
    color: "from-emerald-50 to-teal-50",
    accent: "bg-secondary/20 text-emerald-700",
  },
  {
    id: 3,
    title: "5 Preventive Health Checks Everyone Should Schedule This Year",
    excerpt: "An ounce of prevention is worth a pound of cure. These five routine check-ups can catch problems early — when they're easiest to treat.",
    category: "Preventive Care",
    author: "Dr. Sachin Upadhyay",
    authorRole: "Co-founder & Medical Director",
    date: "February 28, 2025",
    readTime: "6 min read",
    image: null,
    featured: false,
    color: "from-violet-50 to-purple-50",
    accent: "bg-violet-100 text-violet-700",
  },
  {
    id: 4,
    title: "How to Describe Your Symptoms to a Doctor (And Get Better Help Faster)",
    excerpt: "Clear communication with your doctor is one of the most powerful tools in your healthcare toolkit. Here's exactly how to articulate what you're feeling.",
    category: "Health Tips",
    author: "Sandeep Ray",
    authorRole: "Founder",
    date: "February 15, 2025",
    readTime: "4 min read",
    image: null,
    featured: false,
    color: "from-orange-50 to-amber-50",
    accent: "bg-orange-100 text-orange-700",
  },
  {
    id: 5,
    title: "The Anti-Inflammatory Diet: What Science Actually Says",
    excerpt: "Inflammation is at the root of many chronic conditions. We cut through the noise and share what evidence-based nutrition actually recommends.",
    category: "Nutrition",
    author: "Dr. Sachin Upadhyay",
    authorRole: "Co-founder & Medical Director",
    date: "January 30, 2025",
    readTime: "8 min read",
    image: null,
    featured: false,
    color: "from-lime-50 to-green-50",
    accent: "bg-lime-100 text-lime-700",
  },
  {
    id: 6,
    title: "Building a Family Health Routine That Sticks",
    excerpt: "From kids to grandparents, creating shared health habits protects everyone you love. Here's a practical guide to getting started without burnout.",
    category: "Health Tips",
    author: "Sandeep Ray",
    authorRole: "Founder",
    date: "January 12, 2025",
    readTime: "5 min read",
    image: null,
    featured: false,
    color: "from-pink-50 to-rose-50",
    accent: "bg-pink-100 text-pink-700",
  },
];

const iconMap: Record<string, string> = {
  "Telehealth": "🖥️",
  "Mental Health": "🧠",
  "Preventive Care": "🛡️",
  "Health Tips": "💡",
  "Nutrition": "🥗",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = filtered.filter((p) => !p.featured || activeCategory !== "All" || searchQuery);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <FloatingElements />

      <main className="flex-1 pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <HeartPulse className="w-4 h-4" /> Pillzo Health Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
              Insights for a <span className="text-primary">Calmer, Healthier</span> Life
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert advice, practical tips, and honest guidance from our doctors and founders — because informed patients get better care.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative max-w-xl mx-auto mb-10"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm transition"
            />
          </motion.div>

          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2 mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                    : "bg-white text-foreground/70 border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat !== "All" && iconMap[cat] ? `${iconMap[cat]} ` : ""}{cat}
              </button>
            ))}
          </motion.div>

          {/* Featured Post */}
          {featuredPost && activeCategory === "All" && !searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-14"
            >
              <div className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${featuredPost.color} border border-border/60 p-8 md:p-12 cursor-pointer hover:shadow-xl hover:shadow-primary/10 transition-all duration-300`}>
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">Featured</span>
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full ${featuredPost.accent}`}>
                        <Tag className="w-3 h-3" /> {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed max-w-xl">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-6">
                      <span className="font-semibold text-foreground">{featuredPost.author}</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" /> {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" /> {featuredPost.readTime}
                      </span>
                    </div>
                    <Button className="rounded-full px-6 gap-2 shadow-md shadow-primary/20">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                  {/* Decorative Illustration Placeholder */}
                  <div className="hidden md:flex items-center justify-center w-64 h-48 rounded-2xl bg-white/60 border border-white/80 text-6xl shrink-0">
                    🖥️
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Post Grid */}
          {filtered.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {(activeCategory === "All" && !searchQuery ? regularPosts : filtered).map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className={`group flex flex-col rounded-2xl overflow-hidden border border-border/60 bg-gradient-to-br ${post.color} hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer`}
                >
                  {/* Card Top */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${post.accent}`}>
                        <Tag className="w-3 h-3" /> {post.category}
                      </span>
                      <span className="text-2xl">{iconMap[post.category] ?? "📄"}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-4 border-t border-black/5 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">{post.author}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                    </div>
                    <button className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 border border-border/50 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 group-hover:shadow-sm">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-4xl mb-4">🔍</p>
              <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try a different search term or category.</p>
              <Button variant="outline" className="mt-6 rounded-full" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
                Clear filters
              </Button>
            </motion.div>
          )}

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/60 p-10 md:p-14 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              Stay in the loop on your health
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Get our weekly digest of health insights, tips, and Pillzo updates — straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
              <Button className="rounded-xl px-6 shrink-0 shadow-md shadow-primary/20">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
