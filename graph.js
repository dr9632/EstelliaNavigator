/**
 * Creating Graph class
**/

const INIT_VNUM = 0;

class Node {
	constructor(name)
	{
		this.name = name;
		this.adjList = [];
		this.distList = new Map();
	}

	addEdge(dest, dist)
	{
		this.adjList.push(dest);
		this.distList.set(dest, dist);
	}
}

class Graph {
	// Using adj list
	constructor(vNum)
	{
		if (vNum == null) this.vNum = INIT_VNUM;
		else this.vNum = vNum;

		this.nodeList = new Map();
	}

	// Pushing vertex v into the graph by init values w/ an array
	addNode(v)
	{
		this.nodeList.set(v, new Node(v));
	}

	// Adding edge between src to dest
	addEdge(src, dest, dist)
	{
		this.nodeList.get(src).addEdge(dest,dist);
		//this.adjList.get(dest).push(src);
	}
}



/**
 * Building the graph
 **/

// Full teleportable points : 39
const POINTS_NUM = 39;

var worldGraph = new Graph();
/**
 * '볼카니아', '누이트', '로오쉬', '헤그메타아', '루코메상트', '봉피상트', '시엘트하스', '포포',
 * '엘다라다', '네바그라니치티', '루베시', '자르마로스', '글루비나', '루시치', '스뷔센니', '쵸르니라비린스',
 * '코할레아', '리히트미아', '소넨', '다로자그베사', '드라흐가트', '빌들지엘', '시리빈', '플레만스트란트', 
 * '디뷔나멘테니아', '에스쿠도', '에스탄피아', '인페리오', '세크리티스타', '에스트라고니아', '플로알데아', 
 * '아다쉬아크', '아다쉬사미', '카사바트', '타브파르바트', '나그마웰', '니르바산', '빗살라', '힘세일'
 **/
var points = ['Volcania', 'Nuit', 'Roche', 'Hermetia', 'LueCommercante', 'VentPuissanct', 'CielTrace', 'Profond',
			  'Eldarada', 'Nevagraniciti', 'Luvesh', 'XarMaros', 'Gluvina', 'Lusich', 'Schviceni', 'ChornyLabrinth',
			  'Korallea', 'LichtMeer', 'Sonnen', 'DasRosaGewesser', 'DracheGrat', 'WirbelZiel', 'SeeLeben', 'FlimmernStrand', 
			  'Divinamentenia', 'Escudo', 'Estancia', 'Inferior', 'Sacretista', 'Estragonia', 'FlorAldea', 
			  'AkashAkh', 'Akashsami', 'Kasavat', 'TavParvat', 'NagmaWel', 'Nirvasan', 'Vedhshala', 'Himsail'];

for(let i = 0; i < POINTS_NUM; i++) {
	//let node = new Node(points[i]);
	worldGraph.addNode(points[i]);
}



/*******************************************
 *                   테네브레               *  
********************************************/
// 볼카니아
worldGraph.addEdge('Volcania' ,'Nuit', 0);
worldGraph.addEdge('Volcania' ,'Roche', 3);
worldGraph.addEdge('Volcania' ,'Hermetia', 2);
worldGraph.addEdge('Volcania' ,'LueCommercante', 3);
worldGraph.addEdge('Volcania' ,'VentPuissanct', 2);
worldGraph.addEdge('Volcania' ,'CielTrace', 3);
worldGraph.addEdge('Volcania' ,'Profond', 5);

worldGraph.addEdge('Volcania' ,'Eldarada', 5);
worldGraph.addEdge('Volcania' ,'Nevagraniciti', 7);
worldGraph.addEdge('Volcania' ,'Luvesh', 8);
worldGraph.addEdge('Volcania' ,'XarMaros', 6);
worldGraph.addEdge('Volcania' ,'Gluvina', 7);
worldGraph.addEdge('Volcania' ,'Lusich', 8);
worldGraph.addEdge('Volcania' ,'Schviceni', 7);
worldGraph.addEdge('Volcania' ,'ChornyLabrinth', 8);

worldGraph.addEdge('Volcania' ,'Korallea', 10);
worldGraph.addEdge('Volcania' ,'LichtMeer', 12);
worldGraph.addEdge('Volcania' ,'Sonnen', 12);
worldGraph.addEdge('Volcania' ,'DasRosaGewesser', 12);
worldGraph.addEdge('Volcania' ,'DracheGrat', 13);
worldGraph.addEdge('Volcania' ,'FlimmernStrand', 11);

worldGraph.addEdge('Volcania' ,'Divinamentenia', 15);
worldGraph.addEdge('Volcania' ,'Escudo', 17);
worldGraph.addEdge('Volcania' ,'Estancia', 17);
worldGraph.addEdge('Volcania' ,'Inferior', 15);
worldGraph.addEdge('Volcania' ,'Sacretista', 17);
worldGraph.addEdge('Volcania' ,'Estragonia', 20);
worldGraph.addEdge('Volcania' ,'FlorAldea', 17);

worldGraph.addEdge('Volcania' ,'AkashAkh', 15);
worldGraph.addEdge('Volcania' ,'Akashsami', 17);
worldGraph.addEdge('Volcania' ,'Kasavat', 18);
worldGraph.addEdge('Volcania' ,'TavParvat', 17);
worldGraph.addEdge('Volcania' ,'NagmaWel', 20);
worldGraph.addEdge('Volcania' ,'Nirvasan', 18);
worldGraph.addEdge('Volcania' ,'Vedhshala', 15);


// 누이트
worldGraph.addEdge('Nuit' ,'Volcania', 0);
worldGraph.addEdge('Nuit' ,'Roche', 2);
worldGraph.addEdge('Nuit' ,'Hermetia', 1);
worldGraph.addEdge('Nuit' ,'LueCommercante', 3);
worldGraph.addEdge('Nuit' ,'VentPuissanct', 0);
worldGraph.addEdge('Nuit' ,'CielTrace', 2);
worldGraph.addEdge('Nuit' ,'Profond', 5);

worldGraph.addEdge('Nuit' ,'Eldarada', 5);
worldGraph.addEdge('Nuit' ,'Nevagraniciti', 7);
worldGraph.addEdge('Nuit' ,'Luvesh', 8);
worldGraph.addEdge('Nuit' ,'XarMaros', 6);
worldGraph.addEdge('Nuit' ,'Gluvina', 7);
worldGraph.addEdge('Nuit' ,'Lusich', 8);
worldGraph.addEdge('Nuit' ,'Schviceni', 7);
worldGraph.addEdge('Nuit' ,'ChornyLabrinth', 8);

worldGraph.addEdge('Nuit' ,'Korallea', 10);
worldGraph.addEdge('Nuit' ,'LichtMeer', 12);
worldGraph.addEdge('Nuit' ,'Sonnen', 12);
worldGraph.addEdge('Nuit' ,'DasRosaGewesser', 12);
worldGraph.addEdge('Nuit' ,'DracheGrat', 13);
worldGraph.addEdge('Nuit' ,'FlimmernStrand', 11);

worldGraph.addEdge('Nuit' ,'Divinamentenia', 15);
worldGraph.addEdge('Nuit' ,'Escudo', 17);
worldGraph.addEdge('Nuit' ,'Estancia', 17);
worldGraph.addEdge('Nuit' ,'Inferior', 15);
worldGraph.addEdge('Nuit' ,'Sacretista', 17);
worldGraph.addEdge('Nuit' ,'Estragonia', 20);
worldGraph.addEdge('Nuit' ,'FlorAldea', 17);

worldGraph.addEdge('Nuit' ,'AkashAkh', 15);
worldGraph.addEdge('Nuit' ,'Akashsami', 17);
worldGraph.addEdge('Nuit' ,'Kasavat', 18);
worldGraph.addEdge('Nuit' ,'TavParvat', 17);
worldGraph.addEdge('Nuit' ,'NagmaWel', 20);
worldGraph.addEdge('Nuit' ,'Nirvasan', 18);
worldGraph.addEdge('Nuit' ,'Vedhshala', 15);


// 로오쉬
worldGraph.addEdge('Roche' ,'Volcania', 3);
worldGraph.addEdge('Roche' ,'Nuit', 2);
worldGraph.addEdge('Roche' ,'Hermetia', 0);
worldGraph.addEdge('Roche' ,'LueCommercante', 2);
worldGraph.addEdge('Roche' ,'VentPuissanct', 2);
worldGraph.addEdge('Roche' ,'CielTrace', 0);
worldGraph.addEdge('Roche' ,'Profond', 3);

worldGraph.addEdge('Roche' ,'Eldarada', 5);
worldGraph.addEdge('Roche' ,'Nevagraniciti', 7);
worldGraph.addEdge('Roche' ,'Luvesh', 8);
worldGraph.addEdge('Roche' ,'XarMaros', 6);
worldGraph.addEdge('Roche' ,'Gluvina', 7);
worldGraph.addEdge('Roche' ,'Lusich', 8);
worldGraph.addEdge('Roche' ,'Schviceni', 7);
worldGraph.addEdge('Roche' ,'ChornyLabrinth', 8);

worldGraph.addEdge('Roche' ,'Korallea', 10);
worldGraph.addEdge('Roche' ,'LichtMeer', 12);
worldGraph.addEdge('Roche' ,'Sonnen', 12);
worldGraph.addEdge('Roche' ,'DasRosaGewesser', 12);
worldGraph.addEdge('Roche' ,'DracheGrat', 13);
worldGraph.addEdge('Roche' ,'FlimmernStrand', 11);

worldGraph.addEdge('Roche' ,'Divinamentenia', 15);
worldGraph.addEdge('Roche' ,'Escudo', 17);
worldGraph.addEdge('Roche' ,'Estancia', 17);
worldGraph.addEdge('Roche' ,'Inferior', 15);
worldGraph.addEdge('Roche' ,'Sacretista', 17);
worldGraph.addEdge('Roche' ,'Estragonia', 20);
worldGraph.addEdge('Roche' ,'FlorAldea', 17);

worldGraph.addEdge('Roche' ,'AkashAkh', 15);
worldGraph.addEdge('Roche' ,'Akashsami', 17);
worldGraph.addEdge('Roche' ,'Kasavat', 18);
worldGraph.addEdge('Roche' ,'TavParvat', 17);
worldGraph.addEdge('Roche' ,'NagmaWel', 20);
worldGraph.addEdge('Roche' ,'Nirvasan', 18);
worldGraph.addEdge('Roche' ,'Vedhshala', 15);


// 헤그메티아
worldGraph.addEdge('Hermetia' ,'Volcania', 1);
worldGraph.addEdge('Hermetia' ,'Nuit', 1);
worldGraph.addEdge('Hermetia' ,'Roche', 1);
worldGraph.addEdge('Hermetia' ,'LueCommercante', 1);
worldGraph.addEdge('Hermetia' ,'VentPuissanct', 2);
worldGraph.addEdge('Hermetia' ,'CielTrace', 1);
worldGraph.addEdge('Hermetia' ,'Profond', 3);

worldGraph.addEdge('Hermetia' ,'Eldarada', 5);
worldGraph.addEdge('Hermetia' ,'Nevagraniciti', 7);
worldGraph.addEdge('Hermetia' ,'Luvesh', 8);
worldGraph.addEdge('Hermetia' ,'XarMaros', 6);
worldGraph.addEdge('Hermetia' ,'Gluvina', 7);
worldGraph.addEdge('Hermetia' ,'Lusich', 8);
worldGraph.addEdge('Hermetia' ,'Schviceni', 7);
worldGraph.addEdge('Hermetia' ,'ChornyLabrinth', 8);

worldGraph.addEdge('Hermetia' ,'Korallea', 10);
worldGraph.addEdge('Hermetia' ,'LichtMeer', 12);
worldGraph.addEdge('Hermetia' ,'Sonnen', 12);
worldGraph.addEdge('Hermetia' ,'DasRosaGewesser', 12);
worldGraph.addEdge('Hermetia' ,'DracheGrat', 13);
worldGraph.addEdge('Hermetia' ,'FlimmernStrand', 11);

worldGraph.addEdge('Hermetia' ,'Divinamentenia', 15);
worldGraph.addEdge('Hermetia' ,'Escudo', 17);
worldGraph.addEdge('Hermetia' ,'Estancia', 17);
worldGraph.addEdge('Hermetia' ,'Inferior', 15);
worldGraph.addEdge('Hermetia' ,'Sacretista', 17);
worldGraph.addEdge('Hermetia' ,'Estragonia', 20);
worldGraph.addEdge('Hermetia' ,'FlorAldea', 17);

worldGraph.addEdge('Hermetia' ,'AkashAkh', 15);
worldGraph.addEdge('Hermetia' ,'Akashsami', 17);
worldGraph.addEdge('Hermetia' ,'Kasavat', 18);
worldGraph.addEdge('Hermetia' ,'TavParvat', 17);
worldGraph.addEdge('Hermetia' ,'NagmaWel', 20);
worldGraph.addEdge('Hermetia' ,'Nirvasan', 18);
worldGraph.addEdge('Hermetia' ,'Vedhshala', 15);


// 루 코메상트
worldGraph.addEdge('LueCommercante' ,'Volcania', 1);
worldGraph.addEdge('LueCommercante' ,'Nuit', 3);
worldGraph.addEdge('LueCommercante' ,'Roche', 2);
worldGraph.addEdge('LueCommercante' ,'Hermetia', 1);
worldGraph.addEdge('LueCommercante' ,'VentPuissanct', 3);
worldGraph.addEdge('LueCommercante' ,'CielTrace', 3);
worldGraph.addEdge('LueCommercante' ,'Profond', 2);

