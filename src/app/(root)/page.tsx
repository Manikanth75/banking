import HeaderBox from '@/components/HeaderBox'
import Rightsidebar from '@/components/Rightsidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';




const Home = () => {
  const loggedIn={ firstName: 'CHERRY',lastName:'MANI',email:'contact@gamil.com'};
  return (
    <section className="home">
      <div className="home-content">
          <header className="home-header">
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
            />
            <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
            />

          </header>
          RECENT TRANSACTIONS
      </div>
      <Rightsidebar
      user={loggedIn}
      transactions={[]}
      banks={[]}
      />
    </section>
  )
}

export default Home