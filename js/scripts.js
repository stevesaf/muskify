// Initialize Firebase
var config = {
  apiKey: "AIzaSyBUe63zQzClJ13ruACdBKSDwbn3HPS1qok",
  authDomain: "muskify.firebaseapp.com",
  databaseURL: "https://muskify.firebaseio.com",
  projectId: "muskify",
  storageBucket: "muskify.appspot.com",
  messagingSenderId: "264337714263"
};

firebase.initializeApp(config);



$("#submit-btn").bind("click", function(event) {
  event.preventDefault();
  event.stopPropagation();
  var listNameOnForm = $("#listNameOnForm");
  var listNameOnFormValue = $.trim(listNameOnForm.val());

  if (listNameOnFormValue.length === 0) {
    alert('A name is required to continue!');
  } else {
    firebase.database().ref().push(
      {
        text: listNameOnFormValue
      }
    )
  }

  // firebase.push({listNameOnForm: listNameOnFormValue}, function(error) {
  //   if (error !== null) {
  //     alert('Unable to push name to Firebase!');
  //   }
  // });

  return false;

});

// var database = firebase.database();
// var name = "";
//
// $("#clickButton").on("click", function(){
//     name = $("#nameinput").val().trim();
//
//     database.ref().set({
//       name: name
//     });
//
//     $("#display").html(name)
//     return false;
//
// });

// database.ref().on("value", function(snap) {
//   debugger;
//   $("#display").html(snap.val().name);
// });


// var bigOne = document.getElementById('bigOne');
// var dbRef = firebase.database().ref().child('text');
// dbRef.on('value', snap => bigOne.innerText = snap.val());


//passing name to form
// function onClickHandler() {
//   location.href = 'create-edit.html?name=' + document.getElementById('newListName').value;
// }
//
// function parseQueryString() {
//   var queryDict = {}
//   location.search.substr(1).split("&").forEach(function(item) {
//     queryDict[item.split("=")[0]] = item.split("=")[1]
//   });
//
//   return queryDict;
//
// }
//
// function onLoadHandler() {
//   document.getElementById('listNameOnForm').value = parseQueryString().name;
// }


$(function () {

  $("#rateYo").rateYo({
    starWidth: "10px"
  });

});



function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}





function showData() {
  var fname= $("#newListName").val();
  console.log(fname)
  debugger;
  $('#listNameOnForm').attr('name', "something")
          .attr('value', fname)
          .appendTo('#form');
}
