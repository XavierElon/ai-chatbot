import './newPrompt.css'

const NewPrompt = () => {
  return (
    <>
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