import React, { memo, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
// Handler
import { ArrowUpDownIcon } from "../../utils/icons";
// COMPONENTS
import TotalTableRow from "./TableRow/TotalTableRow";
import Pagination from "../Pagination/Pagination";

const TotalTable = (props) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  // Filter
  function search(e) {
    e.preventDefault();
    var lowerCase = e.target.value.toLowerCase();
    setSearchTerm(lowerCase);
    setItemOffset(0);
    setPageCount(1);
  }

  const filteredData = useCallback(
    props.tableData?.filter((el) => {
      if (searchTerm === "") {
        return el;
      } else {
        return el.name.toLowerCase().includes(searchTerm);
      }
    })
  );

  useEffect(() => {
    if (filteredData) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(filteredData?.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filteredData.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, searchTerm, props.tableData]);

  return (
    <div
      className={`bg-white py-6 px-6 rounded-xl shadow-md h-fit ${
        props.className && props.className
      }`}
    >
      <div className="md:flex md:justify-between md:items-center mb-6 gap-2 overflow-x-auto">
        <h5 className="mb-4 md:mb-0 text-lg font-bold text-indigo-900 uppercase">
          {props.title}
        </h5>
        <input
          type="text"
          placeholder="Search..."
          className="py-2 px-4 text-sm rounded-md border-solid border border-slate-400 border-opacity-50 duration-500 ease-in-out focus:shadow-sm focus-visible:outline-0"
          onChange={search}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full mb-6">
          <thead className="text-[12px] text-left opacity-50 text-slate-600 border-solid border-b border-slate-400 border-opacity-20 transition ease-in-out duration-300">
            <tr>
              {/* <th className="py-3 pl-5 w-5">
                <p>SNo.</p>
              </th> */}
              <th className="py-3 px-5">
                <div className="flex items-center justify-between">
                  <p>ID</p>
                  <span
                    onClick={() =>
                      setCurrentItems(
                        filteredData
                          ?.slice(itemOffset, itemOffset + itemsPerPage)
                          .sort((a, b) => a.id - b.id)
                      )
                    }
                    className="h-3 w-3 cursor-pointer transition ease-in-out duration-150 rounded-full hover:scale-125 active:scale-150"
                  >
                    <ArrowUpDownIcon className="h-3 w-3" />
                  </span>
                </div>
              </th>
              <th className="py-3 px-5">
                <div className="flex items-center justify-between">
                  <p>Name</p>
                  <span
                    onClick={() =>
                      setCurrentItems(
                        filteredData
                          ?.slice(itemOffset, itemOffset + itemsPerPage)
                          .sort((a, b) => a.name.localeCompare(b.name))
                      )
                    }
                    className="h-3 w-3 cursor-pointer transition ease-in-out duration-150 rounded-full hover:scale-125 active:scale-150"
                  >
                    <ArrowUpDownIcon className="h-3 w-3" />
                  </span>
                </div>
              </th>
              <th className="py-3 px-5">
                <div className="flex items-center justify-between">
                  <p>Country</p>
                  <span
                    onClick={() =>
                      setCurrentItems(
                        filteredData
                          ?.slice(itemOffset, itemOffset + itemsPerPage)
                          .sort((a, b) => a.country.localeCompare(b.country))
                      )
                    }
                    className="h-3 w-3 cursor-pointer transition ease-in-out duration-150 rounded-full hover:scale-125 active:scale-150"
                  >
                    <ArrowUpDownIcon className="h-3 w-3" />
                  </span>
                </div>
              </th>
              <th className="py-3 px-5">
                <div className="flex items-center justify-between">
                  <p>Email.</p>
                  <span
                    onClick={() =>
                      setCurrentItems(
                        filteredData
                          ?.slice(itemOffset, itemOffset + itemsPerPage)
                          .sort((a, b) => a.email.localeCompare(b.email))
                      )
                    }
                    className="h-3 w-3 cursor-pointer transition ease-in-out duration-150 rounded-full hover:scale-125 active:scale-150"
                  >
                    <ArrowUpDownIcon className="h-3 w-3" />
                  </span>
                </div>
              </th>
              {/* <th className="py-3 px-5">
                <div className="flex items-center justify-between">
                  <p>Number</p>
                  <span
                    onClick={() =>
                      setCurrentItems(
                        filteredData
                          ?.slice(itemOffset, itemOffset + itemsPerPage)
                          .sort((a, b) => a.number - b.number)
                      )
                    }
                    className="h-3 w-3 cursor-pointer transition ease-in-out duration-150 rounded-full hover:scale-125 active:scale-150"
                  >
                    <ArrowUpDownIcon className="h-3 w-3" />
                  </span>
                </div>
              </th> */}
              <th className="py-3 px-5">
                <div className="flex items-center justify-between">
                  <p>Type</p>
                  <span
                    onClick={() =>
                      setCurrentItems(
                        filteredData
                          ?.slice(itemOffset, itemOffset + itemsPerPage)
                          .sort((a, b) => a.type.localeCompare(b.type))
                      )
                    }
                    className="h-3 w-3 cursor-pointer transition ease-in-out duration-150 rounded-full hover:scale-125 active:scale-150"
                  >
                    <ArrowUpDownIcon className="h-3 w-3" />
                  </span>
                </div>
              </th>
              {/* <th className="py-3 px-5">
                <div className="flex items-center justify-between">
                  <p>Payment</p>
                  <span
                    onClick={() =>
                      setCurrentItems(
                        filteredData
                          ?.slice(itemOffset, itemOffset + itemsPerPage)
                          .sort((a, b) => a.payment.localeCompare(b.payment))
                      )
                    }
                    className="h-3 w-3 cursor-pointer transition ease-in-out duration-150 rounded-full hover:scale-125 active:scale-150"
                  >
                    <ArrowUpDownIcon className="h-3 w-3" />
                  </span>
                </div>
              </th> */}
            </tr>
          </thead>
          <tbody className="text-sm text-left font-semibold opacity-75 text-slate-800 transition ease-in-out duration-300">
            {currentItems &&
              currentItems.map((item, i) => (
                <TotalTableRow
                  key={i}
                  sn={i}
                  id={item.id}
                  name={item.name}
                  country={item.country}
                  email={item.email}
                  number={item.number}
                  type={item.type}
                  payment={item.payment}
                  itemOffset={itemOffset}
                  onClick={() => router.push(`/dashboard/${item.id}`)}
                />
              ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center min-w-fit">
          <p className="text-[12px] font-semibold opacity-50 text-slate-600">
            Showing&nbsp;{itemOffset + 1}&nbsp;to&nbsp;
            {itemOffset + currentItems?.length}
            &nbsp;of&nbsp;
            {props.tableData?.length}
          </p>
          {pageCount > 1 && (
            <Pagination
              pageCount={pageCount}
              setItemOffset={setItemOffset}
              filteredData={filteredData}
              itemsPerPage={itemsPerPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(memo(TotalTable)), { ssr: false });
