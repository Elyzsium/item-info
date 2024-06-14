import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

interface Item {
  id: number;
  title: string;
  body: string;
}

interface ItemListProps {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemList: React.FC<ItemListProps> = ({ items, setItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDelete = (id: number) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: 'DELETE',
        }).then(() => {
          setItems(prevItems => prevItems.filter(item => item.id !== id));
          Swal.fire('Deleted!', 'The item has been deleted.', 'success');
        });
      }
    });
  };

  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div className="rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 bg-slate-100">
        <h1 className="text-3xl font-bold mb-6">Items</h1>
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm my-8">
            <table className="border-collapse table-auto w-full text-sm">
              <thead>
                <tr>
                  <th className="p-4 pl-8 pt-0 pb-3 text-gray-900 text-left">Id</th>
                  <th className="p-4 pl-8 pt-0 pb-3 text-gray-900 text-left">Title</th>
                  <th className="p-4 pl-8 pt-0 pb-3 text-gray-900 text-left">Post</th>
                  <th className="p-4 pl-8 pt-0 pb-3 text-gray-900 text-center" colSpan={2}>Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-200 hover:text-gray-900">
                    <Link to={`/item/${item.id}`} className="contents">
                      <td className="p-4 pl-8 pt-0 pb-3 text-gray-900 text-left">
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </td>
                      <td className="p-4 pl-8 text-gray-700">{item.title}</td>
                      <td className="p-4 pl-8 text-gray-700">{item.body}</td>
                    </Link>
                    <td className="flex items-center py-2 px-4">
                      <Link to={`/item/${item.id}/edit`} className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded mr-2">
                        Edit
                      </Link>
                      <button 
                        className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-center gap-10 my-8 mx-52 mt-6 ">
            <button 
              onClick={() => setCurrentPage(currentPage - 1)} 
              disabled={currentPage === 1} 
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
            >
              Previous
            </button>
            <button 
              onClick={() => setCurrentPage(currentPage + 1)} 
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
