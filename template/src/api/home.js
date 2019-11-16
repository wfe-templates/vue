/**
 * Created by busyhe on 2018/12/10 3:00 PM.
 * Email: 525118368@qq.com
 */
import axios from '@/common/js/baseHttp.js'

export function getTemplates () {
    return axios.get('https://api.github.com/users/wfe-templates/repos')
}
