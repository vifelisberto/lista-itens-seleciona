var app = angular.module('clientes', []);

app.controller('ListaController', function($scope){
    $scope.clientes = [
        {nome: 'José Cabreiro', avatar: 'https://api.adorable.io/avatars/150/cabreiro'},
        {nome: 'Marlão Brandu', avatar: 'https://api.adorable.io/avatars/150/marlao'},
        {nome: 'Jonni Joe', avatar: 'https://api.adorable.io/avatars/150/jjoe'},
        {nome: 'Peter Frãpitoun', avatar: 'https://api.adorable.io/avatars/150/frampton'},
        {nome: 'Jeque Boladão', avatar: 'https://api.adorable.io/avatars/150/bolado'},
        {nome: 'Grifinaldo Solemão', avatar: 'https://api.adorable.io/avatars/150/grifis'},
        {nome: 'Astrogênio da Silva', avatar: 'https://api.adorable.io/avatars/150/astrogenio'},
        {nome: 'Didi Mocó', avatar: 'https://api.adorable.io/avatars/150/didimc'},
    ];
    
    $scope.seleciona = function(item) {
      item.status = !item.status;
      $scope.selecionados = 0;

      for (var i = 0; i < $scope.clientes.length; i++) {
        if($scope.clientes[i].status){
          $scope.selecionados++;
        }
      }
    }
});
