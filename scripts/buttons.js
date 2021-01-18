function showWorkTimeline() {
    document.getElementById("education_timeline").style.display = "none";
    document.getElementById("educationTimelineButton").classList.remove("active");

    document.getElementById("work_timeline").style.display = "block";
    document.getElementById("workTimelineButton").classList.add("active");

}

function showEducationTimeline() {
    document.getElementById("work_timeline").style.display = "none";
    document.getElementById("workTimelineButton").classList.remove("active");

    document.getElementById("education_timeline").style.display = "block";
    document.getElementById("educationTimelineButton").classList.add("active");
}