
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    like: {
      type: DataTypes.BOOLEAN
    }
  }, {});
  Like.associate = (models) => {
    Like.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    Like.belongsTo(models.Comment, {
      foreignKey: "commentId",
      onDelete: "CASCADE"
    })
  };
  return Like;
};