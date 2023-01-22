import { APIGatewayProxyHandler } from "aws-lambda";
import * as serverlessExpress from "aws-serverless-express";

import { app } from "./app";

const server = serverlessExpress.createServer(app);

export const handler: APIGatewayProxyHandler = (event, context) => {
  serverlessExpress.proxy(server, event, context);
};
