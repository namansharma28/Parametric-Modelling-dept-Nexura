import React, { useState } from "react";
import styles from "../assets/TeamSection.module.css"; 
import TeamMember from "./membercards";
import Bhumika from "/Bhumika.jpg";
import Ishita from "/Ishita Porwal.jpg";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const members = [
    // {
    //   image1: Aryan,
    //   name1: "Aryan Singh",
    //   image2: Yashi,
    //   name2: "Yashi Trivedi",
    // },
  ]
  return (
    <div className={styles.dropdown} id="team">
      <div className={styles.mainMembers}>
     
     {/* add team members like this */}
      {/* <TeamMember 
            image1= {Bhumika}
            name1="Bhumika" 
            image2={Ishita}
            name2="Ishita Porwal" 
          /> */}
         
           
          </div>


          {/* <button
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        id="btn"
      >
        {isOpen ? "Show Less" : "Show All Members"}
      </button>
          {isOpen && (
            <div className={styles.content}>
              {members.map((member, index) => (
                <TeamMember 
                  key={index}
                  image1={member.image1}
                  name1={member.name1}
                  image2={member.image2}
                  name2={member.name2}
                />
                
              ))}
            </div>
          )} */}
    </div>
  );
};

export default DropDown;
