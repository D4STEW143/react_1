import './Article.css';

function Article(props){
    return(
         <article>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat saepe delectus vel quae, ea labore accusamus molestiae, minima quia animi voluptate maxime nulla ipsam officiis. Nobis iste sapiente quidem excepturi.</p> */}
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        </article>
    )
}

export default Article;