const display = document.getElementById("display");


const name = [
  "jQuery HOME",
  "jQuery Intro",
  "jQuery Get Started",
  "jQuery Syntax",
  "jQuery Selectors",
  "jQuery Events",
  "jQuery Hide/Show",
  "jQuery Fade",
  "jQuery Slide",
  "jQuery Animate",
  "jQuery stop()",
  "jQuery Callback",
  "jQuery Chaining",
  "jQuery Get",
  "jQuery Set",
  "jQuery Add",
  "jQuery Remove",
  "jQuery CSS Classes",
  "jQuery css()",
  "jQuery Dimensions",
  "jQuery Traversing",
  "jQuery Ancestors",
  "jQuery Descendants",
  "jQuery Siblings",
  "jQuery Filtering",
  "jQuery AJAX Intro",
  "jQuery Load",
  "jQuery Get/Post",
  "jQuery noConflict()",
  "jQuery Filters",
  "jQuery Examples",
  "jQuery Quiz",
  "jQuery Exercises",
  "jQuery Certificate",
  "jQuery Overview",
  "jQuery Selectors",
  "jQuery Events",
  "jQuery Effects",
  "jQuery HTML/CSS",
  "jQuery Traversing",
  "jQuery AJAX",
  "jQuery Misc",
  "jQuery Properties",
];
name.forEach(e => {
    let p = document.createElement("p");
    p.innerHTML = e;

    display.appendChild(p);
});


