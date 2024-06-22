import { ChangeEvent } from "react";

const TextBox = (props: {
    value: string,
    type?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <div className='p-1 border border-black relative rounded-md my-6'>
            <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">{props.value}</h2>
            <input type={props.type === undefined ? "text" : props.type} className="outline-none w-full text-sm" onChange={props.onChange} />
        </div>
    )
}

export default TextBox;