const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "sick-nasty-bucket",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://b5ii7l123f.execute-api.us-east-1.amazonaws.com/prod/",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_36OtcdB7D",
      APP_CLIENT_ID: "7nuetmbkpb2p1t20ks2er9074r",
      IDENTITY_POOL_ID: "us-east-1:fcfb0166-4ef2-40f6-9368-1b4db74e4bfe",
    },
  };
  
  export default config;