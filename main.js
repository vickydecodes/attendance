function checkAttendance() {
  const name = document.querySelector('#name').value;
  const interface = document.querySelector('#interface')
  interface.innerHTML = `Hey ${name}, Your results are!` + '<br><br>'
  let monthCount;
  while (isNaN(monthCount) || monthCount <= 0) {
    monthCount = parseInt(prompt('How many months are you attending college? (Enter a positive number)'));
    if (isNaN(monthCount) || monthCount <= 0) {
      alert('Please enter a valid number for month count');
    }
  }

  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

  let totalHoursSum = 0;
  let attendedHoursSum = 0;

  let firstMonth;
  while (!months.includes((firstMonth = prompt('Enter the first month (e.g., January)').toLowerCase()))) {
    alert('Invalid Month! Please enter a valid month name (e.g., January)');
  }

  let currentMonthIndex = months.indexOf(firstMonth);


  for (let i = 0; i < monthCount; i++) {
    let totalHours;
    while (isNaN(totalHours) || totalHours < 0) {
      totalHours = parseInt(prompt(`Enter the total hours in ${months[currentMonthIndex % 12]}`));
      interface.innerHTML += `Total hours in ${months[currentMonthIndex % 12]} : ${totalHours}` + '<br><br>'
      if (isNaN(totalHours) || totalHours < 0) {
        alert('Please enter a valid number for total hours (positive number)');
      }
    }
    totalHoursSum += totalHours;

    let attendedHours;
    while (isNaN(attendedHours) || attendedHours < 0 || attendedHours > totalHours) {
      attendedHours = parseInt(prompt(`Enter the attended hours in ${months[currentMonthIndex % 12]}`));
      interface.innerHTML += `Attended hours in ${months[currentMonthIndex % 12]} : ${attendedHours}` + '<br><br>'
      if (isNaN(attendedHours) || attendedHours < 0 || attendedHours > totalHours) {
        alert('Please enter a valid number for attended hours (positive number, less than or equal to total hours)');
      }
    }
    attendedHoursSum += attendedHours;

    console.log(`Total hours in ${months[currentMonthIndex % 12]}: ${totalHours}`);
    console.log(`Attended hours in ${months[currentMonthIndex % 12]}: ${attendedHours}`);
    currentMonthIndex++
  }

  console.log(`Total hours conducted: ${totalHoursSum}`);
  console.log(`Total attended hours: ${attendedHoursSum}`);

  const percentage = Number.parseFloat((attendedHoursSum / totalHoursSum) * 100).toFixed(2);
  console.log('Your attendance percentage is: ' + percentage + '%');
  interface.innerHTML += `Total hours conducted: ${totalHoursSum}` + '<br><br>'
  interface.innerHTML += `Total attended hours: ${attendedHoursSum}` + '<br><br>'
  interface.innerHTML += `Total Percentage is: ${percentage}` + '<br><br>'
}






