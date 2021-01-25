const fs = require("fs")
const path = require("path")
const _ = require("lodash")
const format = require("date-fns/format")

const args = process.argv.slice(2)
const year = new Date().getFullYear()

const postDir = path.resolve(__dirname, `../pages/${year}`)
const posts = require(path.resolve(__dirname, '../posts.json'))

path.resolve(__dirname, `../pages/${year}`)
console.log(postDir)
// console.log(posts)
// console.log(args)

const id = _.kebabCase(args[0])
const title = args[0]
const today = format(new Date(), "MMMM d yyyy")
const newPost = {
    id: id,
    created_at: today,
    updated_at: today,
    title: title,
    category: args[1] ?? 'blog',
}

console.log(newPost)