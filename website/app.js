
/*  Copyright 2015 PetaByteBoy

    This file is part of the Material Design Firmware Downloader.

    The Material Design Firmware Downloader is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    The Material Design Firmware Downloader is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with the Material Design Firmware Downloader.  If not, see <http://www.gnu.org/licenses/>. */

angular.module('firmwareDownload', ['ngMaterial', 'leaflet-directive'])
  .controller('DownloadCtrl', function($scope, $location, $interpolate, $filter, $http, leafletData){
    mapTools.prepare(config.sites);
    $scope.config = config;
    leafletData.getGeoJSON().then(function(lObjs){
        window.leafletDataGeoJSON = lObjs;
    });

    mapTools.initMap($scope, $http);

    $scope.$on("leafletDirectiveGeoJson.dommap.mouseover", function(ev, leafletPayload) {
        mapTools.mouseOver($scope, ev, leafletPayload);
    });

    $scope.$on("leafletDirectiveGeoJson.dommap.mouseout", function(ev, leafletPayload) {
        mapTools.mouseOut($scope, ev, leafletPayload);
    });

    //TODO: better way for "external" updating layer style
    $scope.$watch("selectedSite", function(newValue, oldValue) {
        mapTools.watchSelectedSite($scope, leafletData, newValue, oldValue);
    });

    $scope.$on("leafletDirectiveGeoJson.dommap.click", function(ev, leafletPayload) {
        mapTools.onLeafletDirectiveGeoJsonDommapClick($scope, $filter, ev, leafletPayload);
    });


    
    $scope.parse = function (string) {
        try {
            return JSON.parse(string);
        } catch (error) {}
    };
    
    $scope.splitString = function (string, nb) {
        return string.substring(0,nb);
    };

    $scope.interpolate = function (value) {
        try {
            if (typeof(value) != undefined) {
                return $interpolate(value)($scope);
            }
        } catch (error) {}
    };

    $scope.buildFirmwareUrl = function() {
        var site = angular.fromJson($scope.selectedSite);
        if (site != null && site.proxy_to != null){
            $scope.downloadableSite = $filter('json')(config.sites[site.proxy_to]);
        }else {
            $scope.downloadableSite = angular.copy($scope.selectedSite);
        }
        
        var url = $scope.interpolate(config.url);
        var manufacturer = angular.fromJson($scope.selectedManufacturer);
        var router = angular.fromJson($scope.selectedRouter);

        if (manufacturer == null || router == null) {
            return url;
        }
        if ('extensionupgrade' in router && $scope.selectedMode == 'sysupgrade') {
            url += '.'+router.extensionupgrade;
        } else if ( 'extension' in router) {
            url += '.'+router.extension;
        } else {
            url += '.bin';
        }

      return url;
    };
    //select factory by default
    $scope.selectedMode = "factory";

    //read selection from url parameters
    if($location.search().mode != null) { $scope.selectedMode = $location.search().mode; }
    if($location.search().region != null) { $scope.selectedSite = $filter('json')(config.sites[$location.search().region]); }
    if($location.search().manufacturer != null) { $scope.selectedManufacturer = $filter('json')(config.manufacturers[$location.search().manufacturer]); }
    if($location.search().router != null) { $scope.selectedRouter = $filter('json')(config.routers[$location.search().router]); }


  })
  //make parameters work without #! in the url
  .config(function($locationProvider) {
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
  });

