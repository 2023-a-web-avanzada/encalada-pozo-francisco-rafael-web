'use client'
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {FormularioEjemplo} from "@/app/i_react_hook_form/types/FormularioEjemplo";
import {Button, FormControl, InputLabel} from "@mui/material";

export default function Page() {
    const [nombre, setNombre] = useState('Rafael');

    const {
        handleSubmit, register, formState: {errors, isValid},
        control
    } = useForm<FormularioEjemplo>(
        {
            defaultValues: {
                nombre: 'Rafael',
                estadoCivil: ''
            },
            mode: 'all'
        }
    )
    const controladorSubmit = (data: FormularioEjemplo) => {
        console.log(data)
    }
    return (
        <>
            <div className={"container"}>
                <h1>Formulario con react hook form</h1>
                <form onSubmit={handleSubmit(controladorSubmit)}>
                    <div className={"mb-3"}>
                        <label htmlFor={"nombre"} className={"form-label"}>Nombre</label>
                        <input type={"text"} className={"form-control"} placeholder={"EJ: Rafa"} id={"nombre"}
                               {
                                   ...register('nombre', {
                                       required: {
                                           value: true,
                                           message: 'Nombre requerido'
                                       }
                                   })
                               }
                        />
                        <div id={"nombreHelp"} className={"form-text"}>
                            Ingresa tu nombre.
                        </div>
                        {}
                    </div>
                    <div className={"mb-3"}>
                        <FormControl fullWidth>
                            <InputLabel id={"estadoCivilLabelId"}>Estado civil</InputLabel>
                            {}
                        </FormControl>
                    </div>
                    <Button type={"submit"}
                            disabled={!isValid}
                            variant={'outlined'}>
                        Submit
                    </Button>
                </form>
            </div>
        </>
    )
}