worldGraph.addEdge('LueCommercante' ,'Eldarada', 5);
worldGraph.addEdge('LueCommercante' ,'Nevagraniciti', 7);
worldGraph.addEdge('LueCommercante' ,'Luvesh', 8);
worldGraph.addEdge('LueCommercante' ,'XarMaros', 6);
worldGraph.addEdge('LueCommercante' ,'Gluvina', 7);
worldGraph.addEdge('LueCommercante' ,'Lusich', 8);
worldGraph.addEdge('LueCommercante' ,'Schviceni', 7);
worldGraph.addEdge('LueCommercante' ,'ChornyLabrinth', 8);

worldGraph.addEdge('LueCommercante' ,'Korallea', 10);
worldGraph.addEdge('LueCommercante' ,'LichtMeer', 12);
worldGraph.addEdge('LueCommercante' ,'Sonnen', 12);
worldGraph.addEdge('LueCommercante' ,'DasRosaGewesser', 12);
worldGraph.addEdge('LueCommercante' ,'DracheGrat', 13);
worldGraph.addEdge('LueCommercante' ,'FlimmernStrand', 11);

worldGraph.addEdge('LueCommercante' ,'Divinamentenia', 15);
worldGraph.addEdge('LueCommercante' ,'Escudo', 17);
worldGraph.addEdge('LueCommercante' ,'Estancia', 17);
worldGraph.addEdge('LueCommercante' ,'Inferior', 15);
worldGraph.addEdge('LueCommercante' ,'Sacretista', 17);
worldGraph.addEdge('LueCommercante' ,'Estragonia', 20);
worldGraph.addEdge('LueCommercante' ,'FlorAldea', 17);

worldGraph.addEdge('LueCommercante' ,'AkashAkh', 15);
worldGraph.addEdge('LueCommercante' ,'Akashsami', 17);
worldGraph.addEdge('LueCommercante' ,'Kasavat', 18);
worldGraph.addEdge('LueCommercante' ,'TavParvat', 17);
worldGraph.addEdge('LueCommercante' ,'NagmaWel', 20);
worldGraph.addEdge('LueCommercante' ,'Nirvasan', 18);
worldGraph.addEdge('LueCommercante' ,'Vedhshala', 15);


// 봉 피상트
worldGraph.addEdge('VentPuissanct' ,'Volcania', 3);
worldGraph.addEdge('VentPuissanct' ,'Nuit', 0);
worldGraph.addEdge('VentPuissanct' ,'Roche', 2);
worldGraph.addEdge('VentPuissanct' ,'Hermetia', 1);
worldGraph.addEdge('VentPuissanct' ,'LueCommercante', 3);
worldGraph.addEdge('VentPuissanct' ,'CielTrace', 0);
worldGraph.addEdge('VentPuissanct' ,'Profond', 5);

worldGraph.addEdge('VentPuissanct' ,'Eldarada', 5);
worldGraph.addEdge('VentPuissanct' ,'Nevagraniciti', 7);
worldGraph.addEdge('VentPuissanct' ,'Luvesh', 8);
worldGraph.addEdge('VentPuissanct' ,'XarMaros', 6);
worldGraph.addEdge('VentPuissanct' ,'Gluvina', 7);
worldGraph.addEdge('VentPuissanct' ,'Lusich', 8);
worldGraph.addEdge('VentPuissanct' ,'Schviceni', 7);
worldGraph.addEdge('VentPuissanct' ,'ChornyLabrinth', 8);

worldGraph.addEdge('VentPuissanct' ,'Korallea', 10);
worldGraph.addEdge('VentPuissanct' ,'LichtMeer', 12);
worldGraph.addEdge('VentPuissanct' ,'Sonnen', 12);
worldGraph.addEdge('VentPuissanct' ,'DasRosaGewesser', 12);
worldGraph.addEdge('VentPuissanct' ,'DracheGrat', 13);
worldGraph.addEdge('VentPuissanct' ,'FlimmernStrand', 11);

worldGraph.addEdge('VentPuissanct' ,'Divinamentenia', 15);
worldGraph.addEdge('VentPuissanct' ,'Escudo', 17);
worldGraph.addEdge('VentPuissanct' ,'Estancia', 17);
worldGraph.addEdge('VentPuissanct' ,'Inferior', 15);
worldGraph.addEdge('VentPuissanct' ,'Sacretista', 17);
worldGraph.addEdge('VentPuissanct' ,'Estragonia', 20);
worldGraph.addEdge('VentPuissanct' ,'FlorAldea', 20);

worldGraph.addEdge('VentPuissanct' ,'AkashAkh', 15);
worldGraph.addEdge('VentPuissanct' ,'Akashsami', 17);
worldGraph.addEdge('VentPuissanct' ,'Kasavat', 18);
worldGraph.addEdge('VentPuissanct' ,'TavParvat', 17);
worldGraph.addEdge('VentPuissanct' ,'NagmaWel', 20);
worldGraph.addEdge('VentPuissanct' ,'Nirvasan', 18);
worldGraph.addEdge('VentPuissanct' ,'Vedhshala', 15);


// 시엘 트하스
worldGraph.addEdge('CielTrace' ,'Volcania', 3);
worldGraph.addEdge('CielTrace' ,'Nuit', 2);
worldGraph.addEdge('CielTrace' ,'Roche', 0);
worldGraph.addEdge('CielTrace' ,'Hermetia', 1);
worldGraph.addEdge('CielTrace' ,'LueCommercante', 3);
worldGraph.addEdge('CielTrace' ,'VentPuissanct', 0);
worldGraph.addEdge('CielTrace' ,'Profond', 3);

worldGraph.addEdge('CielTrace' ,'Eldarada', 5);
worldGraph.addEdge('CielTrace' ,'Nevagraniciti', 7);
worldGraph.addEdge('CielTrace' ,'Luvesh', 8);
worldGraph.addEdge('CielTrace' ,'XarMaros', 6);
worldGraph.addEdge('CielTrace' ,'Gluvina', 7);
worldGraph.addEdge('CielTrace' ,'Lusich', 8);
worldGraph.addEdge('CielTrace' ,'Schviceni', 7);
worldGraph.addEdge('CielTrace' ,'ChornyLabrinth', 8);

worldGraph.addEdge('CielTrace' ,'Korallea', 10);
worldGraph.addEdge('CielTrace' ,'LichtMeer', 12);
worldGraph.addEdge('CielTrace' ,'Sonnen', 12);
worldGraph.addEdge('CielTrace' ,'DasRosaGewesser', 12);
worldGraph.addEdge('CielTrace' ,'DracheGrat', 13);
worldGraph.addEdge('CielTrace' ,'FlimmernStrand', 11);

worldGraph.addEdge('CielTrace' ,'Divinamentenia', 15);
worldGraph.addEdge('CielTrace' ,'Escudo', 17);
worldGraph.addEdge('CielTrace' ,'Estancia', 17);
worldGraph.addEdge('CielTrace' ,'Inferior', 15);
worldGraph.addEdge('CielTrace' ,'Sacretista', 17);
worldGraph.addEdge('CielTrace' ,'Estragonia', 20);
worldGraph.addEdge('CielTrace' ,'FlorAldea', 17);

worldGraph.addEdge('CielTrace' ,'AkashAkh', 15);
worldGraph.addEdge('CielTrace' ,'Akashsami', 17);
worldGraph.addEdge('CielTrace' ,'Kasavat', 18);
worldGraph.addEdge('CielTrace' ,'TavParvat', 17);
worldGraph.addEdge('CielTrace' ,'NagmaWel', 20);
worldGraph.addEdge('CielTrace' ,'Nirvasan', 18);
worldGraph.addEdge('CielTrace' ,'Vedhshala', 15);


// 포포
worldGraph.addEdge('Profond' ,'Volcania', 5);
worldGraph.addEdge('Profond' ,'Nuit', 5);
worldGraph.addEdge('Profond' ,'Roche', 3);
worldGraph.addEdge('Profond' ,'Hermetia', 3);
worldGraph.addEdge('Profond' ,'LueCommercante', 1);
worldGraph.addEdge('Profond' ,'VentPuissanct', 5);
worldGraph.addEdge('Profond' ,'CielTrace', 5);



/*******************************************
 *                   시아티                *  
********************************************/
// 엘다라다
worldGraph.addEdge('Eldarada' ,'Volcania', 5);
worldGraph.addEdge('Eldarada' ,'Nuit', 6);
worldGraph.addEdge('Eldarada' ,'Roche', 8);
worldGraph.addEdge('Eldarada' ,'Hermetia', 7);
worldGraph.addEdge('Eldarada' ,'LueCommercante', 7);
worldGraph.addEdge('Eldarada' ,'VentPuissanct', 7);
worldGraph.addEdge('Eldarada' ,'CielTrace', 8);
// worldGraph.addEdge('Eldarada' ,'Profond', 5);

// worldGraph.addEdge('Volcania' ,'Eldarada', 5);
worldGraph.addEdge('Eldarada' ,'Nevagraniciti', 0);
worldGraph.addEdge('Eldarada' ,'Luvesh', 4);
worldGraph.addEdge('Eldarada' ,'XarMaros', 2);
worldGraph.addEdge('Eldarada' ,'Gluvina', 2);
worldGraph.addEdge('Eldarada' ,'Lusich', 5);
worldGraph.addEdge('Eldarada' ,'Schviceni', 5);
worldGraph.addEdge('Eldarada' ,'ChornyLabrinth', 5);

worldGraph.addEdge('Eldarada' ,'Korallea', 10);
worldGraph.addEdge('Eldarada' ,'LichtMeer', 12);
worldGraph.addEdge('Eldarada' ,'Sonnen', 13);
worldGraph.addEdge('Eldarada' ,'DasRosaGewesser', 12);
worldGraph.addEdge('Eldarada' ,'DracheGrat', 13);
// worldGraph.addEdge('Volcania' ,'WirbelZiel', 3);
// worldGraph.addEdge('Volcania' ,'SeeLeben', 3);
// worldGraph.addEdge('Volcania' ,'FlimmernStrand', 11);

worldGraph.addEdge('Eldarada' ,'Divinamentenia', 10);
worldGraph.addEdge('Eldarada' ,'Escudo', 12);
worldGraph.addEdge('Eldarada' ,'Estancia', 10);
worldGraph.addEdge('Eldarada' ,'Inferior', 10);
worldGraph.addEdge('Eldarada' ,'Sacretista', 12);
worldGraph.addEdge('Eldarada' ,'Estragonia', 15);
worldGraph.addEdge('Eldarada' ,'FlorAldea', 12);

worldGraph.addEdge('Eldarada' ,'AkashAkh', 15);
worldGraph.addEdge('Eldarada' ,'Akashsami', 17);
worldGraph.addEdge('Eldarada' ,'Kasavat', 18);
worldGraph.addEdge('Eldarada' ,'TavParvat', 17);
worldGraph.addEdge('Eldarada' ,'NagmaWel', 20);
worldGraph.addEdge('Eldarada' ,'Nirvasan', 18);
worldGraph.addEdge('Eldarada' ,'Vedhshala', 15);
// worldGraph.addEdge('Volcania' ,'Himsail', 3);


// 누이트
worldGraph.addEdge('Nevagraniciti' ,'Volcania', 5);
worldGraph.addEdge('Nevagraniciti' ,'Nuit', 5);
worldGraph.addEdge('Nevagraniciti' ,'Roche', 8);
worldGraph.addEdge('Nevagraniciti' ,'Hermetia', 7);
worldGraph.addEdge('Nevagraniciti' ,'LueCommercante', 7);
worldGraph.addEdge('Nevagraniciti' ,'VentPuissanct', 5);
worldGraph.addEdge('Nevagraniciti' ,'CielTrace', 8);
// worldGraph.addEdge('Nuit' ,'Profond', 5);

worldGraph.addEdge('Nevagraniciti' ,'Eldarada', 0);
// worldGraph.addEdge('Nevagraniciti' ,'Nevagraniciti', 7);
worldGraph.addEdge('Nevagraniciti' ,'Luvesh', 4);
worldGraph.addEdge('Nevagraniciti' ,'XarMaros', 2);
worldGraph.addEdge('Nevagraniciti' ,'Gluvina', 2);
worldGraph.addEdge('Nevagraniciti' ,'Lusich', 5);
worldGraph.addEdge('Nevagraniciti' ,'Schviceni', 5);
worldGraph.addEdge('Nevagraniciti' ,'ChornyLabrinth', 3);

worldGraph.addEdge('Nevagraniciti' ,'Korallea', 10);
worldGraph.addEdge('Nevagraniciti' ,'LichtMeer', 12);
worldGraph.addEdge('Nevagraniciti' ,'Sonnen', 12);
worldGraph.addEdge('Nevagraniciti' ,'DasRosaGewesser', 13);
worldGraph.addEdge('Nevagraniciti' ,'DracheGrat', 13);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
// worldGraph.addEdge('Nuit' ,'FlimmernStrand', 11);

