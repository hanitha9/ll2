import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function LevelSelection() {
  const [selectedLevel, setSelectedLevel] = useState('');
  const { state } = useLocation();
  const navigate = useNavigate();

  const levels = [
    { name: 'Low', description: 'Beginner' },
    { name: 'Medium', description: 'Intermediate' },
    { name: 'High', description: 'Advanced' },
  ];

  const handleSelect = () => {
    if (!selectedLevel) {
      alert('Please select a level');
      return;
    }
    console.log('Selected level:', selectedLevel, 'for language:', state.language);
    navigate('/lesson', { state: { language: state.language, level: selectedLevel } });
  };

  return (
    <div className="container mx-auto p-6 animate-slide-in">
      <h2 className="text-3xl font-extrabold text-blue-800 mb-6">Select Your Level</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {levels.map((level) => (
          <button
            key={level.name}
            onClick={() => setSelectedLevel(level.name)}
            className={`p-6 rounded-lg shadow-lg hover:scale-105 transition ${
              selectedLevel === level.name ? 'bg-blue-100 border-4 border-blue-500' : 'bg-white'
            }`}
          >
            <h3 className="text-xl font-bold text-gray-800">{level.name}</h3>
            <p className="text-gray-600">{level.description}</p>
          </button>
        ))}
      </div>
      <button
        onClick={handleSelect}
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-md"
      >
        Start Learning
      </button>
    </div>
  );
}

export default LevelSelection;
