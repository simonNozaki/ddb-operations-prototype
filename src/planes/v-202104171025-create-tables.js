const dynamoDB = require('../client').dynamoDB

// テーブルを作成する
dynamoDB.createTable({
    TableName: 'User',
    AttributeDefinitions: [
        {
            AttributeName: 'id',
            AttributeType: 'S'
        },
        {
            AttributeName: 'phoneNumber',
            AttributeType: 'S'
        }
    ],
    GlobalSecondaryIndexes: [
        {
            IndexName: 'PhoneNumber-Index',
            KeySchema: [
                {
                    AttributeName: 'phoneNumber',
                    KeyType: 'HASH'
                }
            ],
            Projection: {
                ProjectionType: 'ALL'
            },
            ProvisionedThroughput: {
                WriteCapacityUnits: 1,
                ReadCapacityUnits: 1
            }
        }
    ],
    ProvisionedThroughput: {
        WriteCapacityUnits: 5,
        ReadCapacityUnits: 10
    },
    KeySchema: [
        {
            KeyType: 'HASH',
            AttributeName: 'id'
        },
    ]
}).promise()
    .then(value => console.log('テーブルを作成しました: ', value.TableDescription.TableName))
    .catch(e => console.error('エラー発生: ', e))