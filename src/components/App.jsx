import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import fetchImagesWithTopic from "./images-api";
import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Empty from "./Empty/Empty";
import Modal from "react-modal";

Modal.setAppElement("#yourAppElement");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getImage() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImagesWithTopic(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
        setShowBtn(data.total_pages && data.total_pages !== page);
        setEmpty(data.total_pages === 0);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getImage();
  }, [page, query]);

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} />}
      {images.length > 0 && showBtn && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {loading && <Loader />}
      {empty && <Empty />}
      {error && <ErrorMessage error={error} />}
      <Toaster />
    </div>
  );
};

export default App;
