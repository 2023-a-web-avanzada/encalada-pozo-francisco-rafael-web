'use client'

export default function Page(
    {params}: {
        params: {
            idUsuario: string;
            semestre: string;
        }
    }
) {
    const materias = ['Web A', 'Moviles']
    return (
        <>
            <div className={"container"}>
                <p>Ruta MOSTRAR USUARIO: {
                    params.idUsuario
                }</p>
                <p>Ruta MOSTRAR SEMESTRE: {
                    params.semestre
                }</p>
                <ul>
                    {materias.map((materia) => <li key={materia}>
                        <a href={`${params.idUsuario}/${params.semestre}/${materia}`}>{materia}</a>
                    </li>)}
                </ul>
            </div>
        </>
    )
}