// iterative solutions
// given a number num
// generate set of matching parens
// "" is a match
// () is a match
// num tells you how many matches each generated parens has
// if num = 1, you have [()]
// if num = 2, you get[()(),(())]
// if num = 3, you get [((())), ()()(), (())(),()(()),(()())]
const matchParens = (num) => {
	let masterList = [];

	const generateParens = (num) => {
		for (let i = 1; i <= num; i++) {
			if (i === 1) {
				masterList.push("()");
			} else {
				let newMasterList = [];
				for (let j = 0; j < masterList.length; j++) {
					for(let k = 0; k < masterList[j].length; k++) {
						let elem = masterList[j];
						let modParens = elem.slice(0, k+1) + "()" + elem.slice(k+1);
						if (newMasterList.indexOf(modParens) === -1) {
              // the fact that I have to do this indexOf means I am double doing
							newMasterList.push(modParens);
						}
					}
				}
				masterList = newMasterList;
			}
		}
	}

	generateParens(num);
	return masterList;
}

console.log(matchParens(0))
console.log(matchParens(1))
console.log(matchParens(2))
console.log(matchParens(3))
console.log(matchParens(4))
// recursive
//  i imagine a recursive solution that passes the masterlist around
// and returns when num is 0, but that isn't impressive or that much better
const matchingParensRecursive = (num) => {

  const matchingParens = (left, right, result) => {
    if (left === 0 && right === 0) {
      console.log(result);
    }
    if (left > 0) {
      matchingParens(left-1, right + 1, result+"(");
    }
    if (right > 0) {
      matchingParens(left, right - 1, result+")");
    }
  }
  matchingParens(3,0,"");
}

matchingParensRecursive(2);
