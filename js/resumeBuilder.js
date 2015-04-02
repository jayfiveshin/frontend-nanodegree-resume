var work = {
  "jobs" : [
    {
      "employer" : "Intelex Technologies",
      "title" : "Project Consultant",
      "location" : "Toronto, ON",
      "dates" : "March 2013 - Current",
      "description" : "I implement software for our company's clients."
    },
    {
      "employer" : "Big Bang Technologies",
      "title" : "Junior Web Developer",
      "location" : "Toronto, ON",
      "dates" : "September 2012 - December 2012",
      "description" : "I developed front-end interfaces for rails application."
    },
    {
      "employer" : "CGI Group",
      "title" : "Project Coordinator Officer",
      "location" : "Markham, ON",
      "dates" : "May 2012 - August 2012",
      "description" : "I maintained project budget and administration work."
    }
  ]
};

var project = {
  "projects" : [
    {
      "title" : "Portfolio Site",
      "dates" : "February 2015",
      "description" : "Made my own portfolio site using the BootStrap framework.",
      "images" : ["images/portfolio-site.png"]
    },
    {
      "title" : "Interactive Resume",
      "dates" : "March 2015",
      "description" : "Made my own interactive resume using JavaScript.",
      "images" : ["images/interactive-resume.png"]
    }
  ]
};

var bio = {
  "name" : "Joonha Shin",
  "role" : "Web Developer",
  "welcomeMsg" : "Welcome to Joonha's resume.",
  "contact" : {
    "mobile" : "647-889-1882",
    "email" : "shin.joonha@gmail.com",
    "github" : "https://github.com/jayfiveshin",
    "twitter" : "@joonhashin",
    "location" : "Mississauga, ON Canada"
  },
  "skills" : [
    "software implementation",
    "consulting",
    "requirements gathering",
    "project management",
    "programming",
    "presentation",
    "communication"
  ],
  "biopic" : "images/me.jpg"
};

var edu = {
  "schools" : [
    {
      "name" : "University of Waterloo",
      "city" : "Waterloo",
      "degree": "Management Engineering",
      "majors" : ["Engineering"],
      "dates" : "September 2006 - April 2012",
      "url" : "www.uwaterloo.ca",
      "graudation-year" : "2012"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front End Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "February 2015 - Ongoing",
      "url" : "www.udacity.com"
    }
  ]
};

// header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedPic);
$("#header").append(formattedMsg);

// contacts
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);

// skills
if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
  }
}

work.display = function() {
  for(job in work.jobs) {
    var formattedEmployer       = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle          = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle  = formattedEmployer + formattedTitle;
    var formattedLocation       = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates          = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription    = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
}

project.display = function () {
  for (p in project.projects) {
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[p].title);
    var formattedDates = HTMLprojectDates.replace("%data%", project.projects[p].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[p].description);
    var formattedImage = HTMLprojectImage.replace("%data%", project.projects[p].images);
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
    $(".project-entry:last").append(formattedImage);
  }
}

$("#main").append(internationalizeButton);

function inName(str_in) {
  var str_array, str_out;
  str_array = str_in.split(" ");
  str_array[0] = str_array[0].slice(0,1).toUpperCase() + str_array[0].slice(1);
  str_array[1] = str_array[1].toUpperCase();
  str_out = str_array[0] + " " + str_array[1];
  return str_out;
}

work.display();
project.display();
