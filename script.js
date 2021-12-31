function getData() {
    var data = [];
    var firstName = document.getElementById("fname").value;
    data.push(firstName);
    var lastName = document.getElementById("lname").value;
    data.push(lastName);
    var address = document.getElementById("address").value;
    data.push(address);
    var pincode = document.getElementById("pinCode").value;
    data.push(pincode);
    var state = document.getElementById("state").value;
    data.push(state);
    var country = document.getElementById("country").value;
    data.push(country);
    if (document.getElementById("m").checked) {
        var male = document.getElementById("m").value;
        data.push(male);
    } else if (document.getElementById("f").checked) {
        var female = document.getElementById("f").value;
        data.push(female);
    } else {
        data.push("");
    }

    var foods = [];
    if (document.getElementById("food1").checked) {
        var indian = document.getElementById("food1").value;
        foods.push(indian);
    }
    if (document.getElementById("food2").checked) {
        var continental = document.getElementById("food2").value;
        foods.push(continental);
    }
    if (document.getElementById("food3").checked) {
        var chinese = document.getElementById("food3").value;
        foods.push(chinese);
    }
    if (document.getElementById("food4").checked) {
        var italian = document.getElementById("food4").value;
        foods.push(italian);
    }
    if (document.getElementById("food5").checked) {
        var american = document.getElementById("food5").value;
        foods.push(american);
    }
    console.log(foods.length);
    if (foods.length >= 3) {
        data.push(foods);
    } else {
        alert("Choose three food choices");

    }
    var tbody = document.createElement("tbody");
    var tr = document.createElement("tr");
    for (var i = 0; i < 8; i++) {
        var td = document.createElement("td");
        td.innerHTML = data[i];
        tr.appendChild(td);

    }
    tbody.appendChild(tr);
    document.getElementById("myTable").appendChild(tbody);
}
