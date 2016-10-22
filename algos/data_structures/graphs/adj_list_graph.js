"use strict";

function getEdge(list, u) {
	var found;
	list.some((e) => {
		if (e.to === u.id) {
			found = e;
		}
		return !!found;
	});

	return found;
}

class AdjacencyListGraph {
	/**
	 * Builds the graph
	 * @param  {array}  V The list of the vertexes ({id: v_id, val: val})
	 * @param  {array}  E The list of edges {from: id, to: id, *w: weigth} (w is optional)
	 */
	constructor(V, E, directed) {
		this.directed = !!directed;
		this.adjList = {};
		this.numEdges = 0;
		this.V = V;

		V.forEach((v) => {
			this.adjList[v.id] = {id: v.id, val: v.val, adj: []};
		});

		E.forEach((e) => {
			let adjList = this.adjList,
			    to = e.to, 
			    eFrom = e.from,
			    toAdj = adjList[e.to].adj,
			    found;
			this.numEdges++;

			adjList[eFrom].adj.push({to: to, w: e.w});

			//double up on the edges if the graph is not directed
			if (!this.directed) {
				found = toAdj.find((el) => el.id === eFrom);
				if (!found) {
					toAdj.push({to: eFrom, w: e.w});
				}
			}
		});
	}

	getVertexById(id) {
		return this.V.find((el) => el.id === id);
	}

	isEdge(u, v) {
		var list = this.adjList[u.id].adj, 
		    found;

		found = getEdge(list, v);

		if (found) {
			return found;
		}

		return found;
	}

	isDirected() {
		return this.isDirected;
	}


	numVertexes () {
		return this.adjList.length;
	}

	numEdges () {
		return this.numEdges;
	}

	dfs (v) {
		let str="", 
		    discovered;

		if (!v) {
			//initialise
			this.discovered = {};
			v=this.adjList[this.V[0].id];
		}
		discovered = this.discovered;

		str += v.val;
		
		discovered[v.id] = true;

		v.adj.forEach((e) => {
			var u = this.adjList[e.to];

			if (!discovered[u.id]) {
				str += this.dfs(u);
			}
		});
		return str;
	}

	bfs () {
		let root = this.V[0],
		    queue = [], 
		    current,
		    adjNodes,
		    enqueue, 
		    str ="";

		console.dir(this.V);

		enqueue = function(el) {
			let v = this.getVertexById(el.to);
			if (!v.bfs_visited) {
				v.bfs_visited =
				queue.push(v);
			}
		};

		queue.push(root);
		root.bfs_visited = true;
		while (queue.length > 0) {
			current = queue.shift();
			str += current.val || "";
			adjNodes = this.adjList[current.id].adj;
			adjNodes.forEach(enqueue.bind(this));
		}

		return str;
	}

	print() {
		console.log("==== Nodes =====");
		console.dir(this.adjList, 3);
		console.log("==== Links ====");
		Object.keys(this.adjList).forEach((key) => {
			var list = this.adjList[key].adj;
			console.log(this.adjList[key].id + ":   ");
			console.dir(list);	
		});

	}

}



module.exports = AdjacencyListGraph;
 