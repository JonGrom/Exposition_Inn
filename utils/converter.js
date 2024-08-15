const Character = require('../models/Character')


function convertToDb(charObj) {

    const databaseObj = Character.create(
        {
            name: charObj.name,
            archetype: 
        }
    )

    return databaseObj;
}