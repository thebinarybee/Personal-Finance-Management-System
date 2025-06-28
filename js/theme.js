// Toggle Theme and Save in LocalStorage
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  // Load saved theme on reload
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeIcon.textContent = "☀️";  // Change to light icon for dark theme
  } else {
    themeIcon.textContent = "🌙";  // Dark theme icon by default
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Toggle icons
    if (document.body.classList.contains("dark-theme")) {
      themeIcon.textContent = "☀️";  // Change to light icon when dark mode is active
    } else {
      themeIcon.textContent = "🌙";  // Dark theme icon for light mode
    }

    // Save theme state
    const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
  });
});
