const db = require("./db");

const { marshall } = require("@aws-sdk/util-dynamodb");

const { PutItemCommand } = require("@aws-sdk/client-dynamodb");

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

module.exports = {
    createCertificate,
}