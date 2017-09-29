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

