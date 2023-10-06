import { RouteConfig } from '@medusajs/admin';
import { CircleStack } from '@medusajs/icons';
import TopCards from './components/TopCards';
import BarChart from './components/BarChart';
import RecentOrders from './components/RecentOrders';
import { useProducts } from 'medusa-react';

const Sales = () => {
  const { products } = useProducts();

  console.log(products);

  return (
    <div>
      <TopCards />
      <div className="p-4 grid grid-cols-2 gap-4">
        <BarChart />
        <RecentOrders />
      </div>
    </div>
  );
};

// Adding route into the admin dashboard sidebar
export const config: RouteConfig = {
  link: {
    label: 'Sales',
    icon: CircleStack,
  },
};
<style></style>;
export default Sales;
