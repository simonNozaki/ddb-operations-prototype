const dynamoDB = require('../client').dynamoDB

dynamoDB.createTable({
    TableName: 'test-application-properties',
    AttributeDefinitions: [
        {
            AttributeName: 'key',
            AttributeType: 'S'
        }
    ],
    ProvisionedThroughput: {
        WriteCapacityUnits: 2,
        ReadCapacityUnits: 3
    },
    KeySchema: [
        {
            KeyType: 'HASH',
            AttributeName: 'key'
        },
    ]
}).promise()
    .then(value => console.log('テーブルを作成しました: ', value.TableDescription.TableName))
    .catch(error => console.error('エラー発生: ', error))
