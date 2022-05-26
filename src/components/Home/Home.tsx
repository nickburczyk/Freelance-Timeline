import styles from "./home.module.css"

const {
  header, avatar, title, p
} = styles

const Home = () => {
  return (
    <header className={header}>
      <div className={avatar}/>
      <h1 className={title}>I'm Nick Burczyk.</h1>
      <p className={p}>
        I am a senior React developer who absolutely loves building things. Modern frontend 
        frameworks like React provide the perfect balance between engineering and creativity. 
      </p>
      <p className={p}>
        For years, I did creative and development work as a freelancer, pretending that gigs on the side could 
        ever scratch the itch that I had. These jobs always left me wanting more, so in 2019, I made the jump
        to full-time development work. 
      </p>
      <p className={p}>
        To those who wonder what that that freelance experience actually looked like, 
        <br/>
        <b>here is that story:</b>
      </p>
    </header>
  )
}

export default Home

interface Props {
  // no props needed
}