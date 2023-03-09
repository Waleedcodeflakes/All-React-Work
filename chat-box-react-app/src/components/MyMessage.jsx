const MyMessage = ({message}) => {
    if(message?.attachments?.length > 0){
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{float:'right'}}
            />
        )
    }
    return(
        <div className="messsage" style={{float:"right", marginRight: '18px', color:'white', backgroundColor: '#382a50', padding: '8px 10px', borderRadius: '8px'}}>
            {message.text}
        </div>
    );
}
// padding: 8px 10px;
//     border-radius: 8px;
export default MyMessage;