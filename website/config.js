var config = {

version: "2.0.4",

modes: {
  "factory": "Erstinstallation (Neu gekaufter Router)",
  "sysupgrade": "Manuelles Update eines bestehenden Freifunk-Routers"
},

sites:{

  "domaene01" : {id: "domaene01",short:"d01",name:"Dev und Test Domäne", version:"2.0.4", version_base:"2017.1.8", on_map: false },
  "domaene02" : {id: "domaene02",short:"d02",name:"Aussenbezirke und Offloader", version:"2.0.4", version_base:"2017.1.8", on_map: false},
  
  "domaene03" : {id: "domaene03",short:"d03",name:"Dortmund Mitte-Nord", version:"2.0.4", version_base:"2017.1.8", on_map: true },
  "domaene04" : {id: "domaene04",short:"d04",name:"Dortmund Mitte-Süd", version:"2.0.4", version_base:"2017.1.8", on_map: true },
  "domaene05" : {id: "domaene05",short:"d05",name:"Dortmund Nord", version:"2.0.4", version_base:"2017.1.8", on_map: true },
  "domaene06" : {id: "domaene06",short:"d06",name:"Dortmund Süd", version:"2.0.4", version_base:"2017.1.8", on_map: true },
  "domaene07" : {id: "domaene07",short:"d07",name:"Werne", version:"2.0.4", version_base:"2017.1.8", on_map: true },
  "domaene08" : {id: "domaene08",short:"d08",name:"Lünen", version:"2.0.4", version_base:"2017.1.8", on_map: true },
  "domaene09" : {id: "domaene09",short:"d09",name:"Bergkamen, Kamen, Bönen", version:"2.0.4", version_base:"2017.1.8", on_map: true },
  "domaene10" : {id: "domaene10",short:"d10",name:"Unna",  version:"2.0.4", version_base:"2017.1.8", on_map: true},
  "domaene11" : {id: "domaene11",short:"d11",name:"Schwerte, Holzwickede, Fröndenberg", version:"2.0.4", version_base:"2017.1.8", on_map: true },
  
//  "domaene112" : {id: "domaene112",short:"d112",name:"Holzwickede", version:"2.0.4", version_base:"2017.1.8", on_map: false },
//  "domaene113" : {id: "domaene113",short:"d113",name:"Kamen", version:"2.0.4", version_base:"2017.1.8", on_map: false },
//  "domaene114" : {id: "domaene114",short:"d114",name:"Schwerte", version:"2.0.4", version_base:"2017.1.8", on_map: false },
//  "domaene115" : {id: "domaene115",short:"d115",name:"Frönenberg", version:"2.0.4", version_base:"2017.1.8", on_map: true },
//  "domaene116" : {id: "domaene116",short:"d116",name:"Hamm", version:"2.0.4", version_base:"2017.1.8", on_map: false },
//  "domaene117" : {id: "domaene117",short:"d117",name:"Bergkamen", version:"2.0.4", version_base:"2017.1.8", on_map: false },
//  "domaene118" : {id: "domaene118",short:"d118",name:"Bönen", version:"2.0.4", version_base:"2017.1.8", on_map: false },
  
},

//router list for gluon v2015.1
manufacturers: {
  "00tp-link": {id: "tp-link", name: "TP-Link"},
  "01ubiquiti": {id: "ubiquiti", name: "Ubiquiti"},
  "02buffalo": {id: "buffalo", name: "Buffalo"},
  "03d-link": {id: "d-link", name: "D-Link"},
  "04gl-inet": {id: "gl-inet", name: "GL-Inet"},
  "05linksys": {id: "linksys", name: "Linksys"},
  "06netgear": {id: "netgear", name: "Netgear"},
  "07alfa": {id: "alfa-network", name: "ALFA-Network"},
  "088devices": {id: "8devices", name: "8devices"},
  "09meraki": {id: "meraki", name: "Meraki"},
  "10openmesh": {id: "openmesh", name: "OpenMesh"},
  "11onion": {id: "onion", name: "Onion"},
  "12wd-ny-net": {id: "wd-ny-net", name: "WD My Net"},
 // "12wd-ny-net": {id: "raspberrypi", name: "Raspberry Pi"},
  "13ZBT":{id:"zbt",name:"ZBT"},
  "14x86":{id:"x86",name:"x86"},
  "15x86-64":{id:"x86-64",name:"x86-64"}
},

routers: {

 //only works for sysupgrade "8devices-carambola2-board": { id: "8devices-carambola2-board", name: "carambola2-Board", manufacturer: "8devices", modes:["sysupgrade"]},
"8devices-carambola2-board": { id: "8devices-carambola2-board", name: "carambola2-Board", manufacturer: "8devices", modes:["sysupgrade"]},
 "alfa-network-ap121": { id: "alfa-network-ap121", name: "AP121", manufacturer: "ALFA-Network" /*, modes:["factory","sysupgrade"] // is default -> obsolete*/},
 "alfa-network-ap121u": { id: "alfa-network-ap121u", name: "AP121U", manufacturer: "ALFA-Network"},
 "alfa-network-hornet-ub": { id: "alfa-network-hornet-ub", name: "Hornet UB", manufacturer: "ALFA-Network"},
 "alfa-network-n2-n5": { id: "alfa-network-n2-n5", name: "N2/N5", manufacturer: "ALFA-Network"},
 "alfa-network-tube2h": { id: "alfa-network-tube2h", name: "Tube2H", manufacturer: "ALFA-Network"},
 // unknown manufacturer:  "allnet-all0315n": { id: "allnet-all0315n", name: "allnet-all0315n", manufacturer: "allnet??", modes:["factory"]}, // only available for factory
 "buffalo-wzr-hp-ag300h-wzr-600dhp": { id: "buffalo-wzr-hp-ag300h-wzr-600dhp", name: "WZR-HP-AG300H-WZR-600DHP", manufacturer: "Buffalo", modes:["sysupgrade"]}, //only available for sysupgrade
 "buffalo-wzr-hp-ag300h": { id: "buffalo-wzr-hp-ag300h", name: "WZR-HG-AG300H", manufacturer: "Buffalo", modes:["factory"]}, // only available for factory
 "buffalo-wzr-600dhp": { id: "buffalo-wzr-600dhp", name: "WZR-600DHP", manufacturer: "Buffalo", modes:["factory"]}, // only available for factory
 "buffalo-wzr-hp-g450h": { id: "buffalo-wzr-hp-g450h", name: "WZR-HP-G450H", manufacturer: "Buffalo"},
 "buffalo-wzr-hp-g300nh": { id: "buffalo-wzr-hp-g300nh", name: "WZR-HP-G300NH ", manufacturer: "Buffalo"},
 "buffalo-wzr-hp-g300nh2": { id: "buffalo-wzr-hp-g300nh2", name: "WZR-HP-G300NH2 ", manufacturer: "Buffalo"},
 "d-link-dir-505-rev-a1": { id: "d-link-dir-505-rev-a1", name: "DIR-505 (A1)", manufacturer: "D-Link"},
 "d-link-dir-505-rev-a2": { id: "d-link-dir-505-rev-a2", name: "DIR-505 (A2)", manufacturer: "D-Link"},
 "d-link-dir-615-rev-c1": { id: "d-link-dir-615-rev-c1", name: "615", manufacturer: "D-Link"},
 "d-link-dir-825-rev-b1": { id: "d-link-dir-825-rev-b1", name: "825", manufacturer: "D-Link"},
 "gl-ar150": { id: "gl-ar150", name: "GL-AR150", manufacturer: "GL Innovations", modes:["sysupgrade"]}, //only works for sysupgrade 
 "gl-ar750": { id: "gl-ar750", name: "GL-AR750", manufacturer: "GL Innovations", modes:["sysupgrade"]}, //only available for sysupgrade
 "gl-inet-6408a-v1": { id: "gl-inet-6408a-v1", name: "6408A", manufacturer: "GL-Inet"},
 "gl-inet-6416a-v1": { id: "gl-inet-6416a-v1", name: "6416A", manufacturer: "GL-Inet"},
 "linksys-wrt160nl": { id: "linksys-wrt160nl", name: "WRT160NL", manufacturer: "Linksys"},
 "meraki-mr12": { id: "meraki-mr12", name: "MR12", manufacturer: "Meraki", modes:["sysupgrade"]}, //only available for sysupgrade
 "meraki-mr16": { id: "meraki-mr16", name: "MR16", manufacturer: "Meraki", modes:["sysupgrade"]}, //only available for sysupgrade
 "meraki-mr62": { id: "meraki-mr62", name: "MR62", manufacturer: "Meraki", modes:["sysupgrade"]}, //only available for sysupgrade
 "meraki-mr66": { id: "meraki-mr66", name: "MR66", manufacturer: "Meraki", modes:["sysupgrade"]},  //only available for sysupgrade
  // unknown manufacturer:  "mikrotik-nand-64m": { id: "mikrotik-nand-64m", name: "mikrotik-nand-64m", manufacturer: "mikrotik??", modes:["factory"]}, // only available for factory
  // unknown manufacturer:  "mikrotik-nand-large": { id: "mikrotik-nand-large", name: "mikrotik-nand-large", manufacturer: "mikrotik??", modes:["factory"]}, // only available for factory
 "netgear-wndr3700": { id: "netgear-wndr3700", name: "WNDR3700 Ver:1", manufacturer: "Netgear", extension :"img", extensionupgrade :"bin"},
 "netgear-wndr3700v2": { id: "netgear-wndr3700v2", name: "WNDR3700 Ver:2", manufacturer: "Netgear", extension :"img", extensionupgrade :"bin"},
 "netgear-wndr3700v4": { id: "netgear-wndr3700v4", name: "WNDR3700 Ver:4", manufacturer: "Netgear", extension :"img", extensionupgrade :"bin"},
 "netgear-wndr3800": { id: "netgear-wndr3800", name: "WNDR3800 Ver:1", manufacturer: "Netgear", extension :"img", extensionupgrade :"bin"},
 "netgear-wndr4300": { id: "netgear-wndr4300", name: "WNDR4300 Ver:1", manufacturer: "Netgear", extension :"img", extensionupgrade :"bin"},
 "netgear-wndrmacv2": { id: "netgear-wndrmacv2", name: "WNDRMAC Ver:2", manufacturer: "Netgear", extension :"img", extensionupgrade :"bin"},
 "onion-omega": { id: "onion-omega", name: "Omega", manufacturer: "Onion"},
 "openmesh-mr600": { id: "openmesh-mr600", name: "MR600 Ver:1", manufacturer: "OpenMesh"},
 "openmesh-mr600v2": { id: "openmesh-mr600v2", name: "MR600 Ver:2", manufacturer: "OpenMesh"},
 "openmesh-mr900": { id: "openmesh-mr900", name: "MR900 Ver:1", manufacturer: "OpenMesh"},
 "openmesh-mr900v2": { id: "openmesh-mr900v2", name: "MR900 Ver:2", manufacturer: "OpenMesh"},
 "openmesh-mr1750": { id: "openmesh-mr1750", name: "MR1750 Ver:1", manufacturer: "OpenMesh"},
 "openmesh-mr1750v2": { id: "openmesh-mr1750v2", name: "MR1750 Ver:2", manufacturer: "OpenMesh"},
 "openmesh-om2p-hs": { id: "openmesh-om2p-hs", name: "OM2P-HS Ver:1", manufacturer: "OpenMesh"},
 "openmesh-om2p-hsv2": { id: "openmesh-om2p-hsv2", name: "OM2P-HS Ver:2", manufacturer: "OpenMesh"},
 "openmesh-om2p-hsv3": { id: "openmesh-om2p-hsv3", name: "OM2P-HS Ver:3", manufacturer: "OpenMesh"},
 "openmesh-om2p-lc": { id: "openmesh-om2p-lc", name: "OM2P-LC Ver:1", manufacturer: "OpenMesh"},
 "openmesh-om2p": { id: "openmesh-om2p", name: "OM2P Ver:1", manufacturer: "OpenMesh"},
 "openmesh-om2pv2": { id: "openmesh-om2pv2", name: "OM2P Ver:2", manufacturer: "OpenMesh"},
 "openmesh-om5p-ac": { id: "openmesh-om5p-ac", name: "OM5P-AC Ver:1", manufacturer: "OpenMesh"},
 "openmesh-om5p-ac2": { id: "openmesh-om5p-acv2", name: "OM5P-AC Ver:2", manufacturer: "OpenMesh"},
 "openmesh-om5p-an": { id: "openmesh-om5p-an", name: "OM5P-AN Ver:1", manufacturer: "OpenMesh"},
 "openmesh-om5p": { id: "openmesh-om5p", name: "OM5P Ver:1", manufacturer: "OpenMesh"},
 "tp-link-archer-c5-v1": { id: "tp-link-archer-c5-v1", name: "Archer C5 Ver:1", manufacturer: "TP-Link"},
 "tp-link-archer-c7-v2": { id: "tp-link-archer-c7-v2", name: "Archer C7 Ver:2", manufacturer: "TP-Link"},
 "tp-link-archer-c7-v4": { id: "tp-link-archer-c7-v4", name: "Archer C7 Ver:4", manufacturer: "TP-Link"},
 "tp-link-cpe210-v1.0": { id: "tp-link-cpe210-v1.0", name: "CPE210 Ver:1", manufacturer: "TP-Link"},
 "tp-link-cpe210-v1.1": { id: "tp-link-cpe210-v1.1", name: "CPE210 Ver:1.1", manufacturer: "TP-Link"},
 "tp-link-cpe220-v1.0": { id: "tp-link-cpe220-v1.0", name: "CPE220 Ver:1", manufacturer: "TP-Link"},
 "tp-link-cpe220-v1.1": { id: "tp-link-cpe220-v1.1", name: "CPE220 Ver:1", manufacturer: "TP-Link"},
 "tp-link-re450": { id: "tp-link-re450", name: "RE450", manufacturer: "TP-Link"},
 "tp-link-tl-mr13u-v1": { id: "tp-link-tl-mr13u-v1", name: "TL-MR13U Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-mr3020-v1": { id: "tp-link-tl-mr3020-v1", name: "TL-MR3020 Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-mr3040-v1": { id: "tp-link-tl-mr3040-v1", name: "TL-MR3040 Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-mr3040-v2": { id: "tp-link-tl-mr3040-v2", name: "TL-MR3040 Ver:2", manufacturer: "TP-Link"},
 "tp-link-tl-mr3220-v1": { id: "tp-link-tl-mr3220-v1", name: "TL-MR3220 Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-mr3220-v2": { id: "tp-link-tl-mr3220-v2", name: "TL-MR3220 Ver:2", manufacturer: "TP-Link"},
 "tp-link-tl-mr3420-v1": { id: "tp-link-tl-mr3420-v1", name: "TL-MR3420 Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-mr3420-v2": { id: "tp-link-tl-mr3420-v2", name: "TL-MR3420 Ver:2", manufacturer: "TP-Link"},
 "tp-link-tl-wa701n-nd-v1": { id: "tp-link-tl-wa701n-nd-v1", name: "TL-WA701N/ND Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wa701n-nd-v2": { id: "tp-link-tl-wa701n-nd-v2", name: "TL-WA701N/ND Ver:2", manufacturer: "TP-Link"},
 "tp-link-tl-wa750re-v1": { id: "tp-link-tl-wa750re-v1", name: "TL-WA750RE Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wa7210n-v2": { id: "tp-link-tl-wa7210n-v2", name: "TL-WA7210N Ver:2", manufacturer: "TP-Link"},
 "tp-link-tl-wa7510n-v1": { id: "tp-link-tl-wa7510n-v1", name: "TL-WA7510N Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wa801n-nd-v1": { id: "tp-link-tl-wa801n-nd-v1", name: "TL-WA801N/ND Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wa801n-nd-v2": { id: "tp-link-tl-wa801n-nd-v2", name: "TL-WA801N/ND Ver:2", manufacturer: "TP-Link"},
 "tp-link-tl-wa801n-nd-v3": { id: "tp-link-tl-wa801n-nd-v3", name: "TL-WA801N/ND Ver:3", manufacturer: "TP-Link"},
 "tp-link-tl-wa830re-v1": { id: "tp-link-tl-wa830re-v1", name: "TL-WA830Re Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wa830re-v2": { id: "tp-link-tl-wa830re-v2", name: "TL-WA830Re Ver:2", manufacturer: "TP-Link"},
 "tp-link-tl-wa850re-v1": { id: "tp-link-tl-wa850re-v1", name: "TL-WA850RE Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wa860re-v1": { id: "tp-link-tl-wa860re-v1", name: "TL-WA860RE Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wa901n-nd-v1": { id: "tp-link-tl-wa901n-nd-v1", name: "TL-WA901N/ND Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wa901n-nd-v2": { id: "tp-link-tl-wa901n-nd-v2", name: "TL-WA901N/ND Ver:2", manufacturer: "TP-Link"},
 "tp-link-tl-wa901n-nd-v3": { id: "tp-link-tl-wa901n-nd-v3", name: "TL-WA901N/ND Ver:3", manufacturer: "TP-Link"},
 "tp-link-tl-wa901n-nd-v4": { id: "tp-link-tl-wa901n-nd-v4", name: "TL-WA901N/ND Ver:4", manufacturer: "TP-Link"},
 "tp-link-tl-wdr3500-v1": { id: "tp-link-tl-wdr3500-v1", name: "TL-WDR3500 Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wdr3600-v1": { id: "tp-link-tl-wdr3600-v1", name: "TL-WDR3600 Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wdr4300-v1": { id: "tp-link-tl-wdr4300-v1", name: "TL-WDR4300 Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wdr4900-v1": { id: "tp-link-tl-wdr4900-v1", name: "TL-WDR4900 Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wr703n-v1": { id: "tp-link-tl-wr703n-v1", name: "TL-WR703N Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wr710n-v1": { id: "tp-link-tl-wr710n-v1", name: "TL-WR710N Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wr710n-v2": { id: "tp-link-tl-wr710n-v2", name: "TL-WR710N v2", manufacturer: "TP-Link"},
 "tp-link-tl-wr710n-v2.1": { id: "tp-link-tl-wr710n-v2.1", name: "TL-WR710N v2.1", manufacturer: "TP-Link"},
 "tp-link-tl-wr740n-nd-v1": { id: "tp-link-tl-wr740n-nd-v1", name: "TL-WR740N/ND Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wr740n-nd-v3": { id: "tp-link-tl-wr740n-nd-v3", name: "TL-WR740N/ND Ver:3", manufacturer: "TP-Link"},
 "tp-link-tl-wr740n-nd-v4": { id: "tp-link-tl-wr740n-nd-v4", name: "TL-WR740N/ND Ver:4", manufacturer: "TP-Link"},
 "tp-link-tl-wr740n-nd-v5": { id: "tp-link-tl-wr740n-nd-v5", name: "TL-WR740N/ND Ver:5", manufacturer: "TP-Link"},
 "tp-link-tl-wr741n-nd-v1": { id: "tp-link-tl-wr741n-nd-v1", name: "TL-WR741N/ND Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wr741n-nd-v2": { id: "tp-link-tl-wr741n-nd-v2", name: "TL-WR741N/ND Ver:2", manufacturer: "TP-Link"},
 "tp-link-tl-wr741n-nd-v4": { id: "tp-link-tl-wr741n-nd-v4", name: "TL-WR741N/ND Ver:4", manufacturer: "TP-Link"},
 "tp-link-tl-wr741n-nd-v5": { id: "tp-link-tl-wr741n-nd-v5", name: "TL-WR741N/ND Ver:5", manufacturer: "TP-Link"},
 "tp-link-tl-wr743n-nd-v1": { id: "tp-link-tl-wr743n-nd-v1", name: "TL-WR743N/ND Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wr743n-nd-v2": { id: "tp-link-tl-wr743n-nd-v2", name: "TL-WR743N/ND Ver:2", manufacturer: "TP-Link"},
 "tp-link-tl-wr841n-nd-v3": { id: "tp-link-tl-wr841n-nd-v3", name: "TL-WR841N/ND Ver:3", manufacturer: "TP-Link"},
 "tp-link-tl-wr841n-nd-v5": { id: "tp-link-tl-wr841n-nd-v5", name: "TL-WR841N/ND Ver:5", manufacturer: "TP-Link"},
 "tp-link-tl-wr841n-nd-v7": { id: "tp-link-tl-wr841n-nd-v7", name: "TL-WR841N/ND Ver:7", manufacturer: "TP-Link"},
 "tp-link-tl-wr841n-nd-v8": { id: "tp-link-tl-wr841n-nd-v8", name: "TL-WR841N/ND Ver:8", manufacturer: "TP-Link"},
 "tp-link-tl-wr841n-nd-v9": { id: "tp-link-tl-wr841n-nd-v9", name: "TL-WR841N/ND Ver:9", manufacturer: "TP-Link"},
 "tp-link-tl-wr841n-nd-v10": { id: "tp-link-tl-wr841n-nd-v10", name: "TL-WR841N/ND Ver:10", manufacturer: "TP-Link"},
 "tp-link-tl-wr841n-nd-v11": { id: "tp-link-tl-wr841n-nd-v11", name: "TL-WR841N/ND Ver:11", manufacturer: "TP-Link"},
 "tp-link-tl-wr841n-nd-v12": { id: "tp-link-tl-wr841n-nd-v12", name: "TL-WR841N/ND Ver:12", manufacturer: "TP-Link"},
 "tp-link-tl-wr842n-nd-v1": { id: "tp-link-tl-wr842n-nd-v1", name: "TL-WR842N/ND Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wr842n-nd-v2": { id: "tp-link-tl-wr842n-nd-v2", name: "TL-WR842N/ND Ver:2", manufacturer: "TP-Link"},
 "tp-link-tl-wr842n-nd-v3": { id: "tp-link-tl-wr842n-nd-v3", name: "TL-WR842N/ND Ver:3", manufacturer: "TP-Link"},
 "tp-link-tl-wr843n-nd-v1": { id: "tp-link-tl-wr843n-nd-v1", name: "TL-WR843N/ND Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wr940n-v1": { id: "tp-link-tl-wr940n-v1", name: "TL-WR940N Ver:1", manufacturer: "TP-Link"},
 "tp-link tl-wr940n-v2": { id: "tp-link-tl-wr940n-v2", name: "TL-WR940N Ver:2", manufacturer: "TP-Link"},
 "tp-link-tl-wr940n-v3": { id: "tp-link-tl-wr940n-v3", name: "TL-WR940N Ver:3", manufacturer: "TP-Link"},
 "tp-link-tl-wr940n-v4": { id: "tp-link-tl-wr940n-v4", name: "TL-WR940N Ver:4", manufacturer: "TP-Link"},
 "tp-link-tl-wr940n-v5": { id: "tp-link-tl-wr940n-v5", name: "TL-WR940N Ver:5", manufacturer: "TP-Link"},
 "tp-link-tl-wr940n-v6": { id: "tp-link-tl-wr940n-v6", name: "TL-WR940N Ver:6", manufacturer: "TP-Link"},
 "tp-link-tl-wr941n-nd-v2": { id: "tp-link-tl-wr941n-nd-v2", name: "TL-WR941N/ND Ver:2", manufacturer: "TP-Link"},
 "tp-link-tl-wr941n-nd-v3": { id: "tp-link-tl-wr941n-nd-v3", name: "TL-WR941N/ND Ver:3", manufacturer: "TP-Link"},
 "tp-link-tl-wr941n-nd-v4": { id: "tp-link-tl-wr941n-nd-v4", name: "TL-WR941N/ND Ver:4", manufacturer: "TP-Link"},
 "tp-link-tl-wr941n-nd-v5": { id: "tp-link-tl-wr941n-nd-v5", name: "TL-WR941N/ND Ver:5", manufacturer: "TP-Link"},
 "tp-link-tl-wr941n-nd-v6": { id: "tp-link-tl-wr941n-nd-v6", name: "TL-WR941N/ND Ver:6", manufacturer: "TP-Link"},
 "tp-link-tl-wr1043n-nd-v1": { id: "tp-link-tl-wr1043n-nd-v1", name: "TL-WR1043N/ND Ver:1", manufacturer: "TP-Link"},
 "tp-link-tl-wr1043n-nd-v2": { id: "tp-link-tl-wr1043n-nd-v2", name: "TL-WR1043N/ND Ver:2", manufacturer: "TP-Link"},
 "tp-link-tl-wr1043n-nd-v3": { id: "tp-link-tl-wr1043n-nd-v3", name: "TL-WR1043N-ND Ver:3", manufacturer: "TP-Link"},
 "tp-link-tl-wr1043n-nd-v4": { id: "tp-link-tl-wr1043n-nd-v4", name: "TL-WR1043N-ND Ver:4", manufacturer: "TP-Link"},
 "tp-link-tl-wr1043n-v5": { id: "tp-link-tl-wr1043n-v5", name: "TL-WR1043N Ver:5", manufacturer: "TP-Link"},
 "tp-link-tl-wr2543n-nd-v1": { id: "tp-link-tl-wr2543n-nd-v1", name: "TL-WR2543N/ND Ver:1", manufacturer: "TP-Link"},
 "tp-link-wbs210-v1.20": { id: "tp-link-wbs210-v1.20", name: "TL-WBS210 Ver:1.20", manufacturer: "TP-Link"},
 "ubiquiti-bullet-m":        { id: "ubiquiti-bullet-m", name: "Bullet M", manufacturer: "Ubiquiti"},
 "ubiquiti-loco-m-xw":      { id: "ubiquiti-loco-m-xw", name: "Loco M XW", manufacturer: "Ubiquiti"},
 "ubiquiti-rocket-m-xw":{id:"ubiquiti-rocket-m-xw",name:"Rocket M XW",manufacturer:"Ubiquiti"}, 
 "ubiquiti-rocket-m2":{id:"ubiquiti-rocket-m2",name:"Rocket M2",manufacturer:"Ubiquiti"},
 "ubiquiti-rocket-m2-xw":{id:"ubiquiti-rocket-m2-xw",name:"Rocket M2 XW",manufacturer:"Ubiquiti"},
 "ubiquiti-rocket-m2-ti":{id:"ubiquiti-rocket-m2-ti",name:"Rocket M2 TI",manufacturer:"Ubiquiti"},
 "ubiquiti-rocket-m5":{id:"ubiquiti-rocket-m5",name:"Rocket M5",manufacturer:"Ubiquiti"},
 "ubiquiti-rocket-m5-xw":{id:"ubiquiti-rocket-m5-xw",name:"Rocket M5 XW",manufacturer:"Ubiquiti"},
 "ubiquiti-rocket-m5-ti":{id:"ubiquiti-rocket-m5-ti",name:"Rocket M5 TI",manufacturer:"Ubiquiti"},
 "ubiquiti-nanostation-m-xw": { id: "ubiquiti-nanostation-m-xw", name: "Nanostation M XW", manufacturer: "Ubiquiti"},
 "ubiquiti-nanostation-m": { id: "ubiquiti-nanostation-m", name: "Nanostation M", manufacturer: "Ubiquiti"},
 "ubiquiti-picostation-m2":{id:"ubiquiti-picostation-m2",name:"Picostation M2HP",manufacturer:"Ubiquiti"},
 "ubiquiti-unifi": { id: "ubiquiti-unifi", name: "UniFi", manufacturer: "Ubiquiti"},
 "ubiquiti-ubiquiti-unifi-ac-lite": { id: "ubiquiti-unifi-ac-lite", name: "UniFi AC Lite", manufacturer: "Ubiquiti", modes:["sysupgrade"]}, // only available for factory
 "ubiquiti-ubiquiti-unifi-ac-mesh": { id: "ubiquiti-unifi-ac-mesh", name: "UniFi AC Mesh", manufacturer: "Ubiquiti", modes:["sysupgrade"]}, // only available for factory
 "ubiquiti-unifi-ac-pro": { id: "unifi-ac-pro", name: "UniFi AC Pro", manufacturer: "Ubiquiti", modes:["sysupgrade"]}, // only available for factory
 "ubiquiti-unifi-ap": { id: "ubiquiti-unifi-ap", name: "UniFi AP", manufacturer: "Ubiquiti"},
 "ubiquiti-unifi-ap-pro": { id: "ubiquiti-unifi-ap-pro", name: "UniFi AP Pro", manufacturer: "Ubiquiti"},
 "ubiquiti-unifi-ap-lr": { id: "ubiquiti-unifi-ap-lr", name: "UniFi AP lr", manufacturer: "Ubiquiti"},
 "ubiquiti-unifiap-outdoor": { id: "ubiquiti-unifiap-outdoor", name: "UniFi AP Outdoor", manufacturer: "Ubiquiti"},
 "ubiquiti-unifiap-outdoor+": { id: "ubiquiti-unifiap-outdoor+", name: "Outdoor+", manufacturer: "Ubiquiti"},
 "ubiquiti-airgateway": { id: "ubiquiti-airgateway", name: "airGateway ", manufacturer: "Ubiquiti"},
 "ubiquiti-airrouter": { id: "ubiquiti-airrouter", name: "airRouter ", manufacturer: "Ubiquiti"},
 "ubnt-erx-sfp": { id: "ubnt-erx-sfp", name: "Ubiquiti Edgerouter-X SFP ", manufacturer: "Ubiquiti", extension :"bin", extensionupgrade :"tar", modes:["sysupgrade"]},// only available for sysupgrade
 "ubnt-erx": { id: "ubnt-erx", name: "Ubiquiti EdgeRouter-X ", manufacturer: "Ubiquiti", extension :"bin", extensionupgrade :"tar", modes:["sysupgrade"]},// only available for sysupgrade
 "wd-my-net-n600": { id: "wd-my-net-n600", name: "N600", manufacturer: "WD My Net"},
 "wd-my-net-n750": { id: "wd-my-net-n750", name: "N750", manufacturer: "WD My Net"},
// "raspberry-pi": { id: "raspberry-pi", name: "Raspberry Pi", manufacturer: "Raspberry Pi", extension :"img.gz"},
// "raspberry-pi-2": { id: "raspberry-pi-2", name: "Raspberry Pi 2", manufacturer: "Raspberry Pi", extension :"img.gz"},
 "x86-generic":{id:"x86-generic",name:"generic",manufacturer:"x86", extension :"img.gz"},
 "x86-kvm":{id:"x86-generic",name:"kvm",manufacturer:"x86", extension :"img.gz"},
 "x86-virtualbox":{id:"x86-generic",name:"virtualbox",manufacturer:"x86", extension :"vdi", modes:["factory"]}, // only available for factory
 "x86-vmware":{id:"x86-generic",name:"vmware",manufacturer:"x86", extension :"vmdk", modes:["factory"]}, // only available for factory
 "x86-64-generic":{id:"x86-64",name:"generic",manufacturer:"x86-64", extension :"img.gz"},
 "x86-64-kvm":{id:"x86-64",name:"kvm",manufacturer:"x86-64", extension :"img.gz"},
 "x86-64-virtualbox":{id:"x86-64",name:"virtualbox",manufacturer:"x86-64", extension :"vdi", modes:["factory"]}, // only available for factory
 "x86-64-vmware":{id:"x86-64",name:"vmware",manufacturer:"x86-64", extension :"vmdk", modes:["factory"]}, // only available for factory
 "zbt-wg3526":{id: "zbt-wg3526",name: "ZBT-WG3526",manufacturer:"zbt", modes:["factory"]}, // only available for factory

},

name: "Dortmund",


url: "http://images.ffdo.de/ffdo_ng/domaenen/{{parse(downloadableSite).id}}/releases/{{parse(downloadableSite).version}}/images/{{selectedMode}}/gluon-ffdo-{{parse(downloadableSite).short}}-" +
"{{parse(downloadableSite).version}}-{{parse(selectedRouter).id}}{{selectedMode=='sysupgrade'?'-sysupgrade':''}}"
}
