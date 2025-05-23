import React from 'react';
import Image from 'next/image';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center space-x-2">
      <button id="arrow-button"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}>
        <Image src="/double-left.svg" alt="first page" width={24} height={24} />
      </button>
      <button id="arrow-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        <Image src="/single-left.svg" alt="single page" width={24} height={24} />
      </button>

      {pages.map(page => (
        <button key={page} className={`numbers ${
            page === currentPage ? 'current-number' : ''}`}
            onClick={() => onPageChange(page)}>
            {page}
        </button>
      ))}

      <button id="arrow-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        <Image src="/single-right.svg" alt="single page"width={24} height={24} />
      </button>
      <button id="arrow-button"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}>
        <Image src="/double-right.svg" alt="last page" width={24} height={24} />
      </button>
    </div>
  );
}
