function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberText = document.getElementById("memberText");
    var skillsText = document.getElementById("skillsText");
    var memberImg = document.getElementById("memberImg");
    var skillsImg = document.getElementById("skillsImg");
    member.style.display = "none";
    skills.style.display = "block";
    memberText.style.color = "#000000";
    skillsText.style.color = "#ffffff";
    memberImg.style.display = "none";
    skillsImg.style.display = "block";
}