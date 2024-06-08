import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items }) => {
  return (
    <ul className={css.images}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard data={item} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
