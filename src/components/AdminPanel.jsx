import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn the fundamentals of React Hooks and how they can simplify your components.',
      content: 'React Hooks have revolutionized the way we write React components...',
      date: '2024-01-15',
      published: true
    },
    {
      id: 2,
      title: 'Building Responsive Layouts with Tailwind CSS',
      excerpt: 'Master the art of creating beautiful, responsive designs with Tailwind CSS.',
      content: 'Tailwind CSS provides a utility-first approach to styling...',
      date: '2024-01-10',
      published: false
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState({
    id: null,
    title: '',
    excerpt: '',
    content: '',
    date: '',
    published: false
  });

  const handleEdit = (post) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (currentPost.id) {
      // Update existing post
      setBlogPosts(posts => 
        posts.map(post => 
          post.id === currentPost.id ? currentPost : post
        )
      );
    } else {
      // Add new post
      const newPost = {
        ...currentPost,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0]
      };
      setBlogPosts(posts => [...posts, newPost]);
    }
    setIsEditing(false);
    setCurrentPost({
      id: null,
      title: '',
      excerpt: '',
      content: '',
      date: '',
      published: false
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setBlogPosts(posts => posts.filter(post => post.id !== id));
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentPost({
      id: null,
      title: '',
      excerpt: '',
      content: '',
      date: '',
      published: false
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Portfolio
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={16} />
              New Post
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {!isEditing ? (
          /* Blog Posts List */
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Blog Posts</h2>
            
            {blogPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No blog posts yet.</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Create Your First Post
                </button>
              </div>
            ) : (
              <div className="grid gap-6">
                {blogPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    className="bg-white rounded-lg shadow-sm border p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            post.published 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {post.published ? 'Published' : 'Draft'}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{post.excerpt}</p>
                        <p className="text-sm text-gray-500">Date: {post.date}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleEdit(post)}
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Edit/Create Form */
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {currentPost.id ? 'Edit Post' : 'Create New Post'}
                </h2>
                <div className="flex gap-3">
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <X size={16} />
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Save size={16} />
                    Save Post
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={currentPost.title}
                    onChange={(e) => setCurrentPost({...currentPost, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter post title..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt
                  </label>
                  <textarea
                    value={currentPost.excerpt}
                    onChange={(e) => setCurrentPost({...currentPost, excerpt: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of the post..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <textarea
                    value={currentPost.content}
                    onChange={(e) => setCurrentPost({...currentPost, content: e.target.value})}
                    rows={12}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Write your post content here..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="published"
                    checked={currentPost.published}
                    onChange={(e) => setCurrentPost({...currentPost, published: e.target.checked})}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="published" className="ml-2 text-sm font-medium text-gray-700">
                    Publish immediately
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;