import { ChangeEvent } from "react"

const Radio = (props: {
    options: string[],
    name: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <div className="m-5 grid grid-cols-2">
            {props.options.map((option) => (
                <div className="mr-3 text-sm" key={option}>
                    <input type="radio" className="mr-3" value={option} name={props.name} onChange={props.onChange} />
                    <label htmlFor="">{option}</label>
                </div>
            ))}
        </div>
    )
}

export default Radio