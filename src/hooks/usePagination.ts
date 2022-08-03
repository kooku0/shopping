import { useState, useEffect, useCallback } from "react";

export default function usePagination(data: any[], splitedNum: number) {
  const splitedData = arrayDivision(data, splitedNum);
  const [currentData, setCurrentData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCurrentData(splitedData[0]);
    setTotalPage(Math.ceil(data.length / splitedNum));
  }, [data]);
  const onClickPrev = useCallback(() => {
    if (currentPage > 1) {
      setCurrentData(splitedData[currentPage - 2]);
      setCurrentPage(currentPage - 1);
    }
  }, [data, currentPage, totalPage]);
  const onClickNext = useCallback(() => {
    if (currentPage < totalPage) {
      setCurrentData(splitedData[currentPage]);
      setCurrentPage(currentPage + 1);
    }
  }, [data, currentPage, totalPage]);

  return {
    onClickPrev,
    onClickNext,
    totalPage,
    currentPage,
    currentData,
  };
}


function arrayDivision(arr: any[], n: number) {
  const len = arr.length;
  const tmp = [];
  for (let i = 0; i <= len; i += n) {
    tmp.push(arr.slice(i, i + n));
  }
  return tmp;
}
