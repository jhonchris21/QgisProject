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
var lyr_Elevation_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Elevation<br />\
    <img src="styles/legend/Elevation_2_0.png" /> <= 9<br />\
    <img src="styles/legend/Elevation_2_1.png" /> 9 - 18<br />\
    <img src="styles/legend/Elevation_2_2.png" /> 18 - 26<br />\
    <img src="styles/legend/Elevation_2_3.png" /> 26 - 35<br />\
    <img src="styles/legend/Elevation_2_4.png" /> > 35<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Elevation_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13967333.814985, 1349170.216310, 13968508.854103, 1350814.316909]
        })
    });
var format_Contours_3 = new ol.format.GeoJSON();
var features_Contours_3 = format_Contours_3.readFeatures(json_Contours_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_3.addFeatures(features_Contours_3);
var lyr_Contours_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contours_3, 
                style: style_Contours_3,
                popuplayertitle: 'Contours',
                interactive: true,
                title: '<img src="styles/legend/Contours_3.png" /> Contours'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Brgy2ShapeFile_1.setVisible(true);lyr_Elevation_2.setVisible(true);lyr_Contours_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Brgy2ShapeFile_1,lyr_Elevation_2,lyr_Contours_3];
lyr_Brgy2ShapeFile_1.set('fieldAliases', {'fid': 'fid', 'ADM4_EN': 'ADM4_EN', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM4_REF': 'ADM4_REF', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA_SQKM': 'AREA_SQKM', });
lyr_Contours_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Brgy2ShapeFile_1.set('fieldImages', {'fid': 'TextEdit', 'ADM4_EN': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM4_REF': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA_SQKM': 'TextEdit', });
lyr_Contours_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Brgy2ShapeFile_1.set('fieldLabels', {'fid': 'no label', 'ADM4_EN': 'no label', 'ADM4_PCODE': 'no label', 'ADM4_REF': 'no label', 'ADM3_EN': 'no label', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'AREA_SQKM': 'no label', });
lyr_Contours_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_Contours_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});