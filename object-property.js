const student = [
    { id: 1, name: 'Rakib' },
    { id: 2, name: 'Tamim' },
    { id: 3, name: 'Shakib' },
    { id: 4, name: 'Mushfiqur' }
];
// const profile = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const StudentName = element.name;
//     profile.push(StudentName);

// }
// console.log(profile);

const names = student.map(s1 => s1.name);         //[ 'Rakib', 'Tamim', 'Shakib', 'Mushfiqur' ]
const ids = student.map(s2 => s2.id);             //[ 1, 2, 3, 4 ]
const bigger = student.filter(s3 => s3.id > 2);   //[ { id: 3, name: 'Shakib' }, { id: 4, name: 'Mushfiqur' } ]
const bigger1 = student.find(s4 => s4.id > 1);    //{ id: 2, name: 'Tamim' }
console.log(bigger1);
console.log(ids);
