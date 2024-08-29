import style from "./cssentity.module.css";

const CssEntity = () => {
	return (
		<div className="grid grid-cols-5 gap-4">
			
            
            <div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center">
				<button className={style.bubbleLeftToRight}>Bubble -&gt;</button>
			</div>

			
            
            <div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center">
				<button className={style.bubbleRightToLeft}>Bubble &lt;-</button>
			</div>

			
            
            <div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center">
				<button className={style.bubbleUpToDown}>Bubble &darr;</button>
			</div>

			
            
            <div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center">
				<button className={style.button}>Bubble</button>
			</div>

			
            
            <div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center">
				<button className={style.button}>Bubble</button>
			</div>

			
            
            <div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center">
				<button className={style.button}>Bubble</button>
			</div>

			
		</div>
	);
};

export default CssEntity;
