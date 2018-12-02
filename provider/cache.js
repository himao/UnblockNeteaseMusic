module.exports = () => {
    let cache = {}
    return (data, fetch) => {
        console.log(cache)
        let key = typeof(data) === 'object' ? data.id : data
        if(!(key in cache))
            return fetch(data)
            .then(result => {
                if(typeof(result) === 'object' || !result.startsWith('http')) cache[key] = result
                return Promise.resolve(result)
            })
            .catch(() => {
                cache[key] = false
                return Promise.reject()
            })
        else if(!cache[key])
            return Promise.reject()
        else
            return Promise.resolve(cache[key])
    }
}