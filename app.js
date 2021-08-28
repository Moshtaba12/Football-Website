var mini = true;

function toggleSidebar() {
  if (mini == true){
    // console.log("inside the side bar");
    document.getElementById("mySidebar").style.width = "240px"
    document.getElementById("mySidebar").style.opacity = "100%"
    document.getElementById("navBox_1").style.width = "200px"
    document.getElementById("navBox_2").style.width = "200px"
    document.getElementById("navBox_3").style.width = "200px"
    document.getElementById("navBox_4").style.width = "200px"
    document.getElementById("navBox_5").style.width = "200px"
    this.mini = false;
  }
  else{
    // console.log("Closing sidebar");
    document.getElementById("mySidebar").style.width = "78px";
    document.getElementById("mySidebar").style.opacity = "70%"
    document.getElementById("navBox_1").style.width = "48px"
    document.getElementById("navBox_2").style.width = "48px"
    document.getElementById("navBox_3").style.width = "48px"
    document.getElementById("navBox_4").style.width = "48px"
    document.getElementById("navBox_5").style.width = "48px"
    this.mini = true;
  }
}
