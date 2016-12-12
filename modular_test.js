

//////
//module imports
//////
var prompt = require('prompt');
var fs = require('fs');

//////
//schema imports
//////
var newStudent = require('./schema/new_student.js');
//var newPaymentSchema = require('../schema/payment.js');

//////
//data imports
///////
var student_primary = './db/student_primary_var.js';
//var teacher_primary = "db/teacher_primary.json";

////////////////////////////
/////                  /////
//Top-Layer Function Calls// 
/////                  /////
////////////////////////////

//prompt
prompt.start();

//run modules
//addNewStudent();


appendObjToArray(student_primary, newStudent);

function appendObjToArray(file, schema){
  var dbObj = file.model;
  var schema = schema.schema;
  prompt.get(schema, function(err, result){
    fs.appendFile(file, result, 
      function(err, data){
        if(err)
          throw err;
        else if(!dbObj){
          console.log("\n\n        Whoops!!\n\n" + "The var 'model' in db file " + file + " doesn't exist." + " Check the contents of the file and make sure the db object you are trying to append to is contained in the variable 'model' \n\n")}**/
        else{
          dbObj.push(result);
          console.log("file" + file + "successfully appended to array" + "at index" + dbObj.length );
        };
      }
    );
   }
  );
}
     







   














