var arrlist = [];

function Add(e) {

    var list = document.getElementById("list");

    if (document.getElementById("emptylist") != null) {
        list.removeChild(document.getElementById("emptylist"));
    }


    if (arrlist.indexOf(e.previousElementSibling.innerText) == -1) {

        var li = document.createElement("li");

        li.innerText = e.previousElementSibling.innerText;
        arrlist.push(e.previousElementSibling.innerText);

        list.append(li);

        alert("Book: " + e.previousElementSibling.innerText + " added!");

    } else {
        alert("Book " + e.previousElementSibling.innerText + "  is already added!");
    }
}