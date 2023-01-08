import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";
const Ratings = ({ rating, onClick }) => {
    return (
        <div>
            {
                [...Array(5)].map((_, index) =>
                    <span key={index} onClick={() => onClick(index)}>
                        {
                            rating > index ? (
                                <FaStar />
                            ) : (
                                <FaRegStar />
                            )
                        }
                    </span>
                )
            }
        </div>
    )
}

export default Ratings