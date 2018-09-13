/**
* Home of Map-Plugin
**/

var mapTools = {
    settings : {},
    bcolors : ['#1C00EA', '#D2414B', '#2980B9', '#8E44AD', '#C83D6F', '#FC5E00', '#F1C40F', '#27AE60', '#34495E', '#EB008D', '#FF66C2', '#CCFF33', '#33CCFF', '#70E000', '#EA001C', '#72DF9F', '#D44096', '#C2A4EA', '#4BD241', '#D2414B'],
    //bcolors : ['#FFFF33', '#FF3300', '#3366CC', '#660033', '#FF3333', '#0000FF', '#00FF99', '#CC3333', '#996666', '#333300', '#FF9900', '#330066', '#CC6666', '#FF0099', '#006600', '#009966', '#CC3399', '#0000CC', '#FF6600', '#FFCC00', '#6666FF', '#993366', '#330000', '#CC9933', '#FF6633', '#CC6699', '#CC0033', '#FF99FF', '#CC00CC', '#FFCC99', '#663366', '#0066CC', '#6699FF', '#00CCCC', '#33CCCC', '#33FF99', '#00FF33', '#CCFF33', '#999966', '#FF9933'],
    activeLayer : false,
    selection_state : {
        mouseover : false //fix for multipolygon firefox issue
    }
};

mapTools.getColor = function(){
    var color = this.bcolors.shift();
    this.bcolors.push(color);
    return color;
};

mapTools.getStyle = function(dom){
    return {
        fillColor: dom.color,
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.5
    };
};

mapTools.getStyleClicked = function(dom){
    return {
        fillColor: dom.color,
        weight: 2,
        opacity: 1,
        color: '#333',
        dashArray: '0',
        fillOpacity: 0.75
    };
};

mapTools.prepare = function(sites){
    for (var dom in sites){
        if (sites[dom].on_map){
            this.settings[dom] = {
                'id' : sites[dom].id,
                'name' : sites[dom].name,
                'color' : this.getColor(),
                'geojson' : 'shapes/'+sites[dom].id+'.geojson',
                'active' : false
            };
        }
    }
};

mapTools.buildLegend = function(){
    var legend = {
        position : 'bottomright',
        colors : [],
        labels : []
    };
    for (dom in this.settings){
        legend.colors.push(this.settings[dom].color);
        legend.labels.push(this.settings[dom].name);
    }
    return legend;
};


mapTools.initMap = function($scope, $http){
    angular.extend($scope, {
        dortmund: {
            lat: 51.56,
            lng: 7.60,
            zoom: 10,
            //autoDiscover: true
        },
        defaults: {
            scrollWheelZoom: false
        },
        legend : mapTools.buildLegend(),
        geojson : {}
    });
    var settings = {};
    
    angular.forEach(mapTools.settings, function(dom){
        $http.get(dom.geojson).success(function(data, status) {
            settings[dom.id] = {
                data: data,
                resetStyleOnMouseout: false,
                style: mapTools.getStyle(dom)
            };
            //dirty hack, cause $q..then() won't play with me
            if (Object.keys(mapTools.settings).length == Object.keys(settings).length){
                angular.extend($scope.geojson, settings);
            }
        });
    });
}

mapTools.mouseOver = function($scope, ev, leafletPayload){
    if (mapTools.selection_state.mouseover != leafletPayload.layerName){
        var target = leafletPayload.leafletEvent.target;
        var layer = leafletPayload.leafletEvent.target;
        layer.setStyle({
            weight: 2,
            color: '#777',
            dashArray: '0',
            fillOpacity: 0.4
        });
        layer.bringToFront();
        mapTools.selection_state.mouseover = leafletPayload.layerName;
    }
};

mapTools.mouseOut = function($scope, ev, leafletPayload){
    mapTools.selection_state.mouseover = false;
    var target = leafletPayload.leafletEvent.target;
    var layer = leafletPayload.leafletEvent.target;
    var activeLayer = angular.fromJson($scope.selectedSite);
    if (activeLayer && leafletPayload.layerName == activeLayer.id){
        layer.setStyle(mapTools.getStyleClicked(mapTools.settings[leafletPayload.layerName]));
    }else{
        layer.setStyle(mapTools.getStyle(mapTools.settings[leafletPayload.layerName]));
    }
    if (mapTools.activeLayer){
        mapTools.activeLayer.bringToFront();
    }
};

mapTools.watchSelectedSite = function($scope, leafletData, newValue, oldValue){
    var oldID = angular.fromJson(oldValue);
    var newID = angular.fromJson(newValue);
    leafletData.getGeoJSON().then(function(lObjs){
        if (oldID){
            if (oldID.on_map){
                var obj = {};
                for (layer in lObjs[oldID.id]._layers){
                    obj = lObjs[oldID.id]._layers[layer];
                    break;
                }
                obj.setStyle(mapTools.getStyle(mapTools.settings[oldID.id]));
            }
        }
        if (newID){
            if (newID.on_map){
                var obj = {};
                for (layer in lObjs[newID.id]._layers){
                    obj = lObjs[newID.id]._layers[layer];
                    break;
                }
                obj.setStyle(mapTools.getStyleClicked(mapTools.settings[newID.id]));
                obj.bringToFront();
                mapTools.activeLayer = obj;
            }    
        }
    });
};

mapTools.onLeafletDirectiveGeoJsonDommapClick = function($scope, $filter, ev, leafletPayload){
    $scope.selectedSite = $filter('json')(config.sites[leafletPayload.layerName]);
};
