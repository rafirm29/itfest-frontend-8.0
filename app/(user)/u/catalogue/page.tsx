import CatalogueItem from '@/components/Catalogue/CatalogueItem';
import Header from '@/components/Catalogue/Header';
import InfoCard from '@/components/Catalogue/InfoCard';
import Searchbar from '@/components/Catalogue/Searchbar';
import UserPointsHighlight from '@/components/Catalogue/UserPointsHighlight';
import React from 'react';

const KatalogPage: React.FC = () => {
  const dummyCalagoueData = [
    {
      name: 'Kaos mentor',
      startup: 'Startup Startip',
      price: 100000,
      stock: 20,
    },
    {
      name: 'Kaos mentor',
      startup: 'Startup Startip',
      price: 100000,
      stock: 20,
    },
    {
      name: 'Kaos mentor',
      startup: 'Startup Startip',
      price: 100000,
      stock: 20,
    },
    {
      name: 'Kaos mentor',
      startup: 'Startup Startip',
      price: 100000,
      stock: 20,
    },
  ];

  return (
    <div>
      <Header title="Merchandise" />
      <div className="p-4">
        <InfoCard>
          Silakan langsung tukarkan poin dengan merchandise di booth Startup!
        </InfoCard>
        <div className="flex items-center gap-5 mt-2">
          <Searchbar placeholder="Masukkan merchandise" />
          <UserPointsHighlight />
        </div>
        {dummyCalagoueData.map((data, idx) => (
          <CatalogueItem
            key={idx}
            name={data.name}
            price={data.price}
            startup={data.startup}
            stock={data.stock}
          />
        ))}
      </div>
    </div>
  );
};

export default KatalogPage;
