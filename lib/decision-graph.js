/**
 * creates a new DecisionGraph
 * @constructor
 */
var DecisionGraph = function () {
  var V = 0          // the number of vertices
  var names = {}     // vertex string -> index number
  var keys = []      // vertex index number -> string
  var isAND = []     // boolean array: true = AND; false = OR
  var adj = []       // edge arrays

  /**
   * add vertex to the graph
   * @param {string} name - the name of this vertex
   * @param {string} [typeAND=true] - the type of this vertex: true=AND, false=OR.
   * Defaults to true.
   */
  this.addVertex = function (name, typeAND) {
    names[name] = V
    keys[V] = name
    isAND[V] = (typeAND === undefined) ? true         // default to true
                                       : typeAND
    V++
  }

  /**
   * add edge v->w to the graph
   * @param {string} v - the name of a vertex this edge points from
   * @param {(string|string[])} w - the name of a vertex this edge points to or an
   * array of vertex names. If vertex v is type AND, the order of w will be the exact order
   * required.
   */
  this.addEdge = function (v, w) {
    var vIndex = names[v]
    if (adj[vIndex] === undefined) adj[vIndex] = []
    if (Array.isArray(w)) {
      Array.prototype.push.apply(adj[vIndex])
    }
    else adj[vIndex].push(w)
  }
}

module.exports = DecisionGraph