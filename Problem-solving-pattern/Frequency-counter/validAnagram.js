//WAP to determine if the second string is the anagram of the first string
/* 
Algorithm 
Using frequency counter by using object or set to count the values or frequency in the string
1.Firstly check the string length
*/

function validAnagram(str1, str2){
    
    if (str1.length !== str2.length) {
        return false;
    }

    //Then create the object to hold value for both str1 and str2 then compare

    let objStr1 = {};
    let objStr2 = {};

    //Use for loop to iterate all over the string
    // And store the value as a key and compare in the right handside that obj[char] 
    for(let char of str1) {
        objStr1[char] = (objStr1[char] || 0) + 1    //This will return 0 + 1 if there is no value in the object[key] (To prevent the occurence of Null or undefined so we use logical operator to compare ) and will return object[key] + 1 If there is value in it
    }

    
    for(let char2 of str2) {
       if (!objStr1[char2]) { // This to check if the key (which mean number exist in the sec str or not)
        return false;
       }
       objStr1[char2] -= 1;
    }
    return true;

    //Check if the above has the same amount of appearance by decrement the value of obj appearance when it reaches 0 it will get out of the loop and return true

}



//Refactor



validAnagram('bellout','outbell');