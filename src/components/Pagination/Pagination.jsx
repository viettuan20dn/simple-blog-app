import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const Pagination = ({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
  showFirstLast = true,
  maxVisiblePages = 3,
}) => {
  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(currentPage - half, 1);
    let end = Math.min(start + maxVisiblePages - 1, totalPages);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(end - maxVisiblePages + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();
  const showStartEllipsis = visiblePages[0] > 2;
  const showEndEllipsis =
    visiblePages[visiblePages.length - 1] < totalPages - 1;

  const handlePageClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange?.(page);
    }
  };

  const PageButton = ({
    page,
    isActive = false,
    disabled = false,
    children,
  }) => (
    <button
      onClick={() => handlePageClick(page)}
      disabled={disabled}
      className={`
        px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
        ${
          isActive
            ? "bg-blue-600 text-white shadow-md"
            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        }
        ${
          disabled
            ? "text-gray-400 cursor-not-allowed hover:bg-transparent"
            : "cursor-pointer"
        }
        border border-gray-300 hover:border-gray-400
        ${isActive ? "border-blue-600" : ""}
      `}
    >
      {children || page}
    </button>
  );

  const EllipsisButton = () => (
    <span className="px-3 py-2 text-gray-500">
      <MoreHorizontal className="w-4 h-4" />
    </span>
  );

  return (
    <div className="flex items-center justify-center space-x-1">
      {/* Previous Button */}
      <PageButton page={currentPage - 1} disabled={currentPage === 1}>
        <ChevronLeft className="w-4 h-4" />
      </PageButton>

      {/* First Page */}
      {showFirstLast && visiblePages[0] > 1 && (
        <>
          <PageButton page={1} />
          {showStartEllipsis && <EllipsisButton />}
        </>
      )}

      {/* Visible Pages */}
      {visiblePages.map((page) => (
        <PageButton key={page} page={page} isActive={page === currentPage} />
      ))}

      {/* Last Page */}
      {showFirstLast && visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {showEndEllipsis && <EllipsisButton />}
          <PageButton page={totalPages} />
        </>
      )}

      {/* Next Button */}
      <PageButton page={currentPage + 1} disabled={currentPage === totalPages}>
        <ChevronRight className="w-4 h-4" />
      </PageButton>
    </div>
  );
};

// Demo Component
const PaginationDemo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Demo Content */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Trang hiện tại: {currentPage} / {totalPages}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-medium">
                  Item {(currentPage - 1) * 9 + i + 1}
                </h3>
                <p className="text-gray-600 text-sm">Nội dung của item này</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col items-center space-y-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PaginationDemo;
