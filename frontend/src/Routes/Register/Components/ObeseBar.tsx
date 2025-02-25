export default function ObeseBar({height, color, text}: {height:string, color:string, text:string}) {
    return (
        <div contentEditable={true} className={`w-full rounded-[30px] font-robotoSlab flex  transition-all duration-300   ${height} ${color}`} >
            {text}
        </div>
    )
}