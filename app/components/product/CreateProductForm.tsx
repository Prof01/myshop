'use client'
import React, { useEffect, useState } from 'react';
import { useForm  } from 'react-hook-form';
import axios from 'axios';
import { CategoryType } from '@/types';
import { useRouter } from 'next/navigation';

type FormValues = {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: Array<string>;
};


const CreateProductForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const router = useRouter()
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCategories = async () => {
      
            try {
              const result = await axios.get(`https://api.escuelajs.co/api/v1/categories`);
                setCategories(result.data as CategoryType[]);
              setLoading(false);
            } catch (error) {
              setError('Error fetching product details. Please try again later.');
              setLoading(false);
            }
          }
    
          getCategories();
      }, []);

  const onSubmit = async (data: FormValues) => {
      try {
        setLoading(true);
      const response = await axios.post('https://api.escuelajs.co/api/v1/products/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      router.push(`/app/products/${response.data.id}`)
    //   console.log('Product created successfully:', response.data);
    } catch (error) {
        setError('Error fetching product details. Please try again later.');
          setLoading(false);
    //   console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center mx-auto max-w-2xl bg-gray-100 border shadow mt-4 p-4'>
      <h1 className='text-2xl font-semibold text-center py-4'>Add New Product</h1>
      <div className='flex flex-col p-2'>
        <label className='text-lg font-semibold text-center'>Title</label>
        <input className='px-2 py-2 rounded-full border bg-white' type="text" {...register('title', { required: true })} />
        {errors.title && <span className='text-red-500'>Title is required</span>}
      </div>
      <div className='flex flex-col p-2'>
        <label className='text-lg font-semibold text-center'>Price</label>
        <input className='px-2 py-2 rounded-full border bg-white' type="number" {...register('price', { required: true, min: 0 })} />
        {errors.price && <span className='text-red-500'>Price is required</span>}
      </div>
      <div className='flex flex-col  p-2'>
        <label className='text-lg font-semibold text-center'>Description</label>
        <textarea  className='px-2 py-2 rounded col-span-4 bg-white' {...register('description', { required: true })} />
        {errors.description && <span className='text-red-500'>Description is required</span>}
      </div>
      <div className='flex flex-col  p-2'>
        <label className='text-lg font-semibold text-center'>Category</label>
        <select
        id='categoryId'
        className='px-2 py-2 rounded-full border bg-white'
        {...register('categoryId', { required: true, min: 1 })}
        >
            <option value=''>Select category</option>
            {
                categories?.map(data => <option value={data.id} key={data.id}>
                    {data.name}
                </option>)
            }
        </select>
        {errors.categoryId && <span className='text-red-500'>Category is required</span>}
      </div>
      <div className='flex flex-col p-2'>
        <label className='text-lg font-semibold text-center'>Image URL</label>
        <input 
        defaultValue={'https://i.imgur.com/QkIa5tT.jpeg'}
        className='px-2 py-2 rounded-full border bg-white' 
        type="text" {...register('images.0', { required: true })} 
        />
        {errors.images && <span className='text-red-500'>Image URL is required</span>}
      </div>
      <button 
      className='bg-green-500 hover:bg-green-700 rounded-full py-3 text-white font-semibold my-4' 
      type="submit" disabled={loading ? true : false}>{loading ? 'Submitting...' : 'Create Product'}</button>
      <div>
        {
            error && <span className='text-red-500 text-center font-semibold'>{error}</span>
        }
      </div>
    </form>
  );
};

export default CreateProductForm;
