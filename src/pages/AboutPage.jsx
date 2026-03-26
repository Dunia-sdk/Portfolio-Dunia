import { useTranslation } from 'react-i18next';
import profilImg from '../assets/profil.jpeg';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
          <div className="absolute inset-0 rounded-full border-4 border-indigo-100 animate-pulse"></div>
          <img
            src={profilImg}
            alt="Sadik Dounia"
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-2">
            Sadik Dounia
          </h1>
          <p className="text-xl text-indigo-600 font-semibold mb-6">
            {t('about.role')}
          </p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
            {t('about.description')}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {['React', 'Laravel', 'PHP', 'JavaScript', 'Tailwind CSS', 'MySQL'].map((skill) => (
              <span key={skill} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
