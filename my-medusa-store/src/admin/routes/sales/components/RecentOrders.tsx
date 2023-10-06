import React from 'react';
import { ShoppingBag } from '@medusajs/icons';
import { useAdminOrders } from 'medusa-react';

const RecentOrders = () => {
  const { orders, isLoading } = useAdminOrders();

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg bg-white overflow-scroll">
      <h1 className="text-center inter-large-semibold text-[#1F2937]">
        Recent Orders
      </h1>
      {isLoading && <span>Loading...</span>}
      {orders && !orders.length && <span>No Orders</span>}
      {orders && orders.length > 0 && (
        <ul>
          {orders.map((order, id) => (
            <li
              key={order.id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
            >
              <div className="bg-green-200 rounded-lg p-3">
                <ShoppingBag />
              </div>
              <div className="pl-4">
                <p className="text-gray-800 font-bold">
                  €{order.payments[0].amount}
                </p>
                <p className="text-gray-400 text-sm">
                  {order.customer.first_name}
                </p>
              </div>
              <p className="lg:flex md:hidden absolute right-6 text-sm">
                {order.items[0].title}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentOrders;

