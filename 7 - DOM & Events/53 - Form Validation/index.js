<form onsubmit="return validate()" method="post">
  Number: <input type="text" name="num1" id="num1" />
  <br />
  Repeat: <input type="text" name="num2" id="num2" />
  <br />
  <input type="submit" value="Submit" />
</form>

function validate() {
  var n1 = document.getElementById('num1');
  var n2 = document.getElementById('num2');
  if(n1.value != '' && n2.value != '') {
      if(n1.value == n2.value) {
          return true;
      }
  }
  alert("The values should be equal and not blank");
  return false;
}