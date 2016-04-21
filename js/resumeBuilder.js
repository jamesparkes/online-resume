// build bio JSON object
var bio = {
	"name" : "James Parkes",
	"role" : "Course Developer",
	"contacts" : {
		"mobile" : "(256) 679-2641",
		"email" : "parkesrjames@gmail.com",
		"github" : "jamesparkes",
		"twitter" : "@parkesrjames",
		"location" : "Madison, AL"
	},
	"welcomeMessage" : "What's up! It's me, James.",
	"skills" : [
		"html",
		"css",
		"javascript",
		"php",
		"python",
		"gaming", 
		"collecting",
		"softball",
		"disc golf",
		"design"
	],
	"biopic" : "images/me.jpg"
}

/**
* @description Displays bio information from JSON object to resume
*/
bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedGitHub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedwelcomeMsg);

	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);

		$("#skills:last").append(formattedSkill);
	}
}

// build education JSON object
var education = {
	"schools" : [
		{
			"name" : "University of Alabama in Huntsville",
			"location" : "Huntsville, AL",
			"degree" : "B.A.",
			"majors" : [
				"Computer Science",
				"Mathematics"],
			"dates" : "Aug 2009 - May 2014",
			"url" : "http://uah.edu"
		},
		{
			"name" : "Bob Jones High School",
			"location" : "Madison, AL",
			"degree" : "Advanced Diploma",
			"majors" : [
				"Honors"],
			"dates" : "Aug 2005 - May 2009",
			"url" : "http://bjhs.madisoncity.k12.al.us/"			
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"date" : "Jan 2016",
			"url" : "http://udacity.com/course/ud304"
		},
		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity",
			"date" : "Feb 2016",
			"url" : "http://udacity.com/course/ud893"
		},
		{
			"title" : "Responsive Images",
			"school" : "Udacity",
			"date" : "Feb 2016",
			"url" : "http://udacity.com/course/ud882"
		},
		{
			"title" : "Git and Github",
			"school" : "Udacity",
			"date" : "Feb 2016",
			"url" : "http://udacity.com/course/ud775"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"date" : "Mar 2016",
			"url" : "http://udacity.com/course/ud805"
		},
		{
			"title" : "Intro to JQuery",
			"school" : "Udacity",
			"date" : "Mar 2016",
			"url" : "http://udacity.com/course/ud245"
		}
	]
}

/**
* @description Displays education information from JSON object to resume
*/
education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedNameWithURL = formattedName.replace("#", education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].location);		
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].dates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedSchool = formattedNameWithURL + formattedDegree + formattedDates + formattedLocation + formattedMajor;

		$(".education-entry:last").append(formattedSchool);
	}

	$("#education").append(HTMLonlineClasses);

	for(course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);		
		var formattedTitleWithURL = formattedTitle.replace("#", education.onlineCourses[course].url);
		var formattedCourse = formattedTitleWithURL + formattedSchool + formattedDates;

		$(".education-entry:last").append(formattedCourse);
	}
}

// build work JSON object
var work = {
	"jobs" : [
		{
			"employer" : "Udacity",			
			"title" : "Course Developer",
			"location" : "Mountain View, CA",
			"dates" : "Jan 2016 - Present",
			"description" : "Build course content for web development, work with subject matter experts in technology field, and create web applications used to teach students"
		},
		{
			"employer" : "The Parkes Twins LLC",			
			"title" : "Co-Founder",
			"location" : "Madison, AL",
			"dates" : "Apr 2013 - Present",
			"description" : "Build custom web and mobile applications, create responsive, fluid front-end designs, and consult on general software development"
		},
		{
			"employer" : "Hexagon Safety &amp; Infrastructure",			
			"title" : "Web Developer",
			"location" : "Madison, AL",
			"dates" : "Oct 2015 - Jan 2016",
			"description" : "Served as web lead for company website, developed digital marketing strategy, and served as global admin for marketing automation system"
		},
		{
			"employer" : "Intergraph",			
			"title" : "Web Developer",
			"location" : "Madison, AL",
			"dates" : "May 2014 - Oct 2015",	
			"description" : "Administered Pardot marketing automation system, served as project lead for new website initiative, and trained global team members to use Pardot and Sitecore"		
		}		
	]
}

/**
* @description Displays work information from JSON object to resume
*/
work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedJob = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

		$(".work-entry:last").append(formattedJob);
	}
}

// build projects JSON object
var projects = {
	"activities" : [
		{
			"title" : "Chimi",
			"years" : "Aug 2013 - Dec 2013",
			"description" : "Developed HTML5 drag-n-drop interface, wrote AJAX to asynchronously update database, and designed minimalist logo",
			"image" : "images/chimi-logo.png"
 		},
		{
			"title" : "Health 24",
			"years" : "Nov 2013 - Dec 2013",
			"description" : "Designed Health 24 website, created image upload and crop form, and designed basic logo and app logo",
			"image" : "images/health-24-logo.png"
		},
		{
			"title" : "Elysian Shadows",
			"years" : "Jul 2012 - Jan 2013",
			"description" : "Created 2D pixel art assets, wrote Elysian Shadows Toolkit, and designed Elysian Shadows website",
			"image" : "images/es-logo.png"
		}
	]
}

/**
* @description Displays project information from JSON object to resume
*/
projects.display = function() {
	for(activity in projects.activities) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.activities[activity].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.activities[activity].years);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.activities[activity].description);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.activities[activity].image);
		var formattedProject = formattedImage + formattedTitle + formattedDates + formattedDescription;

		$(".project-entry:last").append(formattedProject);
	}
}

var map = {}

/**
* @description Displays resume information from JSON object to resume
*/
map.display = function() {
	$("#mapDiv").append(googleMap);
}

bio.display();
education.display();
work.display();
projects.display();
map.display();
