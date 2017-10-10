var currentRoute = 'home.html';

function loadNav () {
  $('#nav').load('components/nav.html');
}

function loadFooter () {
  $('#footer').load('components/footer.html');
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

function init () {
  loadNav();
  loadFooter();
  gotoRoute(currentRoute);
}
