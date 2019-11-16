/**
 * Created by busyhe on 2018/12/10 2:56 PM.
 * Email: 525118368@qq.com
 */
export const extend = (dest, ...sources) => {
    const obj = sources[0]
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            dest[property] = obj[property]
        }
    }
    if (sources.length > 1) {
        return extend(dest, ...sources.splice(1, sources.length - 1))
    }
    return dest
}
