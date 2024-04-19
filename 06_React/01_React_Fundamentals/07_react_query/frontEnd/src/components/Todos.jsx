import React from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addNewTodo,fetchTodo,apiDeleteTodo } from '../service/TodoApi';
import { LoadingSpinner, ErrorAlert, TodoCard, AddTodo, PageTitle,EmptyMessage  } from './index';
import axios from 'axios';

const Todos = () => {
    // Access The Query Client
    const queryClient = useQueryClient();

    // React Query
    const { data, isLoading, error } = useQuery({
        queryKey: ["todo"],
        queryFn: fetchTodo,
    });

    // Create a New Todo
    const { mutate } = useMutation({
        mutationFn: addNewTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["todo"],
                exact: true,
            })
        }
    });

    // Handle On Submit Todo
    const handleAddTodo = (NewTodo) => {
        mutate(NewTodo);
    }
    const { mutate:deleteMutate } = useMutation({
        mutationFn: apiDeleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["todo"],
                exact: true,
            });
        }
    });

    const handleDelete = (id) => {
        deleteMutate(id);
    }
    // Rendering The LoadingSpinner
    if (isLoading) return <LoadingSpinner />
    // Rendering The ErrorAlert
    if (error) return <ErrorAlert message={error.message} />
    return (
        <>
            <div className="container mt-5 mb-4">
                <PageTitle />
            </div>
            <div className="container mt-4 mb-4">
                <AddTodo handleAddTodo={handleAddTodo} />
            </div>
            <hr />
            <div className="container mt-4">
                <div className="row">
                    {
                        data.length === 0 ? <EmptyMessage /> : data.map((todo) => <TodoCard todo={todo} key={todo.id} handleDelete={handleDelete} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Todos;