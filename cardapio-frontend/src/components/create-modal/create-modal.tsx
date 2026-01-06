import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { type FoodData } from '../../interface/FoodData';

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </div>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isPending } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title, 
            price,
            image
        }
        mutate(foodData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess, closeModal])

    return(
        <div className='modal-overlay'>
            {/* O fechamento agora é exclusivo deste botão */}
            <button className="btn-close-overlay" onClick={closeModal}>X</button>
            
            <div className="modal-body">
                <h2>Cadastre um novo item</h2>
                <form className="input-container">
                    <Input label="Nome do produto" value={title} updateValue={setTitle}/>
                    <Input label="Valor" value={price} updateValue={setPrice}/>
                    <Input label="Link da imagem" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isPending ? 'Postando...' : 'Confirmar Cadastro'}
                </button>
            </div>
        </div>
    )
}