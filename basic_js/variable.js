const accountId = 144553
let accountEmail = "Wahab@gmail.com"
let accountState;
var accountPassword = "12345"
// prefer not to use var because it can not understand the block scope{} and functional scope 
accountCity = "Pasrur"

// accountId = 2     jab ap const ka keyword use krta ha aap kch b change ni kr skta
console.log(accountId);

accountEmail = "rana@gmail.com"
accountPassword = " 88888"
accountCity = " Sialkot"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])