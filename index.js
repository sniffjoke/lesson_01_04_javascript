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

// Object дополнительно посмотреть методы: apply, assign, bind

// Object.keys() = принимает в себя объект и возвращает массив ключей

// const user = {
//     isStudent: 'true',
//     name: 'Vadim'
// }
//
// const result = Object.keys(user)
//
// console.log('result: ', result)
//
// const user2 = {
//     isStudent: 'false',
//     name: 'Test',
//     country: {
//         city: 'London'
//     }
// }
//
// const result2 = Object.keys(user2) // Собирает ключи только у первого уровня вложенности
// console.log('result2: ', result2) //result2:  [ 'isStudent', 'name', 'country' ]

// Object.values() - принимает в себя объект и возвращает массив значений этого объекта

// const user = {
//     isStudent: 'true',
//     name: 'Vadim'
// }
//
// const testObj = {
//     name: 'Test',
//     country: {
//         city: 'London'
//     }
// }
//
// const valuesResult = Object.values(user)
// const testObjValues = Object.values(testObj)
//
// console.log('valuesResult: ', valuesResult)  // [ 'true', 'Vadim' ]
// console.log('testObjValues: ', testObjValues) // [ 'Test', { city: 'London' } ]

// Object.entries() - принимает объект и возвращает массив пар ключ и значение

// const user = {
//     isStudent: 'true',
//     name: 'Vadim'
// }
//
// const testObj = {
//     name: 'Test',
//     country: {
//         city: 'London'
//     }
// }
//
// const entriesResult2 = Object.entries(testObj)
// const entriesResult = Object.entries(user)
//
// console.log('entriesResult: ', entriesResult) // entriesResult:  [ [ 'isStudent', 'true' ], [ 'name', 'Vadim' ] ]
// console.log('entriesResult2: ', entriesResult2) // entriesResult2:  [ [ 'name', 'Test' ], [ 'country', { city: 'London' } ] ]

// const formValues = {
//     name: "Test",
//     age: '',
//     address: "New York"
// }
//
// const validateForm = (data) => {
//     // let emptyFields = Object.keys(data).filter(key => data[key] === '')
//     let emptyFields = Object.keys(data).filter(key => data[key].length === 0)
//     console.log('emptyFields: ', emptyFields)
//     if (emptyFields.length > 0) {
//         console.log("Enter something")
//     } else {
//         console.log("Console log number 2")
//     }
// }
//
// validateForm(formValues) //Enter something

// new Map/ new Set
// new Map - это коллекция ключ/значение как объект
// ключи могут быть не только строки

// FIRST COLLECTION /////////////////////////////////////////////////////////////////

// const map = new Map()
// console.log('map collection: ', map) // map collection:  Map(0) {}

// set (key, value)
// map.set(true, 'boolean value')
// map.set({}, 'object value')
// map.set(4, 'four number')
// map.set('4', '4 string')

// console.log('map collection after adding items: ', map)

// console.log(map.get(4))
// console.log(map.get({})) // undefined - ссылка на разные объекты

// console.log(map.has(true)) // true
// console.log(map.has(666)) // false

// map.delete('4')
// map.delete(true)
// console.log('map after deleting: ', map) // map after deleting:  Map(2) { {} => 'object value', 4 => 'four number' }

// map.clear()
// console.log('map after clear: ', map) // Map(0) {}

// SECOND COLLECTION ///////////////////////////////////////////////////////

// const initialData = [
//     ['key1', 'value2'], // Строго 2 элемента в подмассиве
//     [true, 'boolean value'],
//     [{}, 'object value']
// ]



// const map2 = new Map(initialData)

// console.log('map2: ', map2)



////////////////////////////////////////////////////////////////////////////////



// new Set() - это особый вид коллекции (без ключей) или как еще называют - множество коллекций
// Уникальные значения, встречаются только один раз

// const set1 = new Set()
// console.log('set: ', set1) // set: Set(0) {}

// set1.add("1");
// set1.add(true);
// set1.add({});
// set1.add("1");
// set1.add(2);
// set1.add({});

// console.log('set: ', set1)
//
// set1.delete(true)
// set1.delete('1')
//
// console.log('set: ', set1)

// console.log(set1.values()) // [Set Iterator] { '1', true, {}, 2, {} }

// let arr = ['test', 1, 2, 4, 1, 1, 1, 'test', 4, 5]

// const set2 = new Set(arr)

// console.log('set2: ', set2) // set2:  Set(5) { 'test', 1, 2, 4, 5 }

// let numbers = [1, 1, 2, 2, 3, 4, 5, 6, 6 , 8, 8, 10, 'a', 'a', 'b']
//
// let uniqueNumbers = new Set(numbers)
//
// console.log('uniqueNumbers: ', uniqueNumbers)
//
// let uniqueArr = [...uniqueNumbers]
//
// console.log('uniqueArr: ', uniqueArr) //uniqueArr:  [1, 2, 3,  4, 5, 6, 8, 10, 'a', 'b']
//
// let uniqueArr2 = [...new Set(uniqueArr)]
// console.log(uniqueArr2) //[1, 2, 3,  4, 5, 6, 8, 10, 'a', 'b']



