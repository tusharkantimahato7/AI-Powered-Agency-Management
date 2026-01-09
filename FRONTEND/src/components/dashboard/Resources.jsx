import React, { useState} from 'react';
import ClientCard from '../Cards/ClientsCard';
import Prediction from '../Cards/PredictionCard';

const Clients = () => {
    const [selectedClient,setSelectedClients] = useState(null);
    