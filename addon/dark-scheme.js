if (localStorage.getItem("enableDarkScheme") === "true") {
  let styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "dark-scheme.css";
  document.head.appendChild(styleLink);
}
