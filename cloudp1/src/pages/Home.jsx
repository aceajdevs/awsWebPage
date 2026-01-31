

function Home() {
    const imageUrl = "https://bucketofducks730335186499.s3.us-east-1.amazonaws.com/duckbucket.png";
    return(
        <div>
            <h1>Welcome to the Home Page</h1>
            {imageUrl && <img src={imageUrl} alt="Duck in Bucket" />}
        </div>
    )
}
export default Home;