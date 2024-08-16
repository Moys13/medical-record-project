export const dynamicParams = false;

export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
}
const pasienId = ({ params }: { params: { id: string } }) => {
    const { id } = params
    return (
        <>
            ID: {id}
        </>
    )
}

export default pasienId