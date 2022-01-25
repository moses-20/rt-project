import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user.context";
function UserForm() {
  const history = useHistory();

  const { user, store, handleChange, handleReset, handleUser } =
    useContext(UserContext);

  const handleClick = (id) => {
    history.push(`/${id}`);
  };

  return (
    <div className="app">
      <div className="form">
        <div className="wrap">
          <input
            name="fname"
            type="text"
            value={user.fname}
            onChange={handleChange}
          />
        </div>
        <div className="wrap">
          <input
            name="lname"
            type="text"
            value={user.lname}
            onChange={handleChange}
          />
        </div>
        <div className="wrap">
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="btns">
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleUser}>Submit</button>
        </div>
      </div>
      <div className="info">
        {store.map((user) => (
          <div
            className="card"
            key={user.email}
            onClick={() => handleClick(user.id)}
          >
            <h2>
              {user.fname} {user.lname}
            </h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserForm;
