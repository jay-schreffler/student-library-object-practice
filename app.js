const studentLibraryAcccounts = [];

class StudentLibraryServices {
    constructor(studentId,studentEmail,fName,lName,accountLock = false,feesOwed = 0,itemsOut = null){
        this._studentId = studentId;
        this._studentEmail = studentEmail;
        this._fName = fName;
        this._lName = lName;
        this._accountLock = accountLock;
        this._feesOwed = feesOwed;
        this._itemsOut = itemsOut;    
    }
    get studentAccountInfo(){
        return `Student ID: ${this._studentId} Student Email: ${this._studentEmail} Student Name: ${this._fName} Account Lock Status: ${this._accountLock} Fine Total: ${this._feesOwed} Items Out: ${this._itemsOut}`
    }
};

//Student ID
//Student Email
//First Name
//Last Name
//Account Lock - true false
//Fees Owed - null 
//Items Out

//create new student account

function createNewStudentAccount(studentId,studentEmail,firstName,lastName,accountLock = false,feesOwed = 0,itemsOut = null){
    studentLibraryAcccounts.push( new StudentLibraryServices(studentId,studentEmail,firstName,lastName,accountLock = false,feesOwed = 0,itemsOut = null));
};

createNewStudentAccount('s0001','bschreffler@school.edu','Brooke','Schreffer');

console.log(studentLibraryAcccounts)