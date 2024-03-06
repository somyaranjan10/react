import Movie from "./Movie"
function Movies()
{
    let value=20;
return(
    
        <div className="movies">
            <Movie/>
            <Movie/>
            <p>{value}</p>
    </div>
)
}
export default Movies