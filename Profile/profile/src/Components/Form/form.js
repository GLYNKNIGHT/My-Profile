

export default function Form(){
    return <form className='form'>
    <label >Name</label><input className="form-input" type="text" placeholder="Name" />
    <label>Email</label><input className="form-input" type="email" placeholder="your@email.com"/>
    <label>Question</label><input className="form-input" type="text" placeholder="Questions?" />
    <button className="form-button">Submit</button>
    </form>
}