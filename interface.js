//module imports
var prompt = require('prompt');

//schema imports
//
//import {newStudentSchema} from "schema/new_student";
var newStudentSchema = { 
  properties : {
  
//  Id: //generate from primary table
  Name: {
    description: 'Name of Student',
    type: 'string',
    //pattern: RegEx
    //message: 'invalid name',
    default: 'NAME MISSING',
    required: true
  },
  Teacher: {
    description: 'Insert Teacher Code. Refer to primary table id in "teacher_records.js"',
    type: 'integer',
    //pattern: RegEx
    //message: 'invalid teacher id, please do not insert a name. insert the teacher id associsted with the teacher located in thr teacher_records.js',
    default: 'TEACHER MISSING',
    required: false
  },
  //PreviousTeachers: type: array this will be input in a different mechanism. It's here while this file serves as the full model of a student entry
  Start_date: {
    description: 'Insert the scheduled date of the students first class PUT THE MONTH FIRST (MM/DD/YYYY)',
    type: 'string',
    //pattern: RegEx
    //invalid date. did you put the month first?
    default: 'START DATE MISSING',
    required: false
  },
  Class_type:{  //group, tailor, stock, pair
    description: 'what is the Class_type? ("group, tailor, stock, pair")',
    type: 'string',
    //pattern: RegEx only validate these words
    //invalid class_type. you have to use one of the these words: group, tailor, stock, pair
    default: 'CLASS TYPE MISSING',
    required: false
  },
  Rate: {
    description:'The amount per hour they pay if individual/pair  or per month if group',
    type:'integer',
    default: 'RATE MISSING',
    required: false
  }
}	
};

var newPayment = {
  // if (payment property ! exist) 
  //    create _.payment : [];
  
  Id: // if (_.payment[0]) return 1,
   _.payment.length+=1
  RefMonth: {};
}

//prompt
prompt.start();


var addStudent = function(){
//manipulate create new temp object from user input acquired from prompt
   //build a new object inside of array students in data.js.  
   //populate new object according to keys in schema
  //and according to values provided through prompt functiom
  
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
  //does this person already exist in the db?
  //ideal would it be if this were to occur at input
  if newStudent.name //exists in data.js 
  && //newStudent.id of newStudent.name already existent has same cell #
    {throw err;
/
} else data.students.pop(newStudent);
  /**how to centralize id creation, where to put that? data.array prototype?
  *  one idea is to uae the cell phone number as the id
  **/
  //END DATA VALIDATION
//

 
  };
};


///NEW FUNCTI0N
//prompt ask user if they would like to populate contact info
//if yes, execute contact_info.js module in ./schema
  "

