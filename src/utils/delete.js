const AWS = require("aws-sdk");

AWS.config.update({
    "region": "ap-south-1"
});

const dC = new AWS.DynamoDB.DocumentClient();

const del = function () {
    const params = {
        TableName: "Info",
        Key: {
            "ID": 0
        }
    };
    dC.delete(params, function (err, data) {

        if (err) {
            console.log("error" + JSON.stringify(err));
        } else {
            console.log("deleted");
        }
    });
}

module.exports = del