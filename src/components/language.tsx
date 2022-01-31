import lang from '../imgs/lang.png';

const Language: React.FC = () => {
    const languages = [
        {
            id: 1,
            name: 'Tiếng Việt'
        },
        {
            id: 2,
            name: 'English'
        }
    ]
    return (
        <div className='relative'>
            <img src={lang} alt="language" className="h-16 w-16 cursor-pointer" />
            <div className='absolute hidden'>
                {
                    languages.map((x) => (
                        <div key={x.id}>{x.name}</div>
                    ))
                }
            </div>
        </div>
    )
}
export default Language