import {Spinner} from "react-bootstrap"

const LoaderComponent = () => {
    return(
        <div style={{width:"100%", height:"85dvh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Spinner animation="grow" variant="warning"/>
        </div>
    )
}

export default LoaderComponent