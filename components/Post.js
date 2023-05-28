import { postState } from "@/atoms/postAtom";
import { userState } from "@/atoms/userAtom";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

function Post({ id, username, userImg, img, caption }) {
  const router = useRouter();
  const [click, setClick] = useRecoilState(postState);
  const [user, setUser] = useRecoilState(userState);
  return (
    <div
      className="bg-white my-7 border-b border-gray-400 
    hover:shadow-md 
    dark:bg-black 
    dark:text-white"
    >
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full 
          h-12 w-12 
          object-contain 
          p-1 mr-3 cursor-pointer"
          onClick={() => {
            setClick(username);
            setUser(userImg);
            router.push("/profile");
          }}
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* img */}
      <img src={img} className="object-cover w-full" alt="" />

      {/*Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/*captions*/}
      <p className="p-5 truncate">{caption}</p>

      {/*Comments*/}

      {/*input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment ..."
          className="border-none mx-2 flex-1 focus:ring-0 outline-none dark:bg-black text-gray-300"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
