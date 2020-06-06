function isValid() {
     var name = document.getElementsByName("name")[0].value;
     var surname = document.getElementsByName("surname")[0].value;
     var pass = document.getElementsByName("pass")[0].value;
     var email = document.getElementsByName("email")[0].value;
     var phone = document.getElementsByName("phone")[0].value;
     
 
      if (isNaN(name) == false) alert("Недопустимі символи");
      else if (isNaN(surname) == false) alert("Недопустимі символи");
      else if (pass.length<4 ) alert("Мінімальна довжина паролю - 4");
      else if (email.indexOf("@") == -1  || email.indexOf(".") == -1) alert("Не правильно введена пошта");
      else if (isNaN(phone) == true || phone.length < 10 || phone.indexOf("+") == -1) alert("Не правильно введений номер");
      else alert("Зареєтровано");
}