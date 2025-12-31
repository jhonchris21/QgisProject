var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SANPOLICARPIO_1 = new ol.format.GeoJSON();
var features_SANPOLICARPIO_1 = format_SANPOLICARPIO_1.readFeatures(json_SANPOLICARPIO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SANPOLICARPIO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SANPOLICARPIO_1.addFeatures(features_SANPOLICARPIO_1);
var lyr_SANPOLICARPIO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SANPOLICARPIO_1, 
                style: style_SANPOLICARPIO_1,
                popuplayertitle: 'SAN POLICARPIO',
                interactive: true,
                title: '<img src="styles/legend/SANPOLICARPIO_1.png" /> SAN POLICARPIO'
            });
var format_HIGHSUSCEPTIBILITY_2 = new ol.format.GeoJSON();
var features_HIGHSUSCEPTIBILITY_2 = format_HIGHSUSCEPTIBILITY_2.readFeatures(json_HIGHSUSCEPTIBILITY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIGHSUSCEPTIBILITY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIGHSUSCEPTIBILITY_2.addFeatures(features_HIGHSUSCEPTIBILITY_2);
var lyr_HIGHSUSCEPTIBILITY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HIGHSUSCEPTIBILITY_2, 
                style: style_HIGHSUSCEPTIBILITY_2,
                popuplayertitle: 'HIGH SUSCEPTIBILITY',
                interactive: true,
                title: '<img src="styles/legend/HIGHSUSCEPTIBILITY_2.png" /> HIGH SUSCEPTIBILITY'
            });
var format_MODERATESUSCEPTIBILITY_3 = new ol.format.GeoJSON();
var features_MODERATESUSCEPTIBILITY_3 = format_MODERATESUSCEPTIBILITY_3.readFeatures(json_MODERATESUSCEPTIBILITY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MODERATESUSCEPTIBILITY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MODERATESUSCEPTIBILITY_3.addFeatures(features_MODERATESUSCEPTIBILITY_3);
var lyr_MODERATESUSCEPTIBILITY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MODERATESUSCEPTIBILITY_3, 
                style: style_MODERATESUSCEPTIBILITY_3,
                popuplayertitle: 'MODERATE SUSCEPTIBILITY',
                interactive: true,
                title: '<img src="styles/legend/MODERATESUSCEPTIBILITY_3.png" /> MODERATE SUSCEPTIBILITY'
            });
var format_LOWSUSCEPTIBILITY_4 = new ol.format.GeoJSON();
var features_LOWSUSCEPTIBILITY_4 = format_LOWSUSCEPTIBILITY_4.readFeatures(json_LOWSUSCEPTIBILITY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOWSUSCEPTIBILITY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOWSUSCEPTIBILITY_4.addFeatures(features_LOWSUSCEPTIBILITY_4);
var lyr_LOWSUSCEPTIBILITY_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOWSUSCEPTIBILITY_4, 
                style: style_LOWSUSCEPTIBILITY_4,
                popuplayertitle: 'LOW  SUSCEPTIBILITY',
                interactive: true,
                title: '<img src="styles/legend/LOWSUSCEPTIBILITY_4.png" /> LOW  SUSCEPTIBILITY'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_SANPOLICARPIO_1.setVisible(true);lyr_HIGHSUSCEPTIBILITY_2.setVisible(true);lyr_MODERATESUSCEPTIBILITY_3.setVisible(true);lyr_LOWSUSCEPTIBILITY_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SANPOLICARPIO_1,lyr_HIGHSUSCEPTIBILITY_2,lyr_MODERATESUSCEPTIBILITY_3,lyr_LOWSUSCEPTIBILITY_4];
lyr_SANPOLICARPIO_1.set('fieldAliases', {'ADM4_EN': 'ADM4_EN', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA_SQKM': 'AREA_SQKM', });
lyr_HIGHSUSCEPTIBILITY_2.set('fieldAliases', {'objectid': 'objectid', 'rating': 'rating', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_MODERATESUSCEPTIBILITY_3.set('fieldAliases', {'objectid': 'objectid', 'rating': 'rating', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_LOWSUSCEPTIBILITY_4.set('fieldAliases', {'objectid': 'objectid', 'rating': 'rating', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_SANPOLICARPIO_1.set('fieldImages', {'ADM4_EN': '', 'ADM4_PCODE': '', 'ADM3_EN': '', 'ADM3_PCODE': '', 'ADM2_EN': '', 'ADM2_PCODE': '', 'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM0_EN': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'Shape_Leng': '', 'Shape_Area': '', 'AREA_SQKM': '', });
lyr_HIGHSUSCEPTIBILITY_2.set('fieldImages', {'objectid': '', 'rating': '', 'shape_leng': '', 'shape_area': '', });
lyr_MODERATESUSCEPTIBILITY_3.set('fieldImages', {'objectid': '', 'rating': '', 'shape_leng': '', 'shape_area': '', });
lyr_LOWSUSCEPTIBILITY_4.set('fieldImages', {'objectid': '', 'rating': '', 'shape_leng': '', 'shape_area': '', });
lyr_SANPOLICARPIO_1.set('fieldLabels', {'ADM4_EN': 'no label', 'ADM4_PCODE': 'no label', 'ADM3_EN': 'no label', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'AREA_SQKM': 'no label', });
lyr_HIGHSUSCEPTIBILITY_2.set('fieldLabels', {'objectid': 'no label', 'rating': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_MODERATESUSCEPTIBILITY_3.set('fieldLabels', {'objectid': 'no label', 'rating': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_LOWSUSCEPTIBILITY_4.set('fieldLabels', {'objectid': 'no label', 'rating': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_LOWSUSCEPTIBILITY_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});