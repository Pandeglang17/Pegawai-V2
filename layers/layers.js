var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DataAnggota_1 = new ol.format.GeoJSON();
var features_DataAnggota_1 = format_DataAnggota_1.readFeatures(json_DataAnggota_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataAnggota_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataAnggota_1.addFeatures(features_DataAnggota_1);
var lyr_DataAnggota_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataAnggota_1, 
                style: style_DataAnggota_1,
                popuplayertitle: 'Data Anggota',
                interactive: true,
    title: 'Data Anggota<br />\
    <img src="styles/legend/DataAnggota_1_0.png" /> CFO<br />\
    <img src="styles/legend/DataAnggota_1_1.png" /> CHLO<br />\
    <img src="styles/legend/DataAnggota_1_2.png" /> CLO<br />\
    <img src="styles/legend/DataAnggota_1_3.png" /> CMO<br />\
    <img src="styles/legend/DataAnggota_1_4.png" /> COO<br />\
    <img src="styles/legend/DataAnggota_1_5.png" /> Komandan<br />\
    <img src="styles/legend/DataAnggota_1_6.png" /> Wakil Komandan<br />\
    <img src="styles/legend/DataAnggota_1_7.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_DataAnggota_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DataAnggota_1];
lyr_DataAnggota_1.set('fieldAliases', {'Nama': 'Nama', 'Satker': 'Satker', 'Jabatan': 'Jabatan', 'Lan': 'Lan', 'Lon': 'Lon', });
lyr_DataAnggota_1.set('fieldImages', {'Nama': 'TextEdit', 'Satker': 'TextEdit', 'Jabatan': 'TextEdit', 'Lan': 'TextEdit', 'Lon': 'TextEdit', });
lyr_DataAnggota_1.set('fieldLabels', {'Nama': 'no label', 'Satker': 'no label', 'Jabatan': 'no label', 'Lan': 'no label', 'Lon': 'no label', });
lyr_DataAnggota_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});