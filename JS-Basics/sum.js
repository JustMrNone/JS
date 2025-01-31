let total = (arguments) => {
    let ans = 0;
    for (let i = 0; i < arguments.length; i++) {
      ans += arguments[i];
    }
    return ans;
  } 
  
  
const sum = (...args) => total(args)