
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
}

