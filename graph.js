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

		this.adjList = new Map();
	}

	// Pushing vertex v into the graph by init values w/ an array
	addNode(v)
	{
		this.adjList.set(v, new Node(v));
	}

	// Adding edge between src to dest
	addEdge(src, dest, dist)
	{
		this.adjList.get(src).addEdge(dest,dist);
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

console.log("Nodes initiallized");
console.log(worldGraph);

// 볼카니아
// worldGraph.addEdge('Volcania' ,'Volcania', 0);
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
// worldGraph.addEdge('Volcania' ,'WirbelZiel', 3);
// worldGraph.addEdge('Volcania' ,'SeeLeben', 3);
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
// worldGraph.addEdge('Volcania' ,'Himsail', 3);

// 누이트
worldGraph.addEdge('Nuit' ,'Volcania', 0);
// worldGraph.addEdge('Volcania' ,'Nuit', 0);
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
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
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
// worldGraph.addEdge('Nuit' ,'Himsail', 3);

// 로오쉬
worldGraph.addEdge('Roche' ,'Volcania', 3);
worldGraph.addEdge('Roche' ,'Nuit', 2);
// worldGraph.addEdge('Nuit' ,'Roche', 2);
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
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
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
// worldGraph.addEdge('Nuit' ,'Himsail', 3);

// 헤그메티아
worldGraph.addEdge('Hermetia' ,'Volcania', 1);
worldGraph.addEdge('Hermetia' ,'Nuit', 1);
worldGraph.addEdge('Hermetia' ,'Roche', 1);
// worldGraph.addEdge('Roche' ,'Hermetia', 0);
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
// worldGraph.addEdge('Nuit' ,'WirbelZiel', 3);
// worldGraph.addEdge('Nuit' ,'SeeLeben', 3);
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
// worldGraph.addEdge('Nuit' ,'Himsail', 3);

