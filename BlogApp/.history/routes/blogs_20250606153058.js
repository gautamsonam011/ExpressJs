const express = require('express');
const router = express.Router();
const path = require('path');
const blogs = require('../data/blogsdata.js');

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
        blogs: blogs
    })
    console.log(blogs.title)
});

router.get('/blogspost/slug', (req, res)=>{
    myblog = blogs.find((e) =>{
        return e.slug == req.params.slug;
    })
    console.log(myblog);

    res.sendFile(path.join(__dirname, '../views/blogspage.html'));
});

module.exports = router;