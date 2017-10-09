function loadHead () {
  $('head').load('components/head.html')
}

function loadNav () {
  $('#nav').load('components/nav.html');
}

function gotoRoute (route) {
  $('#content').load(route);
}
