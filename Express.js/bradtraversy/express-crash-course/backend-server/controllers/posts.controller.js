import { ObjectId } from 'mongodb';
import { posts } from '../index.js';

// @desc   Get all posts
// @route  GET /posts
export const getPosts = async (req, res) => {
  try {
    const query = {};
    const limit = parseInt(req.query.limit) || 5;
    const result = await posts.find(query).limit(limit).toArray();
    res.status(200).send(result); // 200 OK
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' }); // 500 Internal Server Error
  }
};

// @desc   Get single post
// @route  GET /posts/:id
export const getPost = async (req, res) => {
  const { id } = req.params;

  // Check if the provided id is a valid MongoDB ObjectId
  if (!ObjectId.isValid(id))
    return res.status(400).send({ message: 'Invalid post ID' });

  const query = { _id: new ObjectId(id) };
  const result = await posts.findOne(query);

  if (!result) return res.status(404).send({ message: `Post not found` });

  res.status(200).send(result);
};

// @desc   Create new post
// @route  POST /posts
export const createPost = async (req, res) => {
  try {
    const post = req.body;
    const result = await posts.insertOne(post);
    res.status(201).send(result); // 201 Created
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' }); // 500 Internal Server Error
  }
};

// @desc   Update a post
// @route  PUT /posts/:id
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the provided id is a valid MongoDB ObjectId
    if (!ObjectId.isValid(id))
      return res.status(400).send({ message: 'Invalid post ID' }); // 400 Bad Request

    const updatedPost = req.body;
    const filter = { _id: new ObjectId(id) };
    const options = { upsert: true };
    const result = await posts.updateOne(
      filter,
      { $set: updatedPost },
      options
    );

    if (result.matchedCount === 0)
      return res.status(404).send({ message: 'Post not found' }); // 404 Not Found

    res.status(200).send(result); // 200 OK
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' }); // 500 Internal Server Error
  }
};

// @desc   Delete a post
// @route  DELETE /posts/:id
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the provided id is a valid MongoDB ObjectId
    if (!ObjectId.isValid(id))
      return res.status(400).send({ message: 'Invalid post ID' }); // 400 Bad Request

    const query = { _id: new ObjectId(id) };
    const result = await posts.deleteOne(query);

    if (result.deletedCount === 0)
      return res.status(404).send({ message: 'Post not found' }); // 404 Not Found

    res.status(200).send({ message: 'Post deleted successfully' }); // 200 OK
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' }); // 500 Internal Server Error
  }
};
