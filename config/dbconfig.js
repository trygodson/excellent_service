var config = {
  development: {
    //url to be used in link generation
    // url: 'http://localhost:7005',
    url: 'mongodb+srv://godson:ox0UFpGdxeCRet7p@cluster0.lb5lhh7.mongodb.net/dreams_kanakku',

    //mongodb connection settings
    database: {
      host: '127.0.0.1',
      port: '27017',
      db: 'dreams_kanakku',
      params: '',
      url: 'mongodb+srv://godson:ox0UFpGdxeCRet7p@cluster0.lb5lhh7.mongodb.net/dreams_kanakku',
    },

    //server details
    server: {
      host: '127.0.0.1',
      port: '7006',
    },

    secret: 'KANAKKU_AUTHENTICATION_SECRET_KEY',
  },
  production: {
    //url to be used in link generation image upload
    url: 'mongodb+srv://godson:ox0UFpGdxeCRet7p@cluster0.lb5lhh7.mongodb.net/dreams_kanakku',

    //mongodb connection settings
    database: {
      host: '172.31.34.10',
      port: '27017',
      db: 'dreams_kanakku',
      params: '',
      url: 'mongodb+srv://godson:ox0UFpGdxeCRet7p@cluster0.lb5lhh7.mongodb.net/dreams_kanakku',
    },

    //server details
    server: {
      host: '127.0.0.1',
      port: '7006',
    },

    secret: 'KANAKKU_AUTHENTICATION_SECRET_KEY',
  },
};

module.exports = config;
