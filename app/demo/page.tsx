'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Create modern custom marker icon
const createModernMarkerIcon = (color: string = '#09BC8A') => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16C0 24.837 16 40 16 40C16 40 32 24.837 32 16C32 7.163 24.837 0 16 0Z" fill="${color}"/>
        <path d="M16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9Z" fill="white"/>
      </svg>
    `,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
  })
}

// Dynamically import MapContainer to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false })

interface PackagePoint {
  id: number
  name: string
  address: string
  postalCode: string
  city: string
  lat?: number
  lng?: number
}

// Package points data
const PACKAGE_POINTS_DATA = [
  { name: 't Tabakje', address: 'Zwaanshals 420, Rotterdam, 3035KT, The Netherlands' },
  { name: '153A', address: 'Oostzeedijk Beneden 153A, Rotterdam, 3061VR, The Netherlands' },
  { name: '2CV4U', address: 'Winselingseweg 16, unit 20, Nijmegen, 6541AK, The Netherlands' },
  { name: '50/50 Budgetstore Middenweg', address: 'Middenweg 14, Amsterdam, 1097BM, The Netherlands' },
  { name: 'ADT Computers', address: 'Rijksstraatweg 133a, Leersum, 3956CL, The Netherlands' },
  { name: 'Akkon Sleep', address: 'Willemsweg 147, 6531 DG Nijmegen 147, Nijmegen, 6531DB, The Netherlands' },
  { name: 'Allekanten', address: 'Speelzijde 8, Den Haag, 2543XZ, The Netherlands' },
  { name: 'Angeles Mode Odijk', address: 'De Meent 32H, Odijk, 3984JK, The Netherlands' },
  { name: 'Angeles Mode Wijk bij Duurstede', address: 'Kostverlorenpad 1A, Wijk bij Duurstede, 3961CJ, The Netherlands' },
  { name: 'Barefoot & More', address: 'Kleine Oord 86, Arnhem, 6811HZ, The Netherlands' },
  { name: 'Beter Verpakt', address: 'Rijksstraatweg 62, Elst, 3921KA, The Netherlands' },
  { name: 'Bij Dani', address: 'Schoolstraat 104, Voorschoten, 2251BK, The Netherlands' },
  { name: 'Bij Lotte', address: 'Van Harenstraat 49, Wolvega, 8471JC, The Netherlands' },
  { name: 'BijBri', address: 'Herenstraat 132, Voorburg, 2271CL, The Netherlands' },
  { name: 'Bloemen Bij Joey', address: 'Eilandplein 500, Duiven, 6922ER, The Netherlands' },
  { name: 'BLOOM', address: 'De Brinken 4, Haren, 9752BW, The Netherlands' },
  { name: 'Boekhandel De Kler', address: 'Spoorhaag 144, Houten, 3995DV, The Netherlands' },
  { name: 'Boetiek', address: 'Zuidsingel 70, Amersfoort, 3811HD, The Netherlands' },
  { name: 'Books 4 Life Groningen', address: 'Dierenriemstraat 202, Groningen, 9742AM, The Netherlands' },
  { name: 'BOTMA & van BENNEKOM', address: 'Sonsbeeksingel 96, Arnhem, 6822EM, The Netherlands' },
  { name: 'BP bij de Weg', address: 'Twibaksdyk 6, Bolsward, 8701PP, The Netherlands' },
  { name: "Brouwer heeft 't", address: 'Dorpsstraat 149-155, Lunteren, 6741AE, The Netherlands' },
  { name: 'Bruna Amsterdam CS', address: 'De Ruijterkade 42C, Amsterdam, 1012AA, The Netherlands' },
  { name: 'Bruna Baarn', address: 'Laanstraat 32, Baarn, 3743BG, The Netherlands' },
  { name: 'Bruna Barneveld', address: 'Jan van Schaffelaarstraat 20A, Barneveld, 3771BT, The Netherlands' },
  { name: 'Bruna Beunk', address: 'Vijf Meiplein 176-178, Leiden, 2321BT, The Netherlands' },
  { name: 'Bruna Bijlmer Arena', address: 'Johan Cruijff Boulevard 610, Amsterdam, 1101DS, The Netherlands' },
  { name: 'Bruna Emmeloord', address: 'Lange Nering 48, Emmeloord, 8302ED, The Netherlands' },
  { name: 'Bruna Peppelweg', address: 'Peppelweg 88A, Rotterdam, 3053GP, The Netherlands' },
  { name: 'Bruna Poolsterstraat', address: 'Poolsterstraat 107, Rotterdam, 3067LX, The Netherlands' },
  { name: 'Bruna Utrecht CS', address: 'Stationshal 5, Utrecht, 3511CB, The Netherlands' },
  { name: 'Bruna Voorthuizen', address: 'Van Den Berglaan 2a-b, Voorthuizen, 3781GG, The Netherlands' },
  { name: 'Bruna Wassenaar', address: 'Van Hogendorpstraat 135, Wassenaar, 2242PE, The Netherlands' },
  { name: 'Bruna Zeist', address: 'Slotlaan 197, Zeist, 3701GD, The Netherlands' },
  { name: 'Brute Bonen', address: 'Zodiakplein 90, Den Haag, 2516CD, The Netherlands' },
  { name: "Buurthuis NuDe Toekomst", address: 'Mennonietenweg 15A, Wageningen, 6702AB, The Netherlands' },
  { name: 'Cadeaus & Meer', address: 'Amsterdamsestraatweg 275, Utrecht, 3551CE, The Netherlands' },
  { name: 'Calipage ELS Office', address: 'Stationsstraat 60, Oosterwolde, 8431EV, The Netherlands' },
  { name: 'Camping Vrijhaven', address: 'De Burd 25A, Heeg, 8621JX, The Netherlands' },
  { name: 'Caparis Drachten', address: 'Ampèrelaan 2, Drachten, 9207AM, The Netherlands' },
  { name: 'Caparis Heerenveen', address: 'Industrieweg 13, Heerenveen, 8944AS, The Netherlands' },
  { name: 'Caparis Leeuwarden', address: 'Orionweg 2, Leeuwarden, 8938AH, The Netherlands' },
  { name: 'Casa Sofia', address: 'Louwesweg 6G, Amsterdam, 1066EC, The Netherlands' },
  { name: 'CIGO Brouwer', address: 'Burgemeester de Vlugtlaan 178, Amsterdam, 1063BS, The Netherlands' },
  { name: 'CIGO Vinkhuizen', address: 'Siersteenlaan 440, Groningen, 9743ES, The Netherlands' },
  { name: 'Craf10', address: 'Buitenbulkweg 10, Tiel, 4005LA, The Netherlands' },
  { name: 'De Bloemenhoek', address: 'Dorpsplein 41, Westervoort, 6931CZ, The Netherlands' },
  { name: 'De Boekenkamer', address: 'Wesselseweg 178/2, Kootwijkerbroek, 3774RM, The Netherlands' },
  { name: 'De Boem Kringloopwinkel Ziederij', address: 'Ziederij 6, Amstelveen, 1185ZD, The Netherlands' },
  { name: 'De Bruin & Stacey Living', address: 'Gasthuisstraat 22, Venlo, 5911JK, The Netherlands' },
  { name: 'De Gieterij', address: 'Junusstraat 16, Wageningen, 6701AX, The Netherlands' },
  { name: 'De Gouden Schaar', address: 'Churchillweg 34-A, Wageningen, 6706AB, The Netherlands' },
  { name: 'De Jong Toys2Play (Novy)', address: 'Hoofdstraat West 8, Noordwolde, 8391AN, The Netherlands' },
  { name: 'De Leest Schoenmakerij', address: 'Loowaard 32, Amsterdam, 1082LB, The Netherlands' },
  { name: 'De Lokatie Buikslotermeerplein', address: 'Buikslotermeerplein 2-10, Amsterdam, 1025EV, The Netherlands' },
  { name: 'De Lokatie Distelweg', address: 'Distelweg 85, Amsterdam, 1031HD, The Netherlands' },
  { name: 'De Lokatie Oost', address: 'Eerste Oosterparkstraat 236, Amsterdam, 1091HM, The Netherlands' },
  { name: 'De Meevaart', address: 'Balistraat 48a, Amsterdam, 1094JN, The Netherlands' },
  { name: 'De Nieuwe Weg', address: 'Nieuweweg 5, Groningen, 9711TA, The Netherlands' },
  { name: 'De Passant', address: 'Kerkstraat 23, Tegelen, 5931NL, The Netherlands' },
  { name: 'De Snipel', address: 'Grote Breedstraat 31, Dokkum, 9101KH, The Netherlands' },
  { name: 'Decokay van Slooten', address: 'Hamersveldseweg 22, Leusden, 3833GP, The Netherlands' },
  { name: 'Den Elzen Schoenmode By Syl', address: 'Van Diepeningenlaan 108, Leiderdorp, 2352KA, The Netherlands' },
  { name: 'Dierenspeciaalzaak De IJsbeer', address: 'Het Slot 2, Bunnik, 3981KC, The Netherlands' },
  { name: 'Dierenspeciaalzaak Voorschoten', address: 'Planciusplantsoen 24, Voorschoten, 2253TS, The Netherlands' },
  { name: 'Dierplaza Maxime', address: 'Cruquius 41, Amersfoort, 3825MJ, The Netherlands' },
  { name: 'Drogistotheek De Duffelt', address: 'Waterstraat 11A, Beek-Ubbergen, 6573BL, The Netherlands' },
  { name: 'Droppie', address: 'Van Limburg Stirumplein 1, Amsterdam, 1051BD, The Netherlands' },
  { name: 'Dutchcell', address: 'Bergse Dorpsstraat 106, Rotterdam, 3054GG, The Netherlands' },
  { name: "Elbertsen's Warenhuis Wekerom", address: 'Edeseweg 156, Wekerom, 6733AJ, The Netherlands' },
  { name: 'Empatec Sneek', address: 'Tingietersstraat 1, Sneek, 8601WJ, The Netherlands' },
  { name: 'Energiehuiskamer', address: 'Pieter Stastokerf 30, Amersfoort, 3813PR, The Netherlands' },
  { name: 'Estafette recyclewinkel Burgum', address: 'Meester W.M. Oppedijk van Veenweg 3, Burgum, 9251GA, The Netherlands' },
  { name: 'Estafette recyclewinkel Franeker', address: 'Zuidelijke Industrieweg 1, Franeker, 8801JB, The Netherlands' },
  { name: 'Estafette recyclewinkel Harlingen', address: 'Industrieweg 12, Harlingen, 8861VH, The Netherlands' },
  { name: 'Estafette recyclewinkel Leeuwarden', address: 'Voltastraat 11, Leeuwarden, 8912AE, The Netherlands' },
  { name: 'Estafette recyclewinkel Oosterwolde', address: 'Venekoterweg 21, Oosterwolde, 8431HG, The Netherlands' },
  { name: 'Estafette recyclewinkel Sint Annaparochie', address: 'Dordtse Straat 1, Sint Annaparochie, 9076CL, The Netherlands' },
  { name: 'Estafette recyclewinkel Sneek', address: 'Akkerwinde 1, Sneek, 8607CC, The Netherlands' },
  { name: 'Eurowinkel', address: 'Oranjelaan 73, Driebergen-Rijsenburg, 3971HE, The Netherlands' },
  { name: 'Evers Janssen Tweewielers', address: 'Kanunnik van Osstraat 2A, 6525 TX Nijmegen 2A, Nijmegen, 6525TX, The Netherlands' },
  { name: 'Fair and Share', address: 'Geerstraat 21, Kampen, 8261HL, The Netherlands' },
  { name: 'Flexi-shop', address: 'Havenstraat 26, Erica, 7887BP, The Netherlands' },
  { name: 'Fotoservice Drachten', address: 'Noorderbuurt 33, Drachten, 9203AL, The Netherlands' },
  { name: 'Gebruikte schoolboeken', address: 'Dorpsstraat 83, Renkum, 6871AE, The Netherlands' },
  { name: 'Grand Prix Copyrette', address: 'Parnassusweg 214, Amsterdam, 1076AV, The Netherlands' },
  { name: 'GSM Walhalla', address: 'Kon. Julianaplein 18, Voorburg, 2273BR, The Netherlands' },
  { name: 'H!PP Tweedehandskleding', address: 'Grotestraat 66, Ede, 6711AN, The Netherlands' },
  { name: 'HdV Computers', address: 'Beurtschip 5, Heerenveen, 8447CL, The Netherlands' },
  { name: 'HenC Computers', address: 'Noordewierweg 176, Amersfoort, 3812DP, The Netherlands' },
  { name: 'Het Circulaire Ambachtscentrum', address: 'De Star 17a, Leidschendam, 2266NA, The Netherlands' },
  { name: 'Het Goed Assen', address: 'Blokmakerstraat 4, Assen, 9403VD, The Netherlands' },
  { name: 'Het Goed Emmen', address: 'Kapitein Grantstraat 24, Emmen, 7821AR, The Netherlands' },
  { name: 'Het Lokaal', address: 'Oliemolenhof 20, Amersfoort, 3812PB, The Netherlands' },
  { name: 'Hippe Kringloop', address: 'Brunelstraat 77, Assen, 9404KB, The Netherlands' },
  { name: "Huis van de Wijk - 't Klooster", address: 'Afrikaanderplein 7, Rotterdam, 3072EA, The Netherlands' },
  { name: 'Huis van de Wijk - de Banier', address: 'Banierstraat 1, Rotterdam, 3032PA, The Netherlands' },
  { name: 'Huis van de Wijk - de Brink', address: 'Dreef 71, Rotterdam, 3075HA, The Netherlands' },
  { name: 'Huis van de Wijk - de Propeller', address: 'Jacob Loisstraat 18, Rotterdam, 3033RD, The Netherlands' },
  { name: 'Huis van de Wijk - Feijenoord', address: 'Persoonsdam 142, Rotterdam, 3071EE, The Netherlands' },
  { name: 'Huis van de Wijk - Grote Hagen', address: 'Grote Hagen 92, Rotterdam, 3078RC, The Netherlands' },
  { name: 'Huis van de Wijk - Irene', address: 'Oudelandstraat 75, Rotterdam, 3073LJ, The Netherlands' },
  { name: 'Huis van de Wijk - Lombardijen', address: 'Menanderstraat 89/90, Rotterdam, 3076AG, The Netherlands' },
  { name: 'Huis van de Wijk - Mozaiek', address: 'Schommelstraat 69, Rotterdam, 3035CG, The Netherlands' },
  { name: 'I Scream Coffee', address: 'Nieuwstraat 13-15, Leiden, 2312KA, The Netherlands' },
  { name: 'Infopunt Duurzaam Doen', address: 'Kerkstraat 4, Steenwijk, 8331JC, The Netherlands' },
  { name: 'It Nifelhoekje', address: 'Súd 83, Workum, 8711CT, The Netherlands' },
  { name: "Jennies Tafel", address: 'Jousterkade 2, Sneek, 8601BN, The Netherlands' },
  { name: 'Jofel', address: 'Zonneplein 11, Amsterdam, 1033EJ, The Netherlands' },
  { name: 'Joline Jolink', address: 'Nieuwe Binnenweg 82, Rotterdam, 3015BC, The Netherlands' },
  { name: 'Kantoorvakhandel Dapper', address: 'Julianalaan 36, Bilthoven, 3722GR, The Netherlands' },
  { name: 'Kathmandu Amsterdam', address: 'Haarlemmerstraat 123, Amsterdam, 1013EN, The Netherlands' },
  { name: 'Kathmandu Utrecht', address: 'Oudegracht 260, Utrecht, 3511NV, The Netherlands' },
  { name: 'KIEM Lokaal', address: 'Wachterliedplantsoen 1, Amsterdam, 1055SB, The Netherlands' },
  { name: 'Kinderboerderij Hagerhof', address: 'Hagerlei 1, Venlo, 5912PP, The Netherlands' },
  { name: 'Kinderboerderij Wezenlanden', address: 'Almelose Kanaal 33, Zwolle, 8012BX, The Netherlands' },
  { name: 'KlusWijs', address: 'Vierhuisterweg 7, Surhuisterveen, 9231AR, The Netherlands' },
  { name: 'KOKOTOKO', address: 'Oosterstraat 26, Groningen, 9711NV, The Netherlands' },
  { name: 'Kringloop Bonnefooi', address: 'Oudedijk 94, Rotterdam, 3061AM, The Netherlands' },
  { name: 'Kringloop de ARM Hoograven', address: 'Verlengde Hoogravenseweg 63, Utrecht, 3525BB, The Netherlands' },
  { name: 'Kringloop Den Haag Hengelolaan', address: 'Hengelolaan 423, Den Haag, 2545JN, The Netherlands' },
  { name: 'Kringloop Den Haag Oude Haagweg', address: 'Oude Haagweg 30, Den Haag, 2552EP, The Netherlands' },
  { name: 'Kringloop Den Haag Weimarstraat', address: 'Weimarstraat 81, Den Haag, 2562GS, The Netherlands' },
  { name: 'Kringloop Het Warenhuis', address: 'Willem Barentszstraat 12, Leiden, 2315TX, The Netherlands' },
  { name: 'Kringloop HowBazar', address: 'Kosmonaut 13, Amersfoort, 3824MK, The Netherlands' },
  { name: 'Kringloop Red een Kind', address: 'Zambonistraat 4c, Kampen, 8263CE, The Netherlands' },
  { name: 'Kringloopwinkel Steenwijk', address: 'Boterweg 5, Tuk, 8334NS, The Netherlands' },
  { name: 'Kringloopwinkel Vollenhove', address: 'De Kampen 3, Vollenhove, 8325DD, The Netherlands' },
  { name: 'Kussens op maat', address: 'Timmerwerf 2, Kollum, 9291EH, The Netherlands' },
  { name: 'Lab Lou', address: 'Weteringlaan 1, De Bilt, 3732HZ, The Netherlands' },
  { name: 'Landwinkel De Lindeboom', address: "Beusichemseweg 22, 't Goy, 3997MJ, The Netherlands" },
  { name: 'LENA Library De Jordaan', address: 'Westerstraat 174, Amsterdam, 1015LB, The Netherlands' },
  { name: 'LENA Library De Pijp', address: 'Daniël Stalpertstraat 76H, Amsterdam, 1072XK, The Netherlands' },
  { name: 'Leonie Roeffen Meubelstyling', address: 'Konijnenwal 2, Tiel, 4001HC, The Netherlands' },
  { name: 'Little Department Store', address: 'Kleiweg 97A, Rotterdam, 3051GK, The Netherlands' },
  { name: "Livi's", address: 'Dorpsstraat 41, Groesbeek, 6561CA, The Netherlands' },
  { name: "Machiel's Schoenmakerij en Sleutelservice", address: 'Langewal 4A, Gorredijk, 8401DD, The Netherlands' },
  { name: "Marian's Hobbyshop", address: 'Dorpsstraat 8, Bennekom, 6721JK, The Netherlands' },
  { name: 'Marskramer Emmer-Compascuum', address: 'Runde Zuidzijde 113, Emmer-Compascuum, 7881HR, The Netherlands' },
  { name: "Maxima's", address: 'Máximaplein 7, Leusden, 3832JS, The Netherlands' },
  { name: 'Meneer & Mevrouw Hoekstra', address: 'Langebuorren 29, Stiens, 9051BE, The Netherlands' },
  { name: 'Multaparts Veenendaal', address: 'Verlaat 9, Veenendaal, 3901RD, The Netherlands' },
  { name: 'Museon-Omniversum', address: 'Stadhouderslaan 37, Den Haag, 2517HV, The Netherlands' },
  { name: 'Naaiatelier Nieuw-West', address: 'Paul Krugerstraat 62, Nijmegen, 6543MZ, The Netherlands' },
  { name: 'Natuurboerderij De Brinkhorst', address: 'Wageningseberg 43, Amersfoort, 3825GR, The Netherlands' },
  { name: 'Natuurstad - de Beestenboel', address: 'Zandweg 13, Rozenburg, 3181HX, The Netherlands' },
  { name: 'Natuurstad - de Blijde Wei', address: 'Bergse Linker Rottekade 435, Rotterdam, 3069LV, The Netherlands' },
  { name: 'Natuurstad - de Bokkesprong', address: 'Tjalklaan 90, Rotterdam, 3028JK, The Netherlands' },
  { name: 'Natuurstad - de Kooi', address: 'Maeterlinckweg 85, Rotterdam, 3076GA, The Netherlands' },
  { name: 'Natuurstad - de Kraal', address: 'Langepad 60, Rotterdam, 3062CJ, The Netherlands' },
  { name: 'Natuurstad - de Molenwei', address: 'Brammertstraat 10, Rotterdam, 3084RV, The Netherlands' },
  { name: 'Natuurstad - de Oedenstee', address: 'Marthalaan 46, Hoogvliet Rotterdam, 3194EH, The Netherlands' },
  { name: 'Natuurstad - de Wilgenhof', address: 'Ringdijk 76, Rotterdam, 3054KV, The Netherlands' },
  { name: 'Nieuw Mos', address: 'Leusderweg 21/27, Amersfoort, 3811NK, The Netherlands' },
  { name: 'Onderdelenshop De Bilt', address: 'Hessenweg 164, De Bilt, 3731JN, The Netherlands' },
  { name: 'Party&More', address: 'Noarder Stasjonsstrjitte 40b, De Westereen, 9271CK, The Netherlands' },
  { name: 'pipoos Amsterdam West', address: 'Jan Pieter Heijestraat 182-184, Amsterdam, 1054MN, The Netherlands' },
  { name: 'Polly', address: 'Oudestraat 21, Assen, 9401EH, The Netherlands' },
  { name: 'Pooja Super Store', address: '1e Graaf van Loonstraat 1E, Venlo, 5921JA, The Netherlands' },
  { name: 'Primera Duiven', address: 'Elshofpassage 42, Duiven, 6921BB, The Netherlands' },
  { name: 'Primera Passewaay', address: 'Kamperfoelie 16, Tiel, 4007TL, The Netherlands' },
  { name: 'Primera Ron Wolf', address: 'Dommer van Poldersveldtweg 271, Nijmegen, 6523CW, The Netherlands' },
  { name: 'Primera Stationskwartier', address: 'De Arend 7, Kampen, 8265NK, The Netherlands' },
  { name: 'Primera Weesp', address: 'Amstellandlaan 12, Weesp, 1382AX, The Netherlands' },
  { name: 'Punt Uit E-Fulfilment', address: 'Nieuw Amsterdamsestraat 40, Emmen, 7814VA, The Netherlands' },
  { name: 'Qeees', address: 'Branderweg 1D, Zwolle, 8042PD, The Netherlands' },
  { name: 'Re-Cycled ICT', address: 'Zwanenveld 9020, Nijmegen, 6538SB, The Netherlands' },
  { name: 'Regverdig', address: 'Over de Kelders 2, Leeuwarden, 8911JE, The Netherlands' },
  { name: 'ReShare Store Rotterdam', address: 'Korte Hoogstraat 11-13, Rotterdam, 3011GJ, The Netherlands' },
  { name: 'Restore Ede', address: 'Hoefweg 2, Ede, 6717LS, The Netherlands' },
  { name: 'Restore Veenendaal', address: 'Groeneveldselaan 14, Veenendaal, 3903AZ, The Netherlands' },
  { name: 'Romofashion', address: 'Hoofdstraat 22, Oldemarkt, 8375AP, The Netherlands' },
  { name: 'rotterzwam', address: 'Schiehaven 26, Rotterdam, 3024EC, The Netherlands' },
  { name: 'RoZus Bloemen en planten', address: 'Runneboom 14, Warnsveld, 7232CW, The Netherlands' },
  { name: 'RUDEBO', address: 'It Gruthof 2c, Makkum, 8754GZ, The Netherlands' },
  { name: 'Shop in Shop Vleuten', address: 'Hindersteinlaan 15, Utrecht, 3451EV, The Netherlands' },
  { name: 'Skyway Communication', address: 'Nieuwe Binnenweg 319-A, Rotterdam, 3021GH, The Netherlands' },
  { name: 'SoMuch Fashion', address: 'Wettertoer 17, Heerenveen, 8442PC, The Netherlands' },
  { name: 'Sportcentrum Valkenhuizen', address: 'Beukenlaan 15, Arnhem, 6823MA, The Netherlands' },
  { name: 'Stadsboerderij Herweijerhoeve', address: 'Anna Polakweg 7, Den Haag, 2533SW, The Netherlands' },
  { name: 'Stadsboerderij Landzigt', address: 'Aristoteleslaan 143, Den Haag, 2493ZN, The Netherlands' },
  { name: 'Stadsboerderij Molenweide', address: 'Stuwstraat 31, Den Haag, 2516TA, The Netherlands' },
  { name: 'Stadsboerderij Op den Dijk', address: 'Bovendijk 141 - 143, Den Haag, 2548AX, The Netherlands' },
  { name: 'Stadshart Amstelveen', address: 'Rembrandtweg 41a, Amstelveen, 1181GE, The Netherlands' },
  { name: 'Steck Utrecht', address: 'Gageldijk 3, Utrecht, 3566ME, The Netherlands' },
  { name: 'Stichting Kringloop Zwolle Ceintuurbaan', address: 'Ceintuurbaan 48, Zwolle, 8024AA, The Netherlands' },
  { name: 'Stichting Kringloop Zwolle Nieuwe Deventerweg', address: 'Nieuwe Deventerweg 6, Zwolle, 8014AG, The Netherlands' },
  { name: 'Stichting Kringloop Zwolle Nieuwe Veerallee', address: 'Nieuwe Veerallee 12, Zwolle, 8019AG, The Netherlands' },
  { name: 'Stichting Welkom', address: 'Nijverheidsweg 17, IJsselstein, 3401MC, The Netherlands' },
  { name: 'Studenten Bikeshop', address: 'Karrengas 26, Nijmegen, 6511GS, The Netherlands' },
  { name: 'Swan Market', address: 'Witte de Withstraat 23A, Rotterdam, 3012BL, The Netherlands' },
  { name: 'Taartdecoratief', address: 'Tuinstraat 75, Veenendaal, 3901RA, The Netherlands' },
  { name: 'Tabak & ToGo', address: 'Vierambachtsstraat 3, Rotterdam, 3022AA, The Netherlands' },
  { name: 'Tabakshop Java', address: 'Javastraat 77, Amsterdam, 1094HB, The Netherlands' },
  { name: 'Tabakshop Rex', address: 'Dapperstraat 9, Amsterdam, 1093AG, The Netherlands' },
  { name: 'Taxi Don', address: 'Raaigras 91, Leeuwarden, 8935EX, The Netherlands' },
  { name: 'Telefoon Reparatie Ede', address: 'Bellestein 15, Ede, 6714DP, The Netherlands' },
  { name: "Tessa's Dierenspeciaalzaak", address: 'Dorpsstraat 151, Scherpenzeel, 3925KA, The Netherlands' },
  { name: 'The New Farm', address: 'Televisiestraat 2, Den Haag, 2525KD, The Netherlands' },
  { name: 'The Point Koperwiek', address: 'Koperwiek 47, Capelle aan den IJssel, 2903AD, The Netherlands' },
  { name: 'The Point Nieuwegein', address: 'Plein 12a, Nieuwegein, 3431LV, The Netherlands' },
  { name: 'The Read Shop Castellum', address: 'Cardo 19, Houten, 3995XJ, The Netherlands' },
  { name: 'The Read Shop Oude Dorp', address: 'Plein 11, Houten, 3991DK, The Netherlands' },
  { name: 'Tijdschriftenhandel De Berkel', address: 'Groenmarkt 4, Zutphen, 7201HX, The Netherlands' },
  { name: 'Toffe Zaken', address: 'Gedempte Haven 22, Grou, 9001AX, The Netherlands' },
  { name: 'Top1Toys Burgum', address: 'Schoolstraat 64, Burgum, 9251ED, The Netherlands' },
  { name: 'Ugarit minimarket', address: 'Verlengde Hereweg 76-1, Groningen, 9722AG, The Netherlands' },
  { name: 'ViaTim & Betsy', address: 'Meerlandpad 8, Arnhem, 6835BV, The Netherlands' },
  { name: 'ViaTim en A&B', address: 'Gansstraat 106, Utrecht, 3582EL, The Netherlands' },
  { name: 'ViaTim en Dees', address: 'Maaspad 3, Nieuwegein, 3433BL, The Netherlands' },
  { name: 'ViaTim en Ester', address: 'Uilenhorst 3, Leiden, 2317ZS, The Netherlands' },
  { name: 'ViaTim en Henk', address: 'Kapelstraat 62, Arnhem, 6822AW, The Netherlands' },
  { name: 'ViaTim Hoofdkantoor', address: 'Vlaardingweg 62, Rotterdam, 3044CK, The Netherlands' },
  { name: 'ViaTim XL Parcelshop', address: 'Vasteland 27, Rotterdam, 3011BJ, The Netherlands' },
  { name: 'Vondst', address: 'Arent Krijtsstraat 14, Diemen, 1111AG, The Netherlands' },
  { name: 'W70.Club', address: 'Weena 70, Rotterdam, 3012CM, The Netherlands' },
  { name: 'Walhalla', address: 'Nieuwe Ebbingestraat 38, Groningen, 9712NL, The Netherlands' },
  { name: 'WearWear', address: 'Mondriaanplein 20, Emmen, 7811DH, The Netherlands' },
  { name: 'Westfield Mall of the Netherlands', address: 'Eglantier 1C, Leidschendam, 2262AP, The Netherlands' },
  { name: 'What2Wear bij Gea', address: 'Dorpsstraat 47, Woudenberg, 3931EE, The Netherlands' },
  { name: 'Wieleroutfits Ouderkerk aan de Amstel', address: 'Hoger Einde-Zuid 13, Ouderkerk aan de Amstel, 1191AG, The Netherlands' },
  { name: 'Wijkcentrum Binnenbos', address: 'Hoog Kanje 168H, Zeist, 3708DL, The Netherlands' },
  { name: 'Wijkcentrum de Groene Stee', address: 'Wiekslag 92, Amersfoort, 3815GS, The Netherlands' },
  { name: 'Winkel Van Waarde', address: 'Eiland 8, Zwolle, 8011XR, The Netherlands' },
  { name: 'Winkeltje van Madame', address: 'Weverstraat 5, Oosterbeek, 6862DJ, The Netherlands' },
  { name: 'Wouter Reclame', address: 'Kazemat 10, Veenendaal, 3905NR, The Netherlands' },
  { name: 'You Mobile', address: 'Augustijnenstraat 17, Nijmegen, 6511KD, The Netherlands' },
  { name: 'Zie Je Zo', address: 'Frederik van de Paltshof 36, Rhenen, 3911LB, The Netherlands' },
  { name: 'Zorgwinkel Millingen', address: 'Burgemeester Eijckelhofstraat 1A, Millingen aan de Rijn, 6566AR, The Netherlands' },
]

export default function DemoPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPoint, setSelectedPoint] = useState<PackagePoint | null>(null)
  const [geocodedPoints, setGeocodedPoints] = useState<Map<number, { lat: number; lng: number }>>(new Map())
  const geocodingInProgress = useRef(false)

  const updateGeocodedPoints = (id: number, coords: { lat: number; lng: number }) => {
    setGeocodedPoints(prev => {
      if (prev.has(id)) return prev
      const next = new Map(prev)
      next.set(id, coords)

      if (typeof window !== 'undefined') {
        const serialized = Object.fromEntries(next)
        window.localStorage.setItem('packagePointsGeocoded', JSON.stringify(serialized))
      }

      return next
    })
  }

  // Convert data to package points
  const packagePoints: PackagePoint[] = useMemo(() => {
    return PACKAGE_POINTS_DATA.map((point, index) => {
      const addressParts = point.address.split(', ')
      const postalCode = addressParts.find((part: string) => /\d{4}[A-Z]{2}/.test(part)) || ''
      const cityIndex = addressParts.length - 3
      const city = addressParts[cityIndex] || ''
      
      const id = index + 1
      const geoData = geocodedPoints.get(id)
      
      return {
        id,
        name: point.name,
        address: point.address,
        postalCode,
        city,
        lat: geoData?.lat,
        lng: geoData?.lng,
      }
    })
  }, [geocodedPoints])

  // Geocode addresses using Nominatim (free, no API key needed)
  useEffect(() => {
    if (geocodingInProgress.current) return

    const loadStoredGeocodes = () => {
      if (typeof window === 'undefined') return new Map<number, { lat: number; lng: number }>()
      try {
        const stored = window.localStorage.getItem('packagePointsGeocoded')
        if (!stored) return new Map()
        const parsed = JSON.parse(stored) as Record<string, { lat: number; lng: number }>
        return new Map<number, { lat: number; lng: number }>(
          Object.entries(parsed).map(([id, coords]) => [Number(id), coords])
        )
      } catch (error) {
        console.warn('Kon opgeslagen geocodes niet laden:', error)
        return new Map()
      }
    }

    const storedPoints = loadStoredGeocodes()
    if (storedPoints.size > 0) {
      setGeocodedPoints(storedPoints)
    }

    const MAX_POINTS_TO_GEOCODE = 120
    const alreadyGeocodedIds = new Set(storedPoints.keys())
    const pointsToGeocode = PACKAGE_POINTS_DATA.slice(0, MAX_POINTS_TO_GEOCODE)
      .map((point, index) => ({ point, id: index + 1 }))
      .filter(({ id }) => !alreadyGeocodedIds.has(id))

    if (pointsToGeocode.length === 0) {
      return
    }

    geocodingInProgress.current = true

    const geocodeBatch = async (batch: { point: typeof PACKAGE_POINTS_DATA[number]; id: number }[]) => {
      await Promise.all(batch.map(async ({ point, id }) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(point.address)}&limit=1&addressdetails=0`,
            {
              headers: {
                'User-Agent': 'Circular Shipping Company Map'
              }
            }
          )

          if (!response.ok) return

          const data = await response.json()
          if (Array.isArray(data) && data.length > 0) {
            updateGeocodedPoints(id, {
              lat: parseFloat(data[0].lat),
              lng: parseFloat(data[0].lon)
            })
          }
        } catch (error) {
          console.error(`Geocoding failed for ${point.name}:`, error)
        }
      }))
    }

    const runGeocoding = async () => {
      const CONCURRENCY = 8
      const BATCH_DELAY = 500 // ms

      for (let i = 0; i < pointsToGeocode.length; i += CONCURRENCY) {
        const batch = pointsToGeocode.slice(i, i + CONCURRENCY)
        await geocodeBatch(batch)
        if (i + CONCURRENCY < pointsToGeocode.length) {
          await new Promise(resolve => setTimeout(resolve, BATCH_DELAY))
        }
      }

      geocodingInProgress.current = false
    }

    runGeocoding()
  }, [])

  // Filter package points based on search query
  const filteredPackagePoints = packagePoints.filter(point =>
    point.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    point.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    point.postalCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    point.city.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Calculate center of map based on visible points
  const mapCenter = useMemo<[number, number]>(() => {
    const pointsWithCoords = filteredPackagePoints.filter(p => p.lat && p.lng)
    if (pointsWithCoords.length === 0) return [52.1326, 5.2913] // Center of Netherlands
    
    const avgLat = pointsWithCoords.reduce((sum, p) => sum + (p.lat || 0), 0) / pointsWithCoords.length
    const avgLng = pointsWithCoords.reduce((sum, p) => sum + (p.lng || 0), 0) / pointsWithCoords.length
    
    return [avgLat, avgLng] as [number, number]
  }, [filteredPackagePoints])

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <svg className="w-9 h-11" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C7.163 0 0 7.163 0 16C0 24.837 16 40 16 40C16 40 32 24.837 32 16C32 7.163 24.837 0 16 0Z" fill="#09BC8A" />
                <path d="M16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9Z" fill="white" />
              </svg>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-circular-dark tracking-tight">
              Vind je afleverpunt
            </h1>
            <p className="mt-2 text-gray-600">
              Zoek en vind het dichtstbijzijnde pakketpunt in jouw buurt
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <label className="sr-only" htmlFor="search">Zoeken</label>
                  <input
                    id="search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-circular-green focus:border-circular-green"
                    placeholder="Zoek op adres, postcode"
                  />
                </div>
                <div className="flex w-full sm:w-auto">
                  <button
                    onClick={() => {}} // handleSearch is not defined, so this button is removed
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-circular-green hover:bg-circular-dark-green rounded-full border border-circular-green transition duration-200"
                  >
                    Zoek
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden">
          <div className="flex flex-col-reverse lg:flex-row lg:h-[600px]">
            {/* Left Sidebar with Package Points */}
            <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-r border-gray-200 bg-white">
              <div className="p-6 max-h-72 overflow-y-auto lg:max-h-full">
                <h3 className="text-lg font-medium text-circular-dark mb-4">
                  Dichtstbijzijnde pakketpunten
                </h3>
                
                <div className="space-y-3">
                  {filteredPackagePoints.map((point) => (
                    <div
                      key={point.id}
                      onClick={() => setSelectedPoint(point)}
                      className={`border rounded-xl p-4 transition-colors cursor-pointer ${
                        selectedPoint?.id === point.id
                          ? 'border-circular-green bg-circular-light-green'
                          : 'border-gray-200 hover:border-circular-teal'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-circular-dark text-sm">{point.name}</h4>
                          <p className="text-xs text-gray-600 mt-1">{point.address}</p>
                          <p className="text-xs text-gray-600">{point.postalCode} {point.city}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="flex-1 relative h-[360px] lg:h-auto">
              <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                {typeof window !== 'undefined' && (
                  <MapContainer
                    center={selectedPoint && selectedPoint.lat && selectedPoint.lng 
                      ? [selectedPoint.lat, selectedPoint.lng] as [number, number]
                      : mapCenter}
                    zoom={selectedPoint && selectedPoint.lat && selectedPoint.lng ? 15 : 8}
                    style={{ height: '100%', width: '100%', zIndex: 1 }}
                    key={`${selectedPoint?.id || 'default'}-${mapCenter[0]}-${mapCenter[1]}`}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                      url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                      subdomains="abcd"
                    />
                    {filteredPackagePoints
                      .filter(point => point.lat && point.lng)
                      .map((point) => (
                        <Marker
                          key={point.id}
                          position={[point.lat!, point.lng!]}
                          icon={createModernMarkerIcon(selectedPoint?.id === point.id ? '#068864' : '#09BC8A')}
                          eventHandlers={{
                            click: () => setSelectedPoint(point),
                          }}
                        >
                          <Popup>
                            <div>
                              <h4 className="font-medium text-circular-dark">{point.name}</h4>
                              <p className="text-sm text-gray-600 mt-1">{point.address}</p>
                              <p className="text-sm text-gray-600">{point.postalCode} {point.city}</p>
                            </div>
                          </Popup>
                        </Marker>
                      ))}
                  </MapContainer>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
