import { ReactSetState } from "./types/utils";

type Input = {
    type: "text" | "checkbox";
    inputValue: string ;
    setInputValue: ReactSetState<string>;
};

export const Input = ({type, inputValue, setInputValue}:Input) => {
    return(
        <input type={type} value={inputValue}
         className='text-gray-800 w-full p-2 rounded-sm mb-2' 
        onChange={(event)=> setInputValue(event.target.value)} />
    )
}