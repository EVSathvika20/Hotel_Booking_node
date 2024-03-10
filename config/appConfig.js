var config = {
    "local": {
        saltRounds: 10,
        expiresIn: '60d',
        apiUrl: 'http://localhost:3002',
        port: 3002,
        host: "localhost",
        dbName: "hotel_booking",
        dbUserName: "postgres",
        dialect: "postgres",
        dbPassword: "123456",
        dbPort: "5432",
        pool: {
            max: 5, 
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        jwtkey: {
            end_user_key: 'RgXyjlcWbQAbMHwCn0CGRED8dYa5aliQ'
        },
       
    },
    "dev": {
        saltRounds: 10,
        expiresIn: '60d',
        apiUrl: 'https://dev.crbapi.rezumr.com/',
        port: 3053,
        host: "localhost",
        dbName: "crb_dev",
        dbUserName: "crb_dev_user",
        dialect: "postgres",
        dbPassword: "2f!G3TkH13NM",
        dbPort: "5432",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        jwtkey: {
           
            end_user_key: 'RgXyjlcWbQAbMHwCn0CGRED8dYa5a123'
        },
    },
    "uat": {
        saltRounds: 10,
        expiresIn: '60d',
        apiUrl: 'https://uat.crbapi.rezumr.com/',
        port: 3054,
        host: "localhost",
        dbName: "crb_uat",
        dbUserName: "crb_uat_user",
        dialect: "postgres",
        dbPassword: "3*jNlvSv58qT",
        dbPort: "5432",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        
        jwtkey: {
            end_user_key: 'RgXyjlcWbQAbMHwCn0CGRED8dYa51234'
        },
    },

    "prod": {
        saltRounds: 10,
        expiresIn: '60d',
        apiUrl: 'https://uat.crbapi.rezumr.com/',
        port: 3054,
        host: "localhost",
        dbName: "crb_dev",
        dbUserName: "postgres",
        dialect: "postgres",
        dbPassword: "123456",
        dbPort: "5432",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        jwtkey: {
            end_user_key: 'ceb21d54e6c700170420ade71f46e99d1722864a11bfbbb89db42e51c139efaw'
        },
        
    },
    "docker": {
        saltRounds: 10,
        expiresIn: '60d',
        apiUrl: 'https://dev.crbapi.rezumr.com/',
        port: 3053,
        host: "localhost",
        dbName: "crb_dev",
        dbUserName: "venkat",
        dialect: "postgres",
        dbPassword: "yNm9F2z6$&U5",
        dbPort: "5432",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        jwtkey: {
            end_user_key: 'ceb21d54e6c700170420ade71f46e99e1722864a11bfbbb89db42e51c139efad'
        },
        
    }
}
module.exports = config;