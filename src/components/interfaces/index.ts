export interface IPaginationProps {
    totalPages: number;
    handlePageClick: (data: {selected: number}) => void;
  }