import {useEffect, useState} from "react";
import {FiChevronRight, FiChevronLeft} from "react-icons/fi";
import {FaQuoteRight} from "react-icons/fa";
import data from "../../data"

import './App.css';


function App() {
	const [people, setPeople] = useState(data);
	const [index, setIndex] = useState(0);
	
	const moveLeft = () => {
		if (index === 0 ) {
			setIndex(people.length -1);
		} else {setIndex(index - 1)}
	}
	
	const moveRight = () =>{
		if (index === people.length -1){
			setIndex(0);
		} else{
			setIndex( index + 1 )
		}
	}
	
  return (
    <section className="section">
        <div className="title">
		  <h2><span>/</span> Reviews</h2>
		  </div>
		  <div className="section-center">
		   {people.map((person, personIndex) => {
				  const {id, img,name, title, quote} = person;
				  
				  let position = "nextSlide";
				     if (index === personIndex){
						 position = "activeSlide";
					 } 
				     if (index- 1 === personIndex ||
						 (index === 0 && people.length - 1 === personIndex)){
						 position = "lastSlide";
					 }
				  console.log(index, people.length - 1, personIndex)
				  
				  
				  return <article className={position} key={id}>
					  <img src={img} alt="name" className="person-img"/>
					  <h4 >{name}</h4>
					  <p className="title">{title}</p>
					  <p className="text">{quote}</p>
					  <FaQuoteRight className="icon"/>
				  </article>	  
			  })}
			  <button onClick={() => moveLeft()} className="prev"><FiChevronLeft/></button>
			  <button onClick={() => moveRight()} className="next"><FiChevronRight/></button>
		  </div>
		  
	  </section>
  );
}

export default App;
