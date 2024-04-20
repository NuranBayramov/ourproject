var greet = [
  'What are you doing that early?',
  'Good Morning',
  'Good Afternoon',
  'Good Evening'
][ parseInt(new Date().getHours() / 24 * 4) ];


document.getElementById("greeting").innerHTML = greet;