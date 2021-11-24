const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name,id,email,schoolname){
        super(name,id,email)
        this.schoolname = schoolname
    }
    getRole(){
        return "Intern"
    }
    getSchool(){
        return this.schoolname
    }
}

module.exports = Intern