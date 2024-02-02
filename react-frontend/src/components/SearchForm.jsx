import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';

function SearchForm({ setNotification, notification }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setNotification({ isVisible: true, message: `Preencha todos os campos.`, type: false })
            setTimeout(() => {
                setNotification({ isVisible: false, message: '' });
            }, 3000);
            return;
        }
    }, [errors])

    const onSubmit = async (data) => {
        if (Object.keys(errors).length > 0) {
            setNotification({ isVisible: true, message: `Preencha todos os campos.`, type: false })
            setTimeout(() => {
                setNotification({ isVisible: false, message: '' });
            }, 3000);
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/google/search', data);
            // console.log('API Response:', response.data);
            // alert(JSON.stringify(response.data));
            setNotification({ isVisible: true, message: 'Pesquisa bem-sucedida!', type: true });
            setTimeout(() => {
                setNotification({ isVisible: false, message: '' });
            }, 3000);
        } catch (error) {
            console.error('API Error:', error);
            setNotification({ isVisible: true, message: 'Erro na Busca.', type: false });
            setTimeout(() => {
                setNotification({ isVisible: false, message: '' });
            }, 3000);
        }
    };
    console.log(`Errors:  ${errors}`);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Localidade {errors.localidade && <span className='notificationSpan'> - Preencha a Localidade.</span>}</label>
            <input
                type="text"
                {...register("localidade", { required: true, maxLength: 100 })}
            />

            <label>Frequência {errors.frequencia && <span className='notificationSpan'> - Preencha a fFrequencia.</span>}</label>
            <input
                type="text"
                {...register("frequencia", { required: true, maxLength: 100 })}
            />

            <label>Palavra Chave {errors.palavraChave && <span className='notificationSpan'> - Preencha a Palavra Chave.</span>} </label>
            <input
                type="text"
                {...register("palavraChave", { required: true, maxLength: 100 })}
            />

            <input value="Buscar" type="submit" />
        </form>
    )
}

export default SearchForm