/**
 * model ve şema
 * şema collectionlarımız altındaki dosyalarımızın yapısını belli ettiğimiz bir dosya olacak.
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    short:{
        type: String,
        require:true
    },
    long:{
        type: String,
        require:true
    }
},{timestamps:true})//timestamps:veritabanına kayıt atılma zamanıda mongodb de tutulur.

const Blog = mongoose.model('Blog',blogSchema)
module.exports = Blog