angular.module('demoApp')
  .controller('RestritoCtrl', function(Sessao) {

    var restrito = this;

    restrito.dados = Sessao.dados();
    restrito.mensagem = 'Se você está vendo isso, é por que está autenticado!';

  });
