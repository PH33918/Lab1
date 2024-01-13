function convertString() {
    var inputString = document.getElementById("inputString").value;

    var formattedString = convertToCamelCase(inputString);

    document.getElementById("outputString").textContent = formattedString;
  }

  function convertToCamelCase(input) {

    var words = input.replace(/[^a-zA-Z0-9]/g, ' ').split(' ');

    var camelCaseString = words.map(function(word, index) {
      if (index === 0) {
  
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join('');

    return camelCaseString;
  }