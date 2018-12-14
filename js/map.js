 // 地图
(function(){
    var mapObj = new AMap.Map("listingMapContent",{
        level: 16, zooms: [13, 18], lang: 'en'
    });                                                       //创建地图实例
    mapObj.plugin(["AMap.ToolBar"], function () {
        var toolbar = new window.AMap.ToolBar();
        toolbar.autoPosition = true;//加载工具条
        mapObj.addControl(toolbar);
    });

    var marker, lat, lng, position;
    lat = '31.237663';
    lng = '121.585541';
    position = new AMap.LngLat(lng, lat);
    mapObj.setCenter(position);
    marker = new AMap.Marker({
        icon:"http://webapi.amap.com/images/marker_sprite.png",
        draggable: false,
        position:position
    });
    marker.setMap(mapObj);//在地图上添加点
    mapObj.setFitView();
})();