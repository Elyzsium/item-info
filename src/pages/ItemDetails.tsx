import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

interface Item {
  id: number;
  title: string;
  body: string;
}

interface ItemDetailsProps {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ items, setItems }) => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const currentItem = items.find(item => item.id === parseInt(id));
      if (currentItem) {
        setItem(currentItem);
      }
    }
  }, [id, items]);

  const handleDelete = () => {
    if (id) {
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
            method: "DELETE",
          }).then(() => {
            setItems(prevItems => prevItems.filter(item => item.id !== parseInt(id)));
            Swal.fire('Deleted!', 'The item has been deleted.', 'success');
            navigate("/");
          });
        }
      });
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container px-5 py-5 mx-auto flex flex-wrap items-center">
        <div className="rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 bg-slate-100">
        <div className="space-x-4 mb-10">
         <span className="text-xl font-bold mb-2">Edit Item</span>
         <button
              onClick={() => navigate("/")}
             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
           >
             List Items
           </button>
         </div>
          <h1 className="text-3xl font-bold ">{item.title}</h1>
          <p className="text-gray-700 mb-6">{item.body}</p>
          <div className="flex space-x-4">
            <Link
              to={`/item/${id}/edit`}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
