import React from 'react'
import { useForm } from "react-hook-form"

function SearchForm() {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log("RESULT>", data);
        alert(JSON.stringify(data));
    };
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Localidade</label>
            <input
                type="text"
                {...register("Localidade", { required: true, maxLength: 100 })}
            />
            <label>Frequência</label>
            <input
                type="text"
                {...register("Frequência", { required: true, maxLength: 100 })}
            />
            <label>Palavra Chave</label>
            <input
                type="text"
                {...register("Palavra Chave", { required: true, maxLength: 100 })}
            />
            <input value="Buscar" type="submit" />
        </form>
    )
}

export default SearchForm