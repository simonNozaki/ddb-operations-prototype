const AWS = require('aws-sdk')

AWS.config.update({region: 'ap-northeast-1'})

// 実行環境
const stage = process.env.STAGE ? process.env.STAGE : 'dev'

const dynamoDbConfig = {
    apiVersion: '2012-08-10'
}

if (stage === 'dev') {
    dynamoDbConfig.endpoint = 'http://localhost:8000'
}

const documentClient = new AWS.DynamoDB.DocumentClient(dynamoDbConfig)
const dynamoDB = new  AWS.DynamoDB(dynamoDbConfig)

module.exports.documentClient = documentClient
module.exports.dynamoDB = dynamoDB