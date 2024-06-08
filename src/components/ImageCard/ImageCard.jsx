import { BsInstagram } from "react-icons/bs";

const ImageCard = ({ data: { urls, alt_description, description, user } }) => {
  return (
    <div>
      <img src={urls.small} alt={alt_description} />
      {description ? <p>{description}</p> : <p>No description</p>}
      {user.instagram_username && (
        <div>
          <BsInstagram />
          <a
            href={`https://instagram.com/${user.instagram_username}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            {user.instagram_username}
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
