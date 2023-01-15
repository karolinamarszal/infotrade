import Chart from "react-apexcharts"
import { useState } from "react"

export const StockChart = ({chartData, symbol}) => {
  const [dateFormat, setDateFormat] = useState("24h")
  const {day, week, year } = chartData 

  const timeFormat = () => {
    switch(dateFormat) {
      case "24h":
        return day
      case "7d":
        return week
      case "1y":
        return year
      default:
        return day
    }
  }

  const color = timeFormat()
  [timeFormat().length -1].y - timeFormat()[0].y > 0 ? "#077223" : "#720707"

  const options = {
    colors: [color],
    title: {
      text: symbol,
      align: "center",
      style: {
        fontSize: "24px"
      }
    },
    chart: {
      id: "stock data",
      animations: {
        speed: 1200
      }
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC: false
      }
    },  
    tooltip: {
      x: {
        format: "MMM dd HH:MM"
      }
    }
  }

  const series = [{
    name: symbol,
    data: timeFormat()
  }]

  const buttonSelect = (button) => {
    const classes = "btn m-1 "
    if (button === dateFormat) {
      return classes + "btn-primary"
    } else {
      return classes + "btn-outline-primary"
    }
  }

  return <div className="w-75 mt-5 p=4 shadow-sm bg-light">
    <Chart options={options} series={series} type="area" />
    <div>
      <button className={buttonSelect("24h")} onClick={() => 
        setDateFormat("24h")}>24h</button>
      <button className={buttonSelect("7d")} onClick={() => 
        setDateFormat("7d")}>7d</button>
      <button className={buttonSelect("1y")} onClick={() => 
        setDateFormat("1y")}>1y</button>
    </div>
  </div>
  
}
