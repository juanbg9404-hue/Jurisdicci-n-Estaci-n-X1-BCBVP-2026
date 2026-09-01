var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Comunas_1 = new ol.format.GeoJSON();
var features_Comunas_1 = format_Comunas_1.readFeatures(json_Comunas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunas_1.addFeatures(features_Comunas_1);
var lyr_Comunas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunas_1, 
                style: style_Comunas_1,
                popuplayertitle: 'Comunas',
                interactive: true,
    title: 'Comunas<br />\
    <img src="styles/legend/Comunas_1_0.png" /> Comuna 1<br />\
    <img src="styles/legend/Comunas_1_1.png" /> Comuna 10<br />\
    <img src="styles/legend/Comunas_1_2.png" /> Comuna 11<br />\
    <img src="styles/legend/Comunas_1_3.png" /> Comuna 12<br />\
    <img src="styles/legend/Comunas_1_4.png" /> Comuna 2<br />\
    <img src="styles/legend/Comunas_1_5.png" /> Comuna 3<br />\
    <img src="styles/legend/Comunas_1_6.png" /> Comuna 4<br />\
    <img src="styles/legend/Comunas_1_7.png" /> Comuna 5<br />\
    <img src="styles/legend/Comunas_1_8.png" /> Comuna 6<br />\
    <img src="styles/legend/Comunas_1_9.png" /> Comuna 7<br />\
    <img src="styles/legend/Comunas_1_10.png" /> Comuna 8<br />\
    <img src="styles/legend/Comunas_1_11.png" /> Comuna 9<br />\
    <img src="styles/legend/Comunas_1_12.png" /> <br />' });
var format_highway_PastoColombia_2 = new ol.format.GeoJSON();
var features_highway_PastoColombia_2 = format_highway_PastoColombia_2.readFeatures(json_highway_PastoColombia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_PastoColombia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_PastoColombia_2.addFeatures(features_highway_PastoColombia_2);
var lyr_highway_PastoColombia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_PastoColombia_2, 
                style: style_highway_PastoColombia_2,
                popuplayertitle: 'highway_Pasto, Colombia',
                interactive: true,
                title: '<img src="styles/legend/highway_PastoColombia_2.png" /> highway_Pasto, Colombia'
            });
