

var module.exports = {
  var newTeacherSchema = {	
    properties = {
      //primary
      id: ,
      name: ,
      position: ,
      nationality: ,
      languages: ,
      age: ,
      start_date: ,
      current_students: [],
      current_companies: ,
      previous_students:{
        2014:{},
        2015: {},
      },
      previous_companies:{
        2014:{},
        2015: {},
      },
      contact: {
        cell: ,
        email: ,
        },
      CPF: ,
      Rate: 
    }
  }; 
   
  var studentPedagogicalInfo = {
    properties = {
            
      teaching_style_description: , //string

      verbalization:  ,//boolean
      theoretical:  ,//boolean
      pronunciation: , //boolean

      beginner: ,
      intermediate: ,
      advanced: ,
      fluent: ,

      tailor-made: ,//boolean
      group: ,//boolean
      individual: ,
      large_group_activity: ,
      large_group_lecture_ENG: ,
      large_group_lecture_PT: ,

      max_group_size: ,
    }
  };

  var teacherPreferences = {
    properties = {        
      preferred_territory: [],
      territory_restriction: [],
      preferred_times: [],
      time_restrictions: [], 
    }
  }; 

  var teacherKPI = {
    properties = {
      //total_students
      //avg_students_qtr
      //retention_rate_avg
      //retention_rate_composite
      //cancelationsToTotalClasses
      //Cancelation_percentages_as_an_array
    }
  };
};
