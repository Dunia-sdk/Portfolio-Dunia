import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ImageCarousel from './ImageCarousel';

const ProjectCard = ({ project }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const title = currentLang === 'fr' ? project.titleFr : project.titleEn;
  const description = currentLang === 'fr' ? project.descriptionFr : project.descriptionEn;

  return (
    <div className="card h-full flex flex-col">
      <ImageCarousel images={project.images} />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium"
          >
            <FaGithub className="mr-2" /> {t('projects.view_github')}
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium"
            >
              <FaExternalLinkAlt className="mr-2" /> {t('projects.view_demo')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
