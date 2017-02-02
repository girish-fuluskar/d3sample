angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  $scope.getcolor = function(brightness) {
    var rgb = [Math.random() * 0, Math.random() * 255, Math.random() * 255];
    var mix = [brightness * 51, brightness * 51, brightness * 51]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x) {
        return Math.round(x / 2.0)
    })
    return "rgba(" + mixedrgb.join(",") + ",0.9)";
    //return "rgba("+(Math.floor(Math.random() * 255))+", "+(Math.floor(Math.random() * 255))+","+(Math.floor(Math.random() * 255))+",0.8)";
    //return '#' + Math.random().toString(16).substr(-6);
  }

  $scope.getBarGraphData = function(){
    var labels = ['A1','B1','C1','D1','E1','F1','G1','H1'];
    var name = ['K1','K2','K3','K4','K5','K6','K7','K8'];
    var data = [["10","120","70","30","190","70","30","190"],["10","120","70","30","190","70","30","190"],["10","120","70","30","190","70","30","190"],["10","120","70","30","190","70","30","190"],["10","120","70","30","190","70","30","190"],["10","120","70","30","190","70","30","190"],["10","120","70","30","190","70","30","190"],["10","120","70","30","190","70","30","190"]];
    var datasets = [];
    var option;

    for(var j=0; j<name.length;j++){
      datasets.push({
        'label': name[j],
        'backgroundColor': $scope.getcolor(1),
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
      legend: {
        position: 'bottom'

      },
      scales: {
        xAxes: [{
            stacked: false,
            barPercentage: 0.2,
            categoryPercentage: 0.3
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
