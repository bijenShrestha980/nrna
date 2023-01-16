import dynamic from "next/dynamic";
import React, { memo, useCallback } from "react";
import ReactPaginate from "react-paginate";
// UTILS
import { ArrowLeftIcon, ArrowRightIcon } from "../../utils/icons";

const Pagination = (props) => {
  const handlePageClick = useCallback((event) => {
    const newOffset =
      (event.selected * props.itemsPerPage) % props.filteredData?.length;
    props.setItemOffset(newOffset);
  }, []);
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<ArrowRightIcon className={"h-3 w-3"} />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={props.pageCount}
      previousLabel={<ArrowLeftIcon className={"h-3 w-3"} />}
      renderOnZeroPageCount={null}
      containerClassName="pagination h-20 flex justify-end items-center gap-3 text-[12px] text-slate-600 transition ease-in-out duration-300 overflow-x-auto pl-3"
      pageClassName="page-item inline-flex items-center justify-center w-9 h-9 border-solid border border-slate-600 border-opacity-20 rounded-full transition ease-in-out duration-300 hover:shadow-xl active:scale-105"
      pageLinkClassName="page-link inline-flex items-center justify-center w-9 h-9 "
      previousClassName="page-prev text-[6px] inline-flex items-center justify-center w-9 h-9 border-solid border border-slate-600 border-opacity-20 rounded-full"
      previousLinkClassName="page-link inline-flex items-center justify-center w-9 h-9 border-solid border border-slate-600 border-opacity-20 rounded-full"
      nextClassName="page-next text-[6px] inline-flex items-center justify-center w-9 h-9 border-solid border border-slate-600 border-opacity-20 rounded-full"
      nextLinkClassName="page-link inline-flex items-center justify-center w-9 h-9 border-solid border border-slate-600 border-opacity-20 rounded-full"
      activeClassName="active bg-indigo-800 text-white shadow-md"
      disabledClassName="text-slate-300 border-slate-300"
      disabledLinkClassName="cursor-not-allowed"
      style={props.style}
    />
  );
};

export default dynamic(() => Promise.resolve(memo(Pagination)), { ssr: false });
