var currentRoute = 'home.html';

function loadHead () {
  $('head').load('components/head.html')
}

function loadNav () {
  $('#nav').load('components/nav.html');
}

function gotoRoute (route, anchor) {
  if (route != currentRoute) {
    $('#content').load('routes/' + route, function () {
      window.location.href = '#' + (anchor || '');

      if (!anchor) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    });
  }
}
