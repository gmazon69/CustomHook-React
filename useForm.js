import { useState } from "react";

export const useForm = (inicial = {}) => {

    const [formState, setFormState] = useState(inicial);

    const onInput = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const reset = () => {
        setFormState( inicial );
    }

    return {
        ...formState,
        formState,
        onInput,
        reset,
    }
}
