import infotradeimg from "../images/infotradeimg.png";
import { StockList } from "../components/StockList";
import { AutoComplete } from "../components/AutoComplete";


export const InfoPageMain = () => {
  return <div>
    <div className="text-center">
      <img src={infotradeimg} style={{width: "15%"}} alt="tradeimg"/>
    </div>
    <AutoComplete />
    <StockList />
  </div>
}
