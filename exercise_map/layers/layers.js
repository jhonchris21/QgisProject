var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_EasternSamar_1 = new ol.format.GeoJSON();
var features_EasternSamar_1 = format_EasternSamar_1.readFeatures(json_EasternSamar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EasternSamar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EasternSamar_1.addFeatures(features_EasternSamar_1);
var lyr_EasternSamar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EasternSamar_1, 
                style: style_EasternSamar_1,
                popuplayertitle: 'Eastern Samar',
                interactive: true,
                title: '<img src="styles/legend/EasternSamar_1.png" /> Eastern Samar'
            });
var format_BarangayOutsidePoblacion_2 = new ol.format.GeoJSON();
var features_BarangayOutsidePoblacion_2 = format_BarangayOutsidePoblacion_2.readFeatures(json_BarangayOutsidePoblacion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarangayOutsidePoblacion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarangayOutsidePoblacion_2.addFeatures(features_BarangayOutsidePoblacion_2);
var lyr_BarangayOutsidePoblacion_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarangayOutsidePoblacion_2, 
                style: style_BarangayOutsidePoblacion_2,
                popuplayertitle: 'Barangay Outside Poblacion',
                interactive: true,
                title: '<img src="styles/legend/BarangayOutsidePoblacion_2.png" /> Barangay Outside Poblacion'
            });
var format_BarangayInsidePoblacion_3 = new ol.format.GeoJSON();
var features_BarangayInsidePoblacion_3 = format_BarangayInsidePoblacion_3.readFeatures(json_BarangayInsidePoblacion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarangayInsidePoblacion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarangayInsidePoblacion_3.addFeatures(features_BarangayInsidePoblacion_3);
var lyr_BarangayInsidePoblacion_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarangayInsidePoblacion_3, 
                style: style_BarangayInsidePoblacion_3,
                popuplayertitle: 'Barangay Inside Poblacion',
                interactive: true,
                title: '<img src="styles/legend/BarangayInsidePoblacion_3.png" /> Barangay Inside Poblacion'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_EasternSamar_1.setVisible(true);lyr_BarangayOutsidePoblacion_2.setVisible(true);lyr_BarangayInsidePoblacion_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_EasternSamar_1,lyr_BarangayOutsidePoblacion_2,lyr_BarangayInsidePoblacion_3];
lyr_EasternSamar_1.set('fieldAliases', {'ADM4_EN': 'ADM4_EN', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA_SQKM': 'AREA_SQKM', });
lyr_BarangayOutsidePoblacion_2.set('fieldAliases', {'ADM4_EN': 'ADM4_EN', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA_SQKM': 'AREA_SQKM', });
lyr_BarangayInsidePoblacion_3.set('fieldAliases', {'ADM4_EN': 'ADM4_EN', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA_SQKM': 'AREA_SQKM', });
lyr_EasternSamar_1.set('fieldImages', {'ADM4_EN': '', 'ADM4_PCODE': '', 'ADM3_EN': '', 'ADM3_PCODE': '', 'ADM2_EN': '', 'ADM2_PCODE': '', 'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM0_EN': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'Shape_Leng': '', 'Shape_Area': '', 'AREA_SQKM': '', });
lyr_BarangayOutsidePoblacion_2.set('fieldImages', {'ADM4_EN': '', 'ADM4_PCODE': '', 'ADM3_EN': '', 'ADM3_PCODE': '', 'ADM2_EN': '', 'ADM2_PCODE': '', 'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM0_EN': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'Shape_Leng': '', 'Shape_Area': '', 'AREA_SQKM': '', });
lyr_BarangayInsidePoblacion_3.set('fieldImages', {'ADM4_EN': '', 'ADM4_PCODE': '', 'ADM3_EN': '', 'ADM3_PCODE': '', 'ADM2_EN': '', 'ADM2_PCODE': '', 'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM0_EN': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'Shape_Leng': '', 'Shape_Area': '', 'AREA_SQKM': '', });
lyr_EasternSamar_1.set('fieldLabels', {'ADM4_EN': 'inline label - always visible', 'ADM4_PCODE': 'no label', 'ADM3_EN': 'no label', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'AREA_SQKM': 'no label', });
lyr_BarangayOutsidePoblacion_2.set('fieldLabels', {'ADM4_EN': 'inline label - always visible', 'ADM4_PCODE': 'no label', 'ADM3_EN': 'no label', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'AREA_SQKM': 'no label', });
lyr_BarangayInsidePoblacion_3.set('fieldLabels', {'ADM4_EN': 'inline label - always visible', 'ADM4_PCODE': 'no label', 'ADM3_EN': 'no label', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'AREA_SQKM': 'no label', });
lyr_BarangayInsidePoblacion_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});