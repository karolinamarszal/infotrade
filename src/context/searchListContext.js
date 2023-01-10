import { createContext, useState, useEffect } from "react";

export const SearchListContext = createContext();

export const SearchListContextProvider = (props) => {

  const [searchList, setSearchList] = useState(
    (localStorage.getItem("searchList") 
    && localStorage.getItem("searchList").split(",") )
    || ["GOOGL", "MSFT", "AMZN"]
    // localStorage.getItem("searchList")?.split(",")|| ["GOOGL", "MSFT", "AMZN"]
  )


  useEffect(() => {
    localStorage.setItem("searchList", searchList)
  }, [searchList])

  const addCompany = (stock) => {
    if (searchList.indexOf(stock) === -1) {
      setSearchList([...searchList, stock])
    }
  }

  const deleteCompany = (stock) => {
    setSearchList(searchList.filter((element) => {
      return element !== stock
    }))
  }

  return <SearchListContext.Provider value={{ searchList, addCompany, deleteCompany }}>
    {props.children}
  </SearchListContext.Provider>
}