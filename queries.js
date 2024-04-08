//1. Find all the topics and tasks which are thought in the month of October?

db.topic.aggregate([{
    $lookup: {
        from: "task",
        localField: "topic_id",
        foreignField: "topic_id",
        as: "taskinfo",
    },
},
{
    $match: {
        $and: [{
                $or: [
                    { topic_date: { $gt: new Date("30-sep-2020") } },
                    { topic_date: { $lt: new Date("1-nov-2020") } },
                ],
            },

            {
                $or: [
                    { "taskinfo.due_date": { $gt: new Date("30-sep-2020") } },
                    { "taskinfo.due_date": { $lt: new Date("1-nov-2020") } },
                ],
            },
        ],
    },
},
]);

//2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020?

db.companydrive.find({drive_date:{$gte:new Date("15-oct-2020"),$lte:new Date("31-oct-2020")}})

//3. Find all the company drives and students who are appeared for the placement?

db.companydrive.aggregate([{
    $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "user_id",
        as: "userinfo",
    },
},
{
    $project: {
        _id: 0,
        "userinfo.name": 1,
        company: 1,
        drive_date: 1,
        "userinfo.user_id": 1,
    },
},
]);

//4. Find the number of problems solved by the user in codekata?

db.codekata.aggregate([{
    $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "user_id",
        as: "userinfo",
    },
},
{
    $project: {
        _id:0,
        "userinfo.name": 1,
        user_id:1,
        problems:1,
    },
},
]);

//5. Find all the mentors with who has the mentee's count more than 15?

db.users.aggregate([{
    $lookup: {
        from: "mentors",
        localField: "mentor_id",
        foreignField: "mentor_id",
        as: "mentorInfo",
    },
},
{
    $group: {
        _id: {
            mentorid: "$mentorInfo.mentor_id",
            mentorname: "$mentorInfo.mentor_name",
        },
        mentee_count: { $sum: 1 },
    },
},
{ $match: { mentee_count: { $gt: 1 } } },
]);

//6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020?

db.attendance.aggregate([{
    $lookup: {
        from: "topic",
        localField: "topic_id",
        foreignField: "topic_id",
        as: "topics",
    },
},
{
    $lookup: {
        from: "task",
        localField: "topic_id",
        foreignField: "topic_id",
        as: "task",
    },
},
{ $match: { $and: [{ attended: false }, { "task.submitted": false }] } },
{
    $match: {
        $and: [{
                $or: [
                    { "topic.topic_date": { $gte: new Date("15-oct-2020") } },
                    { "topic.topic_date": { $lte: new Date("31-oct-2020") } },
                ],
            },
            {
                $or: [
                    { "task.due_date": { $gte: new Date("15-oct-2020") } },
                    { "task.due_date": { $lte: new Date("31-oct-2020") } },
                ],
            },
        ],
    },
},
{
    $count: "No_of_students_absent",
},
]);



