const BlogModel = require('../models/blog');

exports.getAllBlogs = async () => {
    return await BlogModel.find().select('-__v');
};

exports.createBlog = async (blog) => {
    return await BlogModel.create(blog).select('-__v');
};

exports.getBlogById = async (id) => {
    return await BlogModel.findById(id).select('-__v');
};

exports.updateBlog = async (id,blog) => {
    return await BlogModel.findByIdAndUpdate(id,blog,{new:true}).select('-__v');
}

exports.deleteBlog = async (id) => {
    return await BlogModel.findByIdAndDelete(id).select('-__v');
}