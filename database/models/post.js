'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }
  }, {});
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: "userId",
      as: "author",
      onDelete: "CASCADE"
    });
    Post.hasMany(models.Like, {
      foreignKey: "postId",
      as: "postlikes",
      onDelete: "CASCADE"
    });
    Post.hasMany(models.Comment, {
      foreignKey: "postId",
      as: "comments",
      onDelete: "CASCADE"
    })
  };
  return Post;
};