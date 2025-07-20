function Home() {
  return (
    <div className="container mx-auto p-6 animate-slide-in">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-6">Welcome to Languageladder!</h2>
      <p className="text-xl text-gray-700 mb-8">Master languages with fun, interactive lessons and connect with learners worldwide!</p>
      <div className="flex space-x-4">
        <a href="/lesson" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-md">Start Learning</a>
        <a href="/community" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition shadow-md">Join Community</a>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold text-blue-600">Interactive Lessons</h3>
          <p className="text-gray-600">Engage with AI-generated flashcards and exercises.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold text-blue-600">Community</h3>
          <p className="text-gray-600">Share tips and connect with learners globally.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold text-blue-600">Progress Tracking</h3>
          <p className="text-gray-600">Monitor your growth with streaks and points.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
