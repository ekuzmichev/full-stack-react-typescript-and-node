const map = new Map()
map.set('linda', { fullName: 'Linda', id: 1 })
map.set('jim', { fullName: 'Jim', id: 2 })
map.set('pam', { fullName: 'Pam', id: 3 })

console.log(map)
console.log('get', map.get('jim'))
console.log('size', map.size)

for (let [key, val] of map) {
    console.log('iterate', `${key} -> ${JSON.stringify(val)}`)
}