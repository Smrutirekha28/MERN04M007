->Delete the database
    =>drop databasename
->Delete the collection
    =>db.databasename.drop()
->Delete the documents
    Delete One
    =>db.Post.deleteOne()
        ->Ex: db.Post.deleteOne({title:"song"})
    Delete Many
    => db.Post.deleteMany()
        ->Ex:  db.Post.deleteMany({title:"song"})

->To know how many documents are present
    =>db.Post.find().count()
        or
    =>db.Post.countDocuments()
->to know the limited data
    =>db.Post.find().limit(3)
        // it gives the 1st 3 documents
    =>db.Post.find().skip(3)
        //it skip the 1st 3 documents and give the next documents

->To fetch the data in ascending order in particular field
    =>db.Post.find().sort({like:1})
->To fetch the data in descending order in particular field
    =>db.Post.find().sort({like:-1})

->To fetch data using operator
    And operator
    ------------
    ->we can use "," as and operator(simple way)
        =>Ex: db.Post.find({title:"song",like:40})
    ->using and operator
        =>db.Post.find({$and:[]})
            ->Ex:db.Post.find({$and:[{title:"song"},{like:40}]})
    ->it gives when both the condition are true

    OR operator
    -----------
    -> db.Post.find({$or:[]})
        =>Ex:  db.Post.find({$or:[{title:"song"},{like:40}]})

    IN operator
    -----------
    ->It work like "or" operator
        =>Ex:  db.Post.find({title:{$in:["song","motivation"]}})   
    ->It basically works on value
    
    NOR opearator
    --------------
    ->It work like neither nor
    ->If both the value are false at that time it gives
        =>Ex:db.Post.find({$nor:[{title:"song"}]})