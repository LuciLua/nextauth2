export default function plan({ params }) {

    const { plan } = params

    return (
        <div>
            <h1>Plano {plan}</h1>
            <h2>descricao do plano</h2>
        </div>
    )
}