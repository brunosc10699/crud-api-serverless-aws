const db = require("./db");

const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

const { 
    PutItemCommand,
    GetItemCommand,
} = require("@aws-sdk/client-dynamodb");

const createCertificate = async (event) => {

    const response = { statusCode: 201 };

    try {
        const body = JSON.parse(event.body);

        const params = {
            TableName: process.env.DYNAMODB_TABLE_NAME,
            Item: marshall( body || { }), 
        };

        const createResult = await db.send(new PutItemCommand(params));

        response.body = JSON.stringify({
            message: "Course certificate created successfully!",
            createResult,
        });        
    } catch (error) {
        console.error(error);
        response.statusCode = 500;
        response.body = JSON.stringify({
            message: "Failed to create a course certificate!",
            errorMsg: error.message,
            errorStack: error.stack,
        });
    }
    return response;
}

const getCertificate = async (event) => {

    const response = { statusCode: 200 };

    try {
        const params = {
            TableName: process.env.DYNAMODB_TABLE_NAME,
            Key: marshall({ id: event.pathParameters.id }),
        };

        const { Item } = await db.send(new GetItemCommand(params));

        if (Item == null) {
            response.body = JSON.stringify({
                message: "There is no course certificate with this credential: " + event.pathParameters.id,
            });            
        } else {
            console.log({ Item });
            response.body = JSON.stringify({
                message: "Certificate retrieved successfully!",
                data: (Item) ? unmarshall(Item) : { },
                rawData: Item,
            });
        }
    } catch (error) {
        console.error(error);
        response.statusCode = 500;
        response.body = JSON.stringify({
            message: "Failed to get the course certificate",
            errorMsg: error.message,
            errorStack: error.stack,
        });
    }
    return response;
}

module.exports = {
    createCertificate,
    getCertificate,
}