import { useRouter } from "next/router";
// ASSETS
import cardData from "../../assets/data/card";
import tableData from "../../assets/data/table";
// COMPONENTS
import Spinner from "@/layout/Loader/Spinner";
import AdminLayout from "@/layout/AdminLayout";
import TotalTable from "@/components/Table/TotalTable";
import BarChart from "@/components/Chart/BarChart";
import ColoredStatsCard from "@/components/Card/ColoredStatsCard";
import ColoredIncomeCard from "@/components/Card/ColoredIncomeCard";
import EventsCard from "@/components/Card/EventsCard";
import LargColorCard from "@/components/Card/LargColorCard";
// REDUCERS
import { useGetMembersQuery } from "@/features/api/membershipApi";

const dashboard = () => {
  const {
    isLoading: membersIsLoading,
    isSuccess: membersIsSuccess,
    data: membersData,
  } = useGetMembersQuery();

  // console.log(membersData && membersData);

  return (
    <AdminLayout>
      {membersIsLoading ? (
        <Spinner />
      ) : (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <Card />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {!membersIsSuccess ? (
              <Spinner />
            ) : (
              <TotalTable
                title={"new application"}
                tableData={membersData.data}
              />
            )}
            <BarChart />
            <TotalTable title={"payment pending"} tableData={tableData} />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="grid grid-cols-1 place-content-start gap-8">
                <ColoredStatsCard />
                <ColoredIncomeCard />
              </div>
              <EventsCard />
            </div>
          </div>
        </section>
      )}
    </AdminLayout>
  );
};

const Card = () => {
  const router = useRouter();
  return cardData.map((item, i) => (
    <LargColorCard
      key={i}
      title={item.title}
      count={item.count}
      onClick={() => router.push(`/dashboard/${item.title}`)}
    />
  ));
};
export default dashboard;
