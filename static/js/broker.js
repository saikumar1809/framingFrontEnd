function displayForm(div,ch){

   //main div
   document.getElementById("left-menu-functions").style.display="block"; 
   //divs
   document.getElementById("farmer-functions").style.display="none"; 
   document.getElementById("buyer-functions").style.display="none";
   document.getElementById("crop-functions").style.display="none";

   //inner divs
   document.getElementById("add-farmer").style.display="none";
    document.getElementById("view-farmer").style.display="none";
    document.getElementById("delete-farmer").style.display="none";
    document.getElementById("view-buyer").style.display="none";
    document.getElementById("add-crop").style.display="none";
    document.getElementById("view-crop").style.display="none";
    document.getElementById("delete-crop").style.display="none";
   if(div==1){
    document.getElementById("farmer-functions").style.display="block"; 
    if(ch==1){
        document.getElementById("add-farmer").style.display="block";
    }
    else if(ch==2){
        document.getElementById("view-farmer").style.display="block";
    }
    else if(ch==3){
        document.getElementById("delete-farmer").style.display="block";
    }
}
 else if(div==2){
    document.getElementById("buyer-functions").style.display="block";

     if(ch==1){
        document.getElementById("view-buyer").style.display="block";
    }
    }
    else if(div==3){
        document.getElementById("crop-functions").style.display="block";
    if(ch==1){
        document.getElementById("add-crop").style.display="block";
    }
    else if(ch==2){
        document.getElementById("view-crop").style.display="block";
    }
    else if(ch==3){
        document.getElementById("delete-crop").style.display="block";
    }
}
    
    else{

    }
}