import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { leaveMissions, joinMissions, getMissions } from '../redux/mission/missionSlice';
import classes from '../redux/mission/Missions.module.css';

const Missions = () => {
  const missions = useSelector((state) => state.mission.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  let missionsContent = <p>Loading...</p>;
  if (missions.length > 0) {
    missionsContent = (
      <>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th> </th>

            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td className={classes.name}>{mission.mission_name}</td>
                <td className={classes.description}>{mission.description}</td>
                <td className={classes.status}>
                  {mission.reserved ? (
                    <span className={classes.active_member}>Active Member</span>
                  ) : (
                    <span className={classes.not_a_member}>Not A Member</span>
                  )}

                </td>
                <td>
                  {mission.reserved ? (
                    <button type="button" className={classes.btn_leavemission} onClick={() => dispatch(leaveMissions(mission.missionId))}>Leave Mission</button>
                  ) : (
                    <button type="button" className={classes.btn_join_mission} onClick={() => dispatch(joinMissions(mission.missionId))}>Join Mission</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </>
    );
  }
  return (
    <div>
      {missionsContent}
    </div>
  );
};

export default Missions;
