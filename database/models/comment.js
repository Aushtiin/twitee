'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
    },
    likes: {
      type: DataTypes.INTEGER, 
      defaultValue: 0,
    }
  }, {});
  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author',
    });
    Comment.belongsTo(models.Post, {
      foreignKey: 'postId',
      as: 'post'
    });
    Comment.hasMany(models.Like, {
      foreignKey: 'commentId',
      as: 'commentlikes'
    })
  }
  return Comment;
};