const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

//loads last user preference
if (currentTheme == "dark") 
{
  setDarkMode();
}
else if (currentTheme == "light") 
{
  setLightMode();
}

btn.addEventListener("click", function () 
{
  setTheme();
});

btn2.addEventListener("click", function () 
{
  setTheme();
});

function setTheme() 
{
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") 
  {
    setLightMode();
  } 
  else 
  {
    setDarkMode();
  }
}


function setDarkMode() 
{
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark"); //saves user preferences

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
    iconToggler = icon.getAttribute("src-dark");
  });
}

function setLightMode() 
{
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light"); //saves user preferences

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}
