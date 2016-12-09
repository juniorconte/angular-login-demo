angular.module('demoApp')
  .controller('LoginCtrl', function($window, Sessao) {

    var login = this;

    login.usuario = 'demo';
    login.senha = 'demo';

    login.autenticar = function() {
      if (login.usuario === 'demo' && login.senha === 'demo') {
        Sessao.criar(1, 123);
      } else {
        $window.alert('Usuário ou senha incorretos')
      }
    };

  });
