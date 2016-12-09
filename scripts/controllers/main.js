angular.module('demoApp')
  .controller('MainCtrl', function(Sessao) {

    var main = this;

    main.possuiSessao = function() {
      return Sessao.estaAutenticado();
    };

    main.dadosDaSessao = function() {
      return Sessao.dados();
    };

    main.encessarSessao = function() {
      Sessao.encerrar();
    };

  });
