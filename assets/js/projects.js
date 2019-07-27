$(document).ready(function(){
    var projects = [
        {"data-title": "Around the World",
            "data-url": "https://jmo911.github.io/Word-Guess-Game/",
            "data-picsource": "../images/spinningGlobe.gif"
        },
        {"data-title": "Crystal Collector",
            "data-url": "https://jmo911.github.io/Crystal-Collector/",
            "data-picsource": "../images/Crystal.png"
        },
    ];
    // console.log(projects)
    
    projects.forEach(function(e){
        var projectLink = $("<a>");
        var projectDiv = $("<div>");
        var projectPic = $("<img>");
        console.log(e);
        projectLink.attr("href", e["data-url"]);
        projectPic.attr("src", e["data-picsource"]);
        projectDiv.append(projectPic);
        projectLink.append(projectDiv);
        $("#projectContainer").append(projectLink);
    })






});
// END OF DOC READY FUNCTION

