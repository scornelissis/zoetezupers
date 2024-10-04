 // Get current date and time
 const now = new Date();
 const year = now.getFullYear();

 // Define the two important dates
 const targetDate = new Date(year, 10, 8, 10, 30); // November 8, 10:30 AM
 const twoDaysBefore = new Date(year, 10, 6); // November 6, all day

 // Check if today is November 6th or later but before November 8th 10:30 AM
 if (now >= twoDaysBefore && now < targetDate) {
     document.getElementById('message').innerText = "You are viewing this page 2 days before November 8th.";
 } 

 // Check if it is 10:30 AM or later on November 8th
 if (now >= targetDate) {
     document.getElementById('message').innerText = "It's now 10:30 AM on November 8th! Here is the content:";
     document.getElementById('content').style.display = 'block'; // Show content
 }