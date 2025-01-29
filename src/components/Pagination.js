import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const Pagination = ({ totalPages = 100, initialPage = 1 ,setCurrent}) => {
//   const [initialPage, setCurrent] = useState(initialPage);
  const [inputValue, setInputValue] = useState(initialPage.toString());

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrent(page);
      setInputValue(page.toString());
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const newPage = parseInt(inputValue);
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrent(newPage);
    } else {
      setInputValue(initialPage.toString());
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <div className="text-gray-600">
        Page {initialPage} of {totalPages}
      </div>
      
      <div className="flex items-center">
        <span className="mr-2 text-gray-600">Go to page:</span>
        <form onSubmit={handleInputSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="w-16 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => handlePageChange(1)}
          disabled={initialPage === 1}
          className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
          aria-label="First page"
        >
          <ChevronsLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => handlePageChange(initialPage - 1)}
          disabled={initialPage === 1}
          className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => handlePageChange(initialPage + 1)}
          disabled={initialPage === totalPages}
          className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={initialPage === totalPages}
          className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
          aria-label="Last page"
        >
          <ChevronsRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;