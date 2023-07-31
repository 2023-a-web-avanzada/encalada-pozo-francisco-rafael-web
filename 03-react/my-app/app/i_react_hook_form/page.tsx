'use client'
import React, {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {FormularioEjemplo} from "@/app/i_react_hook_form/types/FormularioEjemplo";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

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
                                       },
                                       maxLength: {value: 20, message: 'Longitud máxima 20'},
                                       minLength: {value: 5, message: 'Longitud minima 5'},
                                       validate: {
                                           soloNumeros: (valorActual) => {
                                               if (Number.isNaN(+valorActual)) {
                                                   return 'Ingrese solo numeros';
                                               } else {
                                                   return true;
                                               }
                                           }
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
                            <Controller
                                control={control}
                                rules={{required: {value: true, message: 'Estado C, requerido'}}}
                                name={"estadoCivil"}
                                render={
                                    ({field: {onChange, value, onBlur,}}) => {
                                        return (
                                            <>
                                                <Select
                                                    labelId={"estadoCivilLabelId"}
                                                    id={"estadoCivilId"}
                                                    label={"Estado Civil"}
                                                    onBlur={onBlur}
                                                    value={value}
                                                    onChange={onChange}
                                                >
                                                    <MenuItem value={'casado'}>Casado</MenuItem>
                                                    <MenuItem value={'soltero'}>Soltero</MenuItem>
                                                </Select>
                                            </>
                                        )
                                    }
                                }
                            />
                            {/*Termina controller*/}
                            {errors.estadoCivil &&
                                <div className={"alert alert-warning"} role="alert">
                                    Tiene errores {errors.estadoCivil.message}
                                </div>
                            }
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