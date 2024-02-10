import { useEffect } from 'react'

const List = ({elements}) => {

  useEffect(() => {
    console.log('se monta el componente',elements)
    return () => {
      console.log('se desmonta el componente')
    };
  }, [elements]);


  return (
    <div>
      <ul>
        {
          elements.map((element, i) => ( <li key={i} >{element}</li> ))
        }
      </ul>
    </div>
  )
}

export default List