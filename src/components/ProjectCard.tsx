import { Card } from './ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export function ProjectCard({ title, description, imageUrl, tags, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white/70 backdrop-blur-sm border-white/20 rounded-xl"
      style={{ textDecoration: 'none' }}
    >
      <Card className="!bg-transparent !border-none !shadow-none !rounded-none">
        <div className="aspect-[4/3] overflow-hidden rounded-t-lg bg-gray-100">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
        <div className="p-6 space-y-3">
          <h3 className="text-xl">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/50 text-gray-700 text-xs rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </a>
  );
}