import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useDetailMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const detailMovieCode = useMemo(() => {
    return searchParams.get("detail-movie");
  }, [searchParams]);

  const closeDetail = () => {
    console.log("searchParams", searchParams);
    searchParams.delete("detail-movie");
    setSearchParams(searchParams);
  };

  const openDetail = (code: string) => {
    setSearchParams({ "detail-movie": code });
  };
  return {
    detailMovieCode,
    closeDetail,
    openDetail,
  };
};

export default useDetailMovie;
