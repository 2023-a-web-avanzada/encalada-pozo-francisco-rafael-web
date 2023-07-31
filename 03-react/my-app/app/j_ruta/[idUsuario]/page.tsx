'use client'

export default function Page(
    {params}: { params: { idUsuario: string } }
) {
    const semestres = ['2022A, 2022B', '2023A', '2021B']
    return (
        <>
            <div className={"container"}>
                <p>Ruta MOSTRAR USUARIO: {
                    params.idUsuario
                }</p>
                <ul>
                    {semestres.map((semestre) => <li key={semestre}>
                        <a href={`${params.idUsuario}/${semestre}`}>{semestre}</a>
                    </li>)}
                </ul>
            </div>
        </>
    )
}