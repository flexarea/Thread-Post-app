import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
// after npm install react-firebase-hooks/auth
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="links ">
        <Link to="/"> Home </Link>
        {!user ? (
          <Link to="/login"> Login </Link>
        ) : (
          <Link to="/createPost"> create post </Link>
        )}
      </div>
      <div className="user">
        {/* if user is true display code between tags */}
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} width="30" height="30" />
            <button onClick={signUserOut}>Log out</button>
          </>
        )}
      </div>
    </div>
  );
};
