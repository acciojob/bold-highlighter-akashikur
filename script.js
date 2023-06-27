const para = document.getElementsByTagName("strong");
function highlight() {
    //Write your code here
	for (let i = 0; i < para.length; i++) {
          para[i].style.color = "green";
        }


}


function return_normal() {
    //Write your code here
	for (let i = 0; i < para.length; i++) {
          para[i].style.color = "black";
        }
    
}
