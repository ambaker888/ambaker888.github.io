function loadNav () {
  $('#nav').load('components/nav.html');
}

function loadFooter () {
  $('#footer').load('components/footer.html');
}

function gotoRoute (route) {
  sessionStorage.setItem('currentRoute', route);

  let [ page, anchor ] = route.split('#');

  $('#content').load('routes/' + page, function () {
    window.location.href = '#' + (anchor || '');

    let element = $('#' + anchor)
    let scrollTop = element.length > 0 ? element.offset().top + $('#content').scrollTop() : 0;
    document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
  });
}

function init () {
  loadNav();
  loadFooter();

  let currentRoute = sessionStorage.getItem('currentRoute');
  gotoRoute([ undefined, 'undefined', null, 'null' ].includes(currentRoute) ? 'home.html' : currentRoute);
}

$(window).load(function () {
  init();
});
