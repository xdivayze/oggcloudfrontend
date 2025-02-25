import { Link } from "react-router-dom";

export default function CommonFrame({
  text,
  color,
  to,
  margin,
  z,
  textSize,
}: {
  text: string;
  color: string;
  to: string;
  margin: string;
  z: string;
  textSize: string;
}) {
  var classnames = ` w-1/5 min-h-full ${color} rounded-2xl ${margin} items-center flex justify-center ${z} text-xl text-center text-yellow-ogg font-robotoSlab ${textSize} transition-all duration-400 hover:text-indigo-ogg hover:z-5 hover:border-solid hover:border-2`;
  return (
    <div className={classnames}>
      <Link to={to}>{text}</Link>
    </div>
  );
}
