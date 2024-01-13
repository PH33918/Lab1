var users = [
    { id: 1, name: "James Smith", gender: "male" },
    { id: 2, name: "Isla Brown", gender: "female" },
    { id: 3, name: "Amelia Davies", gender: "female" },
    { id: 4, name: "Jacob Evans", gender: "male" }
  ];

  function renderUserList() {
    var userListElement = document.getElementById("userList");
    userListElement.innerHTML = "";

    users.forEach(function(user) {
      var listItem = document.createElement("li");
      listItem.textContent = user.id + "- " + user.name + " - " + user.gender;
      userListElement.appendChild(listItem);
    });
  }

  function addUser() {
    var userId = document.getElementById("userId").value;
    var userName = document.getElementById("userName").value;
    var userGender = document.getElementById("userGender").value;

    var newUser = { id: userId, name: userName, gender: userGender };
    users.push(newUser);

    renderUserList();
  }

  renderUserList();