const express=require("express")

const router=express.Router()
const layoutsroad= '../views/layouts/main'
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const dotenv=require("dotenv")
const Student=require("../models/Student")
router.get('', async (req, res) => {
    try {
        const locals = {
            title: "RoadMapster",
            description: "Career Guiding App"
        };
        res.render('roadmaps/home',{locals,layoutsroad});
    } catch (err) {
        console.log(err);
    }
});

// Login page
router.get('/login', async (req, res) => {
    try {
        const locals = {
            title: "Admin Panel",
            description: "RoadMapster"
        };
        res.render('roadmaps/login', { locals, layoutsroad });
    } catch (err) {
        console.log(err);
    }
});

// Signup page
router.get('/signup', async (req, res) => {
    try {
        const locals = {
            title: "Admin Panel",
            description: "RoadMapster"
        };
        res.render('roadmaps/sigin', { locals, layoutsroad });
    } catch (err) {
        console.log(err);
    }
});

// Signup route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let student = await Student.findOne({ email });
        if (student) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        student = new Student({
            name,
            email,
            password
        });

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        student.password = hashedPassword;

        await student.save();

        const payload = {
            student: {
                id: student.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                if (req.accepts('json')) {
                  console.log(token)
                }
                res.render('roadmaps/login', { student });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const student = await Student.findOne({ email });
        if (!student) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            student: {
                id: student.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                if (req.accepts('json')) {
                   console.log(token)
                }
                res.render('roadmaps/dashboard', { student });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

//Dashboard route
router.get('/dashboard', async (req, res) => {
    try {
        const locals = {
            title: "Dashboard",
            description: "RoadMapster"
        };
        res.render('roadmaps/dashboard', { locals, layoutsroad });
    } catch (err) {
        console.log(err);
    }
});

router.get('/frontend',async(req,res)=>{
    try{
        const locals ={
            title:"Frontend Developer",
            description:"RoadMapster "
        }
        res.render('roadmaps/frontend',{locals,layoutsroad})
    }
    catch(err){
        console.log(err)
    }
})
router.get('/backend',async(req,res)=>{
    try{
        const locals ={
            title:"Backend Developer",
            description:"RoadMapster "
        }
        res.render('roadmaps/backend',{locals,layoutsroad})
    }
    catch(err){
        console.log(err)
    }
})
router.get('/dataanalyst',async(req,res)=>{
    try{
        const locals ={
            title:"Data Analyst",
            description:"RoadMapster "
        }
        res.render('roadmaps/analyst',{locals,layoutsroad})
    }
    catch(err){
        console.log(err)
    }
})
router.get('/android',async(req,res)=>{
    try{
        const locals ={
            title:"Android",
            description:"RoadMapster "
        }
        res.render('roadmaps/android',{locals,layoutsroad})
    }
    catch(err){
        console.log(err)
    }
})
router.get('/game',async(req,res)=>{
    try{
        const locals ={
            title:"Game Developer",
            description:"RoadMapster "
        }
        res.render('roadmaps/game',{locals,layoutsroad})
    }
    catch(err){
        console.log(err)
    }
})
router.get('/cyber',async(req,res)=>{
    try{
        const locals ={
            title:"Cyber Security",
            description:"RoadMapster "
        }
        res.render('roadmaps/cyber',{locals,layoutsroad})
    }
    catch(err){
        console.log(err)
    }
})
router.get('/cpp',async(req,res)=>{
    try{
        const locals ={
            title:"C++",
            description:"RoadMapster "
        }
        res.render('roadmaps/cpp',{locals,layoutsroad})
    }
    catch(err){
        console.log(err)
    }
})
router.get('/java',async(req,res)=>{
    try{
        const locals ={
            title:"Java",
            description:"RoadMapster "
        }
        res.render('roadmaps/java',{locals,layoutsroad})
    }
    catch(err){
        console.log(err)
    }
})
router.get('/python',async(req,res)=>{
    try{
        const locals ={
            title:"Python",
            description:"RoadMapster "
        }
        res.render('roadmaps/python',{locals,layoutsroad})
    }
    catch(err){
        console.log(err)
    }
})
router.get('*',async(req,res)=>{
    const locals ={
        title:"Error",
        description:"RoadMapster "
    }
    res.render('roadmaps/error', {locals,layoutsroad})
})
module.exports=router