var format_Limite_X1_3 = new ol.format.GeoJSON();
var features_Limite_X1_3 = format_Limite_X1_3.readFeatures(json_Limite_X1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_X1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_X1_3.addFeatures(features_Limite_X1_3);
var lyr_Limite_X1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_X1_3, 
                style: style_Limite_X1_3,
                popuplayertitle: 'Limite_X1',
                interactive: true,
                title: '<img src="styles/legend/Limite_X1_3.png" /> Limite_X1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Comunas_1.setVisible(true);lyr_highway_PastoColombia_2.setVisible(true);lyr_Limite_X1_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Comunas_1,lyr_highway_PastoColombia_2,lyr_Limite_X1_3];
lyr_Comunas_1.set('fieldAliases', {'fid': 'fid', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CPOB': 'COD_CPOB', 'COD_LOC_CO': 'COD_LOC_CO', 'NOM_LOC_CO': 'NOM_LOC_CO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Tipo_Local': 'Tipo_Local', });
lyr_highway_PastoColombia_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'step_count': 'step_count', 'level': 'level', 'locked': 'locked', 'covered': 'covered', 'informal': 'informal', 'ford': 'ford', 'footway': 'footway', 'crossing': 'crossing', 'incline': 'incline', 'addr:city': 'addr:city', 'addr:street': 'addr:street', 'turn:lanes': 'turn:lanes', 'placement': 'placement', 'unsigned_ref': 'unsigned_ref', 'destination': 'destination', 'segregated': 'segregated', 'service': 'service', 'bridge:name': 'bridge:name', 'tunnel': 'tunnel', 'layer': 'layer', 'bridge': 'bridge', 'width': 'width', 'lit': 'lit', 'construction': 'construction', 'foot': 'foot', 'bicycle': 'bicycle', 'access': 'access', 'ref': 'ref', 'maxspeed:forward': 'maxspeed:forward', 'int_name': 'int_name', 'junction': 'junction', 'second_name': 'second_name', 'old_name': 'old_name', 'loc_name': 'loc_name', 'motor_vehicle': 'motor_vehicle', 'horse': 'horse', 'area': 'area', 'handrail': 'handrail', 'lane_markings': 'lane_markings', 'noname': 'noname', 'cutting': 'cutting', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'alt_name': 'alt_name', 'surface': 'surface', 'oneway': 'oneway', 'nat_name': 'nat_name', 'name': 'name', });
lyr_Limite_X1_3.set('fieldAliases', {'fid': 'fid', 'Nombre_via': 'Nombre_via', });
lyr_Comunas_1.set('fieldImages', {'fid': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_LOC_CO': 'TextEdit', 'NOM_LOC_CO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Tipo_Local': 'TextEdit', });
lyr_highway_PastoColombia_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'step_count': 'TextEdit', 'level': 'TextEdit', 'locked': 'TextEdit', 'covered': 'TextEdit', 'informal': 'TextEdit', 'ford': 'TextEdit', 'footway': 'TextEdit', 'crossing': 'TextEdit', 'incline': 'TextEdit', 'addr:city': 'TextEdit', 'addr:street': 'TextEdit', 'turn:lanes': 'TextEdit', 'placement': 'TextEdit', 'unsigned_ref': 'TextEdit', 'destination': 'TextEdit', 'segregated': 'TextEdit', 'service': 'TextEdit', 'bridge:name': 'TextEdit', 'tunnel': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'width': 'TextEdit', 'lit': 'TextEdit', 'construction': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'access': 'TextEdit', 'ref': 'TextEdit', 'maxspeed:forward': 'TextEdit', 'int_name': 'TextEdit', 'junction': 'TextEdit', 'second_name': 'TextEdit', 'old_name': 'TextEdit', 'loc_name': 'TextEdit', 'motor_vehicle': 'TextEdit', 'horse': 'TextEdit', 'area': 'TextEdit', 'handrail': 'TextEdit', 'lane_markings': 'TextEdit', 'noname': 'TextEdit', 'cutting': 'TextEdit', 'lanes': 'TextEdit', 'maxspeed': 'TextEdit', 'alt_name': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'nat_name': 'TextEdit', 'name': 'TextEdit', });
lyr_Limite_X1_3.set('fieldImages', {'fid': 'TextEdit', 'Nombre_via': 'TextEdit', });
lyr_Comunas_1.set('fieldLabels', {'fid': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CPOB': 'no label', 'COD_LOC_CO': 'no label', 'NOM_LOC_CO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Tipo_Local': 'no label', });
lyr_highway_PastoColombia_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'step_count': 'no label', 'level': 'no label', 'locked': 'no label', 'covered': 'no label', 'informal': 'no label', 'ford': 'no label', 'footway': 'no label', 'crossing': 'no label', 'incline': 'no label', 'addr:city': 'no label', 'addr:street': 'no label', 'turn:lanes': 'no label', 'placement': 'no label', 'unsigned_ref': 'no label', 'destination': 'no label', 'segregated': 'no label', 'service': 'no label', 'bridge:name': 'no label', 'tunnel': 'no label', 'layer': 'no label', 'bridge': 'no label', 'width': 'no label', 'lit': 'no label', 'construction': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ref': 'no label', 'maxspeed:forward': 'no label', 'int_name': 'no label', 'junction': 'no label', 'second_name': 'no label', 'old_name': 'no label', 'loc_name': 'no label', 'motor_vehicle': 'no label', 'horse': 'no label', 'area': 'no label', 'handrail': 'no label', 'lane_markings': 'no label', 'noname': 'no label', 'cutting': 'no label', 'lanes': 'no label', 'maxspeed': 'no label', 'alt_name': 'no label', 'surface': 'no label', 'oneway': 'no label', 'nat_name': 'no label', 'name': 'no label', });
lyr_Limite_X1_3.set('fieldLabels', {'fid': 'no label', 'Nombre_via': 'no label', });
lyr_Limite_X1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});