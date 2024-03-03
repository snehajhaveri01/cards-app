
"use client";
import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { resetChartData, updateChartData } from "../redux/chartSlice";

function Chart() {
    const dispatch = useDispatch();
    const chartData = useSelector((state: RootState) => state.chart);
    const [isLoading, setIsLoading] = useState(true);
    const [newValue, setNewValue] = useState("");
  
    useEffect(() => {
      const chartContainer = document.getElementById("echarts-container");
      if (!chartContainer) {
        setIsLoading(false);
        return;
      }
  
      const chart = echarts.init(chartContainer);
      const options = {
        title: {
          text: "Interactive Trendline Chart",
        },
        xAxis: {
          type: "category",
          data: chartData.labels,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Chart Data",
            type: "line",
            data: chartData.values,
          },
        ],
      };
  
      chart.setOption(options);
      // Resize the chart when the window is resized
      window.addEventListener("resize", () => {
        chart.resize();
      });
      setIsLoading(false);
  
      return () => {
        chart.dispose();
        window.removeEventListener("resize", () => {});
      };
    }, [chartData]);
  
    const handleReset = () => {
      dispatch(resetChartData());
    };
  
    const handleChangeValue = () => {
      // Update the chart data based on the new value
      dispatch(updateChartData([...chartData.values, Number(newValue)]));
      setNewValue(""); // Clear the input field after updating
    };
  
    return (
      <div className="flex h-screen ml-24 ">
        {/* Chart Column */}
        <div className="flex-1 pr-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <span className="w-10 h-10 border-t-4 border-black rounded-full animate-spin"></span>
            </div>
          ) : (
            <div className="mt-10">
              <div id="echarts-container" style={{ height: "500px" }} />
              <button
                className="rounded-md bg-amber-800 px-5 py-2.5 text-sm font-medium text-white shadow"
                onClick={handleReset}
              >
                Reset Chart
              </button>
            </div>
          )}
        </div>
  
        {/* Form Controls Column */}
        <div className="flex-1 pl-4">
          <div className="mt-20">
            <label htmlFor="newValue" className="block text-base font-medium">
              Add new label:
            </label>
            <input
              type="text"
              id="newValue"
              name="newValue"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              placeholder="Enter a new label data"
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
  
          <p className="mt-5 text-base">
            Current Chart Data: {chartData.values.join(", ")}
          </p>
  
          <button
            className="rounded-md bg-amber-800 px-5 py-2.5 text-sm font-medium text-white shadow"
            onClick={handleChangeValue}
          >
            Update Chart
          </button>
        </div>
      </div>
    );
  }
  

export default Chart;
