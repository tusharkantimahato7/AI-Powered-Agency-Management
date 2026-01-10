import React, { useState, FC } from "react";
import ClientCard from "../Cards/ClientCard";
import PredictionCard from "../Cards/PredictionCard";
import FC,

// Define the shape of a client object
export interface Client {
  id: Number;
  name: String;
  projects: Number;
  revenue: number;
  avgDeliveryTime: Number; // in days
  satisfactionScore: number; // 0-5
  riskScore: number; // 0-1
}

// Props for ClientCard
interface ClientCardProps {
  client: Client;
  onClick: () => void;
  isSelected: boolean;
}

// Props for PredictionCard
interface PredictionCardProps {
  client: Client;
}

// Ensure imported components have correct props
const TypedClientCard = ClientCard as React.ComponentType<ClientCardProps>;
const TypedPredictionCard = PredictionCard as React.ComponentType<PredictionCardProps>;

const Clients: FC = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  // Example client list (replace with DB/API data in production)
  const clients: Client[] = [
    {
      id: 1,
      name: "TechCorp Inc",
      projects: 3,
      revenue: 45000,
      avgDeliveryTime: 14,
      satisfactionScore: 4.5,
      riskScore: 0.15,
    },
    {
      id: 2,
      name: "DesignHub Co",
      projects: 2,
      revenue: 32000,
      avgDeliveryTime: 18,
      satisfactionScore: 4.8,
      riskScore: 0.25,
    },
    {
      id: 3,
      name: "StartupXYZ",
      projects: 4,
      revenue: 28000,
      avgDeliveryTime: 22,
      satisfactionScore: 3.9,
      riskScore: 0.65,
    },
    {
      id: 4,
      name: "Enterprise Plus",
      projects: 5,
      revenue: 68000,
      avgDeliveryTime: 16,
      satisfactionScore: 4.6,
      riskScore: 0.2,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Client list */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-xl font-bold text-slate-800">
            👥 Client Risk Assessment
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Click on any client to see AI predictions
          </p>
        </div>

        <div className="divide-y divide-slate-200">
          {clients.map((client) => (
            <TypedClientCard
              key={client.id}
              client={client}
              onClick={() => setSelectedClient(client)}
              isSelected={selectedClient?.id === client.id}
            />
          ))}
        </div>
      </div>

      {/* Show predictions when a client is selected */}
      {selectedClient && <TypedPredictionCard client={selectedClient} />}
    </div>
  );
};

export default Clients;
