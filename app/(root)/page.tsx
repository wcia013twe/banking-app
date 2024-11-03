import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  // const loggedIn = {
  //   firstName: "Wes",
  //   lastName: "JSM",
  //   email: "contact@jsmastery.pro",
  // };
  const loggedIn = await getLoggedInUser();

  console.log("Logged in user:", loggedIn);

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSCATIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          { $id: "1", currentBalance: 123.5 },
          { $id: "2", currentBalance: 123.5 },
        ]}
      />
    </section>
  );
};

export default Home;
