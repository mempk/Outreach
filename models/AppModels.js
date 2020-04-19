import mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const AppSchema = new Schema({

    //Event Info 
    recruiterFirstName:{
        type:String
    },

    recruiterLastName:{
        type:String
    },

    recruiterProgram:{
        type:String
    },

    recruiterEmailID:{
        type:String
    },

    eventName:{
        type:String
    },

    eventSponsor:{
        type:String
    },

    eventDate:{
        type:Date,

    },

    eventState:{
        type: String
    },

    eventCity:{
        type:String
    },

    eventCountry:{
        type:String
    },


    clientFirstName:{
        type:String
    },


    clientLastName:{
        type:String
    },

    clientEmailAddress:{
        type:String
    },

    programofInterest:{
        type:String
    },

    whoYouAre:{
        type:String
    },

    
    currentYearInSchool: {
        type:String
    },
            
    
    schoolName:{
        type:String
    },

    schoolYear: {
        type:String
    },
            
    schoolhometown:{
        type:String
    },

    stateZipCode:{
        type:String
    },
            
    childrenName:{
    type:String
    },
    
    
    childrenStateCode:{
        type:String
    },

    childrenHometown:{
                type:String
    },

    advisorSchoolName:{
        type:String
    },

    advisorDepartment:{
        type:String

    },

    counselorSchoolName:{
        type:String
    },


    ageLevel: {
        type:String
    },
    counselorState:{
        type:String
    },
    counselorCity:{
        type:String
    },

    teacherGradeLevel:{
        type:String
    },

    teacherSchoolName:{
        type:String
    },

    subject:{
        type:String
    },

    teacherCity:{
        type:String
    },

    teacherState:{
        type:String
    },

    InterestedProgram:{
        type:String
    },

    careerInterest:{
        type:String
    },
    InterestedMinor:{
        type:String
    },

    otherState:{
        type:String
    },
    otherCity:{
        type:String
    },


    //page3

    contactMedium:{
        type:String
    },
    bestContactTime:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    mailAddress1:{
        type:String
    },
    mailAddress2:{
        type:String
    },
    mailCity:{
        type:String
    },
    mailState:{
        type:String
    },
    mailZip:{
        type:String
    },

    //page4

    topicIdea:{
        type:String
    },
    aboutYou:{
        type:String
    },
    SpecificQuestion:{
        type:String
    },





























})