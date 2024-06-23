import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Loading  from "../components/Loading"
function TaskForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/tasks/${id}`);
          setTitle(response.data.title);
          setDescription(response.data.description);
          setDueDate(response.data.dueDate);
        } catch (error) {
          console.error('Error fetching task:', error);
        }
      };
      fetchTask();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { title, description, dueDate };
    try {
      setLoading(true)
      if (id) {
        await axios.put(`http://localhost:8000/tasks/${id}`, task);
      } else {
        await axios.post('http://localhost:8000/tasks', task);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving task:', error);
    }
    setLoading(false)
  };

  return (
    <div className="container mx-auto mt-10 p-4 bg-white shadow-lg">
    {loading && <Loading/>}
      <h1 className="text-3xl font-bold mb-6 animate-pulse">{id ? 'Edit Task' : 'Add New Tasks'}</h1>
      <form onSubmit={handleSubmit} className="p-6 rounded-lg border">
        <div className="mb-4">
          {/* <label className="block text-gray-700 font-bold mb-2">Title</label> */}
          <input
            type="text"
            className="form-input mt-1 block w-full border border-black-800 border-solid bg-slate-200 rounded-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Write Title here'
            required
          />
        </div>
        <div className="mb-4">
          {/* <label className="block text-gray-700 font-bold mb-2 ">Description</label> */}
          <textarea
            className="form-textarea mt-1 block w-full h-32 bg-slate-200 rounded-sm"
            value={description}
            placeholder='Write Description here'
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 font-bold mb-2">Due Date</label>
          <input
            type="date"
            className="form-input mt-1 block w-full border border-black-800 bg-slate-200 rounded-sm"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          {id ? 'Update' : 'Add'} Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
