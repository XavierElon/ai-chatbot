import './newPrompt.css'

const NewPrompt = () => {

    const endRef = useRef(null)

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: 'smooth' })
    })
    
  return (
    <>
    {/* ADD NEW CHAT */}
    <div className='endChat'></div>
        <form className='newForm'>
            <label htmlFor='file'>
                <img src='attchment.png' alt='' />
            </label>
            <input id='file' type='file' multiple={false} hidden />
            <input type='text' placeholder='Enter a prompt...' />
            <button>
                <img src='/arrow.png' alt='' />
            </button>
        </form>
    </>
  )
}

export default NewPrompt