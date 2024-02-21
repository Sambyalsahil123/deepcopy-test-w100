const obj = {
    name: 'test',
    class: '10th',
    details: [1, 2, { fullName: "test" }],
    newDetails: {
        realName: 'javascript',
    },

};


function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let copyObj = {};
    Object.keys(obj).forEach(key => {
        copyObj[key] = deepCopy(obj[key]);
    });

    return copyObj;
}


const copiedResult = deepCopy(obj);
copiedResult.name = 'newName'
console.log(copiedResult);
console.log(obj);
