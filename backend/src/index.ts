import 'dotenv/config';
import { APIGatewayProxyHandler } from 'aws-lambda';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  endpoint: process.env.DYNAMODB_ENDPOINT || undefined,
  region: process.env.AWS_REGION || 'us-east-1',
});

export const handler: APIGatewayProxyHandler = async (event) => {
  if (event.httpMethod === 'POST') {
    const { description, location, price } = JSON.parse(event.body || '{}');
    const id = uuidv4();
    const params = {
      TableName: process.env.REQUESTS_TABLE || 'ServiceRequests',
      Item: {
        id,
        description,
        location,
        price,
        createdAt: new Date().toISOString(),
      },
    };
    await dynamoDb.put(params).promise();
    return {
      statusCode: 201,
      body: JSON.stringify({ id }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Service Bidder API' }),
  };
};
