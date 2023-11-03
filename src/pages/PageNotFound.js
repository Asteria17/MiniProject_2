import Error404 from '../assets/images/Page Not Found.jpg';

export const PageNotFound = () => {
  return (
    <div className="container mx-auto flex flex-wrap object-cover ">
      <img
        src={Error404}
        alt=""
        className="Error  "
      />
    </div>
  );
};
