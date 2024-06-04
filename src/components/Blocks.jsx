import Block from './Block'

const Blocks = () => {
    return (
        <div className='text-center'>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Blockchain Blocks</h2>
            <div className='flex flex-wrap justify-center gap-4 text-start'>
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
            </div>
        </div>
    )
}

export default Blocks