class Profile {
    constructor(name, id, cgpa){
        this.name = name;
        this.id =id;
        this.cgpa = cgpa;
    }
}
const profile1 = new Profile('Rakib', 17,3.2 )
console.log(profile1);
const profile2 = new Profile('Tamim', 28, 3.3);
console.log(profile2);