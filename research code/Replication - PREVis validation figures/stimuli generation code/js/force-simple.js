function SimpleNodeLink(data, {
    title,
    width = 640,
    height = 400,
    ManyBodyStrength = 0,
    forceLinkDistance = 30,
    center_x = width / 2,
    center_y = height / 2,
    minLinkStrokeWidth = 1,
    maxLinkStrokeWidth = 6,
  } = {}) {

    const svg = d3.select("#container").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "max-width: 100%; height: auto;");

    const all_groups = data.nodes.map(node => node.group);
    const groups = [...new Set(all_groups)];
    const color = d3.scaleOrdinal(groups, ['#f29538', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b']); 
    
    const linkValues = data.links.map(link => link.value);
    const minLinkValue = Math.min(...linkValues);
    const maxLinkValue = Math.max(...linkValues);

    const linkScale = d3.scaleLinear()
        .domain([minLinkValue, maxLinkValue])
        .range([minLinkStrokeWidth, maxLinkStrokeWidth]);

    const simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(forceLinkDistance))
        .force("charge", d3.forceManyBody().strength(ManyBodyStrength))
        .force("center", d3.forceCenter(center_x, center_y))
        .on("end", computeReadability);

    const linkGroup = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(data.links)
        .enter().append("line")
        .attr("stroke-width", function(d) { return linkScale(d.value); }) // Linear scaling
        .style("stroke", '#C0C0C0');

    const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(data.nodes)
        .enter().append("g");

    const circles = node.append("circle")
        .attr("r", 5)
        .attr("fill", function(d) { return color(d.group); })
        .call(drag_handler);

    const labels = node.append("text")
        .text(function(d) {
            return d.id;
        })
        .attr('x', 6)
        .attr('y', 3);

    node.append("title")
        .text(function(d) { return d.id; });

    simulation
        .nodes(data.nodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(data.links);

    function ticked() {
        linkGroup
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node.attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });
    }

    function computeReadability() {
        const nodes = simulation.nodes();
        const links = simulation.force("link").links();
        console.log(greadability.greadability(nodes, links));
    }

    function drag_handler(selection) {
        const drag = d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);

        selection.call(drag);
    }

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
}
