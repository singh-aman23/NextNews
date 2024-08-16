import classes from './not-found.module.css';

export default function NotFound(){
    return <div className = {classes.notFound}>
        <h2>404 : Page <span className = {classes.not}> not </span> found!!</h2>
    </div>
}