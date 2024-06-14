
// import React, { useState, useEffect, FormEvent } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';


// const ItemEdit: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then(response => response.json())
//       .then(data => {
//         setTitle(data.title);
//         setBody(data.body);
//       });
//   }, [id]);

//   const handleUpdate = async (e: FormEvent) => {
//     e.preventDefault();

//     if (!title || !body) {
//       await Swal.fire('Error!', 'All fields are required.', 'error');
//       return;
//     }

//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ title, body }),
//     }).then(() => {
//       Swal.fire('Updated!', `${title} has been updated.`, 'success');
//       navigate(`/item/${id}`);
//     });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="container px-5 py-5 mx-auto flex flex-wrap items-center">
//         <div className="rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 bg-slate-100">
//           <form onSubmit={handleUpdate}>
//             <h1 className="text-xl font-bold mb-2">Edit Item</h1>
//             <div className="relative mb-4">
//               <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
//               <input
//                 id="title"
//                 type="text"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-green-800 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//             <div className="relative mb-4">
//               <label htmlFor="body" className="leading-7 text-sm text-gray-600">Body</label>
//               <textarea
//                 id="body"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-green-800 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 value={body}
//                 onChange={(e) => setBody(e.target.value)}
//               />
//             </div>
//             <div className='mt-10 flex flex-col md:flex-row gap-3'>
//               <button
//                 type="submit"
//                 className="bg-blue-200 rounded border border-gray-300 focus:border-green-800 text-base text-gray-700 py-1 px-5 leading-8 mb-2 md:mb-0 md:mr-4"
//               >
//                 Update
//               </button>
//               <button
//                 type="button"
//                 className="bg-red-200 rounded border border-gray-300 focus:border-green-800 text-base text-gray-700 py-1 px-5 leading-8"
//                 onClick={() => navigate(`/item/${id}`)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemEdit;

import React, { useState, useEffect, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

interface Item {
  id: number;
  title: string;
  body: string;
}

interface ItemEditProps {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemEdit: React.FC<ItemEditProps> = ({ items, setItems }) => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const item = items.find(item => item.id === parseInt(id));
      if (item) {
        setTitle(item.title);
        setBody(item.body);
      }
    }
  }, [id, items]);

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !body) {
      await Swal.fire('Error!', 'All fields are required.', 'error');
      return;
    }

    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
      }).then(() => {
        setItems(prevItems =>
          prevItems.map(item =>
            item.id === parseInt(id) ? { ...item, title, body } : item
          )
        );
        Swal.fire('Updated!', `${title} has been updated.`, 'success');
        navigate(`/item/${id}`);
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container px-5 py-5 mx-auto flex flex-wrap items-center">
        <div className="rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 bg-slate-100">
          <form onSubmit={handleUpdate}>
            <h1 className="text-xl font-bold mb-2">Edit Item</h1>
            <div className="relative mb-4">
              <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
              <input
                id="title"
                type="text"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-800 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="body" className="leading-7 text-sm text-gray-600">Body</label>
              <textarea
                id="body"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-800 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div className='mt-10 flex flex-col md:flex-row gap-3'>
              <button
                type="submit"
                className="bg-blue-200 rounded border border-gray-300 focus:border-green-800 text-base text-gray-700 py-1 px-5 leading-8 mb-2 md:mb-0 md:mr-4"
              >
                Update
              </button>
              <button
                type="button"
                className="bg-red-200 rounded border border-gray-300 focus:border-green-800 text-base text-gray-700 py-1 px-5 leading-8"
                onClick={() => navigate(`/item/${id}`)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemEdit;
