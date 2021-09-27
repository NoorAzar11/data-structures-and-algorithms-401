'use strict';

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}


class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            return;
        }
        const adjacencies = this.adjacencyList.get(start);
        adjacencies.push(new Edge(end, weight));
    }

    getNeighbours(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            return;
        }
        return this.adjacencyList.get(vertex);
    }
}




function businessTrip(graphtrip, graphtriparray) {

    let totalgraph = 0;
    let graphcheck = false;

    for (let j = 0; j < graphtriparray.length - 1; j++) {

        let neighborsGraph = graphtrip.getNeighbours(graphtriparray[j]);

        
        for (let j = 0; j <= neighborsGraph.length - 1; j++) {

            if (graphtriparray[j + 1] === neighborsGraph[j].vertex) {

                totalgraph += neighborsGraph[j].weight;

                graphcheck = true;
            }
        }

        if (graphcheck === false) {

            totalgraph = 0;

            graphcheck = false;

            return `False, $${totalgraph}`;
        }
    }

    return `True, $${totalgraph}`;
}














module.exports = { Graph, businessTrip};



















































