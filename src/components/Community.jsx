function Community() {
  const posts = [
    { username: 'john_doe', content: 'Tips for learning Spanish verbs?', date: '2025-07-08' },
    { username: 'jane_smith', content: 'French pronunciation is tricky, any advice?', date: '2025-07-07' },
    { username: 'alice_wong', content: 'Loving the German lessons!', date: '2025-07-06' },
  ];

  return (
    <div className="container mx-auto p-6 animate-slide-in">
      <h2 className="text-3xl font-extrabold text-blue-800 mb-6">Community</h2>
      <div className="max-w-2xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-6 mb-4 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-between">
              <p className="font-bold text-blue-600">{post.username}</p>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
            <p className="text-gray-700 mt-2">{post.content}</p>
            <button className="mt-2 text-blue-500 hover:underline">Reply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
