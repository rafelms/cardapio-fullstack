import { useFoodDataDelete } from "../../hooks/useFoodDataDelete";
import "./card.css"

interface CardProps {
    id?: number,
    price: number,
    title: string,
    image: string
}

export function Card({ id, price, title, image }: CardProps) {
    const { mutate } = useFoodDataDelete();

    const handleDelete = () => {
        if (window.confirm(`Deseja realmente excluir ${title}?`)) {
            if (id !== undefined) {
                mutate(id);
            }
        }
    }

    return (
        <div className="card">
            <button className='btn-delete' onClick={handleDelete}>x</button>
            
            <img src={image} alt={`Imagem de ${title}`} />
            <h2>{title}</h2>
            <p>
                <b>Valor:</b> R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
        </div>
    )
}