const express = require('express');
const router = express.Router();
const path = require('path');
const blogData = require('../data/blogsdata.js');

router.get('/', (req, res)=>{
    // res.sendFile(path.join(__dirname, '../views/index.html'));
    res.render('home')
});

router.get('/blog', (req, res)=>{
    // blogs.forEach(e =>{
    //     console.log(e.title);
    // });
    // res.sendFile(path.join(__dirname, '../views/blogs.html'));
    res.render('blogHome', {
        blogs: blogData.blogs
    });
    
});

router.get('/blogspost/slug', (req, res)=>{
    myblog = blogs.filter((e) =>{
        return e.slug == req.params.slug;
    })
    
    res.render('blogPage',{
        title:myblog[0].title,
        content: myblog[0].content
    })

    res.sendFile(path.join(__dirname, '../views/blogspage.html'));
});

module.exports = router;