//module imports
var prompt = require('prompt');
var jsonfile = require('jsonfile');

//schema imports
newStudentSchema = require('./schema/new_student.js');
/**newPaymentSchema = require('../schema/payment.js');
**/

//data imports
var student_primary = './db/student_primary_no_var.json';
//var teacher_primary = "db/teacher_primary.json";


//prompt
prompt.start();
addNewStudent();
function startApp() { 
//print  
}

function addNewStudent(){

  var pushArray = [];
  jsonfile.writeFile(student_primary, newStudent, {spaces: 2}, function(err) {

    console.log(err);
  })
  var newStudent;

  var addStudent = function(){
  //create new temp object from user input acquired from prompt
    //populate new object according to keys in schema
    ///build a new object inside of array 'students' in 'data.js'
   
    prompt.get(newStudentSchema.newStudentSchema, function(err,result){
      var newStudent = {
        Name: result.Name,
        Teacher: result.Teacher,
        Start_date: result.Start_date,
        Class_type: result.Class_type,
        Rate: result.Rate
      }
      return newStudent;
    })
  }
    addStudent();
    pushArray.push(newStudent);
}  
///NEW FUNCTI0N
//prompt ask user if they would like to populate contact info
//if yes, execute contact_info.js module in ./schema

//NEW FUNCTION
// return to initial
//
//







