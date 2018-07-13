# Shapes Verzeichnis

## Inhalt
In diesem Ordner liegen die geojson Datein. Diese Dateien beschreiben den Fläche über die sich eine Domäne erstreckt.
Neben den aktiven Domänen die auf der Karte dargestellt werden, befinden sich hier auch einige inaktive Flächendateien als Datensicherung für spätere Anpassungen.
Die geojson liegen in zwei Varianten vor:
 * eine 'hires' Variante
 * eine normale Variante
Die 'hires' Variante soll höher auflösend sein, ist aber dann auch größer. Wenn beide Dateien relativ klein sind, lohnt sich ein Ausdünnen der Daten eigentlich nicht.


Name                ID  Domäne                              Status    Ort(e)
------------------  --- ----------------------------------- --------  ---------------------
domaene01.geojson   d01 Dortmund                            inaktiv   Test und Dev Domäne
domaene02.geojson   d02 Dortmund                            inaktiv   Aussenbezike (der ganze Rest)
domaene03.geojson   d03 Dortmund Mitte-Nord                 aktiv     DO Innenstadt-Nord
domaene04.geojson   d04 Dortmund Mitte-Süd                  aktiv     DO Innenstadt-West, DO Innenstadt-Ost
domaene05.geojson   d05 Dortmund Nord                       aktiv     DO-Scharnhorst, DO-Brackel, DO-Lütgendortmund, DO-Mengede, DO-Huckrade, DO-Eving
domaene06.geojson   d06 Dortmund Süd                        aktiv     DO-Hombruch, DO-Hörde, DO-Applerbeck
domaene07.geojson   d07 Werne                               aktiv     Werne
domaene08.geojson   d08 Lünen                               aktiv     Lünen
domaene09.geojson   d09 Bergkamen, Kamen, Böne              aktiv     Bergkamen, Kamen, Böne
domaene10.geojson   d10 Unna                                aktiv     Unna
domaene11.geojson   d11 Schwerte, Holzwickede, Fröndenberg  aktiv     Schwerte, Holzwickede, Fröndenberg
domaene12.geojson       Holzwickede                         inaktiv
domaene13.geojson       Kamer                               inaktiv
domaene14.geojson       Schwerte                            inaktiv
domaene15.geojson       Unna                                inaktiv
domaene16.geojson       Hamm                                inaktiv
domaene112.geojson      Holzwickede                         inaktiv
domaene113.geojson      Kamen                               inaktiv
domaene114.geojson      Schwerte                            inaktiv
domaene115.geojson      Fröndenberg                         inaktiv
domaene116.geojson      Hamm                                inaktiv
domaene117.geojson      Bergkamen                           inaktiv
domaene118.geojson      Bönen                               inaktiv
domaene119.geojson   Dortmund
domaene120.geojson   Dortmund


## Hinweise und Tipps.

Um zwei oder mehrer Beszirke zusammenzuführen hat sich folgender Weg als passend erwiesen:
1. mit http://geojson.io ein eine FeatureCollection schaffen

2.  Vereinigung der Bezike:
http://mapshaper.org/

mapshaper -dissolve

Alle Einzel Bezirke in 
