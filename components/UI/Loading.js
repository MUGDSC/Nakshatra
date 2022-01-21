import classes from './loading.module.css'
export default function Loading() {
    return (
        <div className={classes.loading} style={{ background: '#000', position: 'fixed', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', zIndex: 1000000 }}>
            <img src="/loading/ufo.webp" alt="UFO" className={classes.img} style={{ position: 'relative', zIndex: 1000 }} />
        </div>
    )
}