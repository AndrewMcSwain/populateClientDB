//module imports
var prompt = require('prompt');
var jsonfule = require('jsonfile');

//schema imports
newStudentSchema = require('../schema/new_student.js');
/**newPaymentSchema = require('../schema/payment.js');
**/

//data imports
var student_primary = "db/student_primary.json";
var teacher_primary = "db/teacher_primary.json";


//prompt
prompt.start();

function startApp() { 
//print  
}
var studentArray;
addStudent();


var addStudent = function(){
//create new temp object from user input acquired from prompt
  //populate new object according to keys in schema
  ///build a new object inside of array 'students' in 'data.js'
 
  prompt.get(newStudentSchema, function(err,result){
    let newStudent = {
      Name: result.Name,
      Teacher: result.Teacher,
      Start_date: result.Start_date,
      Class_type: result.Class_type,
      Rate: result.Rate
    }

//
  //DATA VALIDATION:
  /**
  if newStudent.name //exists in data.js 
  && //newStudent.id of newStudent.name already existent has same cell #
    {throw err;
  } else**/

	  
studentArray.push(newStudent);

  //END DATA VALIDATION
 
 // };
})
}
///NEW FUNCTI0N
//prompt ask user if they would like to populate contact info
//if yes, execute contact_info.js module in ./schema

//NEW FUNCTION
// return to initial
//
//







