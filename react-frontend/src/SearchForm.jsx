import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';

function SearchForm() {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = async (data) => {

        try {
            const response = await axios.post('http://localhost:3000/google/search', data);
            console.log('API Response:', response.data);
            alert(JSON.stringify(response.data));
        } catch (error) {
            console.error('API Error:', error);
        }
    };
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Localidade</label>
            <input
                type="text"
                {...register("localidade", { required: true, maxLength: 100 })}
            />
            <label>Frequência</label>
            <input
                type="text"
                {...register("frequencia", { required: true, maxLength: 100 })}
            />
            <label>Palavra Chave</label>
            <input
                type="text"
                {...register("palavraChave", { required: true, maxLength: 100 })}
            />
            <input value="Buscar" type="submit" />
        </form>
    )
}

export default SearchForm