//*Permutations of a Palindrome*
//Given a string, is it a permutation of a palindrome?
//isPalPerm('coactat') //true  ('tacocat')

//*Approach*
//Let's avoid a brute force search. That would work but get infeasible rather quickly as the length of our string increases
//Instead, guide your interviewee to think about what makes a word a palindrome:
    //The same forwards and backwards
    //So, the first half of the string is repeated for the second half, just in reverse
    //'hannah' -> 'han' + 'nah'
    //This means that there is an even number of every letter.
    //Except maybe one: 'racecar' -> 2r, 2a, 2c, 1e
    //This means we can only ever have one character count that is odd, the rest must be even
//See if you can get your interviewee to this approach by telling them we want an O(n) solution

const isPalPerm = (str) => {
	let mapper = {};
	for (let i = 0; i < str.length; i++) {
		if (!mapper[str[i]]) {
			mapper[str[i]] = 1;
		} else {
			mapper[str[i]] = mapper[str[i]] + 1;
		}
		
	}
}