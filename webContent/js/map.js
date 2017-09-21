$(function init() {
    var map = new AMap.Map('container', {
        center: [116.432581, 39.939081],
        zoom: 18
    });
    map.plugin(["AMap.ToolBar"], function () {
        map.addControl(new AMap.ToolBar());
    });
    var marker = new AMap.Marker({
        map: map,
        position: [116.432581, 39.939081]
    });
    marker.setLabel({
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: "点击Marker打开高德地图"
    });
    marker.on('click', function (e) {
        marker.markOnAMAP({
            name: '神华国华投资大厦',
            position: marker.getPosition()
        })
    })
});

function myPosition() {
    map.plugin('AMap.Geolocation', function () {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition: 'RB'
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
    });
}