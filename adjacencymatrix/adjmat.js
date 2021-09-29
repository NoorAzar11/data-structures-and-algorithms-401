'use strict';


function addEdgeInter(adj,u,v)
{
    adj[u].push(v);
    adj[v].push(u);
}
  
function printGraphInter(adj)
{
    let result =[];
    
    for (let i = 0; i < adj.length; i++) {

        result.push(i ,' | ' )

            for (let j = 0; j < adj[i].length; j++) {

               result.push(adj[i][j]," -> ")      
            }
        result.pop()
           result.push("\n")
        }
        return result.join('');
}
  

        let V = 5;
        let adj= [];
           
        for (let i = 0; i < V; i++)
            adj.push([]);

        addEdgeInter(adj, 0, 1);
        addEdgeInter(adj, 0, 4);
        addEdgeInter(adj, 1, 2);
        addEdgeInter(adj, 1, 3);
        addEdgeInter(adj, 1, 4);
        addEdgeInter(adj, 2, 3);
        addEdgeInter(adj, 3, 4);
         
        
module.exports = {printGraphInter,addEdgeInter}