import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LanguageSelection() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const navigate = useNavigate();

  const languages = [
    { name: 'Spanish', code: 'es', icon: '🇪🇸' },
    { name: 'French', code: 'fr', icon: '🇫🇷' },
    { name: 'German', code: 'de', icon: '🇩🇪' },
  ];

  const handleSelect = () => {
    if (!selectedLanguage) {
      alert('Please select a language');
      return;
    }
    console.log('Selected language:', selectedLanguage);
    navigate('/level-selection', { state: { language: selectedLanguage } });
  };

  return (
    <div className="container mx-auto p-6 animate-slide-in">
      <h2 className="text-3xl font-extrabold text-blue-800 mb-6">Choose Your Language</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setSelectedLanguage(lang.code)}
            className={`p-6 rounded-lg shadow-lg hover:scale-105 transition ${
              selectedLanguage === lang.code ? 'bg-blue-100 border-4 border-blue-500' : 'bg-white'
            }`}
          >
            <span className="text-4xl">{lang.icon}</span>
            <h3 className="text-xl font-bold text-gray-800 mt-2">{lang.name}</h3>
          </button>
        ))}
      </div>
      <button
        onClick={handleSelect}
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-md"
      >
        Next
      </button>
    </div>
  );
}

export default LanguageSelection;
