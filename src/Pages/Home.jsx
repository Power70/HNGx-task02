import React,{useState} from "react";
import Landing from "./Landing";
import Cards from "../Components/Cards";

const Home = () => {
    const [result, searchResult] = useState([]);

    const setSearchResult = (result) => {
      searchResult(result);
    };
    return (
        <div>
            <Landing searchResult={setSearchResult}/>
            <Cards laptop={result}/>
        </div> 
    )
}
export default Home ;