worldGraph.addEdge('Nevagraniciti' ,'Divinamentenia', 10);
worldGraph.addEdge('Nevagraniciti' ,'Escudo', 12);
worldGraph.addEdge('Nevagraniciti' ,'Estancia', 10);
worldGraph.addEdge('Nevagraniciti' ,'Inferior', 10);
worldGraph.addEdge('Nevagraniciti' ,'Sacretista', 12);
// worldGraph.addEdge('Nevagraniciti' ,'Estragonia', 20);
worldGraph.addEdge('Nevagraniciti' ,'FlorAldea', 12);

worldGraph.addEdge('Nevagraniciti' ,'AkashAkh', 15);
worldGraph.addEdge('Nevagraniciti' ,'Akashsami', 17);
worldGraph.addEdge('Nevagraniciti' ,'Kasavat', 18);
worldGraph.addEdge('Nevagraniciti' ,'TavParvat', 17);
worldGraph.addEdge('Nevagraniciti' ,'NagmaWel', 18);
worldGraph.addEdge('Nevagraniciti' ,'Nirvasan', 20);
worldGraph.addEdge('Nevagraniciti' ,'Vedhshala', 15);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 루베시
worldGraph.addEdge('Luvesh' ,'Volcania', 5);
worldGraph.addEdge('Luvesh' ,'Nuit', 5);
worldGraph.addEdge('Luvesh' ,'Roche', 8);
worldGraph.addEdge('Luvesh' ,'Hermetia', 7);
worldGraph.addEdge('Luvesh' ,'LueCommercante', 7);
worldGraph.addEdge('Luvesh' ,'VentPuissanct', 5);
worldGraph.addEdge('Luvesh' ,'CielTrace', 8);
// worldGraph.addEdge('Roche' ,'Profond', 3);

worldGraph.addEdge('Luvesh' ,'Eldarada', 3);
worldGraph.addEdge('Luvesh' ,'Nevagraniciti', 3);
// worldGraph.addEdge('Roche' ,'Luvesh', 8);
worldGraph.addEdge('Luvesh' ,'XarMaros', 0);
worldGraph.addEdge('Luvesh' ,'Gluvina', 4);
worldGraph.addEdge('Luvesh' ,'Lusich', 3);
worldGraph.addEdge('Luvesh' ,'Schviceni', 5);
worldGraph.addEdge('Luvesh' ,'ChornyLabrinth', 1);

worldGraph.addEdge('Luvesh' ,'Korallea', 5);
worldGraph.addEdge('Luvesh' ,'LichtMeer', 7);
worldGraph.addEdge('Luvesh' ,'Sonnen', 6);
worldGraph.addEdge('Luvesh' ,'DasRosaGewesser', 6);
worldGraph.addEdge('Luvesh' ,'DracheGrat', 7);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
// worldGraph.addEdge('Luvesh' ,'FlimmernStrand', 11);

worldGraph.addEdge('Luvesh' ,'Divinamentenia', 10);
worldGraph.addEdge('Luvesh' ,'Escudo', 12);
worldGraph.addEdge('Luvesh' ,'Estancia', 10);
worldGraph.addEdge('Luvesh' ,'Inferior', 10);
worldGraph.addEdge('Luvesh' ,'Sacretista', 12);
worldGraph.addEdge('Luvesh' ,'Estragonia', 15);
worldGraph.addEdge('Luvesh' ,'FlorAldea', 12);

worldGraph.addEdge('Luvesh' ,'AkashAkh', 15);
worldGraph.addEdge('Luvesh' ,'Akashsami', 17);
worldGraph.addEdge('Luvesh' ,'Kasavat', 18);
worldGraph.addEdge('Luvesh' ,'TavParvat', 17);
worldGraph.addEdge('Luvesh' ,'NagmaWel', 20);
worldGraph.addEdge('Luvesh' ,'Nirvasan', 18);
worldGraph.addEdge('Luvesh' ,'Vedhshala', 15);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 자르마로스
worldGraph.addEdge('XarMaros' ,'Volcania', 5);
worldGraph.addEdge('XarMaros' ,'Nuit', 5);
worldGraph.addEdge('XarMaros' ,'Roche', 8);
worldGraph.addEdge('XarMaros' ,'Hermetia', 7);
worldGraph.addEdge('XarMaros' ,'LueCommercante', 7);
worldGraph.addEdge('XarMaros' ,'VentPuissanct', 6);
worldGraph.addEdge('XarMaros' ,'CielTrace', 8);
// worldGraph.addEdge('Hermetia' ,'Profond', 3);

worldGraph.addEdge('XarMaros' ,'Eldarada', 1);
worldGraph.addEdge('XarMaros' ,'Nevagraniciti', 1);
worldGraph.addEdge('XarMaros' ,'Luvesh', 0);
// worldGraph.addEdge('XarMaros' ,'XarMaros', 6);
worldGraph.addEdge('XarMaros' ,'Gluvina', 3);
worldGraph.addEdge('XarMaros' ,'Lusich', 5);
worldGraph.addEdge('XarMaros' ,'Schviceni', 5);
worldGraph.addEdge('XarMaros' ,'ChornyLabrinth', 2);

worldGraph.addEdge('XarMaros' ,'Korallea', 10);
worldGraph.addEdge('XarMaros' ,'LichtMeer', 12);
worldGraph.addEdge('XarMaros' ,'Sonnen', 12);
worldGraph.addEdge('XarMaros' ,'DasRosaGewesser', 13);
worldGraph.addEdge('XarMaros' ,'DracheGrat', 13);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('XarMaros' ,'FlimmernStrand', 5);

worldGraph.addEdge('XarMaros' ,'Divinamentenia', 10);
worldGraph.addEdge('XarMaros' ,'Escudo', 12);
worldGraph.addEdge('XarMaros' ,'Estancia', 10);
worldGraph.addEdge('XarMaros' ,'Inferior', 7);
worldGraph.addEdge('XarMaros' ,'Sacretista', 12);
worldGraph.addEdge('XarMaros' ,'Estragonia', 15);
worldGraph.addEdge('XarMaros' ,'FlorAldea', 12);

worldGraph.addEdge('XarMaros' ,'AkashAkh', 15);
worldGraph.addEdge('XarMaros' ,'Akashsami', 17);
worldGraph.addEdge('XarMaros' ,'Kasavat', 18);
worldGraph.addEdge('XarMaros' ,'TavParvat', 17);
worldGraph.addEdge('XarMaros' ,'NagmaWel', 20);
worldGraph.addEdge('XarMaros' ,'Nirvasan', 18);
worldGraph.addEdge('XarMaros' ,'Vedhshala', 15);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 글루비나
worldGraph.addEdge('Gluvina' ,'Volcania', 5);
worldGraph.addEdge('Gluvina' ,'Nuit', 5);
worldGraph.addEdge('Gluvina' ,'Roche', 8);
worldGraph.addEdge('Gluvina' ,'Hermetia', 7);
worldGraph.addEdge('Gluvina' ,'LueCommercante', 7);
worldGraph.addEdge('Gluvina' ,'VentPuissanct', 5);
worldGraph.addEdge('Gluvina' ,'CielTrace', 8);
// worldGraph.addEdge('Gluvina' ,'Profond', 2);

worldGraph.addEdge('Gluvina' ,'Eldarada', 1);
worldGraph.addEdge('Gluvina' ,'Nevagraniciti', 1);
worldGraph.addEdge('Gluvina' ,'Luvesh', 5);
worldGraph.addEdge('Gluvina' ,'XarMaros', 3);
// worldGraph.addEdge('LueCommercante' ,'Gluvina', 7);
worldGraph.addEdge('Gluvina' ,'Lusich', 7);
worldGraph.addEdge('Gluvina' ,'Schviceni', 0);
worldGraph.addEdge('Gluvina' ,'ChornyLabrinth', 4);

worldGraph.addEdge('Gluvina' ,'Korallea', 5);
worldGraph.addEdge('Gluvina' ,'LichtMeer', 7);
worldGraph.addEdge('Gluvina' ,'Sonnen', 6);
worldGraph.addEdge('Gluvina' ,'DasRosaGewesser', 6);
worldGraph.addEdge('Gluvina' ,'DracheGrat', 7);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('Gluvina' ,'FlimmernStrand', 5);

worldGraph.addEdge('Gluvina' ,'Divinamentenia', 10);
worldGraph.addEdge('Gluvina' ,'Escudo', 12);
worldGraph.addEdge('Gluvina' ,'Estancia', 10);
worldGraph.addEdge('Gluvina' ,'Inferior', 10);
worldGraph.addEdge('Gluvina' ,'Sacretista', 12);
worldGraph.addEdge('Gluvina' ,'Estragonia', 15);
worldGraph.addEdge('Gluvina' ,'FlorAldea', 12);

worldGraph.addEdge('Gluvina' ,'AkashAkh', 15);
worldGraph.addEdge('Gluvina' ,'Akashsami', 17);
worldGraph.addEdge('Gluvina' ,'Kasavat', 18);
worldGraph.addEdge('Gluvina' ,'TavParvat', 17);
worldGraph.addEdge('Gluvina' ,'NagmaWel', 20);
worldGraph.addEdge('Gluvina' ,'Nirvasan', 18);
worldGraph.addEdge('Gluvina' ,'Vedhshala', 15);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 봉 피상트
worldGraph.addEdge('Lusich' ,'Volcania', 10);
worldGraph.addEdge('Lusich' ,'Nuit', 12);
worldGraph.addEdge('Lusich' ,'Roche', 13);
worldGraph.addEdge('Lusich' ,'Hermetia', 12);
worldGraph.addEdge('Lusich' ,'LueCommercante', 15);
worldGraph.addEdge('Lusich' ,'VentPuissanct', 12);
worldGraph.addEdge('Lusich' ,'CielTrace', 13);
// worldGraph.addEdge('Lusich' ,'Profond', 5);

worldGraph.addEdge('Lusich' ,'Eldarada', 5);
worldGraph.addEdge('Lusich' ,'Nevagraniciti', 5);
worldGraph.addEdge('Lusich' ,'Luvesh', 3);
worldGraph.addEdge('Lusich' ,'XarMaros', 4);
worldGraph.addEdge('Lusich' ,'Gluvina', 8);
// worldGraph.addEdge('VentPuissanct' ,'Lusich', 8);
worldGraph.addEdge('Lusich' ,'Schviceni', 10);
worldGraph.addEdge('Lusich' ,'ChornyLabrinth', 1);

worldGraph.addEdge('Lusich' ,'Korallea', 5);
worldGraph.addEdge('Lusich' ,'LichtMeer', 7);
worldGraph.addEdge('Lusich' ,'Sonnen', 6);
worldGraph.addEdge('Lusich' ,'DasRosaGewesser', 6);
worldGraph.addEdge('Lusich' ,'DracheGrat', 7);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('Lusich' ,'FlimmernStrand', 5);

worldGraph.addEdge('Lusich' ,'Divinamentenia', 10);
worldGraph.addEdge('Lusich' ,'Escudo', 12);
worldGraph.addEdge('Lusich' ,'Estancia', 8);
worldGraph.addEdge('Lusich' ,'Inferior', 7);
worldGraph.addEdge('Lusich' ,'Sacretista', 10);
worldGraph.addEdge('Lusich' ,'Estragonia', 15);
worldGraph.addEdge('Lusich' ,'FlorAldea', 11);

worldGraph.addEdge('Lusich' ,'AkashAkh', 15);
worldGraph.addEdge('Lusich' ,'Akashsami', 17);
worldGraph.addEdge('Lusich' ,'Kasavat', 18);
worldGraph.addEdge('Lusich' ,'TavParvat', 17);
worldGraph.addEdge('Lusich' ,'NagmaWel', 20);
worldGraph.addEdge('Lusich' ,'Nirvasan', 18);
worldGraph.addEdge('Lusich' ,'Vedhshala', 15);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 스뷔센니
worldGraph.addEdge('Schviceni' ,'Volcania', 5);
worldGraph.addEdge('Schviceni' ,'Nuit', 5);
worldGraph.addEdge('Schviceni' ,'Roche', 8);
worldGraph.addEdge('Schviceni' ,'Hermetia', 7);
worldGraph.addEdge('Schviceni' ,'LueCommercante', 7);
worldGraph.addEdge('Schviceni' ,'VentPuissanct', 5);
worldGraph.addEdge('Schviceni' ,'CielTrace', 5);
// worldGraph.addEdge('Schviceni' ,'Profond', 3);

worldGraph.addEdge('Schviceni' ,'Eldarada', 3);
worldGraph.addEdge('Schviceni' ,'Nevagraniciti', 2);
worldGraph.addEdge('Schviceni' ,'Luvesh', 5);
worldGraph.addEdge('Schviceni' ,'XarMaros', 4);
worldGraph.addEdge('Schviceni' ,'Gluvina', 0);
worldGraph.addEdge('Schviceni' ,'Lusich', 7);
// worldGraph.addEdge('CielTrace' ,'Schviceni', 7);
worldGraph.addEdge('Schviceni' ,'ChornyLabrinth', 4);

worldGraph.addEdge('Schviceni' ,'Korallea', 5);
worldGraph.addEdge('Schviceni' ,'LichtMeer', 7);
worldGraph.addEdge('Schviceni' ,'Sonnen', 6);
worldGraph.addEdge('Schviceni' ,'DasRosaGewesser', 6);
worldGraph.addEdge('Schviceni' ,'DracheGrat', 7);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('Schviceni' ,'FlimmernStrand', 5);

