import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard data={item} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
