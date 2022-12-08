const Users = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "users", 
        {
            id: {
                type: DataTypes.STRING(10),
                allowNull: false,
                primaryKey: true
            },

            pw: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },

            name : {
                type: DataTypes.STRING(5),
                allowNull: false
            }
        },

        {
            tableName: "users",
            freezeTableName: true,
            timestamps: false
        }
    )
}

module.exports = Users;

