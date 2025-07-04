function getAcademicStage() {
    const age = parseInt(document.getElementById("ageInput").value);
    const resultDiv = document.getElementById("result");
  
    switch (age) {
      case 5: resultDiv.textContent = "The student is in: Year 1"; break;
      case 6: resultDiv.textContent = "The student is in: Year 2"; break;
      case 7: resultDiv.textContent = "The student is in: Year 3"; break;
      case 8: resultDiv.textContent = "The student is in: Year 4"; break;
      case 9: resultDiv.textContent = "The student is in: Year 5"; break;
      case 10: resultDiv.textContent = "The student is in: Year 6"; break;
      case 11: resultDiv.textContent = "The student is in: Year 7"; break;
      case 12: resultDiv.textContent = "The student is in: Year 8"; break;
      case 13: resultDiv.textContent = "The student is in: Year 9"; break;
      case 14: resultDiv.textContent = "The student is in: Year 10"; break;
      case 15: resultDiv.textContent = "The student is in: Year 11"; break;
      case 16: resultDiv.textContent = "The student is in: Year 12 (Sixth Form)"; break;
      case 17: resultDiv.textContent = "The student is in: Year 13 (Sixth Form)"; break;
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
        resultDiv.textContent = "The student is in: University";
        break;
      default:
        if (age < 5) {
          resultDiv.textContent = "Too young for Year 1";
        } else if (age > 22) {
          resultDiv.textContent = "Beyond standard education path";
        } else {
          resultDiv.textContent = "Please enter a valid age.";
        }
        break;
    }
  }
  