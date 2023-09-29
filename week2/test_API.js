//jquery ajax
const urlBacon =
    "https://jsonplaceholder.typicode.com/todos/1";
(function() {
    $.ajax({
            method: "GET",
            url: urlBacon,
            dataType: "json"
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            alert("no good");
        });
})()
$.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        beforeSend: function(xhr) {
            xhr.overrideMimeType("text/plain;charset = x - user - defined ");
        }
    })
    .done(function(data) {
        if (console && console.log) {
            console.log("Sample of data:",
                data.slice(0, 100));
        }
    });

//get all user
var url = "https://jsonplaceholder.typicode.com/todos";
var xhr = new XMLHttpRequest()
xhr.open("GET", url, true)
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);

//get a user
var url2 = "https://jsonplaceholder.typicode.com/todos";
var xhr2 = new XMLHttpRequest()
xhr2.open('GET', url2 + '/1', true)
xhr2.onload = function() {
    var users = JSON.parse(xhr2.responseText);
    if (xhr2.readyState == 4 && xhr2.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr2.send(null);

//post a user
var url3 = 'https://my-json-server.typicode.com/typicode/demo/posts';
var data = {};
data.firstname = "John";
data.lastname = "Snow";
var json = JSON.stringify(data);
var xhr3 = new XMLHttpRequest();
xhr3.open("POST", url3, true);
xhr3.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr3.onload = function() {
    var users = JSON.parse(xhr3.responseText);
    if (xhr3.readyState == 4 && xhr3.status == "201") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr3.send(null);

//put a user
var url4 = "https://jsonplaceholder.typicode.com/todos";
var data = {};
data.firstname = "John2";
data.lastname = "Snow2";
var json = JSON.stringify(data);
var xhr4 = new XMLHttpRequest();
xhr4.open("PUT", url4 + '/12', true);
xhr4.setRequestHeader('Content-type', 'application/json; charset = utf - 8 ');
xhr4.onload = function() {
    var users = JSON.parse(xhr4.responseText);
    if (xhr4.readyState == 4 && xhr4.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr4.send(json);

//delete a user
var url5 = "https://jsonplaceholder.typicode.com/todos";
var xhr5 = new XMLHttpRequest();
xhr5.open("DELETE", url + '/12', true);
xhr5.onload = function() {
    var users = JSON.parse(xhr5.responseText);
    if (xhr5.readyState == 4 && xhr5.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr5.send(null);