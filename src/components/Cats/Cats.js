import {useForm} from "react-hook-form";
import Cat from "./Cat";


const Cats = ({stateDispatch}) => {
    const {register,reset,handleSubmit} = useForm();
    const [{cats},dispatch] = stateDispatch;

    const saveCat = (cat) => {
        dispatch({type:'ADD_CAT',payload:cat})
        reset()
    };
    return(
      <div>
          <form onSubmit={handleSubmit(saveCat)}>
              <input type='text' placeholder={'cat'} {...register('name')}/>
              <button>save</button>
          </form>

          {cats.map(cat=><Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
      </div>
  )
}

export {Cats}