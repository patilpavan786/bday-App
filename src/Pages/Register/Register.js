import React, { useState ,useEffect} from "react";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import CustomInput from "../../Atom/CustomInput/CustomInput";
import Nav from "../../Atom/Nav/Nav";
import style from "./Register.module.css";
import { json, useNavigate } from "react-router-dom";
import {userDetails} from "../../ConstData/ConstData"
function Register() {
  let img = "https://upload.wikimedia.org/wikipedia/commons/c/c9/MS_Dhoni.jpg"
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [file, setFile] = useState(img);

  let nevigate = useNavigate()
  // const [inputValues,setInputValues]=useState({})
  function handleChangeFName(e) {
    setFname(e.target.value);
  }
  function handleChangeLName(e) {
    setLname(e.target.value);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }
  function handleDob(e) {
    setDob(e.target.value);

  }
  function handleFile(e) {


      // let reader = new FileReader();
      // reader.onload = (e) => {
      //   setFile(e.target.result);
      
      // };
      // reader.readAsDataURL(e.target.files[0]);
      const reader = new FileReader();
     if (e.target.files[0]) {
       reader.readAsDataURL(e.target.files[0]);
     }
     reader.onloadend = (readerEvent) => {
      setFile(readerEvent.target.result );
     };
    
  }
  // function handleChange(e,value){
  //   setInputValues({...inputValues,e.target["placeholder"]:value})
  // }
useEffect(()=>{
let localData = JSON.parse(localStorage.getItem("userlist"))||[]
if(localData.length == 0){
  localStorage.setItem("userlist", JSON.stringify(userDetails))
}
},[])

  function handleSubmit(e) {
e.preventDefault()

    let dataUser = {
      fname,
      lname,
      dob,
      age,
      image:file
    };
  
    let olddata = localStorage.getItem("userlist");
    if (olddata == null) {
      olddata = [];
      // olddata.push(userDetails);
      olddata.push(dataUser);
      
      localStorage.setItem("userlist", JSON.stringify(olddata));
    } else {
      let oldArr = JSON.parse(olddata);
      oldArr.push(dataUser);
      localStorage.setItem("userlist", JSON.stringify(oldArr));
      
    }
    alert("successfully register")
    setFname("")
    setLname("")
    setDob("")
    setAge("")
  }
  return (
    <div className={style.wrapper}>
      
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
      <h1>Register here</h1>
      <div>
        
      </div>
      <CustomInput
        placeholder="FirstName"
        className={style.input}
        type="text"
        onChange={handleChangeFName}
        // onChange={handleChange}
        value={fname}
        required
      />
      <CustomInput
        placeholder="LastName"
        type="text"
        className={style.input}
        onChange={handleChangeLName}
        // onChange={handleChange}
        value={lname}
        required
      />
      <CustomInput
        placeholder="Age"
        type="number"
        className={style.input}
        onChange={handleAge}
        // onChange={handleChange}
        value={age}
        required
      />
      <CustomInput
        placeholder="DOB"
        type="date"
        className={style.input}
        onChange={handleDob}
        value={dob}
        // onChange={handleChange}
        required
      />
         <CustomInput
        placeholder="file"
        type="file"
        className={style.input}
        onChange={handleFile}
        // onChange={handleChange}
        // value={file}
        // required
      />
      <CustomButton text="Submit"  className={style.btn}  />
      </form>
      <CustomButton text="Today's Bday" onClick={()=> nevigate('/BdayCard')} className={style.btn}  ></CustomButton>
    </div>
    </div>
  );
}

export default Register;