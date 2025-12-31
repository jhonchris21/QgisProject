var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Brgy2ShapeFile_1 = new ol.format.GeoJSON();
var features_Brgy2ShapeFile_1 = format_Brgy2ShapeFile_1.readFeatures(json_Brgy2ShapeFile_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brgy2ShapeFile_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brgy2ShapeFile_1.addFeatures(features_Brgy2ShapeFile_1);
var lyr_Brgy2ShapeFile_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brgy2ShapeFile_1, 
                style: style_Brgy2ShapeFile_1,
                popuplayertitle: 'Brgy2ShapeFile',
                interactive: true,
                title: '<img src="styles/legend/Brgy2ShapeFile_1.png" /> Brgy2ShapeFile'
            });
var format_RoadsPoints_2 = new ol.format.GeoJSON();
var features_RoadsPoints_2 = format_RoadsPoints_2.readFeatures(json_RoadsPoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadsPoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadsPoints_2.addFeatures(features_RoadsPoints_2);
var lyr_RoadsPoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadsPoints_2, 
                style: style_RoadsPoints_2,
                popuplayertitle: 'Roads Points',
                interactive: true,
                title: '<img src="styles/legend/RoadsPoints_2.png" /> Roads Points'
            });
var format_LandmarksPoints_3 = new ol.format.GeoJSON();
var features_LandmarksPoints_3 = format_LandmarksPoints_3.readFeatures(json_LandmarksPoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandmarksPoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandmarksPoints_3.addFeatures(features_LandmarksPoints_3);
var lyr_LandmarksPoints_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandmarksPoints_3, 
                style: style_LandmarksPoints_3,
                popuplayertitle: 'Landmarks Points',
                interactive: true,
                title: '<img src="styles/legend/LandmarksPoints_3.png" /> Landmarks Points'
            });
var format_RoadsPaths_4 = new ol.format.GeoJSON();
var features_RoadsPaths_4 = format_RoadsPaths_4.readFeatures(json_RoadsPaths_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadsPaths_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadsPaths_4.addFeatures(features_RoadsPaths_4);
var lyr_RoadsPaths_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadsPaths_4, 
                style: style_RoadsPaths_4,
                popuplayertitle: 'Roads Paths',
                interactive: true,
                title: '<img src="styles/legend/RoadsPaths_4.png" /> Roads Paths'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Brgy2ShapeFile_1.setVisible(true);lyr_RoadsPoints_2.setVisible(true);lyr_LandmarksPoints_3.setVisible(true);lyr_RoadsPaths_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Brgy2ShapeFile_1,lyr_RoadsPoints_2,lyr_LandmarksPoints_3,lyr_RoadsPaths_4];
lyr_Brgy2ShapeFile_1.set('fieldAliases', {'fid': 'fid', 'ADM4_EN': 'ADM4_EN', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM4_REF': 'ADM4_REF', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA_SQKM': 'AREA_SQKM', });
lyr_RoadsPoints_2.set('fieldAliases', {'id': 'id', 'desc': 'desc', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_LandmarksPoints_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_RoadsPaths_4.set('fieldAliases', {'begin': 'begin', 'end': 'end', 'layer': 'layer', 'path': 'path', });
lyr_Brgy2ShapeFile_1.set('fieldImages', {'fid': 'TextEdit', 'ADM4_EN': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM4_REF': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA_SQKM': 'TextEdit', });
lyr_RoadsPoints_2.set('fieldImages', {'id': '', 'desc': '', 'xcoord': '', 'ycoord': '', });
lyr_LandmarksPoints_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', });
lyr_RoadsPaths_4.set('fieldImages', {'begin': '', 'end': '', 'layer': '', 'path': '', });
lyr_Brgy2ShapeFile_1.set('fieldLabels', {'fid': 'no label', 'ADM4_EN': 'no label', 'ADM4_PCODE': 'no label', 'ADM4_REF': 'no label', 'ADM3_EN': 'no label', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'AREA_SQKM': 'no label', });
lyr_RoadsPoints_2.set('fieldLabels', {'id': 'no label', 'desc': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', });
lyr_LandmarksPoints_3.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', });
lyr_RoadsPaths_4.set('fieldLabels', {'begin': 'no label', 'end': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_RoadsPaths_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});