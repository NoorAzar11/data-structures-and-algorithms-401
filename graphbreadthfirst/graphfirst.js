'use strict'




class Graph{

    constructor(){

        this.adjacencyList = {};
    }

    addVertex(vertex){

        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }


    addEdge(val1,val2){
        this.adjacencyList[val1].push(val2);
        this.adjacencyList[val2].push(val1);
    }



    breadthFirst(kickoff){

        const queuefirst = [kickoff];
        const Arrres = [];
        const visitedfirst = {};

        let locatedVertex;

        visitedfirst[kickoff] = true;


        while(queuefirst.length){

            locatedVertex = queuefirst.shift();

            Arrres.push(locatedVertex);
           

            this.adjacencyList[locatedVertex].forEach(neighbor => {

                if(!visitedfirst[neighbor]){

                    visitedfirst[neighbor] = true;

                    queuefirst.push(neighbor);
                }
            });
        }
        return Arrres;
    }

}
















module.exports= Graph;













































