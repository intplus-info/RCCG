import { useState } from "react";
import image10 from "../assets/10.png";
import frame43 from "../assets/Frame43.svg";
import camera from "../assets/camera.svg";
import Audio from "../assets/audio.svg";
import pdf from "../assets/pdf.svg";
import jump from "../assets/jump.svg";
import thirdimg from "../assets/third.svg";

// Define the type for a sermon
interface Sermon {
  image: string;
  title: string;
  date: string;
  author: string;
  content: string;
  link: string;
}

const sermonsData: Sermon[] = [
  {
    image: image10,
    title: "Put Your Faith Into Action",
    date: "August 8, 2025",
    author: "Admin",
    content: "Sed ut perspiciatis unde o,Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?mnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    link:"https://www.youtube.com/@rccgstrongtowerstouffville3164"
  },
  {
    image: jump,
    title: "Transforming Live, Restoring Hope",
    date: "August 8, 2025",
    author: "Admin",
    content: "Sed ut perspiciatis unde omnis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? natus error sit voluptatem accusantium doloremque laudantium...",
    link:"https://www.youtube.com/@rccgstrongtowerstouffville3164"

  },
  {
    image: thirdimg,
    title: "Put Your Faith Into Action",
    date: "August 8, 2025",
    author: "Admin",
    content: "Sed ut perspiciatis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    link:""

  },
  {
    image: thirdimg,
    title: "Transforming Live, Restoring Hope",
    date: "August 8, 2025",
    author: "Admin",
    content: "Sed ut perspiciatis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    link:""

  },
  {
    image: thirdimg,
    title: "Put Your Faith Into Action",
    date: "August 8, 2025",
    author: "Admin",
    content: "Sed ut perspiciatis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    link:""

  },
];

interface SermonItemProps {
  sermon: Sermon;
  onClick: () => void;
}

const SermonItem = ({ sermon, onClick }: SermonItemProps) => (
  <div className="flex justify-between w-full cursor-pointer" onClick={onClick}>
    <div className="flex gap-4">
      <img src={sermon.image} alt="" className="w-[69px] h-[63px] md:w-[211px] md:h-[143px]" />
      <div className="flex flex-col justify-center gap-2">
        <p className="text-sm md:text-2xl hover:underline">{sermon.title}</p>
        <p className="text-sm text-gray-600">
          By <span className="text-orange-400">{sermon.author}</span>, {sermon.date}
        </p>
      </div>
    </div>
    <img src={frame43} alt="" className="w-[69px] h-[63px] md:w-[211px] md:h-[143px]" />
  </div>
);

interface SermonsNavProps {
  selectedSermonTitle: string | null;
  setSelectedSermonTitle: (title: string | null) => void;
}

const SermonsNav = ({ setSelectedSermonTitle }: SermonsNavProps) => {
  const [openSermon, setOpenSermon] = useState<number | null>(null);

  const handleSermonClick = (index: number) => {
    setSelectedSermonTitle(sermonsData[index].title);
    setOpenSermon(index === openSermon ? null : index); 
  };

  return (
    <section>
      {openSermon === null ? (
        <div className="flex flex-col items-center justify-center gap-5 p-13">
          <div className="flex gap-3 items-center">
            <div className="w-28 bg-gray-400 h-0.5"></div>
            <p className="text-gray-700 text-sm">Latest Sermons</p>
            <div className="w-28 bg-gray-400 h-0.5"></div>
          </div>

          {sermonsData.map((sermon, index) => (
            <SermonItem key={index} sermon={sermon} onClick={() => handleSermonClick(index)} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-5 p-13 mb-22">
          <div className="flex flex-col md:flex-row gap-3">
            <img
              src={sermonsData[openSermon].image}
              alt="sermon"
              className="w-[586.8896484375px] h-[390.54840087890625px]"
            />
            <div className="flex flex-col items-center gap-4">
              <div className="w-[378px] text-sm flex gap-3 text-white h-fit p-4 bg-[#FF7F00]">
                <img src={camera} alt="" className="w-4 h-4 mt-1" />
                Video Streaming
              </div>
              <div className="w-[378px] flex gap-3 text-sm text-white h-fit p-4 bg-[#FF7F00]">
                <img src={Audio} alt="" className="w-4 h-4 mt-1" />
                <a href={sermonsData[openSermon].link} target="_blank" rel="noopener noreferrer">
                Audio Streaming
                </a>
              </div>
              <div className="w-[378px] flex gap-3 text-sm text-white h-fit p-4 bg-[#FF7F00]">
                <img src={pdf} alt="" className="w-4 h-4 mt-1" />
                PDF Reader
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 py-5 md:px-21 mb-12">
            <p className="text-[#0D0D0D99] font-normal text-lg md:text-xl">{sermonsData[openSermon].content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SermonsNav;