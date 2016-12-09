angular.module('demoApp')
  .service('Sessao', function($cookies, $route) {

    var id = $cookies.get('APPID');
    var token = $cookies.get('APPTOKEN');

    return {
      criar: function(newId, newToken) {
        id = newId;
        token = newToken;
        $cookies.put('APPID', id);
        $cookies.put('APPTOKEN', token);
        $route.reload();
      },
      encerrar: function() {
        id = null;
        token = null;
        $cookies.remove('APPID');
        $cookies.remove('APPTOKEN');
        $route.reload();
      },
      dados: function() {
        return {
          id: id,
          token: token
        };
      },
      estaAutenticado: function() {
        return !!(id && token);
      }
    };
  });
