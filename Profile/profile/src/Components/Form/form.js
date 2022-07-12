

export default function Form({className}){
    return <form className={className}>
    <label>Name</label><input type="text" placeholder="Name" />
    <label>Email</label><input type="email" placeholder="your@email.com"/>
    <label>Question</label><input type="text" placeholder="Questions?" />
    <button>Submit</button>
    </form>
}