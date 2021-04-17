const documentClient = require('../client').documentClient
const uuidv4 = require('uuid').v4

const now = new Date().getTime()
const id = uuidv4()

// レコードを登録する
documentClient.put({
    TableName: 'User',
    Item: {
        id: id,
        phoneNumber: '09012345678',
        status: 'active',
        createdAt: now,
        updateAt: now,
        createdBy: 'planes-operator',
        updatedBy: 'planes-operator'
    }
}).promise()
    .then(value => console.log('レコードを登録しました: ', value.$response.data))