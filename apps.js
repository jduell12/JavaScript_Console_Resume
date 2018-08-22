//variables for resume
let interests = ["coding", "quilting", "playing games", "movies", "animals"];

let pastPositions = [{company: "Redwood Dental", title: "Dental Hygienist", work: "Assessed patients' oral health, cleaned the oral environment and recommended courses of treatment"}, {company: "Family and Cosmetic Dentistry", title: "Dental Hygienist", work:"Assessed patients' oral health, cleaned the oral environment and recommended courses of treatment"}, {company: "University of Michigan", title: "TA", work:"I helped students learn material, showed them how to solve problems and be able to apply what they were learning"}];

let skills = ["HTML", "Quilter", "CSS", "JavaScript", "Java", "Python", "Oboe" ];

let resume = {
    name: "Jessica",
    career: "Software Developer",
    description: "I love to code!",
};


//function displayPosition that formats data
function displayPosition (company, title, work){
    console.log(" * " + title + " at " + company + " - " + work);
}

//function that turns an array into a list with bullet points
function list (arr){
    for (let i = 0; i < interests.length; i++){
        console.log(" * " + interests[i]);
    }
};

//function displaySkill that prints a BAM in front of a skill name that is cool 
function displaySkill(skill, boolean){
    if (boolean == true){
        console.log(" * BAM: " + skill);
    } else {
        console.log(" * " + skill)
    }
};

// Prints out resume in the specified format
console.log("Name: " + resume.name.toUpperCase());
console.log("Career: " + resume.career);
console.log("Description: " + resume.description);
console.log("\n");
console.log("My Interests: ");
list(interests);
console.log("\n");
console.log("My Previous Experiences: ");
for (let i = 0; i < pastPositions.length; i++){
    displayPosition(pastPositions[i].company, pastPositions[i].title, pastPositions[i].work);
};
console.log("\n");
console.log("My Skills: ");
displaySkill(skills[0], false);
displaySkill(skills[1], true);
displaySkill(skills[2], false);
displaySkill(skills[3], true);
displaySkill(skills[4], true);
displaySkill(skills[5], false);
displaySkill(skills[6], true);
