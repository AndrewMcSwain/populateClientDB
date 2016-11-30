//new student schema 
//run this when you have a new student and it will add a new entry to student_records, which is the primary database for students


var module.exports = { 
  var newStudentSchema = { 
  properties : {
  
//  Id: //generate from primary table
  Name: {
    description: 'Name of Student',
    type: 'string',
    //pattern: RegEx
    //message: 'invalid name',
    required: true
  },
  Teacher: {
    description: 'Insert Teacher Code. Refer to primary table id in "teacher_records.js"',
    type: 'integer',
    //pattern: RegEx
    //message: 'invalid teacher id, please do not insert a name. insert the teacher id associsted with the teacher located in thr teacher_records.js',
    required: false
  },
  //PreviousTeachers: type: array this will be input in a different mechanism. It's here while this file serves as the full model of a student entry
  Start_date: {
    description: 'Insert the scheduled date of the students first class PUT THE MONTH FIRST (MM/DD/YYYY)',
    type: 'string',
    //pattern: RegEx
    //invalid date. did you put the month first?
    required: false
  },
  Class_type:{  //group, tailor, stock, pair
    description: 'what is the Class_type? ("group, tailor, stock, pair")',
    type: 'string',
    //pattern: RegEx only validate these words
    //invalid class_type. you have to use one of the these words: group, tailor, stock, pair
    required: false
  },
  Rate: {
    description:'The amount per hour they pay if individual/pair  or per month if group',
    type:'integer',
    required: false
  }
};	
};

 
});
  
//export newStudentSchema;
  //
  
  //forEach property in 'result' append to Array or add to an objec
//
//
