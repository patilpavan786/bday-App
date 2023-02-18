import React,{useEffect, useState} from 'react'
import style from "./BdayCard.module.css"
// import {userDetails}  from "../../ConstData/ConstData"
import { useNavigate } from 'react-router-dom'
import CustomButton from '../CustomButton/CustomButton'
function BdayCard() {
  let data= JSON.parse(localStorage.getItem('userlist'))||""
  const[localdata,setLocalData]=useState(data)
  const[newdata1,setNewData1]=useState([])

let nevigate = useNavigate()

useEffect(()=>{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
   let  data=localdata.filter(el=>{
    let Data=el.dob.split("-");
          return (+Data[1]==mm)&&(+Data[2]==dd)   
   })
   setNewData1(data)
},[localdata])

  return (
    <div className={style.Parent}>
        <CustomButton  text="Go Back To Home" onClick={()=> nevigate('/')} className={style.btn}/>

       
       
       
       {newdata1?.map((x)=>{
        return(
       
            <div className={style.main}>
                <img className={style.img} src={x?.image} />
                <div className={style.txt}>
                    <h3>{x.fname}{x?.lname}</h3>
                    <h3>{x?.age}</h3>
                    <h3>{x?.dob}</h3>
                </div>          
            </div>        
        )
       })}
      
    
    </div>
  )
}

export default BdayCard
