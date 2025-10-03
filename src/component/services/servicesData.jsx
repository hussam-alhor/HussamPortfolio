import Profile from "./Profile";
import Skils from "./Skils";

export const services = [
    {
      id :1,
      img: "/service1.png",
      title: "web Development",
      counter: 35,
      // component : <Profile/>
    },
    {
      id :2,
      img: "/service2.png",
      title: "Profile",
      counter: 23,
      component : <Profile/>
    },
    {
      id :3,
      img: "/service3.png",
      title: "Technical Skills",
      counter: 46,
      component : <Skils/>
    }
  ]
export const imgData = [
    {
        id: 1,
        img1 : "/html.png",
        img2 : "/css.png",
        img3 : "/js.png",
        img4 : "/bootstrap.png",
        img5 : "/tailwind.svg",
    },
    {
        id: 2,
        img1 : "/typescript.png",
        img2 : "/react.png",
        img3 : "/next.png",
        img4 : "/redux.png",
        img5 : "/zustand.png",
    },
    {
        id: 3,
        img1 : "/node.png",
        img2 : "/express.png",
        img3 : "/mongo.png",
        img4 : "/git.png",
        img5 : "/github.png",
    },
]

export const awardVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};