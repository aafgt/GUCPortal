const express = require('express');
const mongoose = require('mongoose');
app = express();
const PORT = 1000;
const Locations = require('./models/locations.js');
const HR_Members = require('./models/hr_members.js');
const AC_Members = require('./models/ac_members.js');
const Faculties = require('./models/faculties.js');
const Courses = require('./models/courses.js');
const Schedules = require('./models/schedules.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const cors = require('cors');

//const { findOne } = require('./models/users.js');
//const { json } = require('express');

app.listen(PORT,()=>{
    console.log(`This server is running on port ${PORT}`)
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());

const URL = "mongodb+srv://amir:0000@cluster0.6wg33.mongodb.net/GUCPortal?retryWrites=true&w=majority";

const connectionParams = {
    useNewIPParser: true,
    useCreateIndex : true,
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect(URL,connectionParams).then(()=>{
    console.log("db is successfully connected")
}).catch((error)=>{
    console.log("db failed");
    console.log(error);
});

const authHRid = async (req,res,next)=>{
    try{
        const token = req.header('x-auth-token');
        // const token = req.headers.get('x-auth-token');
        // console.log(token);
        if(!token){
            return res.status(401).json({msg:"unauthorized"});
        }

        const JWT_PASSWORD = "jwtpass";
        const verified = jwt.verify(token,JWT_PASSWORD);
        if(!verified){
            return res.status(401).json({msg:"unauthorized"});
        }

        //req.user = verified.id;

        //console.log(verified);

        let existingMem;
        try{
            existingMem = await HR_Members.findOne({id: req.params.HRid});
    
            if(!existingMem){
                existingMem = await AC_Members.findOne({id: req.params.HRid});
            }
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    
        if(!existingMem){
            return res.status(400).json({msg:"Member does not exist"});
        }

        if(existingMem.loggedIn == 0){
            return res.status(401).json({msg:"unauthorized"});
        }

        next();
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
const authHODid = async (req,res,next)=>{
    try{
        const token = req.header('x-auth-token');
        if(!token){
            return res.status(401).json({msg:"unauthorized"});
        }

        const JWT_PASSWORD = "jwtpass";
        const verified = jwt.verify(token,JWT_PASSWORD);
        if(!verified){
            return res.status(401).json({msg:"unauthorized"});
        }

        //req.user = verified.id;

        //console.log(verified);

        let existingMem;
        try{
            existingMem = await HR_Members.findOne({id: req.params.HODid});
    
            if(!existingMem){
                existingMem = await AC_Members.findOne({id: req.params.HODid});
            }
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    
        if(!existingMem){
            return res.status(400).json({msg:"Member does not exist"});
        }

        if(existingMem.loggedIn == 0){
            return res.status(401).json({msg:"unauthorized"});
        }

        next();
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
const authCCid = async (req,res,next)=>{
    try{
        const token = req.header('x-auth-token');
        if(!token){
            return res.status(401).json({msg:"unauthorized"});
        }

        const JWT_PASSWORD = "jwtpass";
        const verified = jwt.verify(token,JWT_PASSWORD);
        if(!verified){
            return res.status(401).json({msg:"unauthorized"});
        }

        //req.user = verified.id;

        //console.log(verified);

        let existingMem;
        try{
            existingMem = await HR_Members.findOne({id: req.params.CCid});
    
            if(!existingMem){
                existingMem = await AC_Members.findOne({id: req.params.CCid});
            }
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    
        if(!existingMem){
            return res.status(400).json({msg:"Member does not exist"});
        }

        if(existingMem.loggedIn == 0){
            return res.status(401).json({msg:"unauthorized"});
        }

        next();
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
const authCIid = async (req,res,next)=>{
    try{
        const token = req.header('x-auth-token');
        if(!token){
            return res.status(401).json({msg:"unauthorized"});
        }

        const JWT_PASSWORD = "jwtpass";
        const verified = jwt.verify(token,JWT_PASSWORD);
        if(!verified){
            return res.status(401).json({msg:"unauthorized"});
        }

        //req.user = verified.id;

        //console.log(verified);

        let existingMem;
        try{
            existingMem = await HR_Members.findOne({id: req.params.CIid});
    
            if(!existingMem){
                existingMem = await AC_Members.findOne({id: req.params.CIid});
            }
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    
        if(!existingMem){
            return res.status(400).json({msg:"Member does not exist"});
        }

        if(existingMem.loggedIn == 0){
            return res.status(401).json({msg:"unauthorized"});
        }

        next();
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
const authHODCIid = async (req,res,next)=>{
    try{
        const token = req.header('x-auth-token');
        if(!token){
            return res.status(401).json({msg:"unauthorized"});
        }

        const JWT_PASSWORD = "jwtpass";
        const verified = jwt.verify(token,JWT_PASSWORD);
        if(!verified){
            return res.status(401).json({msg:"unauthorized"});
        }

        //req.user = verified.id;

        //console.log(verified);

        let existingMem;
        try{
            existingMem = await HR_Members.findOne({id: req.params.HODCIid});
    
            if(!existingMem){
                existingMem = await AC_Members.findOne({id: req.params.HODCIid});
            }
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    
        if(!existingMem){
            return res.status(400).json({msg:"Member does not exist"});
        }

        if(existingMem.loggedIn == 0){
            return res.status(401).json({msg:"unauthorized"});
        }

        next();
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
const authid = async (req,res,next)=>{
    try{
        const token = req.header('x-auth-token');
        if(!token){
            return res.status(401).json({msg:"unauthorized"});
        }

        const JWT_PASSWORD = "jwtpass";
        const verified = jwt.verify(token,JWT_PASSWORD);
        if(!verified){
            return res.status(401).json({msg:"unauthorized"});
        }

        //req.user = verified.id;

        //console.log(verified);

        let existingMem;
        try{
            existingMem = await HR_Members.findOne({id: req.params.id});
    
            if(!existingMem){
                existingMem = await AC_Members.findOne({id: req.params.id});
            }
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    
        if(!existingMem){
            return res.status(400).json({msg:"Member does not exist"});
        }

        if(existingMem.loggedIn == 0){
            return res.status(401).json({msg:"unauthorized"});
        }

        next();
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
const authACid = async (req,res,next)=>{
    try{
        const token = req.header('x-auth-token');
        if(!token){
            return res.status(401).json({msg:"unauthorized"});
        }

        const JWT_PASSWORD = "jwtpass";
        const verified = jwt.verify(token,JWT_PASSWORD);
        if(!verified){
            return res.status(401).json({msg:"unauthorized"});
        }

        //req.user = verified.id;

        //console.log(verified);

        let existingMem;
        try{
            existingMem = await HR_Members.findOne({id: req.params.ACid});
    
            if(!existingMem){
                existingMem = await AC_Members.findOne({id: req.params.ACid});
            }
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    
        if(!existingMem){
            return res.status(400).json({msg:"Member does not exist"});
        }

        if(existingMem.loggedIn == 0){
            return res.status(401).json({msg:"unauthorized"});
        }

        next();
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

const addMemberSchema = joi.object().keys({
    name: joi.string().required(),
    email: joi.string().email().required(),
    salary: joi.number().required(),
    officeLocation: joi.string(),
    department: joi.string(),
    type: joi.string().valid("HR","TA","CI","CC","HOD").required(),
    dayOff: joi.array()
}).with('name', 'email');


async function checkAC_MemberExists(email){
    let existingMember;
    try{
        existingMember = await AC_Members.findOne({email: email});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingMember){
        return true;
    }
    else{
        return false;
    }
};

async function checkCourseExists(code){
    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingCourse){
        return true;
    }
    else{
        return false;
    }
};

async function checkFacultyExists(faculty){
    let existingFAC;
    try{
        existingFAC = await Faculties.findOne({name: faculty});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingFAC){
        return true;
    }
    else{
        return false;
    }
};

async function checkAC_MemberType(email, type){
    let existingMember;
    try{
        existingMember = await AC_Members.findOne({email: email});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingMember.type == type){
        return true;
    }
    else{
        return false;
    }
};

async function checkAC_MemberDep(email, dep){
    let existingMember;
    try{
        existingMember = await AC_Members.findOne({email: email});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingMember.department == dep){
        return true;
    }
    else{
        return false;
    }
};

function getMonthNo(month){
    switch(month){
        case "January": return 0;break;
        case "February": return 1;break;
        case "March": return 2;break;
        case "April": return 3;break;
        case "May": return 4;break;
        case "June": return 5;break;
        case "July": return 6;break;
        case "August": return 7;break;
        case "September": return 8;break;
        case "October": return 9;break;
        case "November": return 10;break;
        case "December": return 11;break;
        default: return "";
    }
};

app.post('/addFirstHRMember', async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: "hr-1"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingHR){
        return res.status(400).json({msg:"'hr-1' exists. This is used to add only first hr member, the hr member can then add other members"});
    }
    
    const salt = await bcrypt.genSalt();
    const passwordHashed = await bcrypt.hash("123456",salt);

    const newHR_Member = new HR_Members({
        id: "hr-1",
        name: "H",
        email: "h@guc.edu.eg",
        alternativeEmail: "h@guc.edu.eg",
        password: passwordHashed,
        salary: 10,
        type: "HR",
        officeLocation: "",
        dayOff: ["Friday","Saturday"]
    });
    
    try{
        const savedMember = await newHR_Member.save();
        res.json(savedMember);
        res.send("Please change your password");
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
});  

app.post('/addLocation/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can add a location"});
    }

    let newLOCID;
    try{
        let newLOC = await Locations.findOne().sort('-id');
        if(newLOC == null){
            newLOCID = 0;
        }
        else{
            newLOCID = newLOC.id;
        } 
        newLOCID++;
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    let existingLoc;
    try{
        existingLoc = await Locations.findOne({name:req.body.name});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingLoc){
        return res.status(400).json({msg:"Location already exists"});
    }

    const newLocation = new Locations({
        id: newLOCID,
        name: req.body.name,
        maxCapacity: req.body.maxCapacity,
        type: req.body.type
    });

    try{
        const savedLocation = await newLocation.save();
        res.json(savedLocation);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
});

app.delete('/deleteLocation/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can delete a location"});
    }

    let existingLoc;
    try{
        existingLoc = await Locations.findOne({name: req.body.name});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingLoc){
        return res.status(400).json({msg:"Location does not exist"});
    }

    try{
        await Locations.deleteOne({name: req.body.name});
        res.json(existingLoc);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    try{
        await AC_Members.updateMany({officeLocation: req.body.name}, {officeLocation:""});
        await HR_Members.updateMany({officeLocation: req.body.name}, {officeLocation:""});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
});


app.put('/updateLocation/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can update a location"});
    }

    let existingLoc;
    try{
        existingLoc = await Locations.findOne({name: req.body.name});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingLoc){
        return res.status(400).json({msg:"Location does not exist"});
    }

    try{
        await Locations.deleteOne({name: req.body.name});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    const newLocation = new Locations({
        id: existingLoc.id,
        name: req.body.name,
        currentCapacity: existingLoc.currentCapacity,
        maxCapacity: req.body.maxCapacity,
        type: req.body.type
    });

    try{
        const savedLocation = await newLocation.save();
        res.json(savedLocation);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});


app.post('/addFaculty/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can add a faculty"});
    }

    let newFACID;
    try{
        let newFAC = await Faculties.findOne().sort('-id');
        if(newFAC == null){
            newFACID = 0;
        }
        else{
            newFACID = newFAC.id;
        } 
        newFACID++;
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    let existingFAC;
    try{
        existingFAC = await Faculties.findOne({name: req.body.name});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingFAC){
        return res.status(400).json({msg:"Faculty already exists"});
    }

    /*
    let theHOD;
    try{
        theHOD = await AC_Members.findOne({name:req.body.HOD, department:{$in: req.body.departments}});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!theHOD){
        return res.status(400).json({msg:"This member does not exist in any of the departments in this faculty"});
    }

    try{
        await AC_Members.updateOne({name:req.body.HOD, department:{$in: req.body.departments}}, {type: "HOD"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    */

    let finalDep = [];
    for (let i = 0; i < req.body.departments.length; i++) {
        const element = req.body.departments[i];
        let dep = {};
        dep['depName'] = element;
        dep['HOD'] = "";
        finalDep.push(dep);
    }

    const newFac = new Faculties({
        id: newFACID,
        name: req.body.name,
        departments: finalDep,
        //HOD: req.body.HOD
    })

    try{
        const savedFac = await newFac.save();
        res.json(savedFac);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.delete('/deleteFaculty/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can delete a faculty"});
    }

    let existingFAC;
    try{
        existingFAC = await Faculties.findOne({name: req.body.name});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingFAC){
        return res.status(400).json({msg:"Faculty does not exist"});
    }

    try{
        await Faculties.deleteOne({name: req.body.name});
        res.json(existingFAC);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    let deps = [];
    for (let i = 0; i < existingFAC.departments.length; i++) {
        const element = existingFAC.departments[i].depName;
        deps.push(element);
    }
    try{
        //await AC_Members.updateOne({name:existingFAC.HOD, type:"HOD"}, {type:""});
        await AC_Members.updateMany({department:{$in: deps}}, {department:""});

        await Courses.updateMany({department:{$in: deps}}, {department:"",faculty:""});

    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.put('/updateFaculty/:HRid', authHRid, async (req,res)=>{  
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can update a faculty"});
    }

    let existingFAC;
    try{
        existingFAC = await Faculties.findOne({name: req.body.oldName});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingFAC){
        return res.status(400).json({msg:req.body.oldName+" faculty does not exist"});
    }

    let newFAC;
    try{
        newFAC = await Faculties.findOne({name: req.body.newName});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(newFAC){
        return res.status(400).json({msg:req.body.newName+" faculty already exists"});
    }

    try{
        await Faculties.updateOne({name:req.body.oldName}, {name:req.body.newName});
        //const updatedFac = await Faculties.findOne({name:req.body.newName});
        //res.json(updatedFac);

        let existingCourses = await Courses.find();

        let changed = false;
        let c;
        for (let i = 0; i < existingCourses.length; i++) {
            let element = existingCourses[i];
            if(element.faculty == req.body.oldName){
                element.faculty = req.body.newName;
                c = element;
                changed = true;
            }
        }
        if(changed){
            await Courses.updateOne({code:c.code}, {faculty:c.faculty});
        }

        res.json({msg:"Updated successfully"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.post('/addDepartment/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can add a department"});
    }

    let existingFAC;
    try{
        existingFAC = await Faculties.findOne({name: req.body.name});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingFAC){
        return res.status(400).json({msg:"Faculty does not exist"});
    }

    let existingFACdepNames = [];
    for (let i = 0; i < existingFAC.departments.length; i++) {
        const element = existingFAC.departments[i];
        existingFACdepNames.push(element.depName);
    }

    if(existingFACdepNames.includes(req.body.department)){
        return res.status(400).json({msg:"Department already exists"});
    }

    let dep = {};
    dep['depName'] = req.body.department;
    dep['HOD'] = "";
    existingFAC.departments.push(dep);
    try{
        await Faculties.updateOne({name:req.body.name}, {departments:existingFAC.departments});
        res.json(existingFAC);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.delete('/deleteDepartment/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can delete a department"});
    }

    let existingFAC;
    try{
        existingFAC = await Faculties.findOne({name: req.body.name});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingFAC){
        return res.status(400).json({msg:"Faculty does not exist"});
    }

    let deps = existingFAC.departments;
    let depFound = false;
    let depIndex = -1;
    for (let i = 0; i < deps.length; i++) {
        const element = deps[i];
        if(element.depName == req.body.department){
            depIndex = i;
            depFound = true;
            break;
        }
    }
    if(!depFound){
        return res.status(400).json({msg:req.body.department+" department does not exist"});
    }

    //const depIndex = deps.indexOf(req.body.department);
    if(depIndex > -1){
        deps.splice(depIndex,1);
    }
    try{
        await Faculties.updateOne({name:req.body.name}, {departments:deps});
        res.json(existingFAC);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.put('/updateDepartment/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can update a department"});
    }

    let existingFACs;
    try{
        existingFACs = await Faculties.find();
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    let depFound = false;
    let fac;
    for (let i = 0; i < existingFACs.length; i++) {
        const element = existingFACs[i];
        let existingDepartments = element.departments;
        for (let j = 0; j < existingDepartments.length; j++) {
            const element2 = existingDepartments[j];
            if(element2.depName == req.body.oldDepartment){
                depFound = true;
                fac = element;
                break;
            }
  
        }
    }
    if(!depFound){
        return res.status(400).json({msg:req.body.oldDepartment+" department does not exist"});
    }

    for (let i = 0; i < fac.departments.length; i++) {
        const element = fac.departments[i];
        if(element.depName == req.body.newDepartment){
            return res.status(400).json({msg:req.body.newDepartment+" department already exists"});
        }
    }

    let depIndex = -1;
    let oldHOD = "";
    for (let i = 0; i < fac.departments.length; i++) {
        const element = fac.departments[i];
        if(element.depName == req.body.oldDepartment){
            depIndex = i;
            oldHOD = element.HOD;
        }
    }

    //const depIndex = fac.departments.indexOf(req.body.oldDepartment);
    if(depIndex > -1){
        let d = {};
        d['depName'] = req.body.newDepartment;
        d['HOD'] = oldHOD;
        fac.departments.splice(depIndex,1,d);
    }

    let existingCourses;
    try{
        await Faculties.updateOne({name:fac.name}, {departments:fac.departments});

        existingCourses = await Courses.find();

        let changed = false;
        let c;
        for (let i = 0; i < existingCourses.length; i++) {
            let element = existingCourses[i];
            if(element.department == req.body.oldDepartment){
                element.department = req.body.newDepartment;
                c = element;
                changed = true;
            }
        }
        if(changed){
            await Courses.updateOne({code:c.code}, {department:c.department});
        }

        res.json({msg:"Updated successfully"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});


app.post('/addCourse/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can add a course"});
    }

    let newCourseID;
    try{
        let newCourse = await Courses.findOne().sort('-id');
        if(newCourse == null){
            newCourseID = 0;
        }
        else{
            newCourseID = newCourse.id;
        } 
        newCourseID++;
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course already exists"});
    }

    if(!await checkFacultyExists(req.body.faculty)){
        return res.status(400).json({msg:"Faculty does not exist"});
    }

    let depFound = false;
    let existingFAC = await Faculties.findOne({name: req.body.faculty});
    for (let i = 0; i < existingFAC.departments.length; i++) {
        const element = existingFAC.departments[i];
        if(element.depName == req.body.department){
            depFound = true;
            break;
        }
    }
    if(!depFound){
        return res.status(400).json({msg:"Department does not exist"});
    }

    /*
    for (let i = 0; i < req.body.instructors.length; i++) {
        let currentInstructor = req.body.instructors[i];
        if(!await checkAC_MemberExists(currentInstructor)){
            return res.status(400).json({msg:currentInstructor+" does not exist"});
        }
        if(!await checkAC_MemberType(currentInstructor, "CI")){
            return res.status(400).json({msg:currentInstructor+" is not an instructor"});
        }
        if(!await checkAC_MemberDep(currentInstructor, req.body.department)){
            return res.status(400).json({msg:currentInstructor+" is not in "+req.body.department+" department"});
        }
    }

    for (let i = 0; i < req.body.TAs.length; i++) {
        let currentTA = req.body.TAs[i];
        if(!await checkAC_MemberExists(currentTA)){
            return res.status(400).json({msg:currentTA+" does not exist"});
        }
        if(!await checkAC_MemberType(currentTA, "TA")){
            return res.status(400).json({msg:currentTA+" is not a TA"});
        }
        if(!await checkAC_MemberDep(currentTA, req.body.department)){
            return res.status(400).json({msg:currentTA+" is not in "+req.body.department+" department"});
        }
    }

    if(!req.body.TAs.includes(req.body.CC)){
        return res.status(400).json({msg:"The CC should be one of this course's TAs"});
    }
    */

    let newTS = [];
    for (let i = 0; i < req.body.teaching_slots.length; i++) {
        let element = req.body.teaching_slots[i];

        let loc;
        try{
            loc = await Locations.findOne({name: element.location});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    
        if(!loc){
            return res.status(400).json({msg:"location does not exist"});
        }

        element.assigned = "";
        newTS.push(element);
    }

    const newCourse = new Courses({
        id: newCourseID,
        code: req.body.code,
        name: req.body.name,
        //instructors: req.body.instructors,
        //TAs: req.body.TAs,
        //CC: req.body.CC,
        teaching_slots: newTS,
        faculty: req.body.faculty,
        department: req.body.department
    });

    try{
        const savedCourse = await newCourse.save();
        res.json(savedCourse);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.delete('/deleteCourse/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can delete a course"});
    }

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    try{
        let existingCourse = await Courses.findOne({code: req.body.code});
        await Courses.deleteOne({code: req.body.code});
        res.json(existingCourse);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.put('/updateCourse/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can update a course"});
    }

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
        await Courses.deleteOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    const theExistingCourse = new Courses({
        id: existingCourse.id,
        code: existingCourse.code,
        name: existingCourse.name,
        instructors: existingCourse.instructors,
        TAs: existingCourse.TAs,
        CC: existingCourse.CC,
        teaching_slots: existingCourse.teaching_slots,
        faculty: existingCourse.faculty,
        department: existingCourse.department
    });

    if(await checkCourseExists(req.body.code)){
        try{
            await theExistingCourse.save();
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
        return res.status(400).json({msg:"Course already exists"});
    }

    if(!await checkFacultyExists(req.body.faculty)){
        try{
            await theExistingCourse.save();
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
        return res.status(400).json({msg:"Faculty does not exist"});
    }

    let existingFAC = await Faculties.findOne({name: req.body.faculty});
    let deps = existingFAC.departments;
    let depFound = false;
    for (let i = 0; i < deps.length; i++) {
        const element = deps[i];
        if(element.depName == req.body.department){
            depFound = true;
            break;
        }
    }
    if(!depFound){
        try{
            await theExistingCourse.save();
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
        return res.status(400).json({msg:"Department does not exist"});
    }

    /*
    for (let i = 0; i < req.body.instructors.length; i++) {
        let currentInstructor = req.body.instructors[i];
        if(!await checkAC_MemberExists(currentInstructor)){
            try{
                await theExistingCourse.save();
            }
            catch(error){
                res.status(500).json({error:error.message});
            }
            return res.status(400).json({msg:currentInstructor+" does not exist"});
        }
        if(!await checkAC_MemberType(currentInstructor, "CI")){
            try{
                await theExistingCourse.save();
            }
            catch(error){
                res.status(500).json({error:error.message});
            }
            return res.status(400).json({msg:currentInstructor+" is not an instructor"});
        }
        if(!await checkAC_MemberDep(currentInstructor, req.body.department)){
            try{
                await theExistingCourse.save();
            }
            catch(error){
                res.status(500).json({error:error.message});
            }
            return res.status(400).json({msg:currentInstructor+" is not in "+req.body.department+" department"});
        }
    }

    for (let i = 0; i < req.body.TAs.length; i++) {
        let currentTA = req.body.TAs[i];
        if(!await checkAC_MemberExists(currentTA)){
            try{
                await theExistingCourse.save();
            }
            catch(error){
                res.status(500).json({error:error.message});
            }
            return res.status(400).json({msg:currentTA+" does not exist"});
        }
        if(!await checkAC_MemberType(currentTA, "TA")){
            try{
                await theExistingCourse.save();
            }
            catch(error){
                res.status(500).json({error:error.message});
            }
            return res.status(400).json({msg:currentTA+" is not a TA"});
        }
        if(!await checkAC_MemberDep(currentTA, req.body.department)){
            try{
                await theExistingCourse.save();
            }
            catch(error){
                res.status(500).json({error:error.message});
            }
            return res.status(400).json({msg:currentTA+" is not in "+req.body.department+" department"});
        }
    }

    if(!req.body.TAs.includes(req.body.CC)){
        try{
            await theExistingCourse.save();
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
        return res.status(400).json({msg:"The CC should be one of this course's TAs"});
    }
    */

    const newCourse = new Courses({
        id: existingCourse.id,
        code: req.body.code,
        name: req.body.name,
        instructors: existingCourse.instructors,
        TAs: existingCourse.TAs,
        CC: existingCourse.CC,
        teaching_slots: req.body.teaching_slots,
        faculty: req.body.faculty,
        department: req.body.department
    });

    try{
        const savedCourse = await newCourse.save();
        res.json(savedCourse);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    
});

app.post('/addMember/:HRid', authHRid, async (req,res)=>{
    try{
        //const result = await joi.validate(req.body, addMemberSchema);
        const result = await addMemberSchema.validate(req.body);
        if(result.error){
            return res.status(400).json({msg:"Invalid data types",error:result.error.details});
        }
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    try{
        let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can add a member"});
    }

    let currentNewID;
    if(req.body.type == "HR"){
        let newHRID;
        try{
            let newHR = await HR_Members.findOne({type:"HR"}).sort('-id');
            if(newHR == null){
                newHRID = 0;
            }
            else{
                newHRID = (newHR.id).charAt((newHR.id).length - 1);
            }
            newHRID++;
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
        currentNewID = "hr-" + newHRID;
    }
    else{
        let newACID;
        try{
            let newAC = await AC_Members.findOne({type:{$ne: "HR"}}).sort('-id');
            if(newAC == null){
                newACID = 0;
            }
            else{
                newACID = (newAC.id).charAt((newAC.id).length - 1);
            }
            newACID++;
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
        currentNewID = "ac-" + newACID;
    }

    let loc;
    try{
        loc = await Locations.findOne({name: req.body.officeLocation});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!loc){
        return res.status(400).json({msg:"Invalid location"});
    }

    if(loc.currentCapacity+1 > loc.maxCapacity){
        return res.status(400).json({msg:"Location capacity full"});
    }

    let HRmemberExists = await HR_Members.findOne({email: req.body.email});
    if(HRmemberExists){
        return res.status(400).json({msg:"this email already exists"});
    }
    else{
        let ACmemberExists = await AC_Members.findOne({email: req.body.email});
        if(ACmemberExists){
            return res.status(400).json({msg:"this email already exists"});
        }
    }

    const salt = await bcrypt.genSalt();
    const passwordHashed = await bcrypt.hash("123456",salt);

    const aTypes = ["TA","CI","CC","HOD","HR"]
    if(!aTypes.includes(req.body.type)){
        return res.status(400).json({msg:"type should be ['TA','CI','CC','HOD','HR']"});
    }


    if(req.body.type == "HR"){
        const newHR_Member = new HR_Members({
            id: currentNewID,
            name: req.body.name,
            email: req.body.email,
            alternativeEmail: req.body.email,
            password: passwordHashed,
            salary: req.body.salary,
            type: req.body.type,
            officeLocation: req.body.officeLocation,
            dayOff: ["Friday","Saturday"]
        });
    
        try{
            const savedMember = await newHR_Member.save();
            res.json(savedMember);
            res.send("Please change your password");
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    else{
        let existingFACs;
        try{
            existingFACs = await Faculties.find();
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    
        let depFound = false;
        for (let i = 0; i < existingFACs.length; i++) {
            const element = existingFACs[i];
            let existingDepartments = element.departments;
            for (let j = 0; j < existingDepartments.length; j++) {
                const element2 = existingDepartments[j];
                if(element2.depName == req.body.department){
                    depFound = true;
                    break;
                }
      
            }
        }
        if(!depFound){
            return res.status(400).json({msg:"Department does not exist"});
        }

        const newAC_Member = new AC_Members({
            id: currentNewID,
            name: req.body.name,
            email: req.body.email,
            alternativeEmail: req.body.email,
            password: passwordHashed,
            salary: req.body.salary,
            type: req.body.type,
            officeLocation: req.body.officeLocation,
            dayOff: ["Friday"],
            department: req.body.department
        });

        loc.currentCapacity++;
        const updatedLoc = new Locations({
            id: loc.id,
            name: loc.name,
            currentCapacity: loc.currentCapacity,
            maxCapacity: loc.maxCapacity,
            type: loc.type
        });
        try{
            await Locations.deleteOne({name: req.body.officeLocation});
            await updatedLoc.save();
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    
        try{
            const savedMember = await newAC_Member.save().catch({});
            //res.json(savedMember);

            //schedule
            let defaultSchedule = [{day:"Sunday",slots:[{type:"",slot_no:1,timing:"8:15-9:45",course:"",location:""}, {type:"",slot_no:2,timing:"10:00-11:30",course:"",location:""}, {type:"",slot_no:3,timing:"11:45-1:15",course:"",location:""}, {type:"",slot_no:4,timing:"1:45-3:15",course:"",location:""}, {type:"",slot_no:5,timing:"3:45-5:15",course:"",location:""}]}, 
                                {day:"Monday",slots:[{type:"",slot_no:1,timing:"8:15-9:45",course:"",location:""}, {type:"",slot_no:2,timing:"10:00-11:30",course:"",location:""}, {type:"",slot_no:3,timing:"11:45-1:15",course:"",location:""}, {type:"",slot_no:4,timing:"1:45-3:15",course:"",location:""}, {type:"",slot_no:5,timing:"3:45-5:15",course:"",location:""}]}, 
                                {day:"Tuesday",slots:[{type:"",slot_no:1,timing:"8:15-9:45",course:"",location:""}, {type:"",slot_no:2,timing:"10:00-11:30",course:"",location:""}, {type:"",slot_no:3,timing:"11:45-1:15",course:"",location:""}, {type:"",slot_no:4,timing:"1:45-3:15",course:"",location:""}, {type:"",slot_no:5,timing:"3:45-5:15",course:"",location:""}]}, 
                                {day:"Wednesday",slots:[{type:"",slot_no:1,timing:"8:15-9:45",course:"",location:""}, {type:"",slot_no:2,timing:"10:00-11:30",course:"",location:""}, {type:"",slot_no:3,timing:"11:45-1:15",course:"",location:""}, {type:"",slot_no:4,timing:"1:45-3:15",course:"",location:""}, {type:"",slot_no:5,timing:"3:45-5:15",course:"",location:""}]}, 
                                {day:"Thursday",slots:[{type:"",slot_no:1,timing:"8:15-9:45",course:"",location:""}, {type:"",slot_no:2,timing:"10:00-11:30",course:"",location:""}, {type:"",slot_no:3,timing:"11:45-1:15",course:"",location:""}, {type:"",slot_no:4,timing:"1:45-3:15",course:"",location:""}, {type:"",slot_no:5,timing:"3:45-5:15",course:"",location:""}]}, 
                                {day:"Friday",slots:[{type:"",slot_no:1,timing:"8:15-9:45",course:"",location:""}, {type:"",slot_no:2,timing:"10:00-11:30",course:"",location:""}, {type:"",slot_no:3,timing:"11:45-1:15",course:"",location:""}, {type:"",slot_no:4,timing:"1:45-3:15",course:"",location:""}, {type:"",slot_no:5,timing:"3:45-5:15",course:"",location:""}]}, 
                                {day:"Saturday",slots:[{type:"",slot_no:1,timing:"8:15-9:45",course:"",location:""}, {type:"",slot_no:2,timing:"10:00-11:30",course:"",location:""}, {type:"",slot_no:3,timing:"11:45-1:15",course:"",location:""}, {type:"",slot_no:4,timing:"1:45-3:15",course:"",location:""}, {type:"",slot_no:5,timing:"3:45-5:15",course:"",location:""}]}];
            const hisSchedule = new Schedules({
                ACemail: req.body.email,
                schedule: defaultSchedule
            });
  
            //try{
                const savedSchedule = await hisSchedule.save();
            //}
            //catch(error){
            //    res.status(500).json({error:error.message});
            //}
            res.json(savedMember);

            res.send("Please change your password");
        }
        catch(error){
            res.status(500).json({error:error.message});
        }

    }
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.delete('/deleteMember/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can delete a member"});
    }

    let existingMember;
    try{
        existingMember = await HR_Members.findOne({email: req.body.email});

        if(!existingMember){
            existingMember = await AC_Members.findOne({email: req.body.email});
        }
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    if(existingMember.type == "HR"){
        try{
            await HR_Members.deleteOne({email: req.body.email});
            res.json(existingMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    else{
        try{
            await AC_Members.deleteOne({email: req.body.email});
            res.json(existingMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }

    let loc;
    try{
        loc = await Locations.findOne({name: existingMember.officeLocation});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    loc.currentCapacity--;
    const updatedLoc = new Locations({
        id: loc.id,
        name: loc.name,
        currentCapacity: loc.currentCapacity,
        maxCapacity: loc.maxCapacity,
        type: loc.type
    });
    try{
        await Locations.deleteOne({name: existingMember.officeLocation});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    try{
        await updatedLoc.save();
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    //schedule
    try{
        await Schedules.deleteOne({ACemail:existingMember.email});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.post('/addSignIn/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can add a signIn"});
    }
    if(existingHR.email == req.body.email){
        return res.status(400).json({msg:"Cannot add a signIn to yourself"});
    }

    let existingMember;
    try{
        existingMember = await HR_Members.findOne({email: req.body.email});

        if(!existingMember){
            existingMember = await AC_Members.findOne({email: req.body.email});
        }
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    if(existingMember.type == "HR"){
        try{
            let existingSignINs = existingMember.signINs;
            existingSignINs.push(req.body.date);

            await HR_Members.updateOne({id:existingMember.id}, {signINs:existingSignINs});
            let updatedMember = await HR_Members.findOne({id:existingMember.id});
            res.json(updatedMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    else{
        try{
            let existingSignINs = existingMember.signINs;
            existingSignINs.push(req.body.date);

            await AC_Members.updateOne({id:existingMember.id}, {signINs:existingSignINs});
            let updatedMember = await AC_Members.findOne({id:existingMember.id});
            res.json(updatedMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }

});

app.post('/addSignOut/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can add a signOut"});
    }
    if(existingHR.email == req.body.email){
        return res.status(400).json({msg:"Cannot add a signOut to yourself"});
    }

    let existingMember;
    try{
        existingMember = await HR_Members.findOne({email: req.body.email});

        if(!existingMember){
            existingMember = await AC_Members.findOne({email: req.body.email});
        }
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    if(existingMember.type == "HR"){
        try{
            let existingSignOUTs = existingMember.signOUTs;
            existingSignOUTs.push(req.body.date);

            await HR_Members.updateOne({id:existingMember.id}, {signOUTs:existingSignOUTs});
            //let updatedMember = await HR_Members.findOne({id:req.params.id});
            //res.json(updatedMember);

            ///////////////////////////////////////////////////
            let existingAttendance = existingMember.attendance;
            let finalSignINs = existingMember.signINs;
            let finalSignOUTs = existingMember.signOUTs;
            let currentSignOUT = finalSignOUTs[finalSignOUTs.length-1];
            let flag = false;
            for (let i = finalSignINs.length-1; i >= 0; i++) {
                let currentSignIN = finalSignINs[i];
                if(currentSignIN.getFullYear() == currentSignOUT.getFullYear() && currentSignIN.getMonth() == currentSignOUT.getMonth() && currentSignIN.getDay() == currentSignOUT.getDay()){
                    if(currentSignIN < currentSignOUT){
                        att = {"date":currentSignOUT,"attended":true};
                        existingAttendance.push(att);
                        flag = true;
                        break;
                    }
                }
            }
            if(!flag){
                att = {"date":currentSignOUT,"attended":false};
                existingAttendance.push(att);
            }

            await HR_Members.updateOne({id:existingMember.id}, {attendance:existingAttendance});
            let updatedMember = await HR_Members.findOne({id:existingMember.id});
            res.json(updatedMember);

        }
        catch(error){
            res.status(500).json({error:error.message});
        }


        /*
        try{
            let existingSignOUTs = existingMember.signOUTs;
            existingSignOUTs.push(req.body.date);

            await HR_Members.updateOne({id:existingMember.id}, {signOUTs:existingSignOUTs});
            let updatedMember = await HR_Members.findOne({id:existingMember.id});
            res.json(updatedMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
        */
    }
    else{
        
        try{
            let existingSignOUTs = existingMember.signOUTs;
            existingSignOUTs.push(req.body.date);

            await AC_Members.updateOne({id:existingMember.id}, {signOUTs:existingSignOUTs});
            //let updatedMember = await HR_Members.findOne({id:req.params.id});
            //res.json(updatedMember);

            ///////////////////////////////////////////////////
            let existingAttendance = existingMember.attendance;
            let finalSignINs = existingMember.signINs;
            let finalSignOUTs = existingMember.signOUTs;
            let currentSignOUT = finalSignOUTs[finalSignOUTs.length-1];
            let flag = false;
            for (let i = finalSignINs.length-1; i >= 0; i++) {
                let currentSignIN = finalSignINs[i];
                if(currentSignIN.getFullYear() == currentSignOUT.getFullYear() && currentSignIN.getMonth() == currentSignOUT.getMonth() && currentSignIN.getDay() == currentSignOUT.getDay()){
                    if(currentSignIN < currentSignOUT){
                        att = {"date":currentSignOUT,"attended":true};
                        existingAttendance.push(att);
                        flag = true;
                        break;
                    }
                }
            }
            if(!flag){
                att = {"date":currentSignOUT,"attended":false};
                existingAttendance.push(att);
            }

            await AC_Members.updateOne({id:existingMember.id}, {attendance:existingAttendance});
            let updatedMember = await AC_Members.findOne({id:existingMember.id});
            res.json(updatedMember);

        }
        catch(error){
            res.status(500).json({error:error.message});
        }
        /*
        try{
            let existingSignOUTs = existingMember.signOUTs;
            existingSignOUTs.push(req.body.date);

            await AC_Members.updateOne({id:existingMember.id}, {signOUTs:existingSignOUTs});
            let updatedMember = await AC_Members.findOne({id:existingMember.id});
            res.json(updatedMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
        */
    }

});

app.get('/viewStaffAttendance/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can view staff attendance"});
    }

    let existingMember;
    try{
        existingMember = await HR_Members.findOne({email: req.body.email});

        if(!existingMember){
            existingMember = await AC_Members.findOne({email: req.body.email});
        }
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    res.json(existingMember.attendance);

});

app.put('/updateSalary/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can update a salary"});
    }

    let existingMember;
    try{
        existingMember = await HR_Members.findOne({email: req.body.email});

        if(!existingMember){
            existingMember = await AC_Members.findOne({email: req.body.email});
        }
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    if(existingMember.type == "HR"){
        try{
            await HR_Members.updateOne({email:req.body.email}, {salary: req.body.salary});
            let theUpdatedMember = await HR_Members.findOne({email:req.body.email});
            res.json(theUpdatedMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    else{
        try{
            let updatedMember = await AC_Members.updateOne({email:req.body.email}, {salary: req.body.salary});
            let theUpdatedMember = await AC_Members.findOne({email:req.body.email});
            res.json(theUpdatedMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }

});


app.post('/assignCI/:HODid', authHODid, async (req,res)=>{
    let existingHOD;
    try{
        existingHOD = await AC_Members.findOne({id: req.params.HODid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingHOD.type !== "HOD"){
        return res.status(400).json({msg:"Only HODs can assign a CI"});
    }

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingHOD.department !== existingCourse.department){
        return res.status(400).json({msg:"HODs can only assign CI to courses in their department"});
    }

    if(!await checkAC_MemberExists(req.body.email)){
        return res.status(400).json({msg:req.body.email+" does not exist"});
    }
    if(!await checkAC_MemberType(req.body.email, "CI")){
        return res.status(400).json({msg:req.body.email+" is not an instructor"});
    }
    if(!await checkAC_MemberDep(req.body.email, existingCourse.department)){
       return res.status(400).json({msg:req.body.email+" is not in "+existingCourse.department+" department"});
    }

    let newInstructors = await existingCourse.instructors;

    if(newInstructors.includes(req.body.email)){
        return res.status(400).json({msg:req.body.email+" is already an instructor in this course"});
    }

    newInstructors.push(req.body.email);
    try{
        await Courses.updateOne({code: req.body.code}, {instructors: newInstructors});
        let updatedCourse = await Courses.findOne({code: req.body.code});
        res.json(updatedCourse);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});


app.post('/assignTA/:CIid', authCIid, async (req,res)=>{
    let existingCI;
    try{
        existingCI = await AC_Members.findOne({id: req.params.CIid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingCI.type !== "CI"){
        return res.status(400).json({msg:"Only CIs can assign a TA"});
    }

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingCourse.instructors.includes(existingCI.email)){
        return res.status(400).json({msg:"You are not an academic member in this course"});
    }

    if(!await checkAC_MemberExists(req.body.email)){
        return res.status(400).json({msg:req.body.email+" does not exist"});
    }
    if(!await checkAC_MemberType(req.body.email, "TA")){
        return res.status(400).json({msg:req.body.email+" is not a TA"});
    }
    if(!await checkAC_MemberDep(req.body.email, existingCourse.department)){
       return res.status(400).json({msg:req.body.email+" is not in "+existingCourse.department+" department"});
    }

    let newTAs = await existingCourse.TAs;

    if(newTAs.includes(req.body.email)){
        return res.status(400).json({msg:req.body.email+" is already a TA in this course"});
    }

    newTAs.push(req.body.email);
    try{
        await Courses.updateOne({code: req.body.code}, {TAs: newTAs});
        let updatedCourse = await Courses.findOne({code: req.body.code});
        res.json(updatedCourse);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});


app.delete('/deleteCI/:HODid', authHODid, async (req,res)=>{
    let existingHOD;
    try{
        existingHOD = await AC_Members.findOne({id: req.params.HODid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingHOD.type !== "HOD"){
        return res.status(400).json({msg:"Only HODs can delete a CI"});
    }

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingHOD.department !== existingCourse.department){
        return res.status(400).json({msg:"HODs can only delete CIs to courses in their department"});
    }

    let instructors = await existingCourse.instructors;

    if(!instructors.includes(req.body.email)){
        return res.status(400).json({msg:req.body.email+" is not an instructor in this course"});
    }

    const instIndex = instructors.indexOf(req.body.email);
    if(instIndex > -1){
        instructors.splice(instIndex,1);
    }
    try{
        await Courses.updateOne({code:req.body.code}, {instructors:instructors});
        let updatedCourse = await Courses.findOne({code: req.body.code});
        res.json(updatedCourse);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.put('/updateCI/:HODid', authHODid, async (req,res)=>{
    let existingHOD;
    try{
        existingHOD = await AC_Members.findOne({id: req.params.HODid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingHOD.type !== "HOD"){
        return res.status(400).json({msg:"Only HODs can update a CI"});
    }

    if(!await checkCourseExists(req.body.oldCode)){
        return res.status(400).json({msg:req.body.oldCode+" course does not exist"});
    }
    if(!await checkCourseExists(req.body.newCode)){
        return res.status(400).json({msg:req.body.newCode+" course does not exist"});
    }

    let oldCourse;
    let newCourse;
    try{
        oldCourse = await Courses.findOne({code: req.body.oldCode});
        newCourse = await Courses.findOne({code: req.body.newCode});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingHOD.department !== oldCourse.department || existingHOD.department !== newCourse.department){
        return res.status(400).json({msg:"HODs can only update CIs to courses in their department"});
    }

    let instructors = await oldCourse.instructors;
    if(!instructors.includes(req.body.email)){
        return res.status(400).json({msg:req.body.email+" is not an instructor in "+req.body.oldCode+" course"});
    }

    const instIndex = instructors.indexOf(req.body.email);
    if(instIndex > -1){
        instructors.splice(instIndex,1);
    }
    try{
        await Courses.updateOne({code:req.body.oldCode}, {instructors:instructors});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    let newInstructors = await newCourse.instructors;
    if(newInstructors.includes(req.body.email)){
        return res.status(400).json({msg:req.body.email+" is already an instructor in "+req.body.newCode+" course"});
    }

    newInstructors.push(req.body.email);
    try{
        await Courses.updateOne({code: req.body.newCode}, {instructors: newInstructors});
        let updatedCourse = await Courses.findOne({code: req.body.newCode});
        res.json(updatedCourse);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});


app.get('/viewAllStaff/:HODCIid', authHODCIid, async (req,res)=>{
    let existingHODCI;
    try{
        existingHODCI = await AC_Members.findOne({id: req.params.HODCIid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!(existingHODCI.type == "HOD" || existingHODCI.type == "CI")){
        return res.status(400).json({msg:"Only HODs and CIs can view staff"});
    }

    let existingMembers;
    try{
        existingMembers = await AC_Members.find({department: existingHODCI.department});

        /*
        for (let i = 0; i < existingMembers.length; i++) {
            delete existingMembers[i]["password"];
        }
        */

        res.json(existingMembers);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.get('/viewAllStaffCourse/:HODCIid', authHODCIid, async (req,res)=>{
    let existingHODCI;
    try{
        existingHODCI = await AC_Members.findOne({id: req.params.HODCIid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!(existingHODCI.type == "HOD" || existingHODCI.type == "CI")){
        return res.status(400).json({msg:"Only HODs and CIs can view staff"});
    }

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingHODCI.department !== existingCourse.department){
        return res.status(400).json({msg:"You can only view staff to courses in your department"});
    }

    let existingMembers = existingCourse.instructors.concat(existingCourse.TAs);

    let existingMembersProfiles = [];
    for (let i = 0; i < existingMembers.length; i++) {
        try{
            let profile = await AC_Members.findOne({email: existingMembers[i]});
            existingMembersProfiles.push(profile);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }

    res.json(existingMembersProfiles);

});

app.get('/viewAllStaffDayOff/:HODid', authHODid, async (req,res)=>{
    let existingHOD;
    try{
        existingHOD = await AC_Members.findOne({id: req.params.HODid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingHOD.type !== "HOD"){
        return res.status(400).json({msg:"Only HODs can view staff"});
    }

    let allStaff;
    try{
        allStaff = await AC_Members.find({department: existingHOD.department});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!allStaff){
        return res.status(400).json({msg:"There are no staff in your department"});
    }

    let allStaffDayOff = [];
    for (let i = 0; i < allStaff.length; i++) {
        let member = allStaff[i];
        let memberDayOff = {"name":member.name, "email":member.email, "dayOff":member.dayOff};
        allStaffDayOff.push(memberDayOff);
    }

    res.json(allStaffDayOff);

});

app.get('/viewStaffDayOff/:HODid', authHODid, async (req,res)=>{
    let existingHOD;
    try{
        existingHOD = await AC_Members.findOne({id: req.params.HODid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingHOD.type !== "HOD"){
        return res.status(400).json({msg:"Only HODs can view staff"});
    }

    let staff;
    try{
        staff = await AC_Members.findOne({email: req.body.email});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!staff){
        return res.status(400).json({msg:"This staff does not exist"});
    }

    if(staff.department !== existingHOD.department){
        return res.status(400).json({msg:"This staff is not in your department"});
    }

    let memberDayOff = {"name":staff.name, "email":staff.email, "dayOff":staff.dayOff};

    res.json(memberDayOff);

});


app.get('/viewProfile/:id', authid, async (req,res)=>{
    let existingMember;
    try{
        existingMember = await HR_Members.findOne({id: req.params.id});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    if(!existingMember){
        try{
            existingMember = await AC_Members.findOne({id: req.params.id});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    res.json(existingMember);

});


app.put('/updateProfile/:id', authid, async (req,res)=>{
    let existingMember;
    try{
        existingMember = await HR_Members.findOne({id: req.params.id});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    if(!existingMember){
        try{
            existingMember = await AC_Members.findOne({id: req.params.id});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    if(req.body.id){
        return res.status(400).json({msg:"Can't update id"});
    }
    if(req.body.name){
        return res.status(400).json({msg:"Can't update name"});
    }
    if(req.body.email){
        return res.status(400).json({msg:"Can't update email, but can add and update 'alternativeEmail'"});
    }
    if(req.body.salary){
        return res.status(400).json({msg:"Can't update salary"});
    }
    if(req.body.faculty){
        return res.status(400).json({msg:"Can't update faculty"});
    }
    if(req.body.department){
        return res.status(400).json({msg:"Can't update department"});
    }

    let updatePassword = false;
    let updateAlternativeEmail = false;
    if(req.body.password){
        updatePassword = true;
    }
    if(req.body.alternativeEmail){
        updateAlternativeEmail = true;
    }


    if(existingMember.type == "HR"){

        try{
            if(updatePassword && updateAlternativeEmail){
                await HR_Members.updateOne({id:req.params.id}, {password:req.body.newPassword,alternativeEmail:req.body.alternativeEmail}); 
            }
            else if(updatePassword && !updateAlternativeEmail){
                await HR_Members.updateOne({id:req.params.id}, {password:req.body.newPassword}); 
            }
            else if(!updatePassword && updateAlternativeEmail){
                await HR_Members.updateOne({id:req.params.id}, {alternativeEmail:req.body.alternativeEmail}); 
            }

            let updatedMember = await HR_Members.findOne({id:req.params.id});
            res.json(updatedMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    else{
        try{
            if(updatePassword && updateAlternativeEmail){
                await AC_Members.updateOne({id:req.params.id}, {password:req.body.newPassword,alternativeEmail:req.body.alternativeEmail}); 
            }
            else if(updatePassword && !updateAlternativeEmail){
                await AC_Members.updateOne({id:req.params.id}, {password:req.body.newPassword}); 
            }
            else if(!updatePassword && updateAlternativeEmail){
                await AC_Members.updateOne({id:req.params.id}, {alternativeEmail:req.body.alternativeEmail}); 
            }

            let updatedMember = await AC_Members.findOne({id:req.params.id});
            res.json(updatedMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }


});


app.put('/updateMember/:HRid', async (req,res)=>{  
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can update a member"});
    }



    let existingMember;
    try{
        existingMember = await HR_Members.findOne({email: req.body.email});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    if(!existingMember){
        try{
            existingMember = await AC_Members.findOne({email: req.body.email});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    if(req.body.id){
        return res.status(400).json({msg:"Can't update id"});
    }
    if(req.body.name){
        return res.status(400).json({msg:"Can't update name"});
    }
    //if(req.body.email){
    //    return res.status(400).json({msg:"Can't update email, but can add and update 'alternativeEmail'"});
    //}
    if(req.body.faculty){
        return res.status(400).json({msg:"Can't update faculty"});
    }
    if(req.body.department && existingMember.type == "HR"){
        return res.status(400).json({msg:"Can't update department"});
    }
    
    
    if(req.body.dayOff && existingMember == "HR"){
        return res.status(400).json({msg:"Can't change your day Off"});
    }


    /*
    const newHR_Member = new HR_Members({
        id: existingMember.id,
        email: req.body.email,
        alternativeEmail: req.body.email,
        password: passwordHashed,
        salary: req.body.salary,
        type: req.body.type,
        officeLocation: req.body.officeLocation,
        dayOff: ["Friday","Saturday"]
    });
    */

    let eDayoff = existingMember.dayOff.length;
    let nDayoff = req.body.dayOff;

    for (let i = 0; i < nDayoff; i++) {
        const element = req.body.dayOff[i];
        for (let j = 0; j < eDayoff; j++) {
            const element2 = existingMember.dayOff[j];
            if(element == element2){
                return res.status(400).json({msg:element+" is already a day Off"});
            }
        }
    }

    if(eDayoff+nDayoff > 2){
        return res.status(400).json({msg:"Can't have more than 2 days Off"});
    }

    let finalDO = existingMember.dayOff.concat(req.body.dayOff);

    let updatePassword = false;
    let updateAlternativeEmail = false;

    let updateSalary = false;
    let updateType = false;
    let updateOfficeLocation = false;
    let updateDayOff = false;

    if(req.body.password){
        updatePassword = true;
    }
    if(req.body.alternativeEmail){
        updateAlternativeEmail = true;
    }

    if(req.body.salary){
        updateSalary = true;
    }
    if(req.body.type){
        updateType = true;
    }
    if(req.body.officeLocation){
        updateOfficeLocation = true;
    }
    if(req.body.dayOff){
        updateDayOff = true;
    }


    if(existingMember.type == "HR"){

        try{
            if(updatePassword && updateAlternativeEmail){
                await HR_Members.updateOne({email:req.body.email}, {password:req.body.newPassword,alternativeEmail:req.body.alternativeEmail}); 
            }
            else if(updatePassword && !updateAlternativeEmail){
                await HR_Members.updateOne({email:req.body.email}, {password:req.body.newPassword}); 
            }
            else if(!updatePassword && updateAlternativeEmail){
                await HR_Members.updateOne({email:req.body.email}, {alternativeEmail:req.body.alternativeEmail}); 
            }

            if(updateSalary){
                await HR_Members.updateOne({email:req.body.email}, {salary:req.body.salary}); 
            }
            if(updateType){
                await HR_Members.updateOne({email:req.body.email}, {type:req.body.type}); 
            }
            if(updateOfficeLocation){
                await HR_Members.updateOne({email:req.body.email}, {officeLocation:req.body.officeLocation}); 
            }
            if(updateDayOff){
                await HR_Members.updateOne({email:req.body.email}, {dayOff:finalDO}); 
            }

            let updatedMember = await HR_Members.findOne({email:req.body.email});
            res.json(updatedMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    else{

        let updateDep = false;
        if(req.body.department){
            updateDep = true;
        }


        try{
            if(updatePassword && updateAlternativeEmail){
                await AC_Members.updateOne({email:req.body.email}, {password:req.body.newPassword,alternativeEmail:req.body.alternativeEmail}); 
            }
            else if(updatePassword && !updateAlternativeEmail){
                await AC_Members.updateOne({email:req.body.email}, {password:req.body.newPassword}); 
            }
            else if(!updatePassword && updateAlternativeEmail){
                await AC_Members.updateOne({email:req.body.email}, {alternativeEmail:req.body.alternativeEmail}); 
            }

            if(updateSalary){
                await AC_Members.updateOne({email:req.body.email}, {salary:req.body.salary}); 
            }
            if(updateType){
                await AC_Members.updateOne({email:req.body.email}, {type:req.body.type}); 
            }
            if(updateOfficeLocation){
                await AC_Members.updateOne({email:req.body.email}, {officeLocation:req.body.officeLocation}); 
            }
            if(updateDayOff){
                await AC_Members.updateOne({email:req.body.email}, {dayOff:finalDO}); 
            }

            if(updateDep){
                await AC_Members.updateOne({email:req.body.email}, {department:req.body.department}); 
            }

            let updatedMember = await AC_Members.findOne({email:req.body.email});
            res.json(updatedMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }


});


app.put('/resetPassword/:id', authid, async (req,res)=>{
    let existingMember;
    try{
        existingMember = await HR_Members.findOne({id: req.params.id});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    if(!existingMember){
        try{
            existingMember = await AC_Members.findOne({id: req.params.id});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    /*
    if(existingMember.password == "123456"){
        if(req.body.oldPassword !== existingMember.password){
            return res.status(400).json({msg:"Wrong old password"});
        }
    }
    */
    //else{
        const isMatched = await bcrypt.compare(req.body.oldPassword,existingMember.password);
        if(!isMatched){
            return res.status(400).json({msg:"Wrong old password"});
        }
    //}

    if(!req.body.newPassword){
        return res.status(400).json({msg:"Please enter valid password"});
    }
    
    if(req.body.newPassword !== req.body.newPasswordCheck){
        return res.status(400).json({msg:"Please enter the same new password twice"});
    }

    if(req.body.newPassword.length < 6){
        return res.status(400).json({msg:"Minimum password length is 6 characters"});
    }

    const salt = await bcrypt.genSalt();
    const passwordHashed = await bcrypt.hash(req.body.newPassword,salt);

    if(existingMember.type == "HR"){
        try{
            await HR_Members.updateOne({id:req.params.id}, {password:passwordHashed});
            let updatedMember = await HR_Members.findOne({id:req.params.id});
            res.json(updatedMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    else{
        try{
            await AC_Members.updateOne({id:req.params.id}, {password:passwordHashed});
            let updatedMember = await AC_Members.findOne({id:req.params.id});
            res.json(updatedMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }

});


app.post('/login', async (req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email||!password){
            return res.status(400).json({msg:"Please enter valid email or password"});
        }

        let existingMember;
        try{
            existingMember = await HR_Members.findOne({email: email});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
        if(!existingMember){
            try{
                existingMember = await AC_Members.findOne({email: email});
            }
            catch(error){
                res.status(500).json({error:error.message});
            }
        }
        if(!existingMember){
            return res.status(400).json({msg:"Member does not exist"});
        }

        const isMatched = await bcrypt.compare(password,existingMember.password);
        if(!isMatched){
            return res.status(400).json({msg:"Invalid credentials"});
        }

        const JWT_PASSWORD = "jwtpass";
        const token = jwt.sign({id:existingMember._id},JWT_PASSWORD);

        res.json({
            token,
            user:{
                id:existingMember.id,
                email:existingMember.email,
                name:existingMember.name,
                type: existingMember.type
            }
        });

        if(existingMember.type == "HR"){
            try{
                await HR_Members.updateOne({id:existingMember.id}, {loggedIn:1});
            }
            catch(error){
                res.status(500).json({error:error.message});
            }
        }
        else{
            try{
                await AC_Members.updateOne({id:existingMember.id}, {loggedIn:1});
            }
            catch(error){
                res.status(500).json({error:error.message});
            }
        }
    
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
});

app.post('/logout/:id', authid, async (req,res)=>{
    let existingMember;
    try{
        existingMember = await HR_Members.findOne({id: req.params.id});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    if(!existingMember){
        try{
            existingMember = await AC_Members.findOne({id: req.params.id});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    if(existingMember.type == "HR"){
        try{
            await HR_Members.updateOne({id:req.params.id}, {loggedIn:0});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    else{
        try{
            await AC_Members.updateOne({id:req.params.id}, {loggedIn:0});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    res.json({msg:"logged out successfully"});
});






app.post('/signIn/:id', authid, async (req,res)=>{
    let existingMember;
    try{
        existingMember = await HR_Members.findOne({id: req.params.id});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    if(!existingMember){
        try{
            existingMember = await AC_Members.findOne({id: req.params.id});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    if(existingMember.type == "HR"){
        try{
            let existingSignINs = existingMember.signINs;
            existingSignINs.push(new Date());

            await HR_Members.updateOne({id:req.params.id}, {signINs:existingSignINs});
            let updatedMember = await HR_Members.findOne({id:req.params.id});
            res.json(updatedMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    else{
        try{
            let existingSignINs = existingMember.signINs;
            existingSignINs.push(new Date());

            await AC_Members.updateOne({id:req.params.id}, {signINs:existingSignINs});
            let updatedMember = await AC_Members.findOne({id:req.params.id});
            res.json(updatedMember);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    
});

app.post('/signOut/:id', authid, async (req,res)=>{
    let existingMember;
    try{
        existingMember = await HR_Members.findOne({id: req.params.id});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    if(!existingMember){
        try{
            existingMember = await AC_Members.findOne({id: req.params.id});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    if(existingMember.type == "HR"){
        try{
            let existingSignOUTs = existingMember.signOUTs;
            existingSignOUTs.push(new Date());

            await HR_Members.updateOne({id:req.params.id}, {signOUTs:existingSignOUTs});
            //let updatedMember = await HR_Members.findOne({id:req.params.id});
            //res.json(updatedMember);

            ///////////////////////////////////////////////////
            let existingAttendance = existingMember.attendance;
            let finalSignINs = existingMember.signINs;
            let finalSignOUTs = existingMember.signOUTs;
            let currentSignOUT = finalSignOUTs[finalSignOUTs.length-1];
            let flag = false;
            for (let i = finalSignINs.length-1; i >= 0; i++) {
                let currentSignIN = finalSignINs[i];
                if(currentSignIN.getFullYear() == currentSignOUT.getFullYear() && currentSignIN.getMonth() == currentSignOUT.getMonth() && currentSignIN.getDay() == currentSignOUT.getDay()){
                    if(currentSignIN < currentSignOUT){
                        att = {"date":currentSignOUT,"attended":true};
                        existingAttendance.push(att);
                        flag = true;
                        break;
                    }
                }
            }
            if(!flag){
                att = {"date":currentSignOUT,"attended":false};
                existingAttendance.push(att);
            }

            await HR_Members.updateOne({id:req.params.id}, {attendance:existingAttendance});
            let updatedMember = await HR_Members.findOne({id:req.params.id});
            res.json(updatedMember);

        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    else{
        try{
            let existingSignOUTs = existingMember.signOUTs;
            existingSignOUTs.push(new Date());

            await AC_Members.updateOne({id:req.params.id}, {signOUTs:existingSignOUTs});
            //let updatedMember = await AC_Members.findOne({id:req.params.id});
            //res.json(updatedMember);

            ///////////////////////////////////////////////////
            let existingAttendance = existingMember.attendance;
            let finalSignINs = existingMember.signINs;
            let finalSignOUTs = existingMember.signOUTs;
            let currentSignOUT = finalSignOUTs[finalSignOUTs.length-1];
            let flag = false;
            for (let i = finalSignINs.length-1; i >= 0; i++) {
                let currentSignIN = finalSignINs[i];
                if(currentSignIN.getFullYear() == currentSignOUT.getFullYear() && currentSignIN.getMonth() == currentSignOUT.getMonth() && currentSignIN.getDay() == currentSignOUT.getDay()){
                    if(currentSignIN < currentSignOUT){
                        att = {"date":currentSignOUT,"attended":true};
                        existingAttendance.push(att);
                        flag = true;
                        break;
                    }
                }
            }
            if(!flag){
                att = {"date":currentSignOUT,"attended":false};
                existingAttendance.push(att);
            }

            await AC_Members.updateOne({id:req.params.id}, {attendance:existingAttendance});
            let updatedMember = await AC_Members.findOne({id:req.params.id});
            res.json(updatedMember);

        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    
});


app.get('/viewAllAttendance/:id', authid, async (req,res)=>{
    let existingMember;
    try{
        existingMember = await HR_Members.findOne({id: req.params.id});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    if(!existingMember){
        try{
            existingMember = await AC_Members.findOne({id: req.params.id});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    res.json(existingMember.attendance);

});

app.get('/viewAttendanceMonth/:id', authid, async (req,res)=>{
    let existingMember;
    try{
        existingMember = await HR_Members.findOne({id: req.params.id});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    if(!existingMember){
        try{
            existingMember = await AC_Members.findOne({id: req.params.id});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    let monthN = getMonthNo(req.body.month);
    let attMonth = [];
    let existingAttendance = existingMember.attendance;
    for (let i = 0; i < existingAttendance.length; i++) {
        let att = existingAttendance[i].date;
        if(att.getMonth() == monthN && att.getDate() >= 11 || att.getMonth() == monthN+1 && att.getDate() <= 10){
            attMonth.push(existingAttendance[i]);
        }
    }

    res.json(attMonth);

});


app.post('/assignMemberCourseSlot/:CIid', authCIid, async (req,res)=>{
    let existingCI;
    try{
        existingCI = await AC_Members.findOne({id: req.params.CIid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingCI){
        return res.status(400).json({msg:"CI does not exist"});
    }

    if(existingCI.type !== "CI"){
        return res.status(400).json({msg:"Only CIs can assign"});
    }

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingCourse.instructors.includes(existingCI.email)){
        return res.status(400).json({msg:"Only CIs in this course can assign"});
    }

    let isInstructor = existingCourse.instructors.includes(req.body.email);
    let isTA = existingCourse.TAs.includes(req.body.email);
    if(!(isInstructor || isTA)){
        return res.status(400).json({msg:req.body.email+" is not an academic member in this course"});
    }

    let theSlot;
    for (let i = 0; i < existingCourse.teaching_slots.length; i++) {
        let element = existingCourse.teaching_slots[i];
        if(element.type == req.body.type && element.day == req.body.day && element.slot_no == req.body.slot_no){
            if(element.assigned !== ""){
                return res.status(400).json({msg:"This slot is already assigned"});
            }
            else{
                theSlot = element;
                break;
            }
        }
    }

    if(!theSlot){
        return res.status(400).json({msg:"This slot does not exist"});
    }    

    if(isInstructor && (req.body.type == "LAB" || req.body.type == "TUT")){
        return res.status(400).json({msg:"Instructors can not be assigned to a LAB or TUT"});
    }
    if(isTA && req.body.type == "LEC"){
        return res.status(400).json({msg:"TAs can not be assigned to a LEC"});
    }

    let existingMember;
    try{
        existingMember = await AC_Members.findOne({email: req.body.email});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    let breakFlag = false;
    let existingMemberSchedule;
    try{
        existingMemberSchedule = await Schedules.findOne({ACemail: req.body.email});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    let ne;
    if(existingMemberSchedule){
        for (let i = 0; i < existingMemberSchedule.schedule.length; i++) {
            let element = existingMemberSchedule.schedule[i];
            if(existingMemberSchedule.schedule[i].day == req.body.day){       
                for (let j = 0; j < existingMemberSchedule.schedule[i].slots.length; j++) {
                    if(existingMemberSchedule.schedule[i].slots[j].slot_no == req.body.slot_no && existingMemberSchedule.schedule[i].slots[j].course !== ""){
                        return res.status(400).json({msg:"Member is not free for this slot"});
                    }
                    else{
                        //assign it here
                        existingMemberSchedule.schedule[i].slots[j]['type'] = req.body.type;
                        existingMemberSchedule.schedule[i].slots[j]['course'] = req.body.code;
                        existingMemberSchedule.schedule[i].slots[j]['location'] = theSlot.location;

                        ne = existingMemberSchedule;
                        breakFlag = true;
                        break;
                    }
                }
                if(breakFlag){
                    break;
                }
            }

        }
    }

    if(!breakFlag){
        ne = existingMemberSchedule;
    }

    let oldTSlots = existingCourse.teaching_slots;    
    for (let i = 0; i < oldTSlots.length; i++) {
        if(oldTSlots[i].type == req.body.type && oldTSlots[i].day == req.body.day && oldTSlots[i].slot_no == req.body.slot_no){
            oldTSlots[i].assigned = req.body.email;
        }
    }


    try{
        await Courses.updateOne({code: req.body.code}, {teaching_slots: oldTSlots});
        let updatedCourse = await Courses.findOne({code: req.body.code});

        await Schedules.updateOne({ACemail: req.body.email}, {schedule: ne.schedule});
        let updatedSchedule = await Schedules.findOne({ACemail: req.body.email});

        res.json({msg:"Assigned successfully"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.put('/updateMemberCourseSlot/:CIid', authCIid, async (req,res)=>{ 
    let existingCI;
    try{
        existingCI = await AC_Members.findOne({id: req.params.CIid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingCI.type !== "CI"){
        return res.status(400).json({msg:"Only CIs can update"});
    }

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingCourse.instructors.includes(existingCI.email)){
        return res.status(400).json({msg:"Only CIs in this course can update"});
    }

    let isInstructor = existingCourse.instructors.includes(req.body.email);
    let isTA = existingCourse.TAs.includes(req.body.email);
    if(!(isInstructor || isTA)){
        return res.status(400).json({msg:req.body.email+" is not an academic member in this course"});
    }

    let theSlot;
    for (let i = 0; i < existingCourse.teaching_slots.length; i++) {
        let element = existingCourse.teaching_slots[i];
        if(element.type == req.body.type && element.day == req.body.day && element.slot_no == req.body.slot_no){
            if(element.assigned !== ""){
                return res.status(400).json({msg:"This slot is already assigned"});
            }
            else{
                theSlot = element;
                break;
            }
        }
    }

    if(!theSlot){
        return res.status(400).json({msg:"This slot does not exist"});
    }    

    if(isInstructor && (req.body.type == "LAB" || req.body.type == "TUT")){
        return res.status(400).json({msg:"Instructors can not be assigned to a LAB or TUT"});
    }
    if(isTA && req.body.type == "LEC"){
        return res.status(400).json({msg:"TAs can not be assigned to a LEC"});
    }

    let existingMember;
    try{
        existingMember = await AC_Members.findOne({email: req.body.email});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    let breakFlag = false;
    let existingMemberSchedule;
    try{
        existingMemberSchedule = await Schedules.findOne({ACemail: req.body.email});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    let ne;
    if(existingMemberSchedule){
        for (let i = 0; i < existingMemberSchedule.schedule.length; i++) {
            let element = existingMemberSchedule.schedule[i];
            if(existingMemberSchedule.schedule[i].day == req.body.day){        
                for (let j = 0; j < existingMemberSchedule.schedule[i].slots.length; j++) {
                    if(existingMemberSchedule.schedule[i].slots[j].slot_no == req.body.slot_no && existingMemberSchedule.schedule[i].slots[j].course !== ""){
                        return res.status(400).json({msg:"Member is not free for this slot"});
                    }
                    else{
                        //assign it here
                        existingMemberSchedule.schedule[i].slots[j].type = req.body.type;
                        existingMemberSchedule.schedule[i].slots[j].course = req.body.code;
                        existingMemberSchedule.schedule[i].slots[j].location = theSlot.location;

                        ne = existingMemberSchedule;

                        breakFlag = true;
                        break;
                    }
                }
                if(breakFlag){
                    break;
                }
            }
        }
    }

    if(!breakFlag){
        ne = existingMemberSchedule;
    }

    let oldTSlots = existingCourse.teaching_slots;    
    for (let i = 0; i < oldTSlots.length; i++) {
        if(oldTSlots[i].type == req.body.type && oldTSlots[i].day == req.body.day && oldTSlots[i].slot_no == req.body.slot_no){
            oldTSlots[i].assigned = req.body.email;
        }
    }


    try{
        await Courses.updateOne({code: req.body.code}, {teaching_slots: oldTSlots});
        let updatedCourse = await Courses.findOne({code: req.body.code});

        await Schedules.updateOne({ACemail: req.body.email}, {schedule: ne.schedule});
        let updatedSchedule = await Schedules.findOne({ACemail: req.body.email});

        res.json({msg:"Assigned successfully"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.delete('/removeMemberCourse/:CIid', authCIid, async (req,res)=>{
    let existingCI;
    try{
        existingCI = await AC_Members.findOne({id: req.params.CIid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingCI){
        return res.status(400).json({msg:"CI does not exist"});
    }

    if(existingCI.type !== "CI"){
        return res.status(400).json({msg:"Only CIs can remove a member from a course"});
    }

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingCourse.instructors.includes(existingCI.email)){
        return res.status(400).json({msg:"You are not an academic member in this course"});
    }

    let isInstructor = existingCourse.instructors.includes(req.body.email);
    let isTA = existingCourse.TAs.includes(req.body.email);
    if(!(isInstructor || isTA)){
        return res.status(400).json({msg:req.body.email+" is not an academic member in this course"});
    }


    if(isInstructor){
        const insIndex = existingCourse.instructors.indexOf(req.body.email);
        if(insIndex > -1){
            existingCourse.instructors.splice(insIndex,1);
        }

        try{
            await Courses.updateOne({code: req.body.code}, {instructors: existingCourse.instructors});
            let updatedCourse = await Courses.findOne({code: req.body.code});
            res.json(updatedCourse);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    else if(isTA){
        const taIndex = existingCourse.TAs.indexOf(req.body.email);
        if(taIndex > -1){
            existingCourse.TAs.splice(taIndex,1);
        }

        try{
            await Courses.updateOne({code: req.body.code}, {TAs: existingCourse.TAs});
            let updatedCourse = await Courses.findOne({code: req.body.code});
            res.json(updatedCourse);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }

    
});

app.post('/assignCC/:CIid', authCIid, async (req,res)=>{
    let existingCI;
    try{
        existingCI = await AC_Members.findOne({id: req.params.CIid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingCI){
        return res.status(400).json({msg:"CI does not exist"});
    }

    if(existingCI.type !== "CI"){
        return res.status(400).json({msg:"Only CIs can assign a CC"});
    }

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingCourse.instructors.includes(existingCI.email)){
        return res.status(400).json({msg:"You are not an academic member in this course"});
    }
 
    let isInstructor = existingCourse.instructors.includes(req.body.email);
    if(isInstructor){
        return res.status(400).json({msg:"Only TAs can be assigned as CCs"});
    }

    let isTA = existingCourse.TAs.includes(req.body.email);
    if(!isTA){
        return res.status(400).json({msg:req.body.email+" is not an academic member in this course"});
    }

    if(existingCourse.CC == req.body.email){
        return res.status(400).json({msg:req.body.email+" is already this course's CC"});
    }

    if(existingCourse.CC !== ""){
        return res.status(400).json({msg:existingCourse.CC+" is already this course's CC"});
    }


    existingCourse.CC = req.body.email;
    try{
        await Courses.updateOne({code: req.body.code}, {CC: existingCourse.CC});
        let updatedCourse = await Courses.findOne({code: req.body.code});
        res.json(updatedCourse);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});


app.get('/viewCourseCoverage/:CIid', authCIid, async (req,res)=>{
    let existingCI;
    try{
        existingCI = await AC_Members.findOne({id: req.params.CIid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingCI){
        return res.status(400).json({msg:"CI does not exist"});
    }

    if(existingCI.type !== "CI"){
        return res.status(400).json({msg:"Only CIs can view the course coverage"});
    }

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingCourse.instructors.includes(existingCI.email)){
        return res.status(400).json({msg:"Only CIs in this course can view this course's coverage"});
    }


    let slotsAssigned = 0;
    for (let i = 0; i < existingCourse.teaching_slots.length; i++) {
        let element = existingCourse.teaching_slots[i];
        if(element.assigned !== ""){
            slotsAssigned++;
        }
    }

    res.json({msg:"course coverage is "+((slotsAssigned/existingCourse.teaching_slots.length)*100)+"%"});

});


app.get('/viewAllCourseCoverage/:HODid', authHODid, async (req,res)=>{
    let existingHOD;
    try{
        existingHOD = await AC_Members.findOne({id: req.params.HODid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHOD){
        return res.status(400).json({msg:"HOD does not exist"});
    }

    if(existingHOD.type !== "HOD"){
        return res.status(400).json({msg:"Only HODs can view all course coverage in their department"});
    }

    let existingCourses;
    try{
        existingCourses = await Courses.find({department: existingHOD.department});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    let allCourseCoverage = [];
    for (let j = 0; j < existingCourses.length; j++) {
        let theCourse = existingCourses[j];
        let cCode = theCourse.code;
        let currentCourseCoverage = {};
        let slotsAssigned = 0;
        for (let i = 0; i < theCourse.teaching_slots.length; i++) {
            let element = theCourse.teaching_slots[i];
            if(element.assigned !== ""){
                slotsAssigned++;
            }
        }
        currentCourseCoverage[cCode] = "course coverage is "+((slotsAssigned/theCourse.teaching_slots.length)*100)+"%";
        allCourseCoverage.push(currentCourseCoverage);
    }

    res.json(allCourseCoverage);

});


app.get('/viewTeachingAssignments/:HODid', authHODid, async (req,res)=>{
    let existingHOD;
    try{
        existingHOD = await AC_Members.findOne({id: req.params.HODid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHOD){
        return res.status(400).json({msg:"HOD does not exist"});
    }

    if(existingHOD.type !== "HOD"){
        return res.status(400).json({msg:"Only HODs can view teaching assignments"});
    }

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingCourse.department !== existingHOD.department){
        return res.status(400).json({msg:"You can only view teaching assignments to courses in your department"});
    }

    let tAssignments = [];
    for (let i = 0; i < existingCourse.teaching_slots.length; i++) {
        let element = existingCourse.teaching_slots[i];
        //if(element.assigned !== ""){
            tAssignments.push(element);
        //}
    }

    res.json(tAssignments);

});


app.get('/viewSlotsAssignment/:CIid', authCIid, async (req,res)=>{
    let existingCI;
    try{
        existingCI = await AC_Members.findOne({id: req.params.CIid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingCI){
        return res.status(400).json({msg:"CI does not exist"});
    }

    if(existingCI.type !== "CI"){
        return res.status(400).json({msg:"Only CIs can view the slots' assignment"});
    }

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingCourse.instructors.includes(existingCI.email)){
        return res.status(400).json({msg:"You can only view the slots' assignment of courses you are assigned to"});
    }

    let tAssignments = [];
    for (let i = 0; i < existingCourse.teaching_slots.length; i++) {
        let element = existingCourse.teaching_slots[i];
        //if(element.assigned !== ""){
            tAssignments.push(element);
        //}
    }

    res.json(tAssignments);

});


app.get('/viewMissingDays/:id', authid, async (req,res)=>{
    let existingMember;
    try{
        existingMember = await HR_Members.findOne({id: req.params.id});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    if(!existingMember){
        try{
            existingMember = await AC_Members.findOne({id: req.params.id});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    let missingDays = [];
    let existingMemberDaysOff = existingMember.dayOff;
    for (let i = 0; i < existingMember.attendance.length; i++) {
        const element = existingMember.attendance[i];
        
        let elementDay = element.date;
        let theDay = elementDay.getDay();
        if(!existingMemberDaysOff.includes(theDay) && element.attended == false){   
            let el = {day:theDay, date:elementDay.getDate()};
            missingDays.push(el);
        }
    }


    res.json(missingDays);

});

app.get('/viewStaffMissingDays/:HRid', authHRid, async (req,res)=>{
    let existingHR;
    try{
        existingHR = await HR_Members.findOne({id: req.params.HRid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingHR){
        return res.status(400).json({msg:"HR does not exist"});
    }
    if(existingHR.type !== "HR"){
        return res.status(400).json({msg:"Only HRs can view a staff's missing days"});
    }
    
    let existingMember;
    try{
        existingMember = await HR_Members.findOne({email: req.body.email});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    if(!existingMember){
        try{
            existingMember = await AC_Members.findOne({email: req.body.email});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    if(!existingMember){
        return res.status(400).json({msg:"Member does not exist"});
    }

    let missingDays = [];
    let existingMemberDaysOff = existingMember.dayOff;
    for (let i = 0; i < existingMember.attendance.length; i++) {
        const element = existingMember.attendance[i];
        
        let elementDay = element.date;
        let theDay = elementDay.getDay();
        if(!existingMemberDaysOff.includes(theDay) && element.attended == false){   //check accepted leave also
            let el = {day:theDay, date:elementDay.getDate()};
            missingDays.push(el);
        }
    }


    res.json(missingDays);

});


app.post('/addCourseSlots/:CCid', authCCid, async (req,res)=>{ 
    let existingCC;
    try{
        existingCC = await AC_Members.findOne({id: req.params.CCid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    /*
    if(existingCC.type !== "CC"){
        return res.status(400).json({msg:"Only CCs can add course slots"});
    }
    */

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingCourse.CC !== existingCC.email){
        return res.status(400).json({msg:"Only the CC in this course can add course slots to this course"});
    }

    /*
    for (let i = 0; i < existingCourse.teaching_slots.length; i++) {
        let element = existingCourse.teaching_slots[i];
        if(element.day == req.body.slot.day && element.slot_no == req.body.slot.slot_no){
            return res.status(400).json({msg:"There is already a slot in the course in this time"});
        }
    }
    */
    let oldTSlots = existingCourse.teaching_slots; 
    for (let i = 0; i < req.body.slots.length; i++) {

        let loc;
        try{
            loc = await Locations.findOne({name: req.body.slots[i].location});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    
        if(!loc){
            return res.status(400).json({msg:"Location does not exist"});
        }
    
         
        req.body.slots[i]['assigned'] = "";  
        oldTSlots.push(req.body.slots[i]);
        
    }

    try{
        await Courses.updateOne({code: req.body.code}, {teaching_slots: oldTSlots});
        //let updatedCourse = await Courses.findOne({code: req.body.code});

        res.json({msg:"Added successfully"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.delete('/deleteCourseSlots/:CCid', authCCid, async (req,res)=>{ 
    let existingCC;
    try{
        existingCC = await AC_Members.findOne({id: req.params.CCid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    /*
    if(existingCC.type !== "CC"){
        return res.status(400).json({msg:"Only CCs can add course slots"});
    }
    */

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingCourse.CC !== existingCC.email){
        return res.status(400).json({msg:"Only the CC in this course can delete a slot in this course"});
    }

    /*
    for (let i = 0; i < existingCourse.teaching_slots.length; i++) {
        let element = existingCourse.teaching_slots[i];
        if(element.day == req.body.slot.day && element.slot_no == req.body.slot.slot_no){
            return res.status(400).json({msg:"There is already a slot in the course in this time"});
        }
    }
    */

   let oldTSlots = existingCourse.teaching_slots; 
    for (let i = 0; i < req.body.slots.length; i++) {
        
        let loc;
        try{
            loc = await Locations.findOne({name: req.body.slots[i].location});
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    
        if(!loc){
            return res.status(400).json({msg:req.body.slots[i].location+" location does not exist"});
        }
    
        let slotFound = false;
        //let s = oldTSlots.length; 
        for (let j = 0; j < oldTSlots.length; j++) {
            if(oldTSlots[j].type == req.body.slots[i].type && oldTSlots[j].day == req.body.slots[i].day && oldTSlots[j].slot_no == req.body.slots[i].slot_no && oldTSlots[j].location == req.body.slots[i].location){
                const Index = j;
                if(Index > -1){
                    oldTSlots.splice(Index,1);
                }
                slotFound = true;
            }
        }
        
        if(!slotFound){
            return res.status(400).json({msg:req.body.slots[i]+" this slot does not exist"});
        }
    }


    try{
        await Courses.updateOne({code: req.body.code}, {teaching_slots: oldTSlots});
        //let updatedCourse = await Courses.findOne({code: req.body.code});

        res.json({msg:"Deleted successfully"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.put('/updateCourseSlots/:CCid', authCCid, async (req,res)=>{ 
    let existingCC;
    try{
        existingCC = await AC_Members.findOne({id: req.params.CCid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    /*
    if(existingCC.type !== "CC"){
        return res.status(400).json({msg:"Only CCs can add course slots"});
    }
    */

    if(!await checkCourseExists(req.body.code)){
        return res.status(400).json({msg:"Course does not exist"});
    }

    let existingCourse;
    try{
        existingCourse = await Courses.findOne({code: req.body.code});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(existingCourse.CC !== existingCC.email){
        return res.status(400).json({msg:"Only the CC in this course can update a slot in this course"});
    }

    /*
    for (let i = 0; i < existingCourse.teaching_slots.length; i++) {
        let element = existingCourse.teaching_slots[i];
        if(element.day == req.body.slot.day && element.slot_no == req.body.slot.slot_no){
            return res.status(400).json({msg:"There is already a slot in the course in this time"});
        }
    }
    */

    if(req.body.oldSlots.length !== req.body.newSlots.length){
        return res.status(400).json({msg:"Every old slot should have a new slot to be updated with"});
    }

   let oldTSlots = existingCourse.teaching_slots; 
    for (let i = 0; i < req.body.oldSlots.length; i++) {
    
        let slotFound = false;
        //let s = oldTSlots.length; 
        for (let j = 0; j < oldTSlots.length; j++) {
            if(oldTSlots[j].type == req.body.oldSlots[i].type && oldTSlots[j].day == req.body.oldSlots[i].day && oldTSlots[j].slot_no == req.body.oldSlots[i].slot_no && oldTSlots[j].location == req.body.oldSlots[i].location){
                let loc;
                try{
                    loc = await Locations.findOne({name: req.body.newSlots[i].location});
                }
                catch(error){
                    res.status(500).json({error:error.message});
                }
            
                if(!loc){
                    return res.status(400).json({msg:req.body.newSlots[i].location+" location does not exist"});
                }
                
                const Index = j;
                if(Index > -1){
                    oldTSlots.splice(Index,1,req.body.newSlots[i]);
                }
                slotFound = true;
            }
        }
        
        if(!slotFound){
            return res.status(400).json({msg:req.body.oldSlots[i]+" this slot does not exist"});
        }

    }


    try{
        await Courses.updateOne({code: req.body.code}, {teaching_slots: oldTSlots});
        //let updatedCourse = await Courses.findOne({code: req.body.code});

        res.json({msg:"Updated successfully"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});

app.get('/viewSchedule/:ACid', authACid, async (req,res)=>{ 
    let existingAC;
    try{
        existingAC = await AC_Members.findOne({id: req.params.ACid});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    if(!existingAC){
        return res.status(400).json({msg:"Academic member does not exist"});
    }

    try{
        let sched = await Schedules.findOne({ACemail: existingAC.email});
        res.json(sched.schedule);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

});
