import { IonModal } from "@ionic/react";
import DetailMovie from "./DetailMovie";
import useDetailMovie from "./useDetailMovie";

const MovieDetailModal = () => {
  const { detailMovieCode, closeDetail } = useDetailMovie();

  return (
    <IonModal isOpen={Boolean(detailMovieCode)}>
      <DetailMovie movieCode={detailMovieCode} closeDetail={closeDetail} />
    </IonModal>
  );
};

export default MovieDetailModal;
