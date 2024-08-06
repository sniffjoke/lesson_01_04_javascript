// статистические свойства

// const car = {
//     engine: "RMV-12345",
//     model: "BMW",
//     color: 'black'
// }

// динамические свойства

// const isBooleanValue = true
// const property_key = isBooleanValue ? 'serial_number' : 'color'
// const car2 = {
//     [property_key]: isBooleanValue ? "2456-356" : 'white'
// }
//
// console.log("car2: ", car2) // car2:  { serial_number: '2456-356' }
//
// const newFunc = () => 'test value'
//
// const newObj = {
//     'new-key': newFunc(),
// }
//
// console.log(newObj) //{ 'new-key': 'test value' }

// Скобочная нотация

// const newObj = {
//     'new-key': 12345
// }
//
// console.log(newObj['new-key'])

// Конкатенация

// let newProperty = "_new"
// const number = 2

// const obj3 = {
//     test: "new test key",
//     ['color' + newProperty]: 'black',
//     [number + 2]: 'four'
// }

// console.log('obj3: ', obj3) //obj3:  { '4': 'four', test: 'new test key', color_new: 'black' }

// let newProperty = "name"
// const user = {
//     testValue: 'test value',
//     [newProperty.toUpperCase()]: "name with upper case letters"
// }

// console.log(user) // { testValue: 'test value', NAME: 'name with upper case letters' }

// let obj = {
//     test: 'test value'
// }
//
// obj.test = 'new value'
//
// console.log('obj: ', obj)

// Practical Task

// const STATUS_BUSY = 'busy'
// const STATUS_READY = 'ready'
//
// const STATUS_LABELS = {
//     [STATUS_BUSY]: 'Ожидает',
//     [STATUS_READY]: 'Готов к отправлению'
// }
//
// const drivers = [
//     {name: 'Pavel', status: 'busy'},
//     {name: 'Vika', status: 'ready'},
//     {name: 'Siarhei', status: 'busy'},
// ]
//
// const driversStatuses = drivers.map(driver => {
//     // console.log('driver: ', driver)
//     const {status} = driver
//     // console.log('status: ', status)
//     return STATUS_LABELS[status]
// })
//
// console.log('driversStatuses: ', driversStatuses) // driversStatuses:  [ 'Ожидает', 'Готов к отправлению', 'Ожидает' ]


