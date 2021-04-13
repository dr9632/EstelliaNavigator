// Import graph.js
import {Graph} from 'graph.js';

// Full teleportable points : 39
const POINTS_NUM = 39;

var worldGraph = new Graph();
var points = ['볼카니아', '누이트', '로오쉬', '헤그메타아', '루코메상트', '봉피상트', '시엘트하스', '포포',
			  '엘다라다', '네바그라니치티', '루베시', '자르마로스', '글루비나', '루시치', '스뷔센니', '쵸르니라비린스',
			  '코할레아', '리히트미아', '소넨', '다로자그베사', '드라흐가트', '빌들지엘', '시리빈', '플레만스트란트', 
			  '디뷔나멘테니아', '에스쿠도', '에스탄피아', '인페리오', '세크리티스타', '에스트라고니아', '플로알데아', 
			  '아다쉬아크', '아다쉬사미', '카사바트', '타브파르바트', '나그마웰', '니르바산', '빗살라', '힘세일'];

for(let i = 0; i < POINTS_NUM; i++) {
	worldGraph.addNode(points[i]);
}

console.log("Nodes initiallized");