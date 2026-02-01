import { motion } from "framer-motion";
import { Play, FileText, Image, ExternalLink } from "lucide-react";

export type ProjectType = "image" | "video" | "document" | "data";

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  thumbnail: string;
  category: string;
  tags: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const typeIcons: Record<ProjectType, React.ReactNode> = {
  image: <Image size={16} />,
  video: <Play size={16} />,
  document: <FileText size={16} />,
  data: <FileText size={16} />,
};

const typeLabels: Record<ProjectType, string> = {
  image: "Image",
  video: "Video",
  document: "Document",
  data: "Data",
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
          {typeIcons[project.type]}
          <span>{typeLabels[project.type]}</span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow"
          >
            <ExternalLink size={24} className="text-primary-foreground" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className="font-display text-xl font-semibold mt-2 mb-3 text-card-foreground group-hover:text-gradient transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-secondary rounded-md text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
