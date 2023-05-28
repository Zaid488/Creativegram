import Image from "next/image";
function SidebarRow({ src, Icon, title }) {
  return (
    <div className="pr-20">
      <div className="flex py-4 items-center dark:hover:bg-zinc-900 rounded-full cursor-pointer">
        {src && (
          <img className="ml-1 flex rounded-full border w-11 h-11" src={src} />
        )}

        {Icon && (
          <Icon className="ml-2 flex sm:ml-2 h-7 w-7 text-black-500 md:h-8 w-8 text-black-500" />
        )}
        <p className="hidden font-semibold mx-5 sm:inline-flex text-sm md:text-lg">
          {title}
        </p>
      </div>
    </div>
  );
}

export default SidebarRow;
