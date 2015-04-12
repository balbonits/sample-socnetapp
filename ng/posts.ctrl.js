angular.module('app')
.controller('PostsCtrl',function($scope,PostsSvc){
	$scope.todaysDate = new Date();
	$scope.addPost = function () {
		if ($scope.postBody && $scope.postUsername) {

			PostsSvc.create({
				username: $scope.postUsername,
				body: $scope.postBody              
			}).success(function(post){
				$scope.posts.unshift(post);
				$scope.postUsername = null;
				$scope.postBody = null;
			});

		}
	};
	$scope.clearPost = function () {
		$scope.postUsername = null;
		$scope.postBody = null;
	}
	PostsSvc
	.fetch()
	.success(function (posts) {
		$scope.posts = posts;
	});
});