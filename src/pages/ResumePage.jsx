import { useTranslation } from 'react-i18next';
import { FaDownload } from 'react-icons/fa';
import resumePdf from '../assets/SADIK_DOUNIA_Resume_2026-.pdf';

const ResumePage = () => {
  const { t } = useTranslation();
  const resumeUrl = resumePdf;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <h1 className="text-3xl font-bold text-slate-900 border-l-4 border-indigo-600 pl-4">
          {t('resume.title')}
        </h1>
        <a
          href={resumeUrl}
          download="SADIK_DOUNIA_Resume.pdf"
          className="btn-primary flex items-center"
        >
          <FaDownload className="mr-2" /> {t('resume.download')}
        </a>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden aspect-[1/1.4] w-full max-w-4xl mx-auto">
        <iframe
          src={`${resumeUrl}#toolbar=0`}
          title="Resume PDF"
          className="w-full h-full border-none"
        >
          <div className="p-10 text-center">
            <p className="text-slate-600 mb-4">{t('resume.fallback')}</p>
            <a
              href={resumeUrl}
              download
              className="text-indigo-600 font-semibold hover:underline"
            >
              {t('resume.download')}
            </a>
          </div>
        </iframe>
      </div>
    </div>
  );
};

export default ResumePage;
