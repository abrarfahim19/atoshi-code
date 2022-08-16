import toast from "react-hot-toast";
import Loader from "../components/Loader";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Loader show/>
      <button onClick={ ()=> toast.success("I am successfully Landing...!")}>Toast Me!</button>
    </div>
  );
}
