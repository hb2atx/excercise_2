// Define a Tweet component which takes as props the username of the user who wrote the tweet, 
// the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.
const Tweet = (props) => {
    return(
      <div className="tweet">
        <span>{props.name}</span>
        <span className="username">@{props.username}</span>
        <span className="date">@{props.date}</span>
        <p>{props.message}</p>
      </div>
    );
}