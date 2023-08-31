import { FC, memo } from "react";
import "./DetailPage.scss";
import DetailForm from "./components/DetailForm";

interface DetailPageProps {
  // product: DataType;
  id: number;
}

const DetailPage: FC<DetailPageProps> = ({ id }) => {
  return (
    <>
      <main className="container">
        <section className="detailpage__content">
          <DetailForm id={id} />
        </section>
      </main>
    </>
  );
};

export default memo(DetailPage);
