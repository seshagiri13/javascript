window.onload = function(){
    let params = (new URL(document.location)).searchParams;
let collid = params.get("collid");
let collname = params.get("collname");
getcollectiondetails(collid,collname);
}