

//////
//module imports
//////
var prompt = require('prompt');
var jsonfile = require('jsonfile');
var fs = require('fs');

//////
//schema imports
//////
var newStudentSchema = require('./schema/new_student.js');
// var newPaymentSchema = require('../schema/payment.js');

//////
//data imports
///////
var student_primary = './db/student_primary_no_var.json';
//var teacher_primary = "db/teacher_primary.json";

////////////////////////////
/////                  /////
//Top-Layer Function Calls// 
/////                  /////
////////////////////////////

//prompt
prompt.start();

//run modules
addNewStudent();



//        ///    //////
//////
//     Functions  ////
//////     
//       ///    //////


function startApp() { 

//print "what do you want to do?"
//Options: Create a New Entry, Modify an Existing Entry, View Entries

// load schema names from dir
// clip off the file extension
// each modified string loaded into array 
// load main menu prompt ("what do you want to do?")
// display array of schema as options

//Schema
//student
//contact
//payment
//teacher

//New Entry
//use Schema above

//Modify Existing Entries
//optionsArray.push(schema.forEach(property))
//

}

function appendObjJSON(file, obj){
  let stringObj = JSON.stringify(obj);
  fs.appendFile(file, stringObj, 
     function(err,data){
       if(err)
         throw err;
       else 
         console.log("file" + file + "successfully sppended with" + stringObj);
         }
      );
}



function addNewStudent(){

  var pushArray = [];
  var addStudentUserInput = function(){
    prompt.get(newStudentSchema.newStudentSchema,
     function(err,result){
       let newStudent = {
          Name: result.Name,
          Teacher: result.Teacher,
          Start_date: result.Start_date,
          Class_type: result.Class_type,
          Rate: result.Rate
        };
        prompt
        pushArray.push(newStudent);
        appendObjJSON(student_primary, pushArray);
        })
  }

    addStudentUserInput();
}  

  
  
  
  
  
   

/**
function newEntryOne(schema, output){
  var pushArray = [];
  var input = function(){
    prompt.get(schema,
     function(err, result){
        pushArray.push(result);
        arrayToObj(pushArray);
        appendObjJSON(output, pushObj);
        })
  }
  input(); 
}  **/









   











//put this inside of addNewStudent
    //prompt "another student?"
    //if prompt yes then addStudent(); pushArray.push(newStudent)
    //maybe add option to add payment info?
    
    //need a function to seperate each item in the array to a unique string object


///NEW FUNCTI0N
//prompt ask user if they would like to populate contact info
//if yes, execute contact_info.js module in ./schema






