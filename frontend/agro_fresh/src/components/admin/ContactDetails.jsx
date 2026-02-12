
function ContactDetails({contactsArray}) {
  return (
   <>
 <table className="table table-warning table-hover table-bordered ">
    <thead className="table-dark">
        <tr>
            <th>Name</th>
             <th>Email</th>
              <th>Phone</th>
               <th>Question</th>
             
        </tr>
    </thead>
    <tbody >
        
        {
            contactsArray.map((contact)=>{
return(
    <tr key={contact._id}>
<td>{contact.name}</td>
<td>{contact.email}</td>
<td>{contact.phone}</td>
<td>{contact.question}</td>
    </tr>
            )

            })
        }
    </tbody>
    </table>

  

   </>
  )
}

export default ContactDetails
