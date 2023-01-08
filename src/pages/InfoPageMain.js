import infotradeimg from "../images/infotradeimg.png"
import {StockList} from "../components/StockList"

export const InfoPageMain = () => {
  return <div>
    <div className="text-center">
      <img src={infotradeimg} alt="tradeimg"/>
    </div>
    <StockList />
  </div>
}