import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Lesson() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cards, setCards] = useState([]);
  const [streak, setStreak] = useState(0);
  const [points, setPoints] = useState(0);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [feedback, setFeedback] = useState('');
  const { state } = useLocation();

  const language = state?.language || 'es';
  const level = state?.level || 'Low';

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.post(
          'https://api.anthropic.com/v1/messages',
          {
            model: 'claude-3-sonnet-20240229',
            max_tokens: 1000,
            messages: [
              {
                role: 'user',
                content: `Generate 5 ${level.toLowerCase()} level ${language} language lesson items (vocabulary, phrases, or grammar exercises) in JSON format with fields: front (English), back (${language}), type (vocab, phrase, or grammar). Example: [{"front": "Hello", "back": "Hola", "type": "vocab"}]`,
              },
            ],
          },
          {
            headers: {
              'x-api-key': process.env.REACT_APP_CLAUDE_API_KEY,
              'anthropic-version': '2023-06-01',
              'content-type': 'application/json',
            },
          }
        );

        // Parse Claude response (adjust based on actual API response structure)
        const generatedContent = JSON.parse(response.data.content[0].text);
        setCards(generatedContent);
        setError('');
      } catch (err) {
        console.error('Error fetching lesson content:', err);
        setError('Failed to load lesson content. Using fallback data.');
        // Fallback static data
        setCards([
          { front: 'Hello', back: language === 'es' ? 'Hola' : language === 'fr' ? 'Bonjour' : 'Hallo', type: 'vocab' },
          { front: 'Thank you', back: language === 'es' ? 'Gracias' : language === 'fr' ? 'Merci' : 'Danke', type: 'vocab' },
          { front: 'Good morning', back: language === 'es' ? 'Buenos días' : language === 'fr' ? 'Bon matin' : 'Guten Morgen', type: 'phrase' },
        ]);
      }
    };
    fetchContent();
  }, [language, level]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleCorrect = () => {
    setStreak(streak + 1);
    setPoints(points + 10);
    setProgress(((currentCard + 1) / cards.length) * 100);
    setFeedback('Great job! 🎉');
    setTimeout(() => {
      setFeedback('');
      setIsFlipped(false);
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 1000);
  };

  const handleIncorrect = () => {
    setStreak(0);
    setFeedback('Try again! 😊');
    setTimeout(() => {
      setFeedback('');
      setIsFlipped(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto p-6 animate-slide-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-blue-800">
          {language === 'es' ? 'Spanish' : language === 'fr' ? 'French' : 'German'} Lesson ({level})
        </h2>
        <div className="text-right">
          <p className="text-lg font-semibold">Streak: {streak} 🔥</p>
          <p className="text-lg font-semibold">Points: {points} ⭐</p>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div className="progress-bar h-4 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>
      {error && <p className="text-red-500 mb-4 animate-shake">{error}</p>}
      {feedback && <p className="text-center text-xl font-bold text-green-600 mb-4">{feedback}</p>}
      {cards.length > 0 ? (
        <div className="border p-6 rounded-lg bg-white shadow-lg max-w-md mx-auto">
          <div
            onClick={handleFlip}
            className="text-center p-8 cursor-pointer bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300"
          >
            <p className="text-2xl font-semibold text-gray-800">
              {isFlipped ? cards[currentCard].back : cards[currentCard].front}
            </p>
            <p className="text-sm text-gray-500 mt-2">{cards[currentCard].type}</p>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleCorrect}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Correct
            </button>
            <button
              onClick={handleIncorrect}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              Incorrect
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Loading lesson content...</p>
      )}
    </div>
  );
}

export default Lesson;
