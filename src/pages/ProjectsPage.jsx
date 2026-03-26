import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 border-l-4 border-indigo-600 pl-4">
          {t('projects.title')}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
