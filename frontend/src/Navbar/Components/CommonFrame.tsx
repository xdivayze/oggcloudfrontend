import { Link } from "react-router-dom";

export default function CommonFrame({
  text,
  color,
  to,
  margin,
  z
}: {
  text: string;
  color: string;
  to: string;
  margin: string
  z:string
}) {
  var classnames = `w-1/5 min-h-full ${color} rounded-2xl ${margin} items-center flex justify-center ${z} text-xl text-center text-yellow-ogg`;
  return (
    <div className={classnames}>
      <Link  to={to}>{text}</Link>
    </div>
  );
}
