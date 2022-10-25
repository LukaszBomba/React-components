import user from '../Data/user';
import statistics from '../Data/statistics';
import friends from '../Data/friends';
import transaction from '../Data/transaction';

import { UserProfile } from './Profile/Profile';
import { StatsData } from './Statistics/Statistics';
import { FriendList } from './Friends/Friends';
import { TransactionHistory } from '../components/Transaction/Transaction';

export const App = () => {
  return (
    <>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatsData title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
};
