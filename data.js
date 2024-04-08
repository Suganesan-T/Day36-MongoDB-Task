//created a database named zenData
//data for collection named "users"

db.users.insertMany([
    {
        name:"Rajesh",
        user_id:1,
        mentor_id:1,
    },
    {
        name:"Kumar",
        user_id:2,
        mentor_id:2,
    },
    {
        name:"Aravind",
        user_id:3,
        mentor_id:3,
    },
    {
        name:"Dwarakesh",
        user_id:4,
        mentor_id:1,
    },
    {
        name:"Mohan",
        user_id:5,
        mentor_id:2,
    },
])

//data for collection named "codekata"

db.codekata.insertMany([
    {
        user_id:1,
        problems:10,
    },
    {
        user_id:2,
        problems:21,
    },
    {
        user_id:3,
        problems:8,
    },
    {
        user_id:4,
        problems:18,
    },
    {
        user_id:5,
        problems:30,
    },
])

//data for collection named "attendance"

db.attendance.insertMany([
    {
        user_id:1,
        topic_id:1,
        attendance:true,
    },
    {
        user_id:2,
        topic_id:2,
        attendance:true,
    },
    {
        user_id:3,
        topic_id:3,
        attendance:false,
    },
    {
        user_id:4,
        topic_id:4,
        attendance:false,
    },
    {
        user_id:5,
        topic_id:5,
        attendance:true,
    },
])

//data for collectio named "topic"

db.topic.insertMany([
    {
        topic_id:1,
        topic:"html",
        topic_date: new Date("4-oct-2020")
    },
    {
        topic_id:2,
        topic:"Java Script",
        topic_date: new Date("10-oct-2020")
    },
    {
        topic_id:3,
        topic:"React",
        topic_date: new Date("15-oct-2020")
    },
    {
        topic_id:4,
        topic:"SQL",
        topic_date: new Date("20-oct-2020")
    },
    {
        topic_id:1,
        topic:"MongoDB",
        topic_date: new Date("25-oct-2020")
    },
])

//data foe collection named "task"

db.task.insertMany([
    {
        task_id:1,
        topic_id:1,
        user_id:1,
        task:"html task",
        due_date: new Date("4-oct-2020"),
        submitted: true
    },

    {
        task_id:2,
        topic_id:2,
        user_id:2,
        task:"Java Script task",
        due_date: new Date("10-oct-2020"),
        submitted: false
    },

    {
        task_id:3,
        topic_id:3,
        user_id:3,
        task:"React task",
        due_date: new Date("15-oct-2020"),
        submitted: true
    },

    {
        task_id:4,
        topic_id:4,
        user_id:4,
        task:"SQL task",
        due_date: new Date("20-oct-2020"),
        submitted: true
    },

    {
        task_id:5,
        topic_id:5,
        user_id:5,
        task:"MongoDB task",
        due_date: new Date("25-oct-2020"),
        submitted: false
    },
])

//data for collection named "mentors"

db.mentors.insertMany([
    {
        mentor_id:1,
        mentor_name:"Ram",
        mentor_email:"ram@gmail.com"
    },

    {
        mentor_id:2,
        mentor_name:"Babu",
        mentor_email:"babu@gmail.com"
    },

    {
        mentor_id:3,
        mentor_name:"Kishore",
        mentor_email:"kishore@gmail.com"
    },

    {
        mentor_id:4,
        mentor_name:"Indumathy",
        mentor_email:"indumathy@gmail.com"
    },

    {
        mentor_id:5,
        mentor_name:"Swathi",
        mentor_email:"swathi@gmail.com"
    },
])

//data for collection named "companydrive"

db.companydrive.insertMany([
    {
        user_id:1,
        drive_date: new Date("10-oct-2020"),
        company:"Google"
    },
    {
        user_id:2,
        drive_date: new Date("15-oct-2020"),
        company:"Amazon"
    },
    {
        user_id:3,
        drive_date: new Date("20-oct-2020"),
        company:"Zoho"
    },
    {
        user_id:4,
        drive_date: new Date("25-oct-2020"),
        company:"TCS"
    },
    {
        user_id:5,
        drive_date: new Date("27-oct-2020"),
        company:"Accenture"
    },
])

