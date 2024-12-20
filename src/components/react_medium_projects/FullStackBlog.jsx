import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FullStackBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });
    const [blogs, setBlogs] = useState([]);
    const [editingBlogId, setEditingBlogId] = useState(null);

    const fetchBlog = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setBlogs(data);
    };

    // Run fetchBlog only once after the initial render
    useEffect(() => {
        fetchBlog();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const addBlog = async () => {
        const newBlog = {
            title: formData.title,
            body: formData.content
        };

        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newBlog);

        setBlogs([response.data, ...blogs]);

        setFormData({ title: '', content: '' });
    };

    const deleteBlog = (id) => {
        const updatedBlog = blogs.filter((blog) => blog.id !== id);
        setBlogs(updatedBlog);
    };

    const editBlog = (blog) => {
        console.log(blog.id);
        setEditingBlogId(blog.id);
        setFormData({ title: blog.title, content: blog.body });
    }

    const saveBlog = async () => {
        const updatedBlog = {
            title: formData.title,
            body: formData.content
        };

        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${editingBlogId}`, updatedBlog);

        const allBlogs = blogs.map((blog) =>
            blog.id === editingBlogId ? { ...blog, ...response.data } : blog
        );

        setBlogs(allBlogs);
        setFormData({ title: '', content: '' });
        setEditingBlogId(null);
    };

    return (
        <div className="container mx-auto min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-gray-800 p-8">
            <header className="text-center mb-6">
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">Full Stack Blog Explorer</h1>
                <p className="text-lg text-gray-200 mt-2">Discover and search for blogs</p>
            </header>
            <div className='font-bold md:text-5xl text-2xl md:mb-8 mb-4'>Total Blogs: {blogs.length}</div>

            <div className="mb-8 w-full flex items-center justify-center gap-4 md:gap-20 flex-col">
                <div className='flex flex-col gap-5 w-full items-center justify-center'>
                    <input
                        onChange={handleChange}
                        name="title"
                        value={formData.title}
                        placeholder="Write your Blog title"
                        className="md:w-[70%] w-full p-3 rounded-lg text-gray-700 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 shadow-md"
                        type="text"
                    />
                    <textarea
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Write your Blog Content"
                        rows={6}
                        name="content"
                        className="md:w-[70%] w-full  p-3 rounded-lg text-gray-700 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 shadow-md"
                        type="text"
                    />
                </div>
                {
                    editingBlogId ? (
                        <button onClick={saveBlog} className="md:w-[70%] w-full px-8 py-2 bg-green-500 text-white rounded-md transition duration-300 transform hover:bg-yellow-600">
                            Save Blog
                        </button>
                    ) : (
                        <button onClick={addBlog} className="md:w-[70%] w-full px-8 py-2 bg-green-500 text-white rounded-md transition duration-300 transform hover:bg-yellow-600">
                            Add Blog
                        </button>
                    )
                }
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="p-6 rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105"
                    >
                        <h3 className="font-bold text-xl mb-2 text-indigo-600">ID: {blog.id}</h3>
                        <h2 className="font-semibold text-lg mb-2">{blog.title}</h2>
                        <p className="text-gray-600 mb-4">{blog.body}</p>

                        <div className="flex justify-between mt-4">
                            {/* Edit Button */}
                            {editingBlogId === blog.id ? (
                                <button onClick={saveBlog} className="px-4 py-2 bg-yellow-500 text-white rounded-md transition duration-300 transform hover:bg-yellow-600">
                                    Save
                                </button>
                            ) : (
                                <button onClick={() => editBlog(blog)} className="px-4 py-2 bg-yellow-500 text-white rounded-md transition duration-300 transform hover:bg-yellow-600">
                                    Edit
                                </button>
                            )}

                            {/* Delete Button */}
                            <button onClick={() => deleteBlog(blog.id)} className="px-4 py-2 bg-red-500 text-white rounded-md transition duration-300 transform hover:bg-red-600">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FullStackBlog;
