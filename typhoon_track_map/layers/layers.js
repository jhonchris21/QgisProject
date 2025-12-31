var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LineString_Typhoon_1 = new ol.format.GeoJSON();
var features_LineString_Typhoon_1 = format_LineString_Typhoon_1.readFeatures(json_LineString_Typhoon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineString_Typhoon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineString_Typhoon_1.addFeatures(features_LineString_Typhoon_1);
var lyr_LineString_Typhoon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineString_Typhoon_1, 
                style: style_LineString_Typhoon_1,
                popuplayertitle: 'LineString_Typhoon',
                interactive: true,
                title: '<img src="styles/legend/LineString_Typhoon_1.png" /> LineString_Typhoon'
            });
var format_Point_Typhoon_copy_2 = new ol.format.GeoJSON();
var features_Point_Typhoon_copy_2 = format_Point_Typhoon_copy_2.readFeatures(json_Point_Typhoon_copy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_Typhoon_copy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_Typhoon_copy_2.addFeatures(features_Point_Typhoon_copy_2);
var lyr_Point_Typhoon_copy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_Typhoon_copy_2, 
                style: style_Point_Typhoon_copy_2,
                popuplayertitle: 'Point_Typhoon_copy',
                interactive: true,
    title: 'Point_Typhoon_copy<br />\
    <img src="styles/legend/Point_Typhoon_copy_2_0.png" /> 2020-10-27 14:00<br />\
    <img src="styles/legend/Point_Typhoon_copy_2_1.png" /> 2020-10-30 08:00<br />\
    <img src="styles/legend/Point_Typhoon_copy_2_2.png" /> 2020-10-31 08:00<br />\
    <img src="styles/legend/Point_Typhoon_copy_2_3.png" /> 2020-11-01 08:00<br />\
    <img src="styles/legend/Point_Typhoon_copy_2_4.png" /> 2020-11-02 08:00<br />\
    <img src="styles/legend/Point_Typhoon_copy_2_5.png" /> 2020-11-03 08:00<br />\
    <img src="styles/legend/Point_Typhoon_copy_2_6.png" /> 2020-11-04 08:00<br />' });
var format_Point_Typhoon_3 = new ol.format.GeoJSON();
var features_Point_Typhoon_3 = format_Point_Typhoon_3.readFeatures(json_Point_Typhoon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_Typhoon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_Typhoon_3.addFeatures(features_Point_Typhoon_3);
var lyr_Point_Typhoon_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_Typhoon_3, 
                style: style_Point_Typhoon_3,
                popuplayertitle: 'Point_Typhoon',
                interactive: true,
                title: '<img src="styles/legend/Point_Typhoon_3.png" /> Point_Typhoon'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LineString_Typhoon_1.setVisible(true);lyr_Point_Typhoon_copy_2.setVisible(true);lyr_Point_Typhoon_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LineString_Typhoon_1,lyr_Point_Typhoon_copy_2,lyr_Point_Typhoon_3];
lyr_LineString_Typhoon_1.set('fieldAliases', {'id': 'id', });
lyr_Point_Typhoon_copy_2.set('fieldAliases', {'id': 'id', 'time': 'time', });
lyr_Point_Typhoon_3.set('fieldAliases', {'id': 'id', 'time': 'time', });
lyr_LineString_Typhoon_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Point_Typhoon_copy_2.set('fieldImages', {'id': 'TextEdit', 'time': 'TextEdit', });
lyr_Point_Typhoon_3.set('fieldImages', {'id': '', 'time': '', });
lyr_LineString_Typhoon_1.set('fieldLabels', {'id': 'no label', });
lyr_Point_Typhoon_copy_2.set('fieldLabels', {'id': 'no label', 'time': 'no label', });
lyr_Point_Typhoon_3.set('fieldLabels', {'id': 'no label', 'time': 'no label', });
lyr_Point_Typhoon_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});