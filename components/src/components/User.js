import React from "react";
import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, age, friends, address }) {
  if (!isLoggedIn) {
    return <h1> Giriş yapmadınız !</h1>;
  }

  return (
    <>
      <h1>{` Benim adım : ${name} ${surname} (${age})`}</h1>
      {address.title} {address.zip}
      <br />
      <br />
      {friends &&
        friends.map((friend, i) => (
          <div key={i + 1}>
            {i + 1} - {friend.name}
          </div>
        ))}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  friends: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

User.defaultProps = {
  name: "İsimsiz",
  isLoggedIn: false,
};

export default User;
