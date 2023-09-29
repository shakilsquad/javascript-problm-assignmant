function findAddress(obj) {
      const street= obj.street ? obj.street : "__"
      const house = obj.house ? obj.house : "__"
      const society = obj.society ? obj.society : "__"
     console.log(street,',',house, ',',society)
}
const myObj ={
      street:10,
      house:'',
      society:''
}
findAddress(myObj)
