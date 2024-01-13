var users = [
    { id: 1, name: "James Smith", gender: 1 },
    { id: 2, name: "Isla Brown", gender: 2 },
    { id: 3, name: "Amelia Davies", gender: 2 },
    { id: 4, name: "Jacob Evans", gender: 1 }
  ];

  var target = document.querySelector("#target");

  var userStrings = users.map(function(user) {
    var genderString = user.gender === 1 ? "male" : "female";
    return user.name + " - " + genderString;
  });

  userStrings.forEach(function(userString, index) {

    var liElement = document.createElement("li");

    liElement.classList.add("user_item");

    liElement.textContent = (index + 1) + "- " + userString;

    target.appendChild(liElement);
  });