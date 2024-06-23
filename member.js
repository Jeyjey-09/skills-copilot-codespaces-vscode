function skillsMember(){
    var member = document.getElementById("member").value;
    var skill = document.getElementById("skill").value;
    var skillLevel = document.getElementById("skillLevel").value;
    var experience = document.getElementById("experience").value;

    if(member == ""){
        alert("Member is required");
        return;
    }
    if(skill == ""){
        alert("Skill is required");
        return;
    }
    if(skillLevel == ""){
        alert("Skill Level is required");
        return;
    }
    if(experience == ""){
        alert("Experience is required");
        return;
    }
    var memberObj = {
        member: member,
        skill: skill,
        skillLevel: skillLevel,
        experience: experience
    }
    var memberArray = localStorage.getItem("memberArray");
    var memberArray = JSON.parse(memberArray);
    if(memberArray == null){
        memberArray = [];
    }
    memberArray.push(memberObj);
    localStorage.setItem("memberArray", JSON.stringify(memberArray));
    alert("Member Skill added successfully");
    document.getElementById("member").value = "";
    document.getElementById("skill").value = "";
    document.getElementById("skillLevel").value = "";
    document.getElementById("experience").value = "";
}