worldGraph.addEdge('Schviceni' ,'Divinamentenia', 10);
worldGraph.addEdge('Schviceni' ,'Escudo', 12);
worldGraph.addEdge('Schviceni' ,'Estancia', 10);
worldGraph.addEdge('Schviceni' ,'Inferior', 10);
worldGraph.addEdge('Schviceni' ,'Sacretista', 12);
worldGraph.addEdge('Schviceni' ,'Estragonia', 15);
worldGraph.addEdge('Schviceni' ,'FlorAldea', 11);

worldGraph.addEdge('Schviceni' ,'AkashAkh', 15);
worldGraph.addEdge('Schviceni' ,'Akashsami', 17);
worldGraph.addEdge('Schviceni' ,'Kasavat', 18);
worldGraph.addEdge('Schviceni' ,'TavParvat', 17);
worldGraph.addEdge('Schviceni' ,'NagmaWel', 20);
worldGraph.addEdge('Schviceni' ,'Nirvasan', 18);
worldGraph.addEdge('Schviceni' ,'Vedhshala', 15);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 쵸르니 라비린스
worldGraph.addEdge('ChornyLabrinth' ,'Volcania', 5);
worldGraph.addEdge('ChornyLabrinth' ,'Nuit', 5);
worldGraph.addEdge('ChornyLabrinth' ,'Roche', 8);
worldGraph.addEdge('ChornyLabrinth' ,'Hermetia', 7);
worldGraph.addEdge('ChornyLabrinth' ,'LueCommercante', 7);
worldGraph.addEdge('ChornyLabrinth' ,'VentPuissanct', 5);
worldGraph.addEdge('ChornyLabrinth' ,'CielTrace', 5);
// worldGraph.addEdge('LueCommercante' ,'Profond', 2);

worldGraph.addEdge('ChornyLabrinth' ,'Eldarada', 3);
worldGraph.addEdge('ChornyLabrinth' ,'Nevagraniciti', 2);
worldGraph.addEdge('ChornyLabrinth' ,'Luvesh', 2);
worldGraph.addEdge('ChornyLabrinth' ,'XarMaros', 2);
worldGraph.addEdge('ChornyLabrinth' ,'Gluvina', 3);
worldGraph.addEdge('ChornyLabrinth' ,'Lusich', 3);
worldGraph.addEdge('ChornyLabrinth' ,'Schviceni', 5);
// worldGraph.addEdge('Schviceni' ,'ChornyLabrinth', 4);

worldGraph.addEdge('ChornyLabrinth' ,'Korallea', 5);
worldGraph.addEdge('ChornyLabrinth' ,'LichtMeer', 7);
worldGraph.addEdge('ChornyLabrinth' ,'Sonnen', 6);
worldGraph.addEdge('ChornyLabrinth' ,'DasRosaGewesser', 6);
worldGraph.addEdge('ChornyLabrinth' ,'DracheGrat', 7);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('ChornyLabrinth' ,'FlimmernStrand', 5);

worldGraph.addEdge('ChornyLabrinth' ,'Divinamentenia', 10);
worldGraph.addEdge('ChornyLabrinth' ,'Escudo', 12);
worldGraph.addEdge('ChornyLabrinth' ,'Estancia', 10);
worldGraph.addEdge('ChornyLabrinth' ,'Inferior', 10);
worldGraph.addEdge('ChornyLabrinth' ,'Sacretista', 12);
worldGraph.addEdge('ChornyLabrinth' ,'Estragonia', 15);
worldGraph.addEdge('ChornyLabrinth' ,'FlorAldea', 11);

worldGraph.addEdge('ChornyLabrinth' ,'AkashAkh', 15);
worldGraph.addEdge('ChornyLabrinth' ,'Akashsami', 17);
worldGraph.addEdge('ChornyLabrinth' ,'Kasavat', 18);
worldGraph.addEdge('ChornyLabrinth' ,'TavParvat', 17);
worldGraph.addEdge('ChornyLabrinth' ,'NagmaWel', 20);
worldGraph.addEdge('ChornyLabrinth' ,'Nirvasan', 18);
worldGraph.addEdge('ChornyLabrinth' ,'Vedhshala', 15);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);



/*******************************************
 *                   언티프                *  
********************************************/
// 코할레아
worldGraph.addEdge('Korallea' ,'Volcania', 10);
worldGraph.addEdge('Korallea' ,'Nuit', 12);
worldGraph.addEdge('Korallea' ,'Roche', 13);
worldGraph.addEdge('Korallea' ,'Hermetia', 12);
worldGraph.addEdge('Korallea' ,'LueCommercante', 15);
worldGraph.addEdge('Korallea' ,'VentPuissanct', 12);
worldGraph.addEdge('Korallea' ,'CielTrace', 13);
// worldGraph.addEdge('Eldarada' ,'Profond', 5);

worldGraph.addEdge('Korallea' ,'Eldarada', 10);
worldGraph.addEdge('Korallea' ,'Nevagraniciti', 7);
worldGraph.addEdge('Korallea' ,'Luvesh', 7);
worldGraph.addEdge('Korallea' ,'XarMaros', 9);
worldGraph.addEdge('Korallea' ,'Gluvina', 12);
worldGraph.addEdge('Korallea' ,'Lusich', 5);
worldGraph.addEdge('Korallea' ,'Schviceni', 15);
worldGraph.addEdge('Korallea' ,'ChornyLabrinth', 5);

// worldGraph.addEdge('Eldarada' ,'Korallea', 10);
worldGraph.addEdge('Korallea' ,'LichtMeer', 3);
worldGraph.addEdge('Korallea' ,'Sonnen', 3);
worldGraph.addEdge('Korallea' ,'DasRosaGewesser', 6);
worldGraph.addEdge('Korallea' ,'DracheGrat', 3);
// worldGraph.addEdge('Volcania' ,'WirbelZiel', 3);
// worldGraph.addEdge('Volcania' ,'SeeLeben', 3);
worldGraph.addEdge('Korallea' ,'FlimmernStrand', 0);

worldGraph.addEdge('Korallea' ,'Divinamentenia', 5);
worldGraph.addEdge('Korallea' ,'Escudo', 5);
worldGraph.addEdge('Korallea' ,'Estancia', 7);
worldGraph.addEdge('Korallea' ,'Inferior', 5);
worldGraph.addEdge('Korallea' ,'Sacretista', 7);
worldGraph.addEdge('Korallea' ,'Estragonia', 10);
worldGraph.addEdge('Korallea' ,'FlorAldea', 5);

worldGraph.addEdge('Korallea' ,'AkashAkh', 10);
worldGraph.addEdge('Korallea' ,'Akashsami', 12);
worldGraph.addEdge('Korallea' ,'Kasavat', 15);
worldGraph.addEdge('Korallea' ,'TavParvat', 14);
worldGraph.addEdge('Korallea' ,'NagmaWel', 18);
worldGraph.addEdge('Korallea' ,'Nirvasan', 20);
worldGraph.addEdge('Korallea' ,'Vedhshala', 18);
// worldGraph.addEdge('Volcania' ,'Himsail', 3);


// 리히트 미아
worldGraph.addEdge('LichtMeer' ,'Volcania', 10);
worldGraph.addEdge('LichtMeer' ,'Nuit', 12);
worldGraph.addEdge('LichtMeer' ,'Roche', 13);
worldGraph.addEdge('LichtMeer' ,'Hermetia', 12);
worldGraph.addEdge('LichtMeer' ,'LueCommercante', 15);
worldGraph.addEdge('LichtMeer' ,'VentPuissanct', 12);
worldGraph.addEdge('LichtMeer' ,'CielTrace', 13);
// worldGraph.addEdge('Nuit' ,'Profond', 5);

worldGraph.addEdge('LichtMeer' ,'Eldarada', 10);
worldGraph.addEdge('LichtMeer' ,'Nevagraniciti', 7);
worldGraph.addEdge('LichtMeer' ,'Luvesh', 7);
worldGraph.addEdge('LichtMeer' ,'XarMaros', 9);
worldGraph.addEdge('LichtMeer' ,'Gluvina', 12);
worldGraph.addEdge('LichtMeer' ,'Lusich', 5);
worldGraph.addEdge('LichtMeer' ,'Schviceni', 15);
worldGraph.addEdge('LichtMeer' ,'ChornyLabrinth', 5);

worldGraph.addEdge('LichtMeer' ,'Korallea', 3);
// worldGraph.addEdge('LichtMeer' ,'LichtMeer', 12);
worldGraph.addEdge('LichtMeer' ,'Sonnen', 3);
worldGraph.addEdge('LichtMeer' ,'DasRosaGewesser', 0);
worldGraph.addEdge('LichtMeer' ,'DracheGrat', 0);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('LichtMeer' ,'FlimmernStrand', 1);

worldGraph.addEdge('LichtMeer' ,'Divinamentenia', 5);
worldGraph.addEdge('LichtMeer' ,'Escudo', 5);
worldGraph.addEdge('LichtMeer' ,'Estancia', 7);
worldGraph.addEdge('LichtMeer' ,'Inferior', 5);
worldGraph.addEdge('LichtMeer' ,'Sacretista', 7);
worldGraph.addEdge('LichtMeer' ,'Estragonia', 10);
worldGraph.addEdge('LichtMeer' ,'FlorAldea', 5);

worldGraph.addEdge('LichtMeer' ,'AkashAkh', 10);
worldGraph.addEdge('LichtMeer' ,'Akashsami', 12);
worldGraph.addEdge('LichtMeer' ,'Kasavat', 15);
worldGraph.addEdge('LichtMeer' ,'TavParvat', 14);
worldGraph.addEdge('LichtMeer' ,'NagmaWel', 18);
worldGraph.addEdge('LichtMeer' ,'Nirvasan', 20);
worldGraph.addEdge('LichtMeer' ,'Vedhshala', 18);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 소넨
worldGraph.addEdge('Sonnen' ,'Volcania', 10);
worldGraph.addEdge('Sonnen' ,'Nuit', 12);
worldGraph.addEdge('Sonnen' ,'Roche', 13);
worldGraph.addEdge('Sonnen' ,'Hermetia', 12);
worldGraph.addEdge('Sonnen' ,'LueCommercante', 15);
worldGraph.addEdge('Sonnen' ,'VentPuissanct', 12);
worldGraph.addEdge('Sonnen' ,'CielTrace', 13);
// worldGraph.addEdge('Roche' ,'Profond', 3);

worldGraph.addEdge('Sonnen' ,'Eldarada', 10);
worldGraph.addEdge('Sonnen' ,'Nevagraniciti', 7);
worldGraph.addEdge('Sonnen' ,'Luvesh', 7);
worldGraph.addEdge('Sonnen' ,'XarMaros', 9);
worldGraph.addEdge('Sonnen' ,'Gluvina', 12);
worldGraph.addEdge('Sonnen' ,'Lusich', 5);
worldGraph.addEdge('Sonnen' ,'Schviceni', 15);
worldGraph.addEdge('Sonnen' ,'ChornyLabrinth', 5);

worldGraph.addEdge('Sonnen' ,'Korallea', 3);
worldGraph.addEdge('Sonnen' ,'LichtMeer', 2);
// worldGraph.addEdge('Luvesh' ,'Sonnen', 6);
worldGraph.addEdge('Sonnen' ,'DasRosaGewesser', 0);
worldGraph.addEdge('Sonnen' ,'DracheGrat', 0);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('Sonnen' ,'FlimmernStrand', 3);

worldGraph.addEdge('Sonnen' ,'Divinamentenia', 5);
worldGraph.addEdge('Sonnen' ,'Escudo', 5);
worldGraph.addEdge('Sonnen' ,'Estancia', 7);
worldGraph.addEdge('Sonnen' ,'Inferior', 5);
worldGraph.addEdge('Sonnen' ,'Sacretista', 7);
worldGraph.addEdge('Sonnen' ,'Estragonia', 10);
worldGraph.addEdge('Sonnen' ,'FlorAldea', 5);

worldGraph.addEdge('Sonnen' ,'AkashAkh', 10);
worldGraph.addEdge('Sonnen' ,'Akashsami', 12);
worldGraph.addEdge('Sonnen' ,'Kasavat', 15);
worldGraph.addEdge('Sonnen' ,'TavParvat', 14);
worldGraph.addEdge('Sonnen' ,'NagmaWel', 18);
worldGraph.addEdge('Sonnen' ,'Nirvasan', 20);
worldGraph.addEdge('Sonnen' ,'Vedhshala', 18);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 다 로자 그베사
worldGraph.addEdge('DasRosaGewesser' ,'Volcania', 10);
worldGraph.addEdge('DasRosaGewesser' ,'Nuit', 12);
worldGraph.addEdge('DasRosaGewesser' ,'Roche', 13);
worldGraph.addEdge('DasRosaGewesser' ,'Hermetia', 12);
worldGraph.addEdge('DasRosaGewesser' ,'LueCommercante', 15);
worldGraph.addEdge('DasRosaGewesser' ,'VentPuissanct', 12);
worldGraph.addEdge('DasRosaGewesser' ,'CielTrace', 13);
// worldGraph.addEdge('Hermetia' ,'Profond', 3);

