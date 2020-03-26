/*
 * @Date: 2020-03-10 11:10:15
 * @Author: innocces
 * @LastEditors: innocces
 * @LastEditTime: 2020-03-26 16:40:58
 * @FilePath: /docs/gatsby-node.js
 * @Description: 
 */
const path = require('path')

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      
    }
  })
}