import React from "react";
import styles from "./scrollbar.module.css";
export default function Scrollbar() {
  const data = [
    {
      link: "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg",
      name:'riya singh',
      des:'developer'
    },
    {
       link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw89qBVc9Gsi1ynCYXUkl7wS4Yis7fsfSsZkY604Jj&s",
       name:'Gauri Dhaka',
       des:'backend'
    },
    {
      link: "https://www.shutterstock.com/image-photo/portrait-young-smiling-woman-looking-260nw-1865153395.jpg",
      name:'Teena Khurana',
      des:'UI developer'
  
    },
    {
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgP0VvE-E2Sammf_A1VgVirkeraLGe0BWJir51vRrK&s",
      name:'Gita Lambe',
      des:'java developer'
    } ,
  {
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLH53XpC-S2Wb5p_UVdjDjssjOFeuTxEEbAEOp_HeXjol09-aLpctc7cow9VEmlb23Uy8&usqp=CAU",

    name:'Keekat Sharma',
    des:'web developer'
},  {
    link: "https://media.istockphoto.com/id/1300972573/photo/pleasant-young-indian-woman-freelancer-consult-client-via-video-call.jpg?s=612x612&w=0&k=20&c=cbjgWR58DgUUETP6a0kpeiKTCxwJydyvXZXPeNTEOxg=",
    name:'Babita Malik',
    des:'UI designerr'
} 


];
  return (
    <div className={styles.wrapper}>
     
 {
    data.map(ele =>(
        <div className={styles.card}>
            <img className={styles.img} src={ele.link}/>
            <h6>{ele.name}

            </h6>
            <p className="para">{ele.des}</p>
        </div>
    ))
 }

    </div>
  );
}