worldGraph.addEdge('DasRosaGewesser' ,'Eldarada', 10);
worldGraph.addEdge('DasRosaGewesser' ,'Nevagraniciti', 7);
worldGraph.addEdge('DasRosaGewesser' ,'Luvesh', 8);
worldGraph.addEdge('DasRosaGewesser' ,'XarMaros', 9);
worldGraph.addEdge('DasRosaGewesser' ,'Gluvina', 12);
worldGraph.addEdge('DasRosaGewesser' ,'Lusich', 5);
worldGraph.addEdge('DasRosaGewesser' ,'Schviceni', 15);
worldGraph.addEdge('DasRosaGewesser' ,'ChornyLabrinth', 5);

worldGraph.addEdge('DasRosaGewesser' ,'Korallea', 0);
worldGraph.addEdge('DasRosaGewesser' ,'LichtMeer', 1);
worldGraph.addEdge('DasRosaGewesser' ,'Sonnen', 0);
// worldGraph.addEdge('XarMaros' ,'DasRosaGewesser', 13);
worldGraph.addEdge('DasRosaGewesser' ,'DracheGrat', 0);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('DasRosaGewesser' ,'FlimmernStrand', 1);

worldGraph.addEdge('DasRosaGewesser' ,'Divinamentenia', 5);
worldGraph.addEdge('DasRosaGewesser' ,'Escudo', 5);
worldGraph.addEdge('DasRosaGewesser' ,'Estancia', 7);
worldGraph.addEdge('DasRosaGewesser' ,'Inferior', 5);
worldGraph.addEdge('DasRosaGewesser' ,'Sacretista', 7);
worldGraph.addEdge('DasRosaGewesser' ,'Estragonia', 10);
worldGraph.addEdge('DasRosaGewesser' ,'FlorAldea', 5);

worldGraph.addEdge('DasRosaGewesser' ,'AkashAkh', 10);
worldGraph.addEdge('DasRosaGewesser' ,'Akashsami', 12);
worldGraph.addEdge('DasRosaGewesser' ,'Kasavat', 15);
worldGraph.addEdge('DasRosaGewesser' ,'TavParvat', 14);
worldGraph.addEdge('DasRosaGewesser' ,'NagmaWel', 18);
worldGraph.addEdge('DasRosaGewesser' ,'Nirvasan', 20);
worldGraph.addEdge('DasRosaGewesser' ,'Vedhshala', 18);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 드라흐 가트
worldGraph.addEdge('DracheGrat' ,'Volcania', 10);
worldGraph.addEdge('DracheGrat' ,'Nuit', 12);
worldGraph.addEdge('DracheGrat' ,'Roche', 13);
worldGraph.addEdge('DracheGrat' ,'Hermetia', 12);
worldGraph.addEdge('DracheGrat' ,'LueCommercante', 15);
worldGraph.addEdge('DracheGrat' ,'VentPuissanct', 12);
worldGraph.addEdge('DracheGrat' ,'CielTrace', 13);
// worldGraph.addEdge('Gluvina' ,'Profond', 2);

worldGraph.addEdge('DracheGrat' ,'Eldarada', 10);
worldGraph.addEdge('DracheGrat' ,'Nevagraniciti', 7);
worldGraph.addEdge('DracheGrat' ,'Luvesh', 7);
worldGraph.addEdge('DracheGrat' ,'XarMaros', 6);
worldGraph.addEdge('DracheGrat' ,'Gluvina', 12);
worldGraph.addEdge('DracheGrat' ,'Lusich', 5);
worldGraph.addEdge('DracheGrat' ,'Schviceni', 15);
worldGraph.addEdge('DracheGrat' ,'ChornyLabrinth', 5);

worldGraph.addEdge('DracheGrat' ,'Korallea', 3);
worldGraph.addEdge('DracheGrat' ,'LichtMeer', 0);
worldGraph.addEdge('DracheGrat' ,'Sonnen', 0);
worldGraph.addEdge('DracheGrat' ,'DasRosaGewesser', 1);
//worldGraph.addEdge('DracheGrat' ,'DracheGrat', 7);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('DracheGrat' ,'FlimmernStrand', 3);

worldGraph.addEdge('DracheGrat' ,'Divinamentenia', 5);
worldGraph.addEdge('DracheGrat' ,'Escudo', 5);
worldGraph.addEdge('DracheGrat' ,'Estancia', 5);
worldGraph.addEdge('DracheGrat' ,'Inferior', 7);
worldGraph.addEdge('DracheGrat' ,'Sacretista', 5);
worldGraph.addEdge('DracheGrat' ,'Estragonia', 10);
worldGraph.addEdge('DracheGrat' ,'FlorAldea', 5);

worldGraph.addEdge('DracheGrat' ,'AkashAkh', 10);
worldGraph.addEdge('DracheGrat' ,'Akashsami', 12);
worldGraph.addEdge('DracheGrat' ,'Kasavat', 15);
worldGraph.addEdge('DracheGrat' ,'TavParvat', 14);
worldGraph.addEdge('DracheGrat' ,'NagmaWel', 18);
worldGraph.addEdge('DracheGrat' ,'Nirvasan', 20);
worldGraph.addEdge('DracheGrat' ,'Vedhshala', 18);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);

/*
// 빌들 지엘
worldGraph.addEdge('WirbelZiel' ,'Volcania', 10);
worldGraph.addEdge('WirbelZiel' ,'Nuit', 12);
worldGraph.addEdge('WirbelZiel' ,'Roche', 13);
worldGraph.addEdge('WirbelZiel' ,'Hermetia', 12);
worldGraph.addEdge('WirbelZiel' ,'LueCommercante', 15);
worldGraph.addEdge('WirbelZiel' ,'VentPuissanct', 12);
worldGraph.addEdge('WirbelZiel' ,'CielTrace', 13);
// worldGraph.addEdge('Lusich' ,'Profond', 5);

worldGraph.addEdge('WirbelZiel' ,'Eldarada', 5);
worldGraph.addEdge('WirbelZiel' ,'Nevagraniciti', 5);
worldGraph.addEdge('WirbelZiel' ,'Luvesh', 3);
worldGraph.addEdge('WirbelZiel' ,'XarMaros', 4);
worldGraph.addEdge('WirbelZiel' ,'Gluvina', 8);
// worldGraph.addEdge('VentPuissanct' ,'Lusich', 8);
worldGraph.addEdge('WirbelZiel' ,'Schviceni', 10);
worldGraph.addEdge('WirbelZiel' ,'ChornyLabrinth', 1);

worldGraph.addEdge('WirbelZiel' ,'Korallea', 5);
worldGraph.addEdge('WirbelZiel' ,'LichtMeer', 7);
worldGraph.addEdge('WirbelZiel' ,'Sonnen', 6);
worldGraph.addEdge('WirbelZiel' ,'DasRosaGewesser', 6);
worldGraph.addEdge('WirbelZiel' ,'DracheGrat', 7);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('WirbelZiel' ,'FlimmernStrand', 5);

worldGraph.addEdge('WirbelZiel' ,'Divinamentenia', 10);
worldGraph.addEdge('WirbelZiel' ,'Escudo', 12);
worldGraph.addEdge('WirbelZiel' ,'Estancia', 8);
worldGraph.addEdge('WirbelZiel' ,'Inferior', 7);
worldGraph.addEdge('WirbelZiel' ,'Sacretista', 10);
worldGraph.addEdge('WirbelZiel' ,'Estragonia', 15);
worldGraph.addEdge('WirbelZiel' ,'FlorAldea', 11);

worldGraph.addEdge('WirbelZiel' ,'AkashAkh', 15);
worldGraph.addEdge('WirbelZiel' ,'Akashsami', 17);
worldGraph.addEdge('WirbelZiel' ,'Kasavat', 18);
worldGraph.addEdge('WirbelZiel' ,'TavParvat', 17);
worldGraph.addEdge('WirbelZiel' ,'NagmaWel', 20);
worldGraph.addEdge('WirbelZiel' ,'Nirvasan', 18);
worldGraph.addEdge('WirbelZiel' ,'Vedhshala', 15);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 시 리빈
worldGraph.addEdge('SeeLeben' ,'Volcania', 5);
worldGraph.addEdge('SeeLeben' ,'Nuit', 5);
worldGraph.addEdge('SeeLeben' ,'Roche', 8);
worldGraph.addEdge('SeeLeben' ,'Hermetia', 7);
worldGraph.addEdge('SeeLeben' ,'LueCommercante', 7);
worldGraph.addEdge('SeeLeben' ,'VentPuissanct', 5);
worldGraph.addEdge('SeeLeben' ,'CielTrace', 5);
// worldGraph.addEdge('Schviceni' ,'Profond', 3);

worldGraph.addEdge('SeeLeben' ,'Eldarada', 3);
worldGraph.addEdge('SeeLeben' ,'Nevagraniciti', 2);
worldGraph.addEdge('SeeLeben' ,'Luvesh', 5);
worldGraph.addEdge('SeeLeben' ,'XarMaros', 4);
worldGraph.addEdge('SeeLeben' ,'Gluvina', 0);
worldGraph.addEdge('SeeLeben' ,'Lusich', 7);
// worldGraph.addEdge('CielTrace' ,'Schviceni', 7);
worldGraph.addEdge('SeeLeben' ,'ChornyLabrinth', 4);

worldGraph.addEdge('SeeLeben' ,'Korallea', 5);
worldGraph.addEdge('SeeLeben' ,'LichtMeer', 7);
worldGraph.addEdge('SeeLeben' ,'Sonnen', 6);
worldGraph.addEdge('SeeLeben' ,'DasRosaGewesser', 6);
worldGraph.addEdge('SeeLeben' ,'DracheGrat', 7);
// worldGraph.addEdge('SeeLeben' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('SeeLeben' ,'FlimmernStrand', 5);

worldGraph.addEdge('SeeLeben' ,'Divinamentenia', 10);
worldGraph.addEdge('SeeLeben' ,'Escudo', 12);
worldGraph.addEdge('SeeLeben' ,'Estancia', 10);
worldGraph.addEdge('SeeLeben' ,'Inferior', 10);
worldGraph.addEdge('SeeLeben' ,'Sacretista', 12);
worldGraph.addEdge('SeeLeben' ,'Estragonia', 15);
worldGraph.addEdge('SeeLeben' ,'FlorAldea', 11);

worldGraph.addEdge('SeeLeben' ,'AkashAkh', 15);
worldGraph.addEdge('SeeLeben' ,'Akashsami', 17);
worldGraph.addEdge('SeeLeben' ,'Kasavat', 18);
worldGraph.addEdge('SeeLeben' ,'TavParvat', 17);
worldGraph.addEdge('SeeLeben' ,'NagmaWel', 20);
worldGraph.addEdge('SeeLeben' ,'Nirvasan', 18);
worldGraph.addEdge('SeeLeben' ,'Vedhshala', 15);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);
*/

// 플레만 스트란트
worldGraph.addEdge('FlimmernStrand' ,'Volcania', 10);
worldGraph.addEdge('FlimmernStrand' ,'Nuit', 12);
worldGraph.addEdge('FlimmernStrand' ,'Roche', 13);
worldGraph.addEdge('FlimmernStrand' ,'Hermetia', 12);
worldGraph.addEdge('FlimmernStrand' ,'LueCommercante', 15);
worldGraph.addEdge('FlimmernStrand' ,'VentPuissanct', 12);
worldGraph.addEdge('FlimmernStrand' ,'CielTrace', 13);
// worldGraph.addEdge('LueCommercante' ,'Profond', 2);

worldGraph.addEdge('FlimmernStrand' ,'Eldarada', 10);
worldGraph.addEdge('FlimmernStrand' ,'Nevagraniciti', 12);
worldGraph.addEdge('FlimmernStrand' ,'Luvesh', 8);
worldGraph.addEdge('FlimmernStrand' ,'XarMaros', 9);
worldGraph.addEdge('FlimmernStrand' ,'Gluvina', 12);
worldGraph.addEdge('FlimmernStrand' ,'Lusich', 8);
worldGraph.addEdge('FlimmernStrand' ,'Schviceni', 15);
worldGraph.addEdge('FlimmernStrand' ,'ChornyLabrinth', 4);

worldGraph.addEdge('FlimmernStrand' ,'Korallea', 0);
worldGraph.addEdge('FlimmernStrand' ,'LichtMeer', 2);
worldGraph.addEdge('FlimmernStrand' ,'Sonnen', 4);
worldGraph.addEdge('FlimmernStrand' ,'DasRosaGewesser', 1);
worldGraph.addEdge('FlimmernStrand' ,'DracheGrat', 3);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
// worldGraph.addEdge('FlimmernStrand' ,'FlimmernStrand', 5);

worldGraph.addEdge('FlimmernStrand' ,'Divinamentenia', 5);
worldGraph.addEdge('FlimmernStrand' ,'Escudo', 5);
worldGraph.addEdge('FlimmernStrand' ,'Estancia', 7);
worldGraph.addEdge('FlimmernStrand' ,'Inferior', 5);
worldGraph.addEdge('FlimmernStrand' ,'Sacretista', 7);
worldGraph.addEdge('FlimmernStrand' ,'Estragonia', 10);
worldGraph.addEdge('FlimmernStrand' ,'FlorAldea', 5);

worldGraph.addEdge('FlimmernStrand' ,'AkashAkh', 10);
worldGraph.addEdge('FlimmernStrand' ,'Akashsami', 12);
worldGraph.addEdge('FlimmernStrand' ,'Kasavat', 15);
worldGraph.addEdge('FlimmernStrand' ,'TavParvat', 14);
worldGraph.addEdge('FlimmernStrand' ,'NagmaWel', 18);
worldGraph.addEdge('FlimmernStrand' ,'Nirvasan', 18);
worldGraph.addEdge('FlimmernStrand' ,'Vedhshala', 15);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);



