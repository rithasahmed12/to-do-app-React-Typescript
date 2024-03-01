import {Button} from "./Button"
import { Items,ReactSetState } from "./types/utils";

type ItemsList = {
    items: Items[];
    setItems:ReactSetState<Items[]>
}


export const ItemList = ({items, setItems}: ItemsList) => {
    const handleDelete = (id:string) => {
        setItems((prev) => prev.filter((data) => data.id !== id));
      }

    return items.map((data)=>(
        <div key={data.id} className='flex justify-between items-center border border-slate-600 pl-2 mb-2 py-2'>
        <p>{data.title}</p>

        <Button onClick={()=> handleDelete(data.id)}> 
        <img src="./src/assets/bin.png" width="16" height="16" alt="delete" /> 
        </Button>
      </div>
    ))


}