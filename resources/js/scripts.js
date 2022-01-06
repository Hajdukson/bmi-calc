$(() => {
  var height;
  var weight;
  var username;
  var bmi;
  var result;

  $("#form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      height: {
        required: true,
      },
      weight: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Please specify your name.",
        minlength: "The name should contain {0} characters at least.",
      },
      height: { required: "Please enter the proper height." },
      weight: { required: "Please enter the proper weight." },
    },
  });

  $("#form").on("submit", () => {
    if ($("#form").valid()) {
      setValues();
      getResult();
    }
  });

  function setValues() {
    height = document.forms["form"]["height"].value;
    weight = document.forms["form"]["weight"].value;
    username = document.forms["form"]["name"].value;
    result = document.getElementById("result");
    bmi = calculateBMI(weight, height);
  }
  function getResult() {
    result.textContent = writeMessageBaseOnBMI(username, bmi);
  }

  let calculateBMI = (weight, height) =>
    (weight / (height * height)).toFixed(2);

  function writeMessageBaseOnBMI(name, bmi) {
    let result = name + " your BMI: " + bmi + ", you are";
    if (bmi < 16) {
      result += " underweight (Severe thinness)";
    } else if (bmi > 16 && bmi < 16.99) {
      result += " underweight (Moderate thinness)";
    } else if (bmi > 17 && bmi < 18.49) {
      result += " underweight (Mild thinness)";
    } else if (bmi > 18.5 && bmi < 24.99) {
      result = name + " BMI: " + bmi + ", youre weight is normal";
    } else if (bmi > 25 && bmi < 29.99) {
      result += " overweights (Pre-obese)";
    } else if (bmi > 30 && bmi < 34.99) {
      result += " obese (Class I)";
    } else if (bmi > 35 && bmi < 39.99) {
      result += " obese (Class II)";
    } else {
      result += " obese (Class III)";
    }
    return result;
  }
});
