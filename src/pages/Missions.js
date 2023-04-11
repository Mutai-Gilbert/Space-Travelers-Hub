import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions, joinMissions, leaveMissions } from '../redux/mission/missionSlice';
import classes from '../redux/mission/Missions.module.css';

const Missions = () => {
  const missions = useSelector((state) => state.mission.missions);
  const status = useSelector((state) => state.mission.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getMissions());
    }
  },
  [status, dispatch]);

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMissions(missionId));
  };

  const handleJoinMission = (missionId) => {
    dispatch(joinMissions(missionId));
  };
  let missionsContent = <p>Loading...</p>;
  if (missionsContent > 0) {
    missionsContent = (
      <>
        <h1>Missions</h1>
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
                <td className={classes.reserved}>
                  {mission.reserved ? (
                    <span className={classes.member}>Active Member</span>
                  ) : (
                    <span className={classes.not_a_member}>Not A Member</span>
                  )}

                </td>
                <td>
                  {mission.reserved ? (
                    <button type="button" className={classes.btn_leavemission} onClick={() => handleLeaveMission(mission.mission_id)}>Leave Mission</button>
                  ) : (
                    <button type="button" className={classes.btn_join_mission} onClick={() => handleJoinMission(mission.mission_id)}>Join Mission</button>
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
    <div className={classes.missions}>
      {missionsContent}
    </div>
  );
};

export default Missions;
