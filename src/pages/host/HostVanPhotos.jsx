import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const hostVanDetail = useOutletContext();
  return (
    <img
      src={`${hostVanDetail.imageUrl}`}
      className="size-[80px] rounded-md"
      alt=""
    />
  );
}
