const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const userSchema = require("../models/students")


router.get("/", (req, res) => {
  res.render('home')
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/search", (req, res) => {
  res.render("search");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/signup", (req, res) => {
  res.render('Sign_up')
});

router.get("/profilepage", (req, res) => {
  res.render('ProfilePage')
});

// router.get("/delete", (req, res) => {
//   res.render("delete");
// });
// router.delete(`/delete/:email`, async(req,res)=>{
//   try{
//   let x  = await userData.deleteOne({email:req.params.email});
//   console.log(x);
// }catch(e){
//     console.log(e);
//   }
// });

// router.post("/signup", async (req, res) => {
//   try {
//     // let x = await userData.find({email:req.body.email});
//     // if((x.length)!=0)
//     // {
//     //   res.send("Email Already Exists");
//     // }
//     // console.log(req.body);
//     // res.send(req.body);
//     if (!(req.body.password === req.body.cpassword)) {
//       res.send("passwords not matching!!");
//     } else{
//     //     const user = new student(req.body);
//     //  const createUser = await user.save();
//     res.status(201).send(createUser);
//     const savedData = await userData.create({
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         gender: req.body.gender,
//         batch: req.body.batch,
//         branch: req.body.branch,
//         city: req.body.city,
//         state: req.body.state,
//         contact: req.body.contact,
//         email: req.body.email,
//         linkedin: req.body.linkedin,
//         instagram: req.body.instagram,
//         designation: req.body.designation,
//         skills: req.body.skills,
//         about: req.body.about,
//         password: req.body.password,
//         cpassword: req.body.cpassword
//     });
//     //  const savedData = await user.save();
//       console.log(savedData);
//       res.send(req.body);
//       // res.status(200).json({savedData});
//       res.redirect("/signup");
//     };
//   } catch (error) {
//     res.send(error);
//   }
// });
// module.exports = router;












// const express = require("express")
// const router = new express.Router();   
// const student = require("../models/students");



// //Create a new student using(async await)

// router.post("/students", async (req,res) =>{

//     try {
//      const user = new student(req.body);
//      const createUser = await user.save();
//      res.status(201).send(createUser);
//     }
//     catch(e){  res.status(400).send(e);
//     }
//  })

//  router.post('/students', upload.single('testImage'),(req,res)=>{
//   const saveImage = new imageModel({
//       name:req.body.name,
//       img:{
//           data: fs.readFileSync("uploads/" + req.file.filename),
//           contentType:"image/png"
//       },
//   });
//   saveImage.save()
//   .then((res) => {console.log("image is saved");
//   })
//   .catch((err) =>{
//       console.log(err,"error has occured");
//   });
//   res.send("image is saved")
// })
 
 
//  // Get Requests
 
//  // Read the data of rgistered students
 
//  router.get("/students", async (req,res) =>{
   
//    try {
//      const studentsData = await student.find();
//      res.send(studentsData);
//    }catch (e) {
//      res.send(e);
//    }
//  });
 
//  // Get the Individual studnt data using Id
 
//  router.get("/students/:id", async (req,res) =>{      //we gand get anything like name email etc,
 
//       try {
//          const _id = req.params.id;
//          const studentData = await student.findById(_id);
//          // console.log(req.params);
//          // console.log(req.params.id);
//          if(!studentData){
//              return res.status(404).send();
//          }
//          else{
//              res.send(studentData);
//          }
//       } catch (e) {
//          res.status(500).send(e);           //status 500 is internal server error(i.e Data not present)
//       }
//  });
 
 
//  // Put Requests
 
//  // Update the Students by its Id
  
//  router.patch("/students/:id", async (req,res)=>{
//        try {
//          const _id = req.params.id;
//          const updateStudents = await student.findByIdAndUpdate(_id, req.body,{
//              new:true
//          });
//          res.send(updateStudents);
//        } catch (e) {
//           res.status(400).send(e);
//        }
//  });
 
 
//  //Delete the Students by its id
 
//  router.delete("/students/:id", async(req,res) =>{
//      try {
//          // const id = req.params.id;
//          const deleteStudent = await student.findByIdAndDelete(req.params.id);
//          if (!req.params.id) {
//              res.status(400).send();          //400 status code for bad request
//          }
//             res.send(deleteStudent);
//      } catch (e) {
//          res.status(500).send(e);
//      }
//  })
 


// //export

router.post("/search", async(req,res)=>{
  try{
      console.log(req.body.firstname);

      // let findData = await userSchema.find().or( [{"firstname":req.body.firstname},{"college":req.body.college}])
      let findData = await userSchema.find({$or: [{"firstname":req.body.firstname},{"college":req.body.college}]},'firstname lastname gender batch college branch city state contact email linkedin instagram designation skills about') 
      // console.log(req.body);
      console.log(findData);
      // res.json(findData);
      res.render("search",{findData:findData});
  }catch(err){
    console.log(err);
  }
})

router.post("/signup", async(req,res) =>{
try{
  const{
      firstname,
        lastname,
        gender,
        batch,
        college,
        branch,
        city,
        state,
        contact,
        email,
        linkedin,
        instagram,
        designation,
        skills,
        about,
        password,
        cpassword
  } = req.body; 
    console.log(req.body);
    // res.send(req.body);
   
    if (password === cpassword) {
      const userData = new userSchema({
        firstname,
        lastname,
        gender,
        batch,
        college,
        branch,
        city,
        state,
        contact,
        email,
        linkedin,
        instagram,
        designation,
        skills,
        about,
        password,
        cpassword
      })
      userData.save(err=>{
        if (err) {
          console.log(err);
        }
      })
      res.redirect("/signup");7
    }
    else{
      res.send("passwords not matching")
    }
 }catch(error){
   res.render("ahh! error occured")
 }
});


router.post("/login", async (req,res) =>{
    try{
        let findData = await userSchema.findOne({email:req.body.email})
        if(!findData)
        {
          res.send("no such data found!!");
        }
        else{
          if(req.body.password === findData.password)
          {console.log(findData);
          res.redirect('home');}
          else{
            res.send("Wrong Credentials!!");
          }
        }
    }catch(err){
        console.log(err);
    }
})


 // Get the Individual studnt data using Id
 
 router.get("/profile/:email", async (req,res) =>{      //we can get anything like name email etc,
 
      try {
         const email = req.params.email;
         console.log(email);
         const studentData = await userSchema.findOne({email:email});
         console.log(studentData);

         if(!studentData){
             return res.status(404).send("no data found");
         }
         else{
             res.render("ProfilePage" , {firstname:studentData.firstname,lastname:studentData.lastname, gender:studentData.gender,batch:studentData.batch,college:studentData.college,branch:studentData.branch,city:studentData.city,state:studentData.state,contact:studentData.contact,email:studentData.email,linkedin:studentData.linkedin,instagram:studentData.instagram,designation:studentData.designation,skills:studentData.skills,about:studentData.about})
         }
      } catch (e) {
         res.status(500).send(e);           //status 500 is internal server error(i.e Data not present)
      }
 });

 

module.exports = router;
