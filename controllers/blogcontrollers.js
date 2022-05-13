const  blog  = require('../models/blog');



exports.fetchAll= (req,res) => {
    blog.findAll().then((result) => {
        res.send(result);
    }).catch((err) => {
        if(err)
        {
            res.send("<h1>An Error occured");
            console.log(`Error == ${err}`);
        }
    });
}

exports.fetchById =(req,res) => {
    blog.findAll({ where: { id: req.params.id }}).then((result) => {
        res.send(result);
    }).catch((err) => {
        if(err)
        {
            res.send("<h1>An Error occured");
            console.log(`Error == ${err}`);
        }
    });
}

exports.insert =(req,res) => {
    blog.create({
        title : req.body.title,
        imagepath : req.body.imagepath,
        decription : req.body.decription,
        publisheddate : req.body.publisheddate,
        author : req.body.author
    }).then(()=> {res.send("Inserted Succeccfully")}).catch((err) => {
        if(err)
        {
            res.send("<h1>An Error occured");
            console.log(`Error == ${err}`);
        }
    });
    
}

exports.delete =(req,res) => {
    blog.destroy({ where : { id: req.params.id }}).then(() => {
     res.send('Deleted Succesfully.');
 }).catch((err) => {
     if(err)
     {
         res.send("<h1>An Error occured");
         console.log(`Error == ${err}`);
     }
 });
 }

exports.update =(req,res) => {
    blog.update({ title : req.body.title,
        imagepath : req.body.imagepath,
        decription : req.body.decription,
        publisheddate : req.body.publisheddate,
        author : req.body.author
     },{ where : { id : req.params.id}}).then(() => {
        res.send('Updated Succesfully.');
    }).catch((err) => {
        if(err)
        {
            res.send("<h1>An Error occured");
            console.log(`Error == ${err}`);
        }
    });
}