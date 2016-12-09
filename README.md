# angular-login-demo

Exemplo de controle de acesso por redirecionamento de rotas.

Este exemplo não possui integração com backend, logo não valida o usuário e senha em uma API, mas demonstra o comportamento que pode ser aplicado em nível de front-end para tornar a experiencia do usuário da App mais satisfatória.

Caso houvesse uma integração com a API, a obtenção do token seria feita no service Sessao.criar(), e o token seria mantido na cookie e definido na HTTP.header de cada requisição subsequente feito na API.
