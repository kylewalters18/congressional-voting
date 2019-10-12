import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'


const Graph = ({ nodes, links }) => {
    const d3Container = useRef(null)

    const width = 700
    const height = 700

    useEffect(
        () => {
            const svg = d3.select(d3Container.current)

            svg
                .selectAll("circle")
                .remove()
            svg
                .selectAll("line")
                .remove()

            const link = svg
                .selectAll("line")
                .data(links)
                .enter()
                .append("line")
                .style("stroke", "#aaa")
                .style("stroke-width", 0.25)

            const node = svg
                .selectAll("circle")
                .data(nodes)
                .enter()
                .append("circle")
                .attr("r", 5)
                .style("fill", d => d.block === 0 ? "#0074D9" : "#FF4136")

            const simulation = d3.forceSimulation(nodes)
                .force("link", d3.forceLink()
                    .id((d) => d.id)
                    .links(links)
                    .iterations(2)
                )
                .force("charge", d3.forceManyBody().strength(-500))
                .force("x", d3.forceX(width / 2).strength(0.3))
                .force("y", d3.forceY(height / 2).strength(0.5))

            simulation.on("tick", () => {
                link
                    .attr("x1", d => d.source.x)
                    .attr("y1", d => d.source.y)
                    .attr("x2", d => d.target.x)
                    .attr("y2", d => d.target.y)

                node
                    .attr("cx", d => d.x)
                    .attr("cy", d => d.y)
            })
        },

        // eslint-disable-next-line
        [nodes, links, d3Container.current]
    )

    return (
        <svg
            className="d3-component"
            width={width}
            height={height}
            ref={d3Container}
            display="block"
            style={{ margin: "auto", display: "block" }}
        />
    )
}

export default Graph
