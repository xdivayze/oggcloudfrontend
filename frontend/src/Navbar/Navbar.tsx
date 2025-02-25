import { useEffect, useState } from "react";
import ExpandedNavbar from "./Components/ExpandedNavbar";

export default function Navbar({ collapse }: { collapse: boolean }) {
  const [collapsed, setCollapsed] = useState(false);
  const [transitionStates, setTransitionStates] = useState("min-h-14");
  const [textStatement, setTextStatement] = useState("");

  useEffect(() => {
    handleCollapse()

  }, [])
  var handleCollapse = () => {

    if (collapse) {
      if (collapsed) {
        setCollapsed(false);
        setTextStatement("");
        setTransitionStates(
          "transition-all duration-300 ease-in-out  scale-100 min-h-14 "
        );
      } else {
        setCollapsed(true);
        setTextStatement("text-[0px]");
        setTransitionStates(
          "transition-all duration-300 ease-in-out  scale-95 min-h-1 max-h-4 "
        );
      }
    }
  };

  var rendered = (
    <ExpandedNavbar
      height=""
      showText={textStatement}
      additional={`${transitionStates}`}
    />
  );

  return (
    <div
      className="w-13/14 flex ml-7 min-h-14 "
      onMouseEnter={handleCollapse}
      onMouseLeave={handleCollapse}
    >
      {rendered}
    </div>
  );
}
