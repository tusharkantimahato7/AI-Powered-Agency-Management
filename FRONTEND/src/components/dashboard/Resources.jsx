import React, { useState} from 'react';
import ClientCard from '../Cards/ClientsCard';
import Prediction from '../Cards/PredictionCard';

const Clients = () => {
    const [selectedClient,setSelectedClients] = useState(null);

    //Your Client list (this would come form your database in production)
    const Clients = [
        {
            id: 1,
            name: 'Techexa INC',
            projects: 3,
            revenue: 45000,
            avgDeliveryTime: 14,
            satisfactionScore: 4.5,
            riskScore: 0.15

        },
        {
            id: 2,
            name: 'DesignHub Co',
            projects: 2,
            revenue: 32000,
            avgDeliveryTime: 18,
            satisfactionScore: 18,
            riskScore: 0.25
        },
        {
            id: 3,
            name: 'StartupXYZ',
            projects: 4,
            revenue: 28000,
            
        },    
