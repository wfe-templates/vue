/**
 * Created by busyhe on 2019/11/16.
 * Email: 525118368@qq.com
 */
module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A vue project'
    },
    author: {
      type: 'string',
      message: 'Author'
    }
  },
  completeMessage: 'To get started:\n\n  npm run serve'
}