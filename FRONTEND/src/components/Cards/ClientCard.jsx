//src/components/clientCard.jsx
import React from 'react';
import './ClientCard.css'; //optional for the styling the card 

const ClientCard = ({ client }) => {
    return (
        <div className=" Clients-Card">
            {/* Optional Image Section */}
            {ClientCard.ImageUrl && (
                <image src= { client.ImageUrl} alt = {'Profile of $ '}
            )}