import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const DashboardVis = ({ data }) => {
  const summaryRef = useRef(null);
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  const [totalStudents, totalJobs, totalPending,totalApproved,totalRejected] = data
  console.log(totalStudents)
  useEffect(() => {
    // Data Preparation
    const chartData = [
      { label: "Total Students", value: totalStudents.value },
      { label: "Total Jobs", value: totalJobs.value },
    ];

    const pieData = [
      { status: "Pending", count: totalPending.value },
      { status: "Approved", count: totalApproved.value ? 1 : 0 },
      { status: "Rejected", count: totalRejected.value ? 1 : 0 },
    ];

    // Clear previous SVGs to avoid overlaps
    d3.select(barChartRef.current).selectAll("*").remove();
    d3.select(pieChartRef.current).selectAll("*").remove();

    // Summary Cards
    const summary = d3.select(summaryRef.current);
    summary
      .selectAll("div")
      .data(chartData)
      .enter()
      .append("div")
      .attr("class", "card")
      .style("padding", "10px")
      .style("border", "1px solid #ddd")
      .style("border-radius", "8px")
      .style("background-color", "#f9f9f9")
      .style("box-shadow", "0 2px 4px rgba(0,0,0,0.1)")
      .style("text-align", "center")
      .style("width", "120px")
      .style("margin", "0 10px")
      .html((d) => `<h3>${d.label}</h3><p>${d.value}</p>`);

    // Bar Chart
    const barWidth = 300;
    const barHeight = 200;

    const barSvg = d3
      .select(barChartRef.current)
      .append("svg")
      .attr("width", barWidth)
      .attr("height", barHeight);

    const barScale = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, (d) => d.value)])
      .range([0, barHeight - 20]);

    barSvg
      .selectAll("rect")
      .data(chartData)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 100)
      .attr("y", (d) => barHeight - barScale(d.value))
      .attr("width", 80)
      .attr("height", (d) => barScale(d.value))
      .attr("fill", "#69b3a2")
      .style("stroke", "#555")
      .style("stroke-width", "1px");

    barSvg
      .selectAll("text")
      .data(chartData)
      .enter()
      .append("text")
      .attr("x", (d, i) => i * 100 + 40)
      .attr("y", (d) => barHeight - barScale(d.value) - 5)
      .attr("text-anchor", "middle")
      .text((d) => d.value)
      .style("fill", "#333")
      .style("font-size", "12px");

    // Pie Chart
    const pieWidth = 200;
    const pieHeight = 200;
    const radius = Math.min(pieWidth, pieHeight) / 2;

    const pieSvg = d3
      .select(pieChartRef.current)
      .append("svg")
      .attr("width", pieWidth)
      .attr("height", pieHeight)
      .append("g")
      .attr("transform", `translate(${pieWidth / 2}, ${pieHeight / 2})`);

    const pie = d3.pie().value((d) => d.count);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    pieSvg
      .selectAll("path")
      .data(pie(pieData))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => ["#ffcc00", "#28a745", "#dc3545"][i])
      .style("stroke", "#fff")
      .style("stroke-width", "2px");

    pieSvg
      .selectAll("text")
      .data(pie(pieData))
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .text((d) => `${d.data.status} (${d.data.count})`)
      .style("font-size", "10px")
      .style("fill", "#333");
  }, [data]);

  return (
    <div id="dashboard">
      <div id="summary-cards" ref={summaryRef} className="flex gap-4"></div>
      <div id="charts" className="flex gap-4">
        <div id="bar-chart" ref={barChartRef}></div>
        <div id="pie-chart" ref={pieChartRef}></div>
      </div>
    </div>
  );
};

export default DashboardVis;
