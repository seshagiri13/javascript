


window.onload = function(){
    getmostpoularcollections();
   
    document.querySelector("#Search-results").style.display="none";
    document.getElementById("btnSearch").addEventListener("click",  function(e){
        document.querySelector("#Search-results").style.display="none";
        document.querySelector("#searchresults").innerHTML = "";
        e.preventDefault();
      let param=document.querySelector("#inprest").value;
      searchresults(param);

      // formatSearch(searchresult);
    });
}

