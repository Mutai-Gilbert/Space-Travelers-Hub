import Profile from '../components/Profile/Profile';

<<<<<<< HEAD
const ProfilePage = () => (
  <div>
    <Profile />
  </div>
);
export default ProfilePage;
=========
const Profile = () => {
  const rocketList = useSelector((state) => state.rocket);
  const rocketFiltered = rocketList.rocket.filter((rocket) => rocket.reserved === true);
  const missions = useSelector((state) => state.mission.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved !== false);

  let missionContent = <p>No missions reserved</p>;
  if (reservedMissions.length > 0) {
    missionContent = (
      <table className={classes.missions_table}>
        <tbody>
          {reservedMissions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <section className="profilePage">
      <div className={classes.reserved_missions}>
        <h2 className="title">My Missions</h2>
        {missionContent}
      </div>
      <div>
        <h2 className="title"> My Rockects</h2>
        <table>
          <ul className="display me">
            { rocketFiltered.length > 0 ? (
              rocketFiltered.map((rocket) => (
                <tr key={rocket.id}>
                  <td>
                    {rocket.rocketName}
                  </td>
                </tr>
              ))
            ) : (
              <li>
                <p className="title-three">No Rocket booked </p>
              </li>
            )}
          </ul>
        </table>
      </div>
    </section>
  );
};
export default Profile;
>>>>>>>>> Temporary merge branch 2
