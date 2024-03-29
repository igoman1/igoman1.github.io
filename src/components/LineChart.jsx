import "./chart-form.css";

import React, { Component, useMemo, useState } from "react";

import Chart from "react-apexcharts";

const LineChart = (props) => {
    const rawData = props.input;
    const xLabel = [];
    const chartValue =[];
    // const chartCount =[];
 
    // console.log(rawData)
    rawData.map((item)=>{
        xLabel.push(item.class);
        chartValue.push(item.value);
    })

    let fontSize = "10px";
    let offsetX = 0;
    let offsetY = 2;
    // console.log("render");
    // Check if the media query is true
    if (window.matchMedia("(min-width: 768px)").matches) {
        // Then trigger an alert
        fontSize = "14px";
        offsetX = -10;
        offsetY = 10;
    }
    const options = {
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: true,
                type: "x",
                autoScaleYaxis: false,
            },
        },
        stroke: {
            width: 2,
            colors: "#3955B4",
        },
        grid: {
            show: false,
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            labels: {
                offsetX: 0,
                offsetY: offsetY,
                show: true,
                rotate: -45,
                rotateAlways: true,
                hideOverlappingLabels: false,
                showDuplicates: false,
                trim: false,
                minHeight: undefined,
                maxHeight: 220,
                style: {
                    colors: [],
                    fontSize: fontSize,
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 400,
                    cssClass: "apexcharts-xaxis-label",
                },
            },
            categories: xLabel,
        },
        yaxis: {
            labels: {
                offsetX: offsetX,
                style: {
                    fontSize: fontSize,
                },
            },
        },
    };
    const series = [
        {
            name: "series-1",
            data: chartValue,
        },
    ];
    const style = {
        fontSize: fontSize,
    };
    return (
        <div className="chart-wrapper">
            <div className="chart-header">
                <div className="chart-name">{props.chartName}</div>
                <div className="chart-unit">
                    단위: {props.chartUnit}
                </div>
            </div>
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={options}
                            series={series}
                            type="line"
                            // width="500px"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LineChart;
