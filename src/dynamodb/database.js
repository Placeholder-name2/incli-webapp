// Need aws credentials file in default directory to work

var AWS = require('aws-sdk');

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'eu-north-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'eu-north-1:fe098a1d-2503-4ea1-9ded-68da1fede9e8',
  // RoleArn: 'arn:aws:iam::990232125707:role/Cognito_trending_webappUnauth_Role',
  // AccountId: '990232125707', // your AWS account ID
});

//AWS.config.update({ region: process.env.REGION });

var ddb = new AWS.DynamoDB.DocumentClient(); //({ apiVersion: '2012-08-10' });

async function getDatabaseItems(tableName) {
  var params = {
    TableName: tableName,
    Select: 'ALL_ATTRIBUTES',
  };

  const databaseItems = await ddb
    .scan(params, function (err, data) {
      if (err) {
        console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2));
        return '';
      } else {
        const databaseItemsString = JSON.stringify(data, null, 2);
        return JSON.parse(databaseItemsString);
      }
    })
    .promise();

  return databaseItems;
}

export default getDatabaseItems;
