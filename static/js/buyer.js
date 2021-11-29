function displayForm(ch){
   
    document.getElementById("my-orders").style.display="none";
    document.getElementById("cart").style.display="none";
    document.getElementById("delieverd").style.display="none";
    if(ch==1){
        document.getElementById("my-orders").style.display="block";

    }
    else if(ch==2){
        document.getElementById("cart").style.display="block";
    }

    else if(ch==3){
        document.getElementById("delieverd").style.display="block";
    }
}