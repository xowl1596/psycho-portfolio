import { Card } from "react-bootstrap";
import "../css/techStack.css";


function TechStack() {
  let techStackInfo = [
    {
      title : "backend", 
      icon : require('../assets/icon-backend.png'),
      badges : [
        {name : "Laravel", color : "FF2D20", icon : "Laravel"},
        {name : "Spring", color : "6DB33F", icon : "Spring"},
      ]
    },
    {
      title : "frontend", 
      icon : require('../assets/icon-frontend.png'),
      badges : [
        {name : "HTML5", color : "E34F26", icon : "HTML5"},
        {name : "CSS3", color : "1572B6", icon : "CSS3"},
        {name : "JavaScript", color : "F7DF1E", icon : "JavaScript"}
      ]
    },
    {
      title : "database",
      icon : require('../assets/icon-database.png'),
      badges : [
        {name : "MySQL", color : "4479A1", icon : "MySQL"},
        {name : "Oracle", color : "F80000", icon : "Oracle"},
      ]
    },
    {
      title : "misc", 
      icon : require('../assets/icon-coding.png'),
      badges : [
        {name : "Python", color : "3776AB", icon : "Python"}
      ]
    }
  ];

  function appendTechStackCards(){
    let result = [];
    for(let i=0; i < techStackInfo.length; i++){
      result.push(
        <Card className="text-center">
          <Card.Img variant="top" src={techStackInfo[i].icon}/>
          <Card.Body>
            <Card.Title>{techStackInfo[i].title}</Card.Title>
            {appendTechStackBadges(techStackInfo[i].badges)}
          </Card.Body>
        </Card>
      );
    }

    return result;
  }

  function appendTechStackBadges(badges){
    let result = [];
    
    for(let i=0; i < badges.length; i++){
      let src = `https://img.shields.io/badge/${badges[i].icon}-${badges[i].color}?style=for-the-badge&logo=${badges[i].icon}&logoColor=white`;
      
      result.push(
        <img src={src}></img>
      );
    }

    return result;
  }
  return (
    <>
	  <p className="section-title">Tech</p>
      <div className="TechStack">
          {appendTechStackCards()}
      </div>
    </>
  );
}

export default TechStack;
