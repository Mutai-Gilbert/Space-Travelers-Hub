import { useSelector } from 'react-redux';
import classes from './Profile.module.css';

const Profile = () => {
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
    <section className={classes.reserverd_section}>
      <div className={classes.reserved_missions}>
        <h2>My Missions</h2>
        {missionContent}
      </div>
    </section>
  );
};
export default Profile;
