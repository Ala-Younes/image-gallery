import fetchImages from "../lib/fetchImages";
import { ImagesResult } from "../models/Images";

type Props = {};
const Gallery = async (props: Props) => {
  const url = "https://api.pexels.com/v1/curated";
  const images: ImagesResult | undefined = await fetchImages(url);
  if (!images)
    return <h2 className="m-4 text-2xl font-bold"> No Images Found</h2>;

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {images.photos.map((photo) => (
        <div className="h-64 bg-gray-200 rounded-xl" key={photo.id}></div>
      ))}
    </section>
  );
};
export default Gallery;