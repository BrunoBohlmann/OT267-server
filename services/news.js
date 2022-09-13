/* eslint-disable max-len */
const { News, Comment } = require('../models/index');

const getNewsById = async (id) => News.findByPk(id);

const deleteNews = async (id) => {
  const response = await News.destroy({
    where: { id },
  });
  return response;
};

const createNews = async (name, content, image, categoryId) => (News.create({
  name,
  content,
  image,
  categoryId,
  type: 'news',
})
);

const updateNews = async (id, data) => News.update({ ...data }, { where: { id } });

const findAllCommentsByNewsId = (id) => Comment.findAll({
  where: {
    newsId: id,
  },
});

module.exports = {
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
  findAllCommentsByNewsId,
};
