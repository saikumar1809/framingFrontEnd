function displayForm(ch){
   
    document.getElementById("add-crop").style.display="none";
    document.getElementById("view-crop").style.display="none";
    if(ch==1){
        document.getElementById("add-crop").style.display="block";

    }
    else if(ch==2){
        document.getElementById("view-crop").style.display="block";
    }
}