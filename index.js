'use strict'
const mongoose = require('mongoose');
const schema = (collection, object, versionkey) => {
    const schema = new mongoose.Schema(object);
    return mongoose.model(collection, schema, versionkey);
}
module.exports = schema
