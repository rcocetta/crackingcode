"use strict";
var AdjacencyListGraph = require('../../data_structures/graphs/adj_list_graph.js'),
    expect = require('chai').expect,
    wikipediaV = [
    	{id: "1", val: "A" },
    	{id: "2", val: "B" },
    	{id: "3", val: "C" },
    	{id: "4", val: "D" },
    	{id: "5", val: "E" },
    	{id: "6", val: "F" },
    	{id: "7", val: "G" },
    ], 
    wikipediaE = [
    	{"from": "1", "to": "2"},
    	{"from": "1", "to": "3"},
    	{"from": "1", "to": "5"},
    	{"from": "2", "to": "4"},
    	{"from": "2", "to": "6"},
    	{"from": "3", "to": "7"},
    	{"from": "5", "to": "6"},
    ];


describe("Adjacency List Graph - ", function () {
	let vertexes = [{id: "1", val: "A"}, {id: "2", val: "B"}, {id: "3", val: "C"}, {id: "4", val: "D"}],
	    edges = [{from: "1", to: "2"}, {from: "2", to: "3"}, {from: "3", to:"1"}, {from: "3", to: "4"}],
	    g, g2;
	it("should create a graph" , function  () {
		g = new AdjacencyListGraph(vertexes, edges);
		g2 = new AdjacencyListGraph(vertexes, edges, true);
		expect(g).to.not.equal(null);
	});

	it("should have a link between 2 and 3", function () {
		var l = g.isEdge({id: "2"}, {"id": "3"});
		expect(l).to.deep.equal({to: "3", "w": undefined});
	});

	it("Should print dfs, as in Wikipedia", function () {
		var wG = new AdjacencyListGraph(wikipediaV, wikipediaE),
		    str = wG.dfs();
		expect(str).to.equal("ABDFECG");
	});

    it("Should print bfs", function () {
        var wG = new AdjacencyListGraph(wikipediaV, wikipediaE),
            str = wG.bfs();
        console.log(str);
        expect(str).to.equal("ABCEDFG");
    });

});