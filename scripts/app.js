angular.module('demoApp', [
  'ngRoute',
  'ngCookies'
])

.config(function($routeProvider) {

  var sePossuiSessao = function($q, $location, Sessao) {
    if (Sessao.estaAutenticado()) {
      $location.path('restrito');
      return $q.reject();
    }
  };

  var seNaoPossuiSessao = function($q, $location, Sessao) {
    if (!Sessao.estaAutenticado()) {
      $location.path('/');
      return $q.reject();
    }
  };

  $routeProvider.when('/', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login',
    resolve: {
      redirecionar: sePossuiSessao
    }
  })
  .when('/restrito', {
    templateUrl: 'views/restrito.html',
    controller: 'RestritoCtrl',
    controllerAs: 'restrito',
    resolve: {
      redirecionar: seNaoPossuiSessao
    }
  })
  .otherwise({
    redirectTo: '/'
  });
});
