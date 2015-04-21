angular.module('app')
	.controller('PostsCtrl',function($scope,PostsSvc){
		$scope.todaysDate = new Date();
		$scope.addPost = function () {
			if ($scope.postBody) {

				PostsSvc.create({
					username: $scope.postUsername,
					body: $scope.postBody              
				}).success(function(post){
					$scope.posts.unshift(post);
					$scope.postBody = null;
				});
			}
		};
		$scope.clearPost = function () {
			$scope.postBody = null;
		};
		PostsSvc
			.fetch()
			.success(function (posts) {
				$scope.posts = posts;
			});
	});