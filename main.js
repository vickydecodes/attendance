const name = prompt('Enter your Name');
console.log(name);
document.writeln(`Hey ${name}, Your results are!` +'<br>')
let monthCount;
while (isNaN(monthCount) || monthCount <= 0) {
  monthCount = parseInt(prompt('How many months are you attending college? (Enter a positive number)'));
  if (isNaN(monthCount) || monthCount <= 0) {
    alert('Please enter a valid number for month count');
  }
}

const months = ['january', 'february', 'march', 'april', 'may', 'june','july', 'august', 'september', 'october', 'november', 'december'];

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
    document.writeln(`Total hours in ${months[currentMonthIndex % 12]} : ${totalHours}`+'<br>')
    if (isNaN(totalHours) || totalHours < 0) {
      alert('Please enter a valid number for total hours (positive number)');
    }
  }
  totalHoursSum += totalHours;

  let attendedHours;
  while (isNaN(attendedHours) || attendedHours < 0 || attendedHours > totalHours) {
    attendedHours = parseInt(prompt(`Enter the attended hours in ${months[currentMonthIndex % 12]}`));
    document.writeln(`Attended hours in ${months[currentMonthIndex % 12]} : ${attendedHours}`+'<br>')
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

const percentage = Math.round((attendedHoursSum / totalHoursSum) * 100);
console.log('Your attendance percentage is: ' + percentage + '%');
document.writeln(`Total hours conducted: ${totalHoursSum}`+'<br>')
document.writeln(`Total attended hours: ${attendedHoursSum}`+'<br>')
document.writeln(`Total Percentage is: ${percentage}`+'<br>')







