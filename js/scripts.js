// Constructor
function Task(name, description, date, difficulty, assigned, notes){
  this.name = name;
  this.description = description;
  this.date = date;
  this.difficulty = difficulty;
  this.assigned = assigned;
  this.notes = notes;
};

// Prototype
Task.prototype.nameDate = function () {
  return this.name + " - " + this.date;
};

// Front end
$(document).ready(function(){
  $("form#new-task").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedDescription = $("input#description").val();
    var inputtedDate = $("input#date").val();
    var inputtedDifficulty = $("#difficulty").val();
    var inputtedAssigned = $("input#assigned").val();
    var inputtedNotes = $("input#notes").val();

    var newTask = new Task (inputtedName,inputtedDescription,inputtedDate,inputtedDifficulty,inputtedAssigned,inputtedNotes);

    //add task to task list
    $("ul#task").append("<li><span class='task'>" + newTask.nameDate() + "</span> <a>Mark as complete</a></li>");
    $("#task-list").show();

    //clear inputs on submit
    $('input#name').val("");
    $("input#description").val("");
    $('input#date').val("");
    $('input#difficulty').val("");
    $('input#assigned').val("");
    $('input#notes').val("");

    //add content to task details
    $(".task").last().click(function(){
      $("#show-task-details").show();
      $("#show-task-details h2").text(newTask.name);
      $(".name").text(newTask.name);
      $(".description").text(newTask.description);
      $(".date").text(newTask.date);
      $(".difficulty").text(newTask.difficulty);
      $(".assigned").text(newTask.assigned);
      $(".notes").text(newTask.notes);
    });
    $("#task a").click(function() {
      $(this).parent().toggleClass("completed");
      $("#show-task-details").toggleClass("completed");
    });
  });
});
