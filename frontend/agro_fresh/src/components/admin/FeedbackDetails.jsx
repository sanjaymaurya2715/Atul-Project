function FeedbackDetails({feedbackArray}) {
  return (
    <>
    <table className="table table-warning table-hover table-bordered ">
        <thead className="table-dark">
          <tr> <th>Name</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Remark</th>
            
            </tr>
        </thead>
        <tbody>
            {
                feedbackArray.map((feedback)=>{
return(
    <tr key={feedback._id}>
<td>{feedback.name}</td>
<td>{feedback.email}</td>
<td>{feedback.rating}</td>
<td>{feedback.remark}</td>

    </tr>
            )
                })
            }

        </tbody>
    </table>
    </>
  )
}

export default FeedbackDetails
