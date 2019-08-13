export default {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-west-2",
      BUCKET: "ld-project-note-s3-bucket"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://4ek10epwfh.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_on9Rqufsa",
      APP_CLIENT_ID: "sgu6gja6388f16om98u8tbvqa",
      IDENTITY_POOL_ID: "us-west-2:e6355b48-f7f7-4d8b-8275-9eecf360a348"
    }
  };