/*******************************************
 *                플로타피온                *  
********************************************/
// 디뷔나멘테니아
worldGraph.addEdge('Divinamentenia' ,'Volcania', 10);
worldGraph.addEdge('Divinamentenia' ,'Nuit', 12);
worldGraph.addEdge('Divinamentenia' ,'Roche', 13);
worldGraph.addEdge('Divinamentenia' ,'Hermetia', 12);
worldGraph.addEdge('Divinamentenia' ,'LueCommercante', 15);
worldGraph.addEdge('Divinamentenia' ,'VentPuissanct', 12);
worldGraph.addEdge('Divinamentenia' ,'CielTrace', 13);
// worldGraph.addEdge('Eldarada' ,'Profond', 5);

worldGraph.addEdge('Divinamentenia' ,'Eldarada', 10);
worldGraph.addEdge('Divinamentenia' ,'Nevagraniciti', 12);
worldGraph.addEdge('Divinamentenia' ,'Luvesh', 8);
worldGraph.addEdge('Divinamentenia' ,'XarMaros', 9);
worldGraph.addEdge('Divinamentenia' ,'Gluvina', 12);
worldGraph.addEdge('Divinamentenia' ,'Lusich', 10);
worldGraph.addEdge('Divinamentenia' ,'Schviceni', 15);
worldGraph.addEdge('Divinamentenia' ,'ChornyLabrinth', 8);

worldGraph.addEdge('Divinamentenia' ,'Korallea', 5);
worldGraph.addEdge('Divinamentenia' ,'LichtMeer', 7);
worldGraph.addEdge('Divinamentenia' ,'Sonnen', 6);
worldGraph.addEdge('Divinamentenia' ,'DasRosaGewesser', 6);
worldGraph.addEdge('Divinamentenia' ,'DracheGrat', 7);
// worldGraph.addEdge('Volcania' ,'WirbelZiel', 3);
// worldGraph.addEdge('Volcania' ,'SeeLeben', 3);
worldGraph.addEdge('Divinamentenia' ,'FlimmernStrand', 6);

// worldGraph.addEdge('Divinamentenia' ,'Divinamentenia', 10);
worldGraph.addEdge('Divinamentenia' ,'Escudo', 0);
worldGraph.addEdge('Divinamentenia' ,'Estancia', 2);
worldGraph.addEdge('Divinamentenia' ,'Inferior', 2);
worldGraph.addEdge('Divinamentenia' ,'Sacretista', 2);
worldGraph.addEdge('Divinamentenia' ,'Estragonia', 3);
worldGraph.addEdge('Divinamentenia' ,'FlorAldea', 3);

worldGraph.addEdge('Divinamentenia' ,'AkashAkh', 5);
worldGraph.addEdge('Divinamentenia' ,'Akashsami', 7);
worldGraph.addEdge('Divinamentenia' ,'Kasavat', 10);
worldGraph.addEdge('Divinamentenia' ,'TavParvat', 8);
worldGraph.addEdge('Divinamentenia' ,'NagmaWel', 8);
worldGraph.addEdge('Divinamentenia' ,'Nirvasan', 12);
worldGraph.addEdge('Divinamentenia' ,'Vedhshala', 7);
// worldGraph.addEdge('Volcania' ,'Himsail', 3);


// 에스쿠도
worldGraph.addEdge('Escudo' ,'Volcania', 10);
worldGraph.addEdge('Escudo' ,'Nuit', 12);
worldGraph.addEdge('Escudo' ,'Roche', 13);
worldGraph.addEdge('Escudo' ,'Hermetia', 12);
worldGraph.addEdge('Escudo' ,'LueCommercante', 15);
worldGraph.addEdge('Escudo' ,'VentPuissanct', 12);
worldGraph.addEdge('Escudo' ,'CielTrace', 13);
// worldGraph.addEdge('Nuit' ,'Profond', 5);

worldGraph.addEdge('Escudo' ,'Eldarada', 10);
worldGraph.addEdge('Escudo' ,'Nevagraniciti', 12);
worldGraph.addEdge('Escudo' ,'Luvesh', 7);
worldGraph.addEdge('Escudo' ,'XarMaros', 9);
worldGraph.addEdge('Escudo' ,'Gluvina', 12);
worldGraph.addEdge('Escudo' ,'Lusich', 10);
worldGraph.addEdge('Escudo' ,'Schviceni', 15);
worldGraph.addEdge('Escudo' ,'ChornyLabrinth', 8);

worldGraph.addEdge('Escudo' ,'Korallea', 5);
worldGraph.addEdge('Escudo' ,'LichtMeer', 7);
worldGraph.addEdge('Escudo' ,'Sonnen', 6);
worldGraph.addEdge('Escudo' ,'DasRosaGewesser', 6);
worldGraph.addEdge('Escudo' ,'DracheGrat', 7);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
// worldGraph.addEdge('Nuit' ,'FlimmernStrand', 11);

worldGraph.addEdge('Escudo' ,'Divinamentenia', 0);
// worldGraph.addEdge('Nevagraniciti' ,'Escudo', 12);
worldGraph.addEdge('Escudo' ,'Estancia', 3);
worldGraph.addEdge('Escudo' ,'Inferior', 3);
worldGraph.addEdge('Escudo' ,'Sacretista', 3);
worldGraph.addEdge('Escudo' ,'Estragonia', 3);
worldGraph.addEdge('Escudo' ,'FlorAldea', 0);

worldGraph.addEdge('Escudo' ,'AkashAkh', 5);
worldGraph.addEdge('Escudo' ,'Akashsami', 7);
worldGraph.addEdge('Escudo' ,'Kasavat', 10);
worldGraph.addEdge('Escudo' ,'TavParvat', 8);
worldGraph.addEdge('Escudo' ,'NagmaWel', 8);
worldGraph.addEdge('Escudo' ,'Nirvasan', 12);
worldGraph.addEdge('Escudo' ,'Vedhshala', 7);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 에스탄피아
worldGraph.addEdge('Estancia' ,'Volcania', 10);
worldGraph.addEdge('Estancia' ,'Nuit', 12);
worldGraph.addEdge('Estancia' ,'Roche', 13);
worldGraph.addEdge('Estancia' ,'Hermetia', 12);
worldGraph.addEdge('Estancia' ,'LueCommercante', 15);
worldGraph.addEdge('Estancia' ,'VentPuissanct', 12);
worldGraph.addEdge('Estancia' ,'CielTrace', 13);
// worldGraph.addEdge('Roche' ,'Profond', 3);

worldGraph.addEdge('Estancia' ,'Eldarada', 10);
worldGraph.addEdge('Estancia' ,'Nevagraniciti', 12);
worldGraph.addEdge('Estancia' ,'Luvesh', 8);
worldGraph.addEdge('Estancia' ,'XarMaros', 9);
worldGraph.addEdge('Estancia' ,'Gluvina', 12);
worldGraph.addEdge('Estancia' ,'Lusich', 10);
worldGraph.addEdge('Estancia' ,'Schviceni', 15);
worldGraph.addEdge('Estancia' ,'ChornyLabrinth', 8);

worldGraph.addEdge('Estancia' ,'Korallea', 5);
worldGraph.addEdge('Estancia' ,'LichtMeer', 7);
worldGraph.addEdge('Estancia' ,'Sonnen', 6);
worldGraph.addEdge('Estancia' ,'DasRosaGewesser', 6);
worldGraph.addEdge('Estancia' ,'DracheGrat', 7);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
// worldGraph.addEdge('Luvesh' ,'FlimmernStrand', 11);

worldGraph.addEdge('Estancia' ,'Divinamentenia', 3);
worldGraph.addEdge('Estancia' ,'Escudo', 3);
// worldGraph.addEdge('Luvesh' ,'Estancia', 10);
worldGraph.addEdge('Estancia' ,'Inferior', 0);
worldGraph.addEdge('Estancia' ,'Sacretista', 2);
worldGraph.addEdge('Estancia' ,'Estragonia', 5);
worldGraph.addEdge('Estancia' ,'FlorAldea', 4);

worldGraph.addEdge('Estancia' ,'AkashAkh', 5);
worldGraph.addEdge('Estancia' ,'Akashsami', 7);
worldGraph.addEdge('Estancia' ,'Kasavat', 10);
worldGraph.addEdge('Estancia' ,'TavParvat', 8);
worldGraph.addEdge('Estancia' ,'NagmaWel', 8);
worldGraph.addEdge('Estancia' ,'Nirvasan', 12);
worldGraph.addEdge('Estancia' ,'Vedhshala', 7);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 인페리오
worldGraph.addEdge('Inferior' ,'Volcania', 10);
worldGraph.addEdge('Inferior' ,'Nuit', 12);
worldGraph.addEdge('Inferior' ,'Roche', 13);
worldGraph.addEdge('Inferior' ,'Hermetia', 12);
worldGraph.addEdge('Inferior' ,'LueCommercante', 15);
worldGraph.addEdge('Inferior' ,'VentPuissanct', 12);
worldGraph.addEdge('Inferior' ,'CielTrace', 13);
// worldGraph.addEdge('Hermetia' ,'Profond', 3);

worldGraph.addEdge('Inferior' ,'Eldarada', 10);
worldGraph.addEdge('Inferior' ,'Nevagraniciti', 12);
worldGraph.addEdge('Inferior' ,'Luvesh', 8);
worldGraph.addEdge('Inferior' ,'XarMaros', 9);
worldGraph.addEdge('Inferior' ,'Gluvina', 12);
worldGraph.addEdge('Inferior' ,'Lusich', 10);
worldGraph.addEdge('Inferior' ,'Schviceni', 15);
worldGraph.addEdge('Inferior' ,'ChornyLabrinth', 8);

worldGraph.addEdge('Inferior' ,'Korallea', 5);
worldGraph.addEdge('Inferior' ,'LichtMeer', 7);
worldGraph.addEdge('Inferior' ,'Sonnen', 6);
worldGraph.addEdge('Inferior' ,'DasRosaGewesser', 6);
worldGraph.addEdge('Inferior' ,'DracheGrat', 7);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
// worldGraph.addEdge('XarMaros' ,'FlimmernStrand', 5);

worldGraph.addEdge('Inferior' ,'Divinamentenia', 3);
worldGraph.addEdge('Inferior' ,'Escudo', 3);
worldGraph.addEdge('Inferior' ,'Estancia', 0);
// worldGraph.addEdge('XarMaros' ,'Inferior', 7);
worldGraph.addEdge('Inferior' ,'Sacretista', 2);
worldGraph.addEdge('Inferior' ,'Estragonia', 5);
worldGraph.addEdge('Inferior' ,'FlorAldea', 3);

worldGraph.addEdge('Inferior' ,'AkashAkh', 5);
worldGraph.addEdge('Inferior' ,'Akashsami', 7);
worldGraph.addEdge('Inferior' ,'Kasavat', 10);
worldGraph.addEdge('Inferior' ,'TavParvat', 8);
worldGraph.addEdge('Inferior' ,'NagmaWel', 8);
worldGraph.addEdge('Inferior' ,'Nirvasan', 12);
worldGraph.addEdge('Inferior' ,'Vedhshala', 7);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 세크리티스타
worldGraph.addEdge('Sacretista' ,'Volcania', 10);
worldGraph.addEdge('Sacretista' ,'Nuit', 12);
worldGraph.addEdge('Sacretista' ,'Roche', 13);
worldGraph.addEdge('Sacretista' ,'Hermetia', 12);
worldGraph.addEdge('Sacretista' ,'LueCommercante', 15);
worldGraph.addEdge('Sacretista' ,'VentPuissanct', 12);
worldGraph.addEdge('Sacretista' ,'CielTrace', 13);
// worldGraph.addEdge('Gluvina' ,'Profond', 2);

worldGraph.addEdge('Sacretista' ,'Eldarada', 10);
worldGraph.addEdge('Sacretista' ,'Nevagraniciti', 12);
worldGraph.addEdge('Sacretista' ,'Luvesh', 8);
worldGraph.addEdge('Sacretista' ,'XarMaros', 9);
worldGraph.addEdge('Sacretista' ,'Gluvina', 12);
worldGraph.addEdge('Sacretista' ,'Lusich', 10);
worldGraph.addEdge('Sacretista' ,'Schviceni', 15);
worldGraph.addEdge('Sacretista' ,'ChornyLabrinth', 8);

worldGraph.addEdge('Sacretista' ,'Korallea', 5);
worldGraph.addEdge('Sacretista' ,'LichtMeer', 7);
worldGraph.addEdge('Sacretista' ,'Sonnen', 6);
worldGraph.addEdge('Sacretista' ,'DasRosaGewesser', 6);
worldGraph.addEdge('Sacretista' ,'DracheGrat', 7);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
// worldGraph.addEdge('Gluvina' ,'FlimmernStrand', 5);

worldGraph.addEdge('Sacretista' ,'Divinamentenia', 1);
worldGraph.addEdge('Sacretista' ,'Escudo', 3);
worldGraph.addEdge('Sacretista' ,'Estancia', 2);
worldGraph.addEdge('Sacretista' ,'Inferior', 3);
// worldGraph.addEdge('Sacretista' ,'Sacretista', 12);
worldGraph.addEdge('Sacretista' ,'Estragonia', 3);
worldGraph.addEdge('Sacretista' ,'FlorAldea', 4);

