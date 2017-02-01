angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  $scope.getBarGraphData = function(){
    var labels = ['A1','B1','C1','D1','E1'];
    var name = ['K1','K2','K3','K4','K5'];
    var data = [["10","120","70","30","190"],["10","120","70","30","190"],["10","120","70","30","190"],["10","120","70","30","190"],["10","120","70","30","190"]];
    var datasets = [];
    var option;

    for(var j=0; j<name.length;j++){
      datasets.push({
        'label': name[j],
        'backgroundColor': 'blue',
        'borderColor': 'grey',
        'borderWidth': 0.6,
        'pointBackgroundColor': 'red',
        'pointBorderColor': 'green',
        'data': data[j]
      });
    }

    option = {
      animation: {
        duration: 5000
      },
      barThickness: 10,
      scales: {
        xAxes: [{
            stacked: true,
            barPercentage: 0.6,
            categoryPercentage: 0.2
        }],
        yAxes: [{
            stacked: false
        }]
      }
    };

    var outputData = {
        labels: labels,
        datasets: datasets,
        option: option
    };
    return outputData;
  }


  $scope.barGraphData = $scope.getBarGraphData();
  var bar = document.getElementById("barGraph").getContext("2d");
  $scope.myBarChart0 = new Chart(bar, {
    type: 'bar',
    data: $scope.barGraphData,
    options: $scope.barGraphData.option
  });


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
