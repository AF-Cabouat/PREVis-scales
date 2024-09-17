function filterNodes(data, groups, centralityLimit, topN) {
  let filteredNodes = data.nodes;
  let nodeCentrality = {}; // Declare nodeCentrality here

  // Filter nodes by specified groups if groups array is not empty
  if (groups.length > 0) {
    filteredNodes = filteredNodes.filter(node => groups.includes(node.group));
  }

  // Calculate degree centrality for each node if centralityLimit is greater than 0
  if (centralityLimit > 0) {
    data.links.forEach(link => {
      nodeCentrality[link.source] = (nodeCentrality[link.source] || 0) + 1;
      nodeCentrality[link.target] = (nodeCentrality[link.target] || 0) + 1;
    });

    // Filter nodes based on centrality limit
    filteredNodes = filteredNodes.filter(node =>
      nodeCentrality[node.id] >= centralityLimit
    );
  }

  // Sort nodes by centrality in descending order
  const sortedNodes = filteredNodes.slice().sort((a, b) => (nodeCentrality[b.id] || 0) - (nodeCentrality[a.id] || 0));

  // Take the top n nodes
  const topCentralNodes = sortedNodes.slice(0, topN);

  // Create a set of the IDs of the top central nodes for quick lookup
  const topCentralNodeIds = new Set(topCentralNodes.map(node => node.id));

  // Filter links to include only those connecting the top central nodes
  const filteredLinks = data.links.filter(link =>
    topCentralNodeIds.has(link.source) && topCentralNodeIds.has(link.target)
  );

  // Return the filtered nodes and links
  return { nodes: topCentralNodes, links: filteredLinks };
}

// Export the function for use in other files
// Assuming you are not using CommonJS or ES6 modules, exporting globally
window.filterNodes = filterNodes;