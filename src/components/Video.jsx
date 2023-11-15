import videoImage from "../assets/image/video.png";
import play from "../assets/image/play.png";
const Video = function () {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient( #ea3a60af, #ea3a60af),url("${videoImage}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" flex justify-center"
      >
        <div className="md:py-32 py-14">
          <img
            className=" md:w-[130px] cursor-pointer hover:scale-105 duration-200 w-[90px]"
            src={play}
            alt="play"
          />
        </div>
      </div>
    </>
  );
};

export default Video;
