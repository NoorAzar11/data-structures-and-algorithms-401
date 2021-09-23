'use strict';


class Vertex {
    constructor(value) {
        this.value = value;
    }
}



class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}



class Graph {

    constructor() {
        this._adjacencyList = new Map();
    }




    addVertexNode(vertex) {
        this._adjacencyList.set(vertex, []);
    }



    addDirectedEdge(startVertex, endVertex, weight) {
        if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
            console.log("NOT FOUND!");
            return;
        }
        const adjacencies = this._adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex, weight));
    }



    getNeighbours(vertex) {
        if (!this._adjacencyList.has(vertex)) {
            console.log("NOT FOUND!");
            return;
        }
        return this._adjacencyList.get(vertex);
    }




    getNodes() {
        return this._adjacencyList.entries();
    }

    size() {
        return this._adjacencyList.size
    }
}













module.exports ={ Graph ,Vertex}









