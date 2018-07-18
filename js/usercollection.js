window.onload = function(){
    getusercollections();
    document.getElementById("usercollection").addEventListener("drop",  function(e){
        e.preventDefault();
        var dropdivid = e.dataTransfer.getData("divId");
        e.target.appendChild(document.getElementById(dropdivid));

     
    });
    document.getElementById("usercollection").addEventListener("dragover",  function(e){
        e.preventDefault();
    });

    document.getElementById("btnAdd").addEventListener("click",  function(e){
        e.preventDefault();
        var modal=document.getElementById("modal");
        modal.style.display="block";
    });

    document.getElementById("close").addEventListener("click",  function(e){
        e.preventDefault();
        var modal=document.getElementById("modal");
        modal.style.display="block";
    });

    document.getElementById("close").addEventListener("click",  function(e){
        e.preventDefault();
        var modal=document.getElementById("modal");
        modal.style.display="none";
        document.getElementById("txtname").value="";
        document.getElementById("txtdesc").value="";
    });

    document.getElementById("closebtn").addEventListener("click",  function(e){
        e.preventDefault();
        var modal=document.getElementById("modal");
        modal.style.display="none";
        document.getElementById("txtname").value="";
        document.getElementById("txtdesc").value="";
    });

    document.getElementById("save").addEventListener("click",  function(e){
        e.preventDefault();
       let name= document.getElementById("txtname").value;
       let desc= document.getElementById("txtdesc").value;

       var collection={
           "name":name,
           "Description":desc,
           "restaurants":[]

       }

       savecollection(collection).then(
           function () {
            window.location.href="usercollection.html";
           }
       )
    });
}

