import { useNavigate } from "react-router-dom"
import { BsFillCaretDownFill, BsFillCaretUpFill, BsFileEarmarkExcel } from "react-icons/bs"
import finnHub from "../apis/finnHub"
import {useState, useEffect, useContext} from "react"
import { SearchListContext } from "../context/searchListContext"
import React, {useRef} from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';

export const StockList = () => {
  const tableRef = useRef();
  const [stock, setStock] = useState([])
  const { searchList, deleteCompany } = useContext(SearchListContext)
  const navigate = useNavigate()

  const changeColor = (change) => {
    return change > 0 ? "success" : "danger"
  }

  const renderIcon = (change) => {
    return change > 0 ? <BsFillCaretUpFill/> : <BsFillCaretDownFill/>
  }

  useEffect(() => {
    let isFixed = true
    const fetchData = async () => {
      try {
        const promises = searchList.map((stock) => {
          return finnHub.get("/quote", {
            params: {
              symbol: stock
            }
          })
        });
        console.log(promises)
        const responses = await Promise.all(promises);

        const data = responses.map((response) => {
          return {
            data: response.data,
            symbol: response.config.params.symbol
          }
        })

        if (isFixed) {
          setStock(data)
        }
      } catch (err) {
          console.error(err)
      }
    }
    fetchData()

    return() => (isFixed = false)
  }, [searchList])


  const handleStockSelect = (symbol) => {
    navigate(`detail/${symbol}`)
  }

  return <div>
    <table ref={tableRef} className="table hover shadow table-background">
      <thead className="text">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Last</th>
          <th scope="col">Chg</th>
          <th scope="col">Ch%</th>
          <th scope="col">High</th>
          <th scope="col">Low</th>
          <th scope="col">Open</th>
          <th scope="col">Pclose</th>
        </tr>
      </thead>
      <tbody className="text">
        {stock.map((stockData) => {
          return (
            <tr style={{cursor: "pointer"}} onClick={() => handleStockSelect(stockData.symbol)} className="table-row" key={stockData.symbol}>
              <th scope="row">{stockData.symbol}</th>
              <td>{stockData.data.c}</td>
              <td className={`text-${changeColor(stockData.data.d)}`}>{stockData.data.d}{renderIcon(stockData.data.d)}</td>
              <td className={`text-${changeColor(stockData.data.dp)}`}>{stockData.data.dp}{renderIcon(stockData.data.dp)}</td>
              <td>{stockData.data.h}</td>
              <td>{stockData.data.l}</td>
              <td>{stockData.data.o}</td>
              <td>{stockData.data.pc} <button className="btn btn-danger btn-sm ml-5 d-inline-block delete-button" onClick={(e) => {
                e.stopPropagation()
                deleteCompany(stockData.symbol)
              }}>Remove</button></td>
            </tr>
          )
        })}

      </tbody>
    </table>
    <DownloadTableExcel
      filename="Stocks table"
      sheet="Stock list"
      currentTableRef={tableRef.current}
    >

        <button className="excel-btn">Excel export<span></span><BsFileEarmarkExcel /> </button>

    </DownloadTableExcel>
  </div>
}