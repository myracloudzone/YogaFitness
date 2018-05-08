GMApp.run(['$rootScope', '$http', '$window', '$filter', 'ipCookie', '$mdDialog', 
    function ($rootScope, $http, $window, $filter, ipCookie, $mdDialog) {
		var windowWidth = window.innerWidth;
		if(windowWidth < 992) {
			$("body").removeClass("sidenav-toggled");
		} else {
			$("body").addClass("sidenav-toggled");
		}
		$(window).resize(function() {
			var winWidth = window.innerWidth;
			if(winWidth < 992) {
				$("body").removeClass("sidenav-toggled");
			} else {
				$("body").addClass("sidenav-toggled");
			}
		});
		$rootScope.socialURL = {
			facebook : "https://www.facebook.com/Indian-Institute-of-Mind-and-Spiritual-Sciences-1717858034941858",
			twitter : "https://twitter.com/IIMSS1?s=08",
			linkedIn : "https://www.linkedin.com/in/iimss-iimss-b0ba86163",
			instagram : "https://instagram.com/download/?r=7677651893"
		}
		$rootScope.dialogList = [];
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
			angular.forEach($rootScope.dialogList, function(v,k) {
				$mdDialog.hide(v);
			})
		})

		if(window.navigator.platform.toLowerCase().indexOf('mac') < 0) {
			var link = document.createElement( "link" );
			link.href = location.protocol+'//'+location.host+'/app/assets/angular/css/customScrollBar.css'
			link.type = "text/css";
			link.rel = "stylesheet";
			link.media = "screen,print";
			document.getElementsByTagName( "head" )[0].appendChild( link );
		}

		var isSideBarOpen = ipCookie('appSideBar');
		if(isSideBarOpen) {
			$("body").toggleClass("sidenav-toggled");
		}
    }
])
