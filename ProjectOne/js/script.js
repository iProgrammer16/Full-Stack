var data = [];
var details = []
function add() {
    var task = document.getElementById("task").value;
    var vDetails = document.getElementById("details").value;
    if( task != "" && vDetails != "") {
        data.push(task);
        details.push(vDetails);
        view();
    }
}
function view () {
    var res, det = "";
    for(var c=0; c < data.length; c++){
       res = data[c];
       det = details[c];
       
    }
    document.getElementById("mytask").innerHTML += "Your task: " + res + "<br>";
    document.getElementById("mydetails").innerHTML += "Your details: " + det + "<br>";

    // document.getElementById("mytask").classList.add("divred");
    // document.getElementById("mydetails").classList.add("divblue");
    
}