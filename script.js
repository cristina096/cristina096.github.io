let about = document.getElementById('about');
let education = document.getElementById('education');
let experience = document.getElementById('experience');
let skills = document.getElementById('skills');
let contact = document.getElementById('contact');


let arrowRight = document.getElementById("right_slide");
let arrowLeft = document.getElementById("left_slide");

let showAbout = function () {
    document.getElementById('about_section').style.display = 'block';
    document.getElementById('education_section').style.display = 'none';
    document.getElementById('experience_section1').style.display = 'none';
    document.getElementById('experience_section2').style.display = 'none';
    document.getElementById('skills_section').style.display = 'none';
    document.getElementById('contact_section').style.display = 'none';
}

let showEducation = function () {
    document.getElementById('about_section').style.display = 'none';
    document.getElementById('education_section').style.display = 'block';
    document.getElementById('experience_section1').style.display = 'none';
    document.getElementById('experience_section2').style.display = 'none';
    document.getElementById('skills_section').style.display = 'none';
    document.getElementById('contact_section').style.display = 'none';
}

let showExperience = function () {
    document.getElementById('about_section').style.display = 'none';
    document.getElementById('education_section').style.display = 'none';
    document.getElementById('experience_section1').style.display = 'block';
    document.getElementById('experience_section2').style.display = 'none';
    document.getElementById('skills_section').style.display = 'none';
    document.getElementById('contact_section').style.display = 'none';
}

let showExperincePwc = function () {
    document.getElementById('about_section').style.display = 'none';
    document.getElementById('education_section').style.display = 'none';
    document.getElementById('experience_section1').style.display = 'none';
    document.getElementById('experience_section2').style.display = 'block';
    document.getElementById('skills_section').style.display = 'none';
    document.getElementById('contact_section').style.display = 'none';
}


let showSkills = function () {
    document.getElementById('about_section').style.display = 'none';
    document.getElementById('education_section').style.display = 'none';
    document.getElementById('experience_section1').style.display = 'none';
    document.getElementById('experience_section2').style.display = 'none';
    document.getElementById('skills_section').style.display = 'block';
    document.getElementById('contact_section').style.display = 'none';
}

let showContact = function () {
    document.getElementById('about_section').style.display = 'none';
    document.getElementById('education_section').style.display = 'none';
    document.getElementById('experience_section1').style.display = 'none';
    document.getElementById('experience_section2').style.display = 'none';
    document.getElementById('skills_section').style.display = 'none';
    document.getElementById('contact_section').style.display = 'block';
}

about.addEventListener('click', showAbout);
education.addEventListener('click', showEducation);
experience.addEventListener('click', showExperience);
skills.addEventListener('click', showSkills);
contact.addEventListener('click', showContact);

arrowRight.addEventListener('click', showExperincePwc);
arrowLeft.addEventListener('click', showExperience);

