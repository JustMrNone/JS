function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let ans = birds.filter(bird => !geese.includes(bird));
    return ans;
  };