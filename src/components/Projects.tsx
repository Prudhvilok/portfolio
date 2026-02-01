import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard, { Project, ProjectType } from "./ProjectCard";

const categories = [
  { id: "all", label: "All Work" },
  { id: "image", label: "Images" },
  { id: "video", label: "Videos" },
  { id: "document", label: "Documents" },
  { id: "data", label: "Data" },
];

const projects: Project[] = [
  {
    id: "1",
    title: "Brand Identity Design",
    description: "Complete visual identity system including logo, color palette, and brand guidelines for a tech startup.",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    category: "Branding",
    tags: ["Design", "Identity", "Visual"],
  },
  {
    id: "2",
    title: "Product Launch Video",
    description: "Cinematic product reveal video showcasing innovative features and cutting-edge technology.",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    category: "Motion",
    tags: ["Video", "Animation", "Product"],
  },
  {
    id: "3",
    title: "Annual Report 2024",
    description: "Comprehensive annual report design with data visualization and corporate storytelling.",
    type: "document",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    category: "Publication",
    tags: ["Report", "Design", "Print"],
  },
  {
    id: "4",
    title: "Market Analysis Dashboard",
    description: "Interactive data dashboard for real-time market analytics and business intelligence.",
    type: "data",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "Analytics",
    tags: ["Data", "Dashboard", "UX"],
  },
  {
    id: "5",
    title: "Photography Collection",
    description: "Curated collection of architectural and urban photography from cities around the world.",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    category: "Photography",
    tags: ["Photo", "Architecture", "Urban"],
  },
  {
    id: "6",
    title: "Documentary Short Film",
    description: "Award-winning documentary exploring sustainable innovation in modern architecture.",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    category: "Film",
    tags: ["Documentary", "Film", "Story"],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.type === activeCategory);

  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my latest work across various mediums and disciplines
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
