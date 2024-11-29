// Problem 21: Apply Functional Programming to Convert Strings to URL Slugs

// Only change code below this line
function urlSlug(title) {
  return title.trim().toLowerCase().split(/\s+/).join('-');
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