worldGraph.addEdge('Sacretista' ,'AkashAkh', 5);
worldGraph.addEdge('Sacretista' ,'Akashsami', 7);
worldGraph.addEdge('Sacretista' ,'Kasavat', 10);
worldGraph.addEdge('Sacretista' ,'TavParvat', 8);
worldGraph.addEdge('Sacretista' ,'NagmaWel', 8);
worldGraph.addEdge('Sacretista' ,'Nirvasan', 12);
worldGraph.addEdge('Sacretista' ,'Vedhshala', 7);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 에스트라고니아
worldGraph.addEdge('Estragonia' ,'Volcania', 10);
worldGraph.addEdge('Estragonia' ,'Nuit', 12);
worldGraph.addEdge('Estragonia' ,'Roche', 13);
worldGraph.addEdge('Estragonia' ,'Hermetia', 12);
worldGraph.addEdge('Estragonia' ,'LueCommercante', 15);
worldGraph.addEdge('Estragonia' ,'VentPuissanct', 12);
worldGraph.addEdge('Estragonia' ,'CielTrace', 13);
// worldGraph.addEdge('Lusich' ,'Profond', 5);

worldGraph.addEdge('Estragonia' ,'Eldarada', 10);
worldGraph.addEdge('Estragonia' ,'Nevagraniciti', 12);
worldGraph.addEdge('Estragonia' ,'Luvesh', 8);
worldGraph.addEdge('Estragonia' ,'XarMaros', 9);
worldGraph.addEdge('Estragonia' ,'Gluvina', 12);
worldGraph.addEdge('Estragonia' ,'Lusich', 10);
worldGraph.addEdge('Estragonia' ,'Schviceni', 15);
worldGraph.addEdge('Estragonia' ,'ChornyLabrinth', 8);

worldGraph.addEdge('Estragonia' ,'Korallea', 5);
worldGraph.addEdge('Estragonia' ,'LichtMeer', 7);
worldGraph.addEdge('Estragonia' ,'Sonnen', 6);
worldGraph.addEdge('Estragonia' ,'DasRosaGewesser', 6);
worldGraph.addEdge('Estragonia' ,'DracheGrat', 7);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
// worldGraph.addEdge('Lusich' ,'FlimmernStrand', 5);

worldGraph.addEdge('Estragonia' ,'Divinamentenia', 2);
worldGraph.addEdge('Estragonia' ,'Escudo', 2);
worldGraph.addEdge('Estragonia' ,'Estancia', 5);
worldGraph.addEdge('Estragonia' ,'Inferior', 5);
worldGraph.addEdge('Estragonia' ,'Sacretista', 4);
// worldGraph.addEdge('Lusich' ,'Estragonia', 15);
worldGraph.addEdge('Estragonia' ,'FlorAldea', 3);

worldGraph.addEdge('Estragonia' ,'AkashAkh', 5);
worldGraph.addEdge('Estragonia' ,'Akashsami', 7);
worldGraph.addEdge('Estragonia' ,'Kasavat', 10);
worldGraph.addEdge('Estragonia' ,'TavParvat', 8);
worldGraph.addEdge('Estragonia' ,'NagmaWel', 8);
worldGraph.addEdge('Estragonia' ,'Nirvasan', 12);
worldGraph.addEdge('Estragonia' ,'Vedhshala', 7);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);


// 플로 알데아
worldGraph.addEdge('FlorAldea' ,'Volcania', 10);
worldGraph.addEdge('FlorAldea' ,'Nuit', 12);
worldGraph.addEdge('FlorAldea' ,'Roche', 13);
worldGraph.addEdge('FlorAldea' ,'Hermetia', 12);
worldGraph.addEdge('FlorAldea' ,'LueCommercante', 15);
worldGraph.addEdge('FlorAldea' ,'VentPuissanct', 12);
worldGraph.addEdge('FlorAldea' ,'CielTrace', 13);
// worldGraph.addEdge('Schviceni' ,'Profond', 3);

worldGraph.addEdge('FlorAldea' ,'Eldarada', 10);
worldGraph.addEdge('FlorAldea' ,'Nevagraniciti', 12);
worldGraph.addEdge('FlorAldea' ,'Luvesh', 8);
worldGraph.addEdge('FlorAldea' ,'XarMaros', 9);
worldGraph.addEdge('FlorAldea' ,'Gluvina', 12);
worldGraph.addEdge('FlorAldea' ,'Lusich', 10);
worldGraph.addEdge('FlorAldea' ,'Schviceni', 15);
worldGraph.addEdge('FlorAldea' ,'ChornyLabrinth', 8);

worldGraph.addEdge('FlorAldea' ,'Korallea', 5);
worldGraph.addEdge('FlorAldea' ,'LichtMeer', 7);
worldGraph.addEdge('FlorAldea' ,'Sonnen', 6);
worldGraph.addEdge('FlorAldea' ,'DasRosaGewesser', 6);
worldGraph.addEdge('FlorAldea' ,'DracheGrat', 7);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
// worldGraph.addEdge('Schviceni' ,'FlimmernStrand', 5);

worldGraph.addEdge('FlorAldea' ,'Divinamentenia', 3);
worldGraph.addEdge('FlorAldea' ,'Escudo', 0);
worldGraph.addEdge('FlorAldea' ,'Estancia', 3);
worldGraph.addEdge('FlorAldea' ,'Inferior', 2);
worldGraph.addEdge('FlorAldea' ,'Sacretista', 3);
worldGraph.addEdge('FlorAldea' ,'Estragonia', 3);
// worldGraph.addEdge('FlorAldea' ,'FlorAldea', 11);

worldGraph.addEdge('FlorAldea' ,'AkashAkh', 5);
worldGraph.addEdge('FlorAldea' ,'Akashsami', 7);
worldGraph.addEdge('FlorAldea' ,'Kasavat', 10);
worldGraph.addEdge('FlorAldea' ,'TavParvat', 8);
worldGraph.addEdge('FlorAldea' ,'NagmaWel', 8);
worldGraph.addEdge('FlorAldea' ,'Nirvasan', 12);
worldGraph.addEdge('FlorAldea' ,'Vedhshala', 7);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);



/*******************************************
 *                   아심                  *  
********************************************/
// 아다쉬 아크
worldGraph.addEdge('AkashAkh' ,'Volcania', 10);
worldGraph.addEdge('AkashAkh' ,'Nuit', 12);
worldGraph.addEdge('AkashAkh' ,'Roche', 13);
worldGraph.addEdge('AkashAkh' ,'Hermetia', 12);
worldGraph.addEdge('AkashAkh' ,'LueCommercante', 15);
worldGraph.addEdge('AkashAkh' ,'VentPuissanct', 12);
worldGraph.addEdge('AkashAkh' ,'CielTrace', 13);
// worldGraph.addEdge('Eldarada' ,'Profond', 5);

worldGraph.addEdge('AkashAkh' ,'Eldarada', 15);
worldGraph.addEdge('AkashAkh' ,'Nevagraniciti', 17);
worldGraph.addEdge('AkashAkh' ,'Luvesh', 13);
worldGraph.addEdge('AkashAkh' ,'XarMaros', 12);
worldGraph.addEdge('AkashAkh' ,'Gluvina', 17);
worldGraph.addEdge('AkashAkh' ,'Lusich', 18);
worldGraph.addEdge('AkashAkh' ,'Schviceni', 20);
worldGraph.addEdge('AkashAkh' ,'ChornyLabrinth', 18);

worldGraph.addEdge('AkashAkh' ,'Korallea', 10);
worldGraph.addEdge('AkashAkh' ,'LichtMeer', 12);
worldGraph.addEdge('AkashAkh' ,'Sonnen', 12);
worldGraph.addEdge('AkashAkh' ,'DasRosaGewesser', 13);
worldGraph.addEdge('AkashAkh' ,'DracheGrat', 13);
// worldGraph.addEdge('Volcania' ,'WirbelZiel', 3);
// worldGraph.addEdge('Volcania' ,'SeeLeben', 3);
worldGraph.addEdge('AkashAkh' ,'FlimmernStrand', 15);

worldGraph.addEdge('AkashAkh' ,'Divinamentenia', 5);
worldGraph.addEdge('AkashAkh' ,'Escudo', 7);
worldGraph.addEdge('AkashAkh' ,'Estancia', 5);
worldGraph.addEdge('AkashAkh' ,'Inferior', 7);
worldGraph.addEdge('AkashAkh' ,'Sacretista', 4);
worldGraph.addEdge('AkashAkh' ,'Estragonia', 7);
worldGraph.addEdge('AkashAkh' ,'FlorAldea', 7);

// worldGraph.addEdge('Eldarada' ,'AkashAkh', 15);
worldGraph.addEdge('AkashAkh' ,'Akashsami', 0);
worldGraph.addEdge('AkashAkh' ,'Kasavat', 4);
worldGraph.addEdge('AkashAkh' ,'TavParvat', 3);
worldGraph.addEdge('AkashAkh' ,'NagmaWel', 5);
worldGraph.addEdge('AkashAkh' ,'Nirvasan', 5);
worldGraph.addEdge('AkashAkh' ,'Vedhshala', 5);
worldGraph.addEdge('AkashAkh' ,'Himsail', 7);


// 아다쉬사미
worldGraph.addEdge('Akashsami' ,'Volcania', 10);
worldGraph.addEdge('Akashsami' ,'Nuit', 12);
worldGraph.addEdge('Akashsami' ,'Roche', 13);
worldGraph.addEdge('Akashsami' ,'Hermetia', 12);
worldGraph.addEdge('Akashsami' ,'LueCommercante', 15);
worldGraph.addEdge('Akashsami' ,'VentPuissanct', 12);
worldGraph.addEdge('Akashsami' ,'CielTrace', 13);
// worldGraph.addEdge('Nuit' ,'Profond', 5);

worldGraph.addEdge('AkashAkh' ,'Eldarada', 15);
worldGraph.addEdge('AkashAkh' ,'Nevagraniciti', 17);
worldGraph.addEdge('AkashAkh' ,'Luvesh', 15);
worldGraph.addEdge('AkashAkh' ,'XarMaros', 16);
worldGraph.addEdge('AkashAkh' ,'Gluvina', 18);
worldGraph.addEdge('AkashAkh' ,'Lusich', 18);
worldGraph.addEdge('AkashAkh' ,'Schviceni', 20);
worldGraph.addEdge('AkashAkh' ,'ChornyLabrinth', 17);

worldGraph.addEdge('Akashsami' ,'Korallea', 10);
worldGraph.addEdge('Akashsami' ,'LichtMeer', 12);
worldGraph.addEdge('Akashsami' ,'Sonnen', 12);
worldGraph.addEdge('Akashsami' ,'DasRosaGewesser', 13);
worldGraph.addEdge('Akashsami' ,'DracheGrat', 13);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('Akashsami' ,'FlimmernStrand', 15);

worldGraph.addEdge('Akashsami' ,'Divinamentenia', 5);
worldGraph.addEdge('Akashsami' ,'Escudo', 7);
worldGraph.addEdge('Akashsami' ,'Estancia', 5);
worldGraph.addEdge('Akashsami' ,'Inferior', 7);
worldGraph.addEdge('Akashsami' ,'Sacretista', 3);
worldGraph.addEdge('Akashsami' ,'Estragonia', 7);
worldGraph.addEdge('Akashsami' ,'FlorAldea', 7);

worldGraph.addEdge('Akashsami' ,'AkashAkh', 0);
// worldGraph.addEdge('Nevagraniciti' ,'Akashsami', 17);
worldGraph.addEdge('Akashsami' ,'Kasavat', 4);
worldGraph.addEdge('Akashsami' ,'TavParvat', 3);
worldGraph.addEdge('Akashsami' ,'NagmaWel', 5);
worldGraph.addEdge('Akashsami' ,'Nirvasan', 5);
worldGraph.addEdge('Akashsami' ,'Vedhshala', 5);
worldGraph.addEdge('Akashsami' ,'Himsail', 7);


// 카사바트
worldGraph.addEdge('Kasavat' ,'Volcania', 10);
worldGraph.addEdge('Kasavat' ,'Nuit', 12);
worldGraph.addEdge('Kasavat' ,'Roche', 13);
worldGraph.addEdge('Kasavat' ,'Hermetia', 12);
worldGraph.addEdge('Kasavat' ,'LueCommercante', 15);
worldGraph.addEdge('Kasavat' ,'VentPuissanct', 12);
worldGraph.addEdge('Kasavat' ,'CielTrace', 13);
// worldGraph.addEdge('Roche' ,'Profond', 3);

worldGraph.addEdge('Kasavat' ,'Eldarada', 15);
worldGraph.addEdge('Kasavat' ,'Nevagraniciti', 17);
worldGraph.addEdge('Kasavat' ,'Luvesh', 13);
worldGraph.addEdge('Kasavat' ,'XarMaros', 14);
worldGraph.addEdge('Kasavat' ,'Gluvina', 17);
worldGraph.addEdge('Kasavat' ,'Lusich', 17);
worldGraph.addEdge('Kasavat' ,'Schviceni', 17);
worldGraph.addEdge('Kasavat' ,'ChornyLabrinth', 17);

