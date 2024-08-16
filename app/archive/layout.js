import classes from './layout.module.css';

export default function ArchiveLayout({archive, latest}){
    return <div>
        <h2 className = {classes.heading}>News Archive</h2>
        <section className = {classes.archive}>
            {archive}
        </section>
        <section className = {classes.latest}>
            {latest}
        </section>
    </div>
}