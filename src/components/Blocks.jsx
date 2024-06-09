import Block from './Block'

const Blocks = ({data}) => {
    console.log(data)

    return (
        <div className='text-center'>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Blockchain Blocks</h2>
            <div className='flex flex-wrap justify-center gap-4 text-start'>
                {data.map((block, index) => (
                    <Block key={index} data={block} />
                ))}
            </div>
        </div>
    )
}

export default Blocks