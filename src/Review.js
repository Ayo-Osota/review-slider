import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const changePerson = (n) => {
    let newIndex = index + n;
    newIndex < 1 ? setIndex(people.length - 1) :
      newIndex > people.length - 1 ? setIndex(0) :
        setIndex(newIndex);
  }

  let randomNumber = Math.floor(Math.random() * people.length);

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <h4 className='job'>{job}</h4>
      <h4 className='info'>{text}</h4>
      <div className="button-container">
        <button className="prev-btn" onClick={() => changePerson(-1)}><FaChevronLeft /></button>
        <button className="next-btn" onClick={() => changePerson(+1)}><FaChevronRight /></button>
      </div>
      <button className="random-btn" onClick={() => changePerson(randomNumber)}>Suprise me</button>
    </article>
  );
};

export default Review;
