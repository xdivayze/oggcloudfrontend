import Navbar from "../../Navbar/Navbar";
import ObeseBar from "./Components/ObeseBar";

export default function Register() {
  return (
    <div className="min-h-full ml-7 mr-7">
      <div className="pt-14 min-h-1/5">
        <Navbar collapse={true} />
      </div>
      <div className="w-full">
        <p className="text-5xl font-robotoSlab text-indigo-ogg flex justify-center pt-4">
          REGISTER
        </p>
      </div>

      <div className=" min-h-4/5 pt-25 ">
        <div className="flex flex-col">
          <div className="px-40  flex flex-row w-full space-x-[300px]">
            <div className="w-1/2">
              <div className="w-full">
                <ObeseBar
                  height="min-h-[110px]"
                  color="text-white bg-teal-ogg-1 hover:text-white hover:bg-indigo-950 pl-3 pt-5 text-2xl"
                  text="apo"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-full">
                <ObeseBar
                  height="min-h-[110px]"
                  color="text-white bg-teal-ogg-1 hover:text-white hover:bg-indigo-950 pl-3 pt-5 text-2xl"
                  text="apo"
                />
              </div>
            </div>
          </div>
          <div className="px-40  flex flex-row w-full space-x-[300px] ">
            <div className="w-1/2">
              <div className="w-full mt-6">
                <ObeseBar
                  height="min-h-[370px]"
                  color="text-white bg-teal-ogg-1 hover:text-white hover:bg-indigo-950 pl-3 pt-5 text-2xl"
                  text="apo"
                />
              </div>
            </div>
            <div className="w-1/2 mt-6 flex flex-col">
              <div>
                <ObeseBar
                  height="min-h-[110px]"
                  color="text-white bg-teal-ogg-1 hover:text-white hover:bg-indigo-950  pl-3 pt-5 text-2xl"
                  text="apo"
                />
              </div>
              <div className="w-full mt-auto">
                <ObeseBar
                  height="min-h-[110px]"
                  color="text-white bg-indigo-800 hover:text-white hover:bg-red-600 items-center justify-center text-3xl"
                  text="SUBMIT "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
