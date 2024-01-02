function calculateAge() {
    var birthDate = new Date(document.getElementById('birthDate').value);
    var currentDate = new Date();
  
    if (isNaN(birthDate.getTime())) {
      document.getElementById('error').innerText = 'Enter a valid date of birth';
      document.getElementById('result').innerText = '';
      return;
    }
  
    var ageInMilliseconds = currentDate - birthDate;
    var ageInSeconds = ageInMilliseconds / 1000;
  
    var years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    var months = Math.floor((currentDate.getMonth() - birthDate.getMonth() + 12) % 12);
    var weeks = Math.floor(ageInMilliseconds / (7 * 24 * 60 * 60 * 1000));
    var days = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));
  
    var hours = Math.floor(ageInSeconds / 3600);
    var minutes = Math.floor((ageInSeconds % 3600) / 60);
    var seconds = Math.floor(ageInSeconds % 60);
  
    document.getElementById('error').innerText = '';
    document.getElementById('result').innerText = 'Your age is:\n' +
      years + ' years, ' +
      months + ' months, ' +
      weeks + ' weeks, ' +
      days + ' days.\n' +
      'In hours, minutes, and seconds: ' +
      hours + ' hours, ' +
      minutes + ' minutes, ' +
      seconds + ' seconds.';
  }
  