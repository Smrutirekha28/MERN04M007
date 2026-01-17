MONGODB
========
->Cluster->Database -> Collection(table) -> Document(data)

Commands
============
-> Create a database
    =>use databasename
->Switch a database
    =>use databasename
->Create a collection(table)
    =>db.createCollection("databasename")
->Insert data in the collection(table)
    => db.Post.insertOne({title:"song",desc:"this is song 2"}) 
            //it is used to insert only ne data
    => db.Post.insertMany([{title:'vlog',desc:"this is a vlog desc",like:10},{title:'motivation',desc:"this is a motivation desc",like:50},{title:'saiyaara',desc:"this is a movie ",like:1000}]) 
            // it is used to insert more than one data

->To fetch the data from the collection
    => db.databasename.find()
            or
    => db.databasename.find({})
->To fetch the first data from the collection 
    =>   db.databasename.findOne({title:"song"})
            //it is used to find the 1st data from the collection
->To find the specific data from all data
    => db.databasename.find({},{})
            //the 1st {} is all data(condition) and the 2nd {} is projection
            //Example
                ->db.Post.findOne({title:"song"})
                    =>it give only title field
                -> db.Post.find({},{title:0})
                    =>it give all fields except title field


->To update one data
    ->To update the data(for adding new data)
        
        => db.Post.updateOne({},{$set:{}})
            //the 1st {} is the existing(old) data and the 2nd {} is the update(new) data which you want to change
            //set is the keyword to update(add) the data without using "set" keyword the update is not done

                            or
        => db.Post.updateOne({},{$push:{}})
            //push is the keyword to update(add) the data without using "set" keyword the update is not done
                   

        =>db.Post.updateOne({},{$set:{}},{upsert:true})
            //the 3rd {} is used for if the existing data is present then it update, if not present it insert the data
    ->To update the data(for deleting the data)
        =>db.Post.updateOne({},{$unset:{}})
            //unset is the keyword to update(delete) the data

->To update many
    =>db.Post.updateMany({},{$set:{}})
        //used to update multiple documents




        framer motion(animation)
        