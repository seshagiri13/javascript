window.onload = function () {
    let params = (new URL(document.location)).searchParams;
    let resid = params.get("resid");
    getrestaurantdetails(resid);
    document.getElementById("btnAdd").addEventListener("click", function (e) {
        e.preventDefault();
        getallusercollection().then(function (data) {
            let dropdown = document.getElementById('inputcoll');
           
            var length = dropdown.options.length;
            for (i = length-1; i>=0; i--) {
                dropdown.options[i] = null;
            }
            let defaultoption;
            defaultoption = document.createElement('option');
            defaultoption.text = "Choose..";
            dropdown.add(defaultoption);

            details = JSON.parse(data);
            let option;
            for (var i = 0; i < details.length; i++) {
                option = document.createElement('option');
                option.text = details[i].name;
                option.value = details[i].id;
                dropdown.add(option);
            }

            var modal = document.getElementById("modal");
            modal.style.display = "block";
        });


    });

    document.getElementById("close").addEventListener("click", function (e) {
        e.preventDefault();
        var modal = document.getElementById("modal");
        modal.style.display = "none";
       
    });

    document.getElementById("closebtn").addEventListener("click", function (e) {
        e.preventDefault();
        var modal = document.getElementById("modal");
        modal.style.display = "none";
      
    });

    document.getElementById("save").addEventListener("click", function (e) {
        e.preventDefault();
        var selid = document.getElementById("inputcoll");
        var strUser = selid.options[selid.selectedIndex].value;
        var details;
        geteachusercollection(strUser).then(function (data) {
            details = JSON.parse(data);
            let id = document.getElementById(resid).id;
            let name = document.getElementById(resid).title;
            let imgdetails = document.querySelector("#img").src;
            let desc = document.getElementById(resid).title;
            let datacity = document.querySelector("#cdbody").title.split(';');
            let cusisines = datacity[0];
            let city = datacity[1];
            var restaurant = {
                "id": id,
                "Name": name,
                "Img_Url": imgdetails,
                "Description": desc,
                "cuisines": datacity[0],
                "city": datacity[1]
            }
            details.restaurants.push(restaurant);
    
            updatecollection(details, details.id).then(
                function () {
                    window.location.href = "usercollection.html";
                }
            )
        });

       
    });
}