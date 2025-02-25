import CommonFrame from "./Components/CommonFrame";

export default function Navbar() {
  return (
    <div className="w-full justify-center flex ">
      <nav className="w-5/6 flex flex-row h-14 relative ">
        <CommonFrame
          text="OGGLabs Interactive Research Experience"
          to="/"
          color="bg-blue-ogg"
          margin=""
          z="z-5"
        />
        <CommonFrame text="Home" to="/" color="bg-green-ogg" margin="-ml-7 -pl-7" z="z-4" />
        <CommonFrame text="Home" to="/" color="bg-green-ogg" margin="-ml-7 -pl-7" z="z-4" />
        <CommonFrame text="Home" to="/" color="bg-green-ogg" margin="-ml-7 -pl-7" z="z-4" />
        <CommonFrame text="Home" to="/" color="bg-green-ogg" margin="-ml-7 -pl-7" z="z-4" />
      </nav>
    </div>
  );
}
