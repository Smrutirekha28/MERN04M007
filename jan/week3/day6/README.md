To rename the document key name
    =>db.Post.updateMany({},{$rename:{name:"country"}})

Greater than(>)
===============
->"gt" keyword is used to check greater than 
    =>Ex: db.Post.find({like:{$gt:30}})

Less than(<)
============
->"lt" keyword is used to check less than 
    =>Ex: db.Post.find({like:{$lt:30}})

Greater than equals to(>=)
==========================
->"gte" keyword is used to check greater than 
    =>Ex: db.Post.find({like:{$gte:30}})


Less than equals to(<=)
========================
->"lte" keyword is used to check less than 
    =>Ex: db.Post.find({like:{$lte:30}})


equals to(=)
=============
->"eq" keyword is used to check less than 
    =>Ex: db.Post.find({like:{$eq:30}})


not operator
============
->db.Post.find({like:{$not:{$eq:37}}})
             or
->"ne" keyword is used to check less than 
    =>Ex: db.Post.find({like:{$ne:30}})

not in operator
================
->it is used for multiple value checking
    =>db.Post.find({like:{$nin:[19,37]}})


distinct()
===========
->if there are multiple same no. of values , it give it as one
    =>Ex:  db.Post.distinct("country")


exists()
=========
->it is used if the field is present or not
    =>ex:  db.Post.find({title:{$exists:true}})



->To increment a number(value) of a field
    =>db.Post.updateMany({},{$inc:{like:2}})

->To decrement a number(value) of a field
    =>db.Post.updateMany({},{$inc:{like:-2}})

->To add another document in one document
    =>Ans:  db.Post.updateMany({title:"motivation"},{$set:{subscribe:{id:1,name:"xyz"}}})

Questions
===========
-> Fetch the data which has like>30 and like<50
    =>Ans: db.Post.find({$and:[{like:{$gt:30}},{like:{$lt:50}}]})
                        or
           db.Post.find({like:{$gt:30},like:{$lt:50}})

->write a query to find 5 users whhich has greatest 5 likes 
    =>Ans:-  db.Post.find().sort({like:-1}).limit(5)

->Find the documents whose like is in 19,37,1000
    =>Ans: db.Post.find({like:{$in:[19,37,1000]}})

->Add a field isActive:"true" whose title is song and story
    =>Ans:  db.Post.updateMany({title:{$in:["song","story"]}},{$set:{isActive:"true"}})

->Add a field verify:true where isActive field is present
    =>Ans: db.Post.updateMany({isActive:{$exists:true}},{$set:{verify:true}})