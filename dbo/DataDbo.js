const DataSchema = require("../database/schema/DataSchema.js");
const DataColumn = require("../database/column/DataColumn.js");

exports.createData = async (data) => {
    let insertMap = {
        [DataColumn.ID]: data.ID,
        [DataColumn.QUESTION]: data.QUESTION,
        [DataColumn.OPTION1]: data.OPTION1,
        [DataColumn.OPTION2]: data.OPTION2,
        [DataColumn.OPTION3]: data.OPTION3,
        [DataColumn.OPTION4]: data.OPTION4,
        [DataColumn.CORRECT]: data.CORRECT,
    };

    try {
        const SaveData = await DataSchema.insertMany([insertMap]);
        return SaveData;
    } catch (err) {
        throw err;
    }
};

exports.getData = async ({ id }) => {
    console.log(id);
    try {
        const response = await DataSchema.aggregate()
            .match({
                id: id,
            })
        return response;
    } catch (err) {
        throw err;
    }
};

// exports.updateData = async ({ conditionMap, dataMap }) => {
//     try {
//         const response = await DataSchema.findOneAndUpdate(
//             conditionMap,
//             dataMap,
//             { new: true }
//         );
//         return response;
//     } catch (err) {
//         throw err;
//     }
// };

// exports.deleteData = async ({ conditionMap }) => {
//     try {
//         const response = await DataSchema.findOneAndDelete(conditionMap);
//         return response;
//     } catch (err) {
//         throw err;
//     }
// };
