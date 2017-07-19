var mainApp = angular.module('searchemployee', [])
mainApp.controller('addemployee', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    $scope.addemployee = false;
    $scope.addemployeeListflag = true;
    $scope.addecompanyistflag = true;
    $scope.addcompanyname = false;
    $scope.userList = [{
            Name: 'Mohan',
            Address: 'pune',
            Contact: 9899999999,
            Type: 'UI'
        },
        {
            Name: 'abc',
            Address: 'tt',
            Contact: 9899999999,
            Type: 'Mob'
        },
         {
            Name: 'abc',
            Address: 'dd',
            Contact: 9899999999,
            Type: 'java'
        }
    ];
    $scope.companyList = [{
            Name: 'fab',
            Address: 'pune',
            Contact: 9899999999,
            Type: 'Php'
        }
    ];
    $scope.filterselection = $scope.userList.concat($scope.companyList) 
    $scope.addemployeeList = function(){
       $scope.addemployee = true;
       $scope.addemployeeListflag = false;
    }
     $scope.addcompanyList = function(){
       $scope.addcompanyname = true;
       $scope.addecompanyistflag = false;
    }
    $scope.addnewCopmany = function(){
       $scope.q = '';
        if ($scope.companyList[$scope.companyind] == null) {
            if(!$scope.addcompanyform.$valid){
              alert('Please enter Employee/Company valid Details')
              return;
            }
            $scope.companyList.push($scope.companysearch);
        } else {
            $scope.companyList[$scope.companyind] = $scope.companysearch;
        }
        $scope.filterselection = $scope.userList.concat($scope.companyList) 
        $scope.companysearch = {};
        $scope.companyind = '';
        $scope.addcompanyname = false;
        $scope.addecompanyistflag = true;
    }
    $scope.employeesave = function() {
        $scope.q = '';
        if ($scope.userList[$scope.searchIndex] == null) {
            if(!$scope.employeeform.$valid){
              alert('Please enter Employee valid Details')
              return;
            }
            $scope.userList.push($scope.userSearch);
            $scope.filterselection = $scope.userList;
        } else {
            $scope.userList[$scope.searchIndex] = $scope.userSearch;
        }
        $scope.filterselection = $scope.userList.concat($scope.companyList) 
        $scope.userSearch = {};
        $scope.searchIndex = '';
        $scope.addemployee = false;
        $scope.addemployeeListflag = true;
    }
    $scope.edit = function(id) {
        $scope.addemployee = true;
        $scope.addemployeeListflag = false;
        $scope.searchIndex = id;
        $scope.userSearch = angular.copy($scope.userList[id]);
    }
   
    $scope.companyedit = function(id) {
        $scope.addcompanyname = true;
        $scope.addecompanyistflag = false;
        $scope.companyind = id;
        $scope.companysearch = angular.copy($scope.companyList[id]);
    }
    $scope.q = '';
    $scope.filterType = function(){
        $scope.q = '';
        if(!$scope.filtertype|| !$scope.filtername){
          alert("Please select valid filter selection")
          return false;
        }
        if($scope.filtertype.Type && ($scope.filtertype.Name.toLowerCase() == $scope.filtername.toLowerCase())){
          $scope.q = $scope.filtertype.Type
        }else{
          $scope.q = false
        }
        
    }

}]);
mainApp.directive('formatPhone', [
        function() {
            return {
                require: 'ngModel',
                restrict: 'A',
                link: function(scope, elem, attrs, ctrl, ngModel) {
                    elem.add(phonenumber).on('keyup', function() {
                       var origVal = elem.val().replace(/[^\w\s]/gi, '');
                       if(origVal.length === 10) {
                         var str = origVal.replace(/(.{3})/g,"$1-");
                         var phone = str.slice(0, -2) + str.slice(-1);
                         jQuery("#phonenumber").val(phone);
                       }

                    });
                }
            };
        }
    ]);