ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:27700").setExtent([529070.705502, 180553.798696, 529861.945353, 181306.213277]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Heatmap_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Heatmap<br />\
    <img src="styles/legend/Heatmap_1_0.png" /> 0.0000<br />\
    <img src="styles/legend/Heatmap_1_1.png" /> 6.2699<br />\
    <img src="styles/legend/Heatmap_1_2.png" /> 12.5398<br />\
    <img src="styles/legend/Heatmap_1_3.png" /> 18.8097<br />\
    <img src="styles/legend/Heatmap_1_4.png" /> 25.0796<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Heatmap_1.png",
            attributions: ' ',
            projection: 'EPSG:27700',
            alwaysInRange: true,
            imageExtent: [529135.337379, 180829.213277, 529683.337379, 181331.213277]
        })
    });
var format_Pumpcatchments_2 = new ol.format.GeoJSON();
var features_Pumpcatchments_2 = format_Pumpcatchments_2.readFeatures(json_Pumpcatchments_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Pumpcatchments_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pumpcatchments_2.addFeatures(features_Pumpcatchments_2);
var lyr_Pumpcatchments_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pumpcatchments_2, 
                style: style_Pumpcatchments_2,
                popuplayertitle: 'Pump catchments',
                interactive: true,
                title: '<img src="styles/legend/Pumpcatchments_2.png" /> Pump catchments'
            });
var format_Choleradeaths1854_3 = new ol.format.GeoJSON();
var features_Choleradeaths1854_3 = format_Choleradeaths1854_3.readFeatures(json_Choleradeaths1854_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Choleradeaths1854_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Choleradeaths1854_3.addFeatures(features_Choleradeaths1854_3);
var lyr_Choleradeaths1854_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Choleradeaths1854_3, 
                style: style_Choleradeaths1854_3,
                popuplayertitle: 'Cholera deaths (1854)',
                interactive: true,
    title: 'Cholera deaths (1854)<br />\
    <img src="styles/legend/Choleradeaths1854_3_0.png" /> 1 - 1<br />\
    <img src="styles/legend/Choleradeaths1854_3_1.png" /> 1 - 3<br />\
    <img src="styles/legend/Choleradeaths1854_3_2.png" /> 3 - 5<br />\
    <img src="styles/legend/Choleradeaths1854_3_3.png" /> 5 - 8<br />\
    <img src="styles/legend/Choleradeaths1854_3_4.png" /> 8 - 15<br />' });
var format_Waterpumps_4 = new ol.format.GeoJSON();
var features_Waterpumps_4 = format_Waterpumps_4.readFeatures(json_Waterpumps_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Waterpumps_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterpumps_4.addFeatures(features_Waterpumps_4);
var lyr_Waterpumps_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterpumps_4, 
                style: style_Waterpumps_4,
                popuplayertitle: 'Water pumps',
                interactive: true,
    title: 'Water pumps<br />\
    <img src="styles/legend/Waterpumps_4_0.png" /> All other pumps<br />\
    <img src="styles/legend/Waterpumps_4_1.png" /> Broadwick Street pump<br />' });
var format_Mean_Centre_5 = new ol.format.GeoJSON();
var features_Mean_Centre_5 = format_Mean_Centre_5.readFeatures(json_Mean_Centre_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Mean_Centre_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mean_Centre_5.addFeatures(features_Mean_Centre_5);
var lyr_Mean_Centre_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mean_Centre_5, 
                style: style_Mean_Centre_5,
                popuplayertitle: 'Mean_Centre',
                interactive: true,
                title: '<img src="styles/legend/Mean_Centre_5.png" /> Mean_Centre'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Heatmap_1.setVisible(true);lyr_Pumpcatchments_2.setVisible(true);lyr_Choleradeaths1854_3.setVisible(true);lyr_Waterpumps_4.setVisible(true);lyr_Mean_Centre_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Heatmap_1,lyr_Pumpcatchments_2,lyr_Choleradeaths1854_3,lyr_Waterpumps_4,lyr_Mean_Centre_5];
lyr_Pumpcatchments_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'DEATH': 'DEATH', });
lyr_Choleradeaths1854_3.set('fieldAliases', {'fid': 'fid', 'Count': 'Count', });
lyr_Waterpumps_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Mean_Centre_5.set('fieldAliases', {'fid': 'fid', 'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', });
lyr_Pumpcatchments_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'DEATH': 'TextEdit', });
lyr_Choleradeaths1854_3.set('fieldImages', {'fid': 'TextEdit', 'Count': 'Range', });
lyr_Waterpumps_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_Mean_Centre_5.set('fieldImages', {'fid': 'TextEdit', 'MEAN_X': 'TextEdit', 'MEAN_Y': 'TextEdit', });
lyr_Pumpcatchments_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'DEATH': 'no label', });
lyr_Choleradeaths1854_3.set('fieldLabels', {'fid': 'no label', 'Count': 'no label', });
lyr_Waterpumps_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Mean_Centre_5.set('fieldLabels', {'fid': 'no label', 'MEAN_X': 'no label', 'MEAN_Y': 'no label', });
lyr_Mean_Centre_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});