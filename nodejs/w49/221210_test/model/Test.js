const Test = (Sequelize, DataTypes)=>{

    // return Sequelize.define(
    //     "test",
    //     {
    //       id: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false,
    //         primaryKey: true,
    //       },
    //       pw: {
    //         type: DataTypes.STRING(50),
    //         allowNull: false,
    //       },
    //     },
    //     {
    //       tableName: "test",
    //       freezeTableName: true,
    //       timestamps: false,
    //     }
    //   );
    // };

    return Sequelize.define(
        "test", // create table 
        {
            id: { // id int not null primary key auto_increment
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            
            spot_name: { // name varchar(10) not null
                type: DataTypes.TEXT,
                allowNull: false
            },
    
            address: { // comment mediumtext 
                type: DataTypes.TEXT,
                allowNull: false
            },

            lat: {
                type: DataTypes.DOUBLE,
                allowNull: false
            },

            lon: {
                type: DataTypes.DOUBLE,
                allowNull: false
            }
        },
        
        {
            tableName: "test", 
            freezeTableName: true,
            timestamps: false // default true
            // collate, charset 등의 옵션도 있다.
        }
    );
};

module.exports = Test;