worldGraph.addEdge('Kasavat' ,'Korallea', 10);
worldGraph.addEdge('Kasavat' ,'LichtMeer', 12);
worldGraph.addEdge('Kasavat' ,'Sonnen', 12);
worldGraph.addEdge('Kasavat' ,'DasRosaGewesser', 12);
worldGraph.addEdge('Kasavat' ,'DracheGrat', 13);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('Kasavat' ,'FlimmernStrand', 15);

worldGraph.addEdge('Kasavat' ,'Divinamentenia', 5);
worldGraph.addEdge('Kasavat' ,'Escudo', 7);
worldGraph.addEdge('Kasavat' ,'Estancia', 5);
worldGraph.addEdge('Kasavat' ,'Inferior', 7);
worldGraph.addEdge('Kasavat' ,'Sacretista', 5);
worldGraph.addEdge('Kasavat' ,'Estragonia', 7);
worldGraph.addEdge('Kasavat' ,'FlorAldea', 7);

worldGraph.addEdge('Kasavat' ,'AkashAkh', 4);
worldGraph.addEdge('Kasavat' ,'Akashsami', 3);
// worldGraph.addEdge('Kasavat' ,'Kasavat', 18);
worldGraph.addEdge('Kasavat' ,'TavParvat', 0);
worldGraph.addEdge('Kasavat' ,'NagmaWel', 5);
worldGraph.addEdge('Kasavat' ,'Nirvasan', 1);
worldGraph.addEdge('Kasavat' ,'Vedhshala', 4);
worldGraph.addEdge('Kasavat' ,'Himsail', 7);


// 타브 파르바트
worldGraph.addEdge('TavParvat' ,'Volcania', 10);
worldGraph.addEdge('TavParvat' ,'Nuit', 12);
worldGraph.addEdge('TavParvat' ,'Roche', 13);
worldGraph.addEdge('TavParvat' ,'Hermetia', 12);
worldGraph.addEdge('TavParvat' ,'LueCommercante', 15);
worldGraph.addEdge('TavParvat' ,'VentPuissanct', 12);
worldGraph.addEdge('TavParvat' ,'CielTrace', 13);
// worldGraph.addEdge('Hermetia' ,'Profond', 3);

worldGraph.addEdge('TavParvat' ,'Eldarada', 15);
worldGraph.addEdge('TavParvat' ,'Nevagraniciti', 17);
worldGraph.addEdge('TavParvat' ,'Luvesh', 13);
worldGraph.addEdge('TavParvat' ,'XarMaros', 16);
worldGraph.addEdge('TavParvat' ,'Gluvina', 17);
worldGraph.addEdge('TavParvat' ,'Lusich', 18);
worldGraph.addEdge('TavParvat' ,'Schviceni', 20);
worldGraph.addEdge('TavParvat' ,'ChornyLabrinth', 17);

worldGraph.addEdge('TavParvat' ,'Korallea', 10);
worldGraph.addEdge('TavParvat' ,'LichtMeer', 12);
worldGraph.addEdge('TavParvat' ,'Sonnen', 12);
worldGraph.addEdge('TavParvat' ,'DasRosaGewesser', 13);
worldGraph.addEdge('TavParvat' ,'DracheGrat', 13);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('TavParvat' ,'FlimmernStrand', 15);

worldGraph.addEdge('TavParvat' ,'Divinamentenia', 5);
worldGraph.addEdge('TavParvat' ,'Escudo', 7);
worldGraph.addEdge('TavParvat' ,'Estancia', 5);
worldGraph.addEdge('TavParvat' ,'Inferior', 7);
worldGraph.addEdge('TavParvat' ,'Sacretista', 10);
worldGraph.addEdge('TavParvat' ,'Estragonia', 15);
worldGraph.addEdge('TavParvat' ,'FlorAldea', 12);

worldGraph.addEdge('TavParvat' ,'AkashAkh', 3);
worldGraph.addEdge('TavParvat' ,'Akashsami', 2);
worldGraph.addEdge('TavParvat' ,'Kasavat', 0);
// worldGraph.addEdge('XarMaros' ,'TavParvat', 17);
worldGraph.addEdge('TavParvat' ,'NagmaWel', 4);
worldGraph.addEdge('TavParvat' ,'Nirvasan', 3);
worldGraph.addEdge('TavParvat' ,'Vedhshala', 4);
worldGraph.addEdge('TavParvat' ,'Himsail', 7);


// 나그마 웰
worldGraph.addEdge('NagmaWel' ,'Volcania', 10);
worldGraph.addEdge('NagmaWel' ,'Nuit', 12);
worldGraph.addEdge('NagmaWel' ,'Roche', 13);
worldGraph.addEdge('NagmaWel' ,'Hermetia', 12);
worldGraph.addEdge('NagmaWel' ,'LueCommercante', 15);
worldGraph.addEdge('NagmaWel' ,'VentPuissanct', 12);
worldGraph.addEdge('NagmaWel' ,'CielTrace', 13);
// worldGraph.addEdge('Gluvina' ,'Profond', 2);

worldGraph.addEdge('NagmaWel' ,'Eldarada', 15);
worldGraph.addEdge('NagmaWel' ,'Nevagraniciti', 17);
worldGraph.addEdge('NagmaWel' ,'Luvesh', 13);
worldGraph.addEdge('NagmaWel' ,'XarMaros', 12);
worldGraph.addEdge('NagmaWel' ,'Gluvina', 17);
worldGraph.addEdge('NagmaWel' ,'Lusich', 15);
worldGraph.addEdge('NagmaWel' ,'Schviceni', 20);
worldGraph.addEdge('NagmaWel' ,'ChornyLabrinth', 17);

worldGraph.addEdge('NagmaWel' ,'Korallea', 10);
worldGraph.addEdge('NagmaWel' ,'LichtMeer', 12);
worldGraph.addEdge('NagmaWel' ,'Sonnen', 12);
worldGraph.addEdge('NagmaWel' ,'DasRosaGewesser', 13);
worldGraph.addEdge('NagmaWel' ,'DracheGrat', 13);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('NagmaWel' ,'FlimmernStrand', 15);

worldGraph.addEdge('NagmaWel' ,'Divinamentenia', 5);
worldGraph.addEdge('NagmaWel' ,'Escudo', 7);
worldGraph.addEdge('NagmaWel' ,'Estancia', 5);
worldGraph.addEdge('NagmaWel' ,'Inferior', 7);
worldGraph.addEdge('NagmaWel' ,'Sacretista', 5);
worldGraph.addEdge('NagmaWel' ,'Estragonia', 7);
worldGraph.addEdge('NagmaWel' ,'FlorAldea', 7);

worldGraph.addEdge('NagmaWel' ,'AkashAkh', 5);
worldGraph.addEdge('NagmaWel' ,'Akashsami', 4);
worldGraph.addEdge('NagmaWel' ,'Kasavat', 3);
worldGraph.addEdge('NagmaWel' ,'TavParvat', 3);
// worldGraph.addEdge('Gluvina' ,'NagmaWel', 20);
worldGraph.addEdge('NagmaWel' ,'Nirvasan', 4);
worldGraph.addEdge('NagmaWel' ,'Vedhshala', 5);
worldGraph.addEdge('NagmaWel' ,'Himsail', 3);


// 니르바산
worldGraph.addEdge('Nirvasan' ,'Volcania', 10);
worldGraph.addEdge('Nirvasan' ,'Nuit', 12);
worldGraph.addEdge('Nirvasan' ,'Roche', 13);
worldGraph.addEdge('Nirvasan' ,'Hermetia', 12);
worldGraph.addEdge('Nirvasan' ,'LueCommercante', 15);
worldGraph.addEdge('Nirvasan' ,'VentPuissanct', 12);
worldGraph.addEdge('Nirvasan' ,'CielTrace', 13);
// worldGraph.addEdge('Lusich' ,'Profond', 5);

worldGraph.addEdge('Nirvasan' ,'Eldarada', 15);
worldGraph.addEdge('Nirvasan' ,'Nevagraniciti', 17);
worldGraph.addEdge('Nirvasan' ,'Luvesh', 13);
worldGraph.addEdge('Nirvasan' ,'XarMaros', 16);
worldGraph.addEdge('Nirvasan' ,'Gluvina', 17);
worldGraph.addEdge('Nirvasan' ,'Lusich', 15);
worldGraph.addEdge('Nirvasan' ,'Schviceni', 20);
worldGraph.addEdge('Nirvasan' ,'ChornyLabrinth', 17);

worldGraph.addEdge('Nirvasan' ,'Korallea', 10);
worldGraph.addEdge('Nirvasan' ,'LichtMeer', 12);
worldGraph.addEdge('Nirvasan' ,'Sonnen', 12);
worldGraph.addEdge('Nirvasan' ,'DasRosaGewesser', 13);
worldGraph.addEdge('Nirvasan' ,'DracheGrat', 13);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('Nirvasan' ,'FlimmernStrand', 15);

worldGraph.addEdge('Nirvasan' ,'Divinamentenia', 5);
worldGraph.addEdge('Nirvasan' ,'Escudo', 7);
worldGraph.addEdge('Nirvasan' ,'Estancia', 5);
worldGraph.addEdge('Nirvasan' ,'Inferior', 7);
worldGraph.addEdge('Nirvasan' ,'Sacretista', 5);
worldGraph.addEdge('Nirvasan' ,'Estragonia', 7);
worldGraph.addEdge('Nirvasan' ,'FlorAldea', 7);

worldGraph.addEdge('Nirvasan' ,'AkashAkh', 5);
worldGraph.addEdge('Nirvasan' ,'Akashsami', 4);
worldGraph.addEdge('Nirvasan' ,'Kasavat', 0);
worldGraph.addEdge('Nirvasan' ,'TavParvat', 2);
worldGraph.addEdge('Nirvasan' ,'NagmaWel', 4);
// worldGraph.addEdge('Lusich' ,'Nirvasan', 18);
worldGraph.addEdge('Nirvasan' ,'Vedhshala', 4);
worldGraph.addEdge('Nirvasan' ,'Himsail', 4);


// 빗살라
worldGraph.addEdge('Vedhshala' ,'Volcania', 10);
worldGraph.addEdge('Vedhshala' ,'Nuit', 12);
worldGraph.addEdge('Vedhshala' ,'Roche', 13);
worldGraph.addEdge('Vedhshala' ,'Hermetia', 12);
worldGraph.addEdge('Vedhshala' ,'LueCommercante', 15);
worldGraph.addEdge('Vedhshala' ,'VentPuissanct', 12);
worldGraph.addEdge('Vedhshala' ,'CielTrace', 13);
// worldGraph.addEdge('Schviceni' ,'Profond', 3);

worldGraph.addEdge('Vedhshala' ,'Eldarada', 15);
worldGraph.addEdge('Vedhshala' ,'Nevagraniciti', 17);
worldGraph.addEdge('Vedhshala' ,'Luvesh', 13);
worldGraph.addEdge('Vedhshala' ,'XarMaros', 12);
worldGraph.addEdge('Vedhshala' ,'Gluvina', 17);
worldGraph.addEdge('Vedhshala' ,'Lusich', 15);
worldGraph.addEdge('Vedhshala' ,'Schviceni', 20);
worldGraph.addEdge('Vedhshala' ,'ChornyLabrinth', 17);

worldGraph.addEdge('Vedhshala' ,'Korallea', 10);
worldGraph.addEdge('Vedhshala' ,'LichtMeer', 12);
worldGraph.addEdge('Vedhshala' ,'Sonnen', 12);
worldGraph.addEdge('Vedhshala' ,'DasRosaGewesser', 13);
worldGraph.addEdge('Vedhshala' ,'DracheGrat', 13);
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
worldGraph.addEdge('Vedhshala' ,'FlimmernStrand', 15);

worldGraph.addEdge('Vedhshala' ,'Divinamentenia', 5);
worldGraph.addEdge('Vedhshala' ,'Escudo', 7);
worldGraph.addEdge('Vedhshala' ,'Estancia', 5);
worldGraph.addEdge('Vedhshala' ,'Inferior', 7);
worldGraph.addEdge('Vedhshala' ,'Sacretista', 5);
worldGraph.addEdge('Vedhshala' ,'Estragonia', 7);
worldGraph.addEdge('Vedhshala' ,'FlorAldea', 7);

worldGraph.addEdge('Vedhshala' ,'AkashAkh', 3);
worldGraph.addEdge('Vedhshala' ,'Akashsami', 3);
worldGraph.addEdge('Vedhshala' ,'Kasavat', 4);
worldGraph.addEdge('Vedhshala' ,'TavParvat', 4);
worldGraph.addEdge('Vedhshala' ,'NagmaWel', 5);
worldGraph.addEdge('Vedhshala' ,'Nirvasan', 4);
// worldGraph.addEdge('Schviceni' ,'Vedhshala', 15);
worldGraph.addEdge('Vedhshala' ,'Himsail', 7);


// 힘세일
worldGraph.addEdge('Himsail' ,'AkashAkh', 7);
worldGraph.addEdge('Himsail' ,'Akashsami', 7);
worldGraph.addEdge('Himsail' ,'Kasavat', 4);
worldGraph.addEdge('Himsail' ,'TavParvat', 4);
worldGraph.addEdge('Himsail' ,'NagmaWel', 3);
worldGraph.addEdge('Himsail' ,'Nirvasan', 4);
worldGraph.addEdge('Himsail' ,'Vedhshala', 7);
// worldGraph.addEdge('Nuit' ,'Himsail', 3);



console.log(worldGraph);