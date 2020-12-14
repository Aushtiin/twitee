'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verificationToken: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Post, {
      foreignKey: 'userId',
      as: 'posts',
      onDelete: 'CASCADE',
    });

    User.hasMany(models.Like, {
      foreignKey: 'userId',
      as: 'likes',
      onDelete: 'CASCADE',
    });

    User.hasMany(models.Comment, {
      foreignKey: 'userId',
      as: 'comments',
      onDelete: 'CASCADE',
    });
  };
  return User;
};