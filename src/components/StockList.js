import { useNavigate } from "react-router-dom"
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"
import finnHub from "../apis/finnHub"
import {useState, useEffect, useContext} from "react"
import { SearchListContext } from "../context/searchListContext"

export const StockList = () => {

  const [stock, setStock] = useState([])
  const {searchList, deleteCompany} = useContext(SearchListContext)
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
      const responses = []
      try {
        const responses = await Promise.all(searchList.map((stock) => {
          return finnHub.get("/quote", {
            params: {
              symbol: stock
            }
          })
        }))

        const data = responses.map((response) => {
          return {
            data: response.data,
            symbol: response.config.params.symbol
          }
        })

        console.log(data)
        if (isFixed) {
          setStock(data)
        }
      } catch (err) {

      }
    }
    fetchData()

    return() => (isFixed = false)
  }, [searchList])


  const handleStockSelect = (symbol) => {
    navigate(`detail/${symbol}`)
  }

  return <div>
    <table className="table hover mt-5">
      <thead style={{color: "rgb(78,89,102)"}}>
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
      <tbody>
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
              <td>{stockData.data.pc} <button className="btn btn-danger btn-sm ml-3 d-inline-block delete-button" onClick={(e) => {
                e.stopPropagation()
                deleteCompany(stockData.symbol)
              }}>Remove</button></td>
            </tr>
          )
        })}

      </tbody>
    </table>
  </div>
}