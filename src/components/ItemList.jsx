import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap', gap: 8, marginTop: 60}}>
        {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList