var currentRoute = '';

function loadHead () {
  $('head').load('components/head.html')
}

function loadNav () {
  $('#nav').load('components/nav.html');
}

function gotoRoute (route, subroute) {
  if (route != currentRoute) {
    $('#content').load('routes/' + route, function () {
      if (subroute) {
        window.location.href = '#' + subroute;
      }
    });